import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";
import MaskedInput from "react-maskedinput";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FormTextField.scss";
import pt from 'date-fns/locale/pt';
registerLocale('pt', pt)

interface IProps {
  controlId: string,
  label: string,
  name: string,
  type: string
};

export const FormTextField = ({ controlId, label, ...props }: IProps) => {
  const [field, meta] = useField(props);
  const { name, type } = props;
  const error = (meta.error) ? meta.error : null;

  return (
    <Form.Group controlId={controlId}>
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
      {(!error) ? null : <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
    </Form.Group>
  );
}

interface IMaskProps {
  controlId: string,
  label: string,
  name: string,
  type: string,
  mask: string,
  value?: any,
  onClick?: Function
};

export const FormMaskedField = ({ controlId, label, mask, ...props }: IMaskProps) => {
  const [field, meta] = useField({ name: props.name, type: props.type, value: props.value });
  const { name, type, onClick } = props;
  const error = (meta.error) ? meta.error : null;
  return (
    <Form.Group controlId={controlId}>
      <Form.Control
        as={MaskedInput}
        name={name}
        type={type}
        size="lg"
        isInvalid={meta.touched && !!error}
        placeholder={label}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        mask={mask}
        onClick={onClick}
      />
      {(!error) ? null : <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
    </Form.Group>
  );
}

const CalendarField = ({ value, onClick, ...props }) => {
  const {forwardedRef, ...rest} = props;
  return (
    <Form.Control
      as={MaskedInput}
      id="birth"
      name="birth"
      type="text"
      size="lg"
      onClick={onClick}
      value={value}
      placeholder={props.label}
      mask="11/11/1111"
      ref={forwardedRef}
      {...rest}
    />
  );
}

interface ICalendarProps {
  controlId: string,
  label: string,
  name: string,
  type: string,
  callback: Function
};

export const FormCalendarField = ({ controlId, label, callback,...props }: ICalendarProps) => {
  const [field] = useField(props);
  const date = (field.value) ?
    ((new Date(field.value).toString() === "Invalid Date") ?
      new Date(field.value.replace(/(\d+)\/(\d+)\/(\d+)/, '$2-$1-$3')) :
      new Date(field.value))
    : new Date();
  const [startDate, setStartDate] = useState(date);
  const handleCalendarClose = () => {
    callback(startDate);
  }

  return (
    <Form.Group controlId={controlId}>
      <DatePicker
        locale="pt"
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={date => { if (date != null) setStartDate(date); }}
        onCalendarClose={handleCalendarClose}
        customInput={<CalendarField value={startDate} placeholder={label} onClick={() => {}} />} />
    </Form.Group>
  );
}
