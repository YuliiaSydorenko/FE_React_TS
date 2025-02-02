import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  FormField,
  Label,
  StyledField,
  ErrorMessageStyled,
  SubmitButton,
} from './Styles';



const EmployeeForm: React.FC = () => {
  const initialValues = {
    fullName: '',
    age: '',
    jobTitle: '',
    terms: false,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(5, 'Минимальное количество символов - 5')
      .max(50, 'Максимальное количество символов - 50')
      .required('Обязательное поле'),
    age: Yup.number()
      .min(18, 'Минимальное значение - 18')
      .max(80, 'Максимальное значение - 80')
      .required('Обязательное поле'),
    jobTitle: Yup.string().max(30, 'Максимальное количество символов - 30'),
    terms: Yup.boolean().oneOf([true], 'Необходимо принять правила использования'),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormField>
              <Label htmlFor="fullName">Full Name</Label>
              <StyledField type="text" id="fullName" name="fullName" />
              <ErrorMessage name="fullName" component={ErrorMessageStyled} />
            </FormField>
            <FormField>
              <Label htmlFor="age">Age</Label>
              <StyledField type="number" id="age" name="age" />
              <ErrorMessage name="age" component={ErrorMessageStyled} />
            </FormField>
            <FormField>
              <Label htmlFor="jobTitle">Job Title</Label>
              <StyledField type="text" id="jobTitle" name="jobTitle" />
              <ErrorMessage name="jobTitle" component={ErrorMessageStyled} />
            </FormField>
            <FormField>
              <Label>
                <StyledField type="checkbox" name="terms" />
                Правила использования
              </Label>
              <ErrorMessage name="terms" component={ErrorMessageStyled} />
            </FormField>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Create
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default EmployeeForm;
