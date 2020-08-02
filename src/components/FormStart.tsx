import React from 'react';
import {
  Button, Form, Row, Col
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { RootState } from '../store';
import { connect, ConnectedProps } from 'react-redux';
import { changeEmail } from '../store/actions/form';
import { fmt } from '../index';
import { Formik, FormikProps, FormikErrors, FormikHelpers } from 'formik';
import { FormTextField } from './FormTextField';
import { bindActionCreators } from 'redux';

const sleep = (m: number) => new Promise(r => setTimeout(r, m));

const mapState = (state: RootState) => ({
  email: state.form.email
});

const mapDispatch = (dispatch) => bindActionCreators({
  changeEmail: (email: string) => dispatch(changeEmail(email))
}, dispatch)

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

interface IProps extends PropsFromRedux {
  buttonLabel: string
}

interface FormValues {
  email: string
}

interface FormState {
  isSubmitting: boolean
}

class FormStart extends React.PureComponent<IProps, FormState> {
  isSubmitting: boolean;

  constructor(props) {
    super(props);

    this.state = {
      isSubmitting: false,
    }
  }
  render() {
    const onFormSubmit = async (values: FormValues) => {
      await this.props.changeEmail(values.email);
      await sleep(200);
      window.location.href = '/login';
    }
    const {buttonLabel} = this.props;
    return(
      <Formik
        initialValues={{
          email: this.props.email
        }}
        validate={values => {
          let errors : FormikErrors<FormValues> = { };
          if (!values.email) {
            errors.email = fmt({id: 'app.form.error.required'});
          } else if (!(/[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(values.email))) {
            errors.email = fmt({id: 'app.form.error.invalidEmail'});
          }
          return errors;
        }}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          setTimeout(() => {
            onFormSubmit(values);
            setSubmitting(false);
          }, 500);
        }}
      >
        {(formikBag: FormikProps<FormValues>) => {
          const {
            handleSubmit,
            isSubmitting,
          } = formikBag;
          return(
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} md={6}>
                <FormTextField
                  controlId="formEmail"
                  label={fmt({'id': 'app.signup.label.email'})}
                  type="text"
                  name="email"
                />
                </Col>
                <Col xs={12} md={3}>
                <Button type="submit" variant="primary" size="lg">
                  {(isSubmitting) ? <FormattedMessage id="app.signup.label.sending" /> : buttonLabel}
                </Button>{' '}
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default connector(FormStart);
