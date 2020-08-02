import React from 'react';
import {
  Button, Form, InputGroup
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { RootState } from '../store';
import { connect, ConnectedProps } from 'react-redux';
import { changeEmail } from '../store/actions/form';
import { fmt } from '../index';
import { Formik, FormikProps, FormikErrors, FormikHelpers, useField } from 'formik';
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
  placeholder: string,
  buttonLabel: string
}

interface FormValues {
  email: string
}

interface FormState {
  isSubmitting: boolean
}

class FormBlock extends React.PureComponent<IProps, FormState> {
  isSubmitting: boolean;

  constructor(props: IProps) {
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
    const { placeholder, buttonLabel } = this.props;
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
              <FormEmailGroup
                label={placeholder}
                type="text"
                name="email"
                buttonLabel={buttonLabel}
                isSubmitting={isSubmitting}
              />
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default connector(FormBlock);


interface IFormProps {
  label: string,
  name: string,
  type: string,
  buttonLabel: string,
  isSubmitting: boolean
};

export const FormEmailGroup = ({ label, buttonLabel, isSubmitting, ...props }: IFormProps) => {
  const [field, meta] = useField(props);
  const { name, type } = props;
  const error = (meta.error) ? meta.error : null;

  return (
    <InputGroup size="lg">
      <Form.Control
        name={name}
        type={type}
        size="lg"
        isInvalid={meta.touched && !!error}
        placeholder={label}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
      />
      <Button type="submit" variant="primary" size="lg">
        {(isSubmitting) ? <FormattedMessage id="app.signup.label.sending" /> : buttonLabel}
      </Button>{' '}
      {(!error) ? null : <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
    </InputGroup>
  );
}
