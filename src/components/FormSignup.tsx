import React from 'react';
import {
  Button, Form, Alert
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { RootState } from '../store';
import { connect, ConnectedProps } from 'react-redux';
import { thunkSubmitForm, resetFormAction } from '../store/actions/form';
import { fmt } from '../index';
import { Formik, FormikProps, FormikErrors, FormikHelpers } from 'formik';
import { isValidCPF } from '../util/validateCPF';
import { FormTextField, FormMaskedField, FormCalendarField } from './FormTextField';
import { bindActionCreators } from 'redux';

const sleep = (m: number) => new Promise(r => setTimeout(r, m));

const mapState = (state: RootState) => ({
  email: state.form.email,
  name: state.form.name,
  cpf: state.form.cpf,
  birth: state.form.birth,
  password: state.form.password,
  error: state.form.error,
  savedData: state.form.savedData
});

const mapDispatch = (dispatch) => bindActionCreators({
  submitForm: (cpf: string, name: string, birth: string, email: string, password: string, callback: Function) => thunkSubmitForm(cpf, name, birth, email, password, callback),
  resetFormAction: () => dispatch(resetFormAction())
}, dispatch)

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

type IProps = PropsFromRedux;

interface FormValues {
  cpf: string,
  name: string,
  birth: string,
  email: string,
  password: string
}

interface FormState {
  isSubmitting: boolean,
  birth: Date
}

class FormSignup extends React.PureComponent<IProps, FormState> {
  isSubmitting: boolean;
  birth: Date;

  constructor(props) {
    super(props);

    this.state = {
      isSubmitting: false,
      birth: new Date()
    }
  }
  render() {
    const onFormSubmit = (values: FormValues, callback: Function) => {
      this.props.submitForm(values.cpf, values.name, this.state.birth.toISOString().replace(/(\d+)-(\d+)-(\d+).*/, '$3/$2/$1'), values.email, values.password, callback);
    }
    const setBirth = (value: string) => {
      this.setState({
        birth: new Date(value)
      });
    }
    const resetAction = () => this.props.resetFormAction();
    return(
      <Formik
        initialValues={{
          email: this.props.email,
          cpf: this.props.cpf,
          name: this.props.name,
          birth: this.props.birth,
          password: this.props.password
        }}
        validate={values => {
          let errors : FormikErrors<FormValues> = { };
          if (!values.email) {
            errors.email = fmt({id: 'app.form.error.required'});
          } else if (!(/[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(values.email))) {
            errors.email = fmt({id: 'app.form.error.invalidEmail'});
          }
          if (!values.name) {
            errors.name = fmt({id: 'app.form.error.required'});
          }
          if (!values.cpf) {
            errors.cpf = fmt({id: 'app.form.error.required'});
          } else if (!isValidCPF(values.cpf)) {
            errors.cpf = fmt({id: 'app.form.error.invalidDocument'});
          }
          if (!values.password) {
            errors.password = fmt({id: 'app.form.error.required'});
          }
          return errors;
        }}
        onSubmit={(
          values: FormValues,
          { setSubmitting, resetForm }: FormikHelpers<FormValues>
        ) => {
          setTimeout(() => {
            onFormSubmit(values, async () => {
              console.log('reset');
              resetForm({ values: { cpf: '', name: '', email: '', birth: '', password: ''} });
              await sleep(3000);
              resetAction();
            });
            setSubmitting(false);
          }, 500);
        }}
      >
        {(formikBag: FormikProps<FormValues>) => {
          const {
            values,
            handleSubmit,
            isSubmitting,
          } = formikBag;
          return(
            <Form noValidate onSubmit={handleSubmit}>
              { (this.props.error !== "") ? <Alert variant="danger">{fmt({id: 'app.signup.confirm.error'})} <strong>{this.props.error}</strong></Alert> : null }
              { /* salvou os dados e o servidor retornou com sucesso, pode ser um redirect para outra página também. */ }
              { (this.props.savedData) ? <Alert variant="success">{fmt({id: 'app.signup.confirm.success'})}</Alert> : null }
              <FormMaskedField
                controlId="formDocument"
                label={fmt({'id': 'app.signup.label.document'})}
                type="text"
                name="cpf"
                value={values.cpf}
                mask="111.111.111-11"
              />
              <FormTextField
                controlId="formName"
                label={fmt({'id': 'app.signup.label.name'})}
                type="text"
                name="name"
              />
              <FormCalendarField
                controlId="formBirth"
                label={fmt({'id': 'app.signup.label.birth'})}
                type="text"
                name="birth"
                callback={(value: string) => {
                  setBirth(value);
                }}
              />
              <FormTextField
                controlId="formEmail"
                label={fmt({'id': 'app.signup.label.email'})}
                type="text"
                name="email"
              />
              <FormTextField
                controlId="formPassword"
                label={fmt({'id': 'app.signup.label.password'})}
                type="password"
                name="password"
              />
              <Button type="submit" variant="primary" size="lg">
                {(isSubmitting) ? <FormattedMessage id="app.signup.label.sending" /> : <FormattedMessage id="app.signup.label.button" />}
              </Button>{' '}
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default connector(FormSignup);
