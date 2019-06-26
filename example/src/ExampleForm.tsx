import React from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

import { Typehead } from './reactComponentLib';

interface FormValues {
  fruit?: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form>
      <Typehead />
      {touched.fruit && errors.fruit && <div>{errors.fruit}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

interface MyFormProps {}

// Wrap our form with the using withFormik HoC
const ExampleForm = withFormik<MyFormProps, FormValues>({
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.fruit) {
      errors.fruit = 'Required';
    }
    return errors;
  },

  handleSubmit: values => {}
})(InnerForm);

export default ExampleForm;
