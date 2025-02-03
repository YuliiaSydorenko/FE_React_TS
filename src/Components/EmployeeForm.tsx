import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  FormField,
  Label,
  StyledInput,
  ErrorMessageStyled,
  SubmitButton,
} from './Styles';

const EmployeeForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      age: '',
      jobTitle: '',
      terms: false,
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <FormField>
          <Label htmlFor="fullName">Full Name</Label>
          <StyledInput
            type="text"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <ErrorMessageStyled>{formik.errors.fullName}</ErrorMessageStyled>
          ) : null}
        </FormField>

        <FormField>
          <Label htmlFor="age">Age</Label>
          <StyledInput
            type="number"
            id="age"
            name="age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? (
            <ErrorMessageStyled>{formik.errors.age}</ErrorMessageStyled>
          ) : null}
        </FormField>

        <FormField>
          <Label htmlFor="jobTitle">Job Title</Label>
          <StyledInput
            type="text"
            id="jobTitle"
            name="jobTitle"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.jobTitle}
          />
          {formik.touched.jobTitle && formik.errors.jobTitle ? (
            <ErrorMessageStyled>{formik.errors.jobTitle}</ErrorMessageStyled>
          ) : null}
        </FormField>

        <FormField>
          <Label>
            <StyledInput
              type="checkbox"
              name="terms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.terms}
            />
            Правила использования
          </Label>
          {formik.touched.terms && formik.errors.terms ? (
            <ErrorMessageStyled>{formik.errors.terms}</ErrorMessageStyled>
          ) : null}
        </FormField>

        <SubmitButton type="submit" disabled={formik.isSubmitting}>
          Create
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default EmployeeForm;
