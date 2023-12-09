import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import axios from "axios";



export let user;

function Home() {




  const schema = () => {
    const validate = Yup.object().shape({
      firstname: Yup.string().required(),
      lastname: Yup.string().required(),
      company: Yup.string().required(),
      message: Yup.string(),
    });
    return validate;
  }
  const errorStyle = {
    color: "red",
    margin: "10px",
    fontSize: "14px"
  }
  return (

    <Formik
      initialValues={{ firstname: '', lastname: '', company: "", message: "" }}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('http://localhost:5000', values)
          .then(response => {
            // Handle the successful response here
            user = response.data.firstname;


          })
          .catch(error => {
            // Handle any errors here
            console.error(error);
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
      validationSchema={schema} >
      {({ isSubmitting }) => (
        <Form className="form">

          <h1>My Form</h1>
          <Field className="input" type="text" name="firstname" placeholder="firstname" />
          <ErrorMessage name="firstname" component="p" style={errorStyle} className="error" />
          <Field className="input" type="text" name="lastname" placeholder="lastname" />

          <ErrorMessage className="error" name="lastname" component="p" style={errorStyle} />
          <Field type="text" className="input" name="company" placeholder="company" />
          <Field as="textarea" name="message" className="input" placeholder="message" cols={40} rows={7} />
          <button className="btn" type="submit" disabled={isSubmitting}>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </button>
        </Form>
      )}
    </Formik>

  );
}


export default Home;
