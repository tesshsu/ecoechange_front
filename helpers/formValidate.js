import Select from 'react-select'
import { Form, Field, FieldRenderProps } from 'react-final-form';

//form validation
export const required = value => (value ? undefined : 'champs obligatoire')
export const mustBeNumber = value => (isNaN(value) ? "Doit être en chiffre" : undefined);
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const pattern= new RegExp("(.+ .*)|(.* .+)");
const patternCodePostal = new RegExp("^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$");
export const matchCodepostal = value => (!patternCodePostal.test(value) ? "code postal inconnu" : undefined);
export const formatDate = value => {
  if (!value) return value;
  return `${value.slice(0, 4)}-${value.slice(5, 7)}-${value.slice(8,10)}`;
}

export const patternAddress = new RegExp("^[a-zA-Z0-9\\s,'-]*$");
export const matchAddress = value => (!patternAddress.test(value) ? "address inconnu" : undefined);
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const patterURL = new RegExp("[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)");
export const matchURL = value => (!patterURL.test(value) ? "URL inconnue" : undefined);

export const ReactSelectAdapter = ({ input, value, note, ...rest }) => (
  <Select {...input} {...value} {...note} {...rest} searchable />
)

export const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

export const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true, value: true }}>
    {({ meta: { error, touched, value } }) =>
      error && touched ? <span className="text-green-500 text-sm">{error}</span> : null
    }
  </Field>
)
