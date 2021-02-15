import React  from 'react'
import { Form , Col , InputGroup , Button, Container } from 'react-bootstrap'
import * as yup from 'yup';
import  { Formik } from 'formik'; 
import './Contestbanner.css'






const schema = yup.object({
  firstName: yup.string().required("Your first name is required"),
  lastName: yup.string().required("Your last name is required"),
  email: yup.string().required("Your email is required").email(),
  quote: yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required("Your quote is required"),

 
});

function Contestform() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        
          
        <div className="contestbackground p-5">
        <Container >
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />

              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                
                <Form.Control
                  type="Email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>Quotes</Form.Label>
              <Form.Control
                type="quote"
                placeholder="Slogan"
                name="quote"
                value={values.quote}
                onChange={handleChange}
                isInvalid={!!errors.quote}
              />

              <Form.Control.Feedback type="invalid">
                {errors.quote}
              </Form.Control.Feedback>
            </Form.Group>
            
          </Form.Row>
          
          <Button type="submit" className="btn-form">Submit your Slogan</Button>
        </Form>
        </Container>
        </div>
      )}
    </Formik>
  );

}


export default Contestform