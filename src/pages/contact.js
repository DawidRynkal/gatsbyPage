import React from 'react';
import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';
import Button from '../components/Button/Button'
import { Formik, Form, Field } from 'formik';

const WrapperPage = styled.div`
height: 100vh;
width: 100%;

display: flex;
align-items: center ;
justify-content: center ;
`;

const ContactWrapper = styled.div`
background-color: white;
border: 2px solid black;
border-radius: 5px;
height: 70vh;
width: 50vw;
display:flex;
align-items: center ;
justify-content: center ;
input {

}
`;

const StyledForm = styled(Form)`
width: 100%;
height: 100%;
`;

const FieldWrapper = styled.div`
display: flex;
margin: 20px;
flex-direction: column;
`;

const StyledNameField = styled(Field)`
height: 30px;
border: 1px solid black;
border-radius: 5px;

::placeholder {
    margin: 10px;
}
`;

const StyledMessageField = styled(Field)`
height: 120px;
border: 1px solid black;
border-radius: 5px;

textarea {
        outline: none;
    }
`;



const pageData = { 
    title: 'contact page',
    description: 'write me an email'
}

const ContactPage = () => (
    <WrapperPage>
        <PageInfo title={pageData.title} description={pageData.description} />
<ContactWrapper>
<Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }}
  >
  {() => (
    <StyledForm>
        <FieldWrapper>
      <label htmlFor="name" >Name: </label>
      <StyledNameField name="name" placeholder="name..."/>
      </FieldWrapper>
      <FieldWrapper>
      <label htmlFor="email" >Email: </label>
      <StyledNameField name="email" placeholder="your email..." />
      </FieldWrapper>
      <FieldWrapper>
      <label htmlFor="message">Message: </label>
      <StyledMessageField name="message" component="textarea"/>
      </FieldWrapper>
      <FieldWrapper>
      <Button type="submit">Send</Button>
      </FieldWrapper>
    </StyledForm>
  )}
  </Formik>
</ContactWrapper>
    </WrapperPage>
    
)

export default ContactPage;
