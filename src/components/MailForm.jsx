import React, { useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { baseUrl } from "../utils";
export default function MailForm() {
  const [success, setSuccess] = useState(false);

  const validSchema = Yup.object().shape({
    email: Yup.string()
      .required("Необходимо указать почту")
      .email("Укажите настояющую почту"),
  });

  function handleSubmit(values) {
    axios
      .post(`${baseUrl}/api/feedback`, values.email)
      .then((res) => {
        console.log(res);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return !success ? (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={validSchema}
        onSubmit={handleSubmit}
      >
        {() => {
          return (
            <Form action="" className="info__form">
              <Field
                placeholder="Ваша почта"
                type="email"
                name="email"
                className="info__email"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="form-control"
              />
              <button type="submit" className="btn info__btn">
                Оставить заявку
              </button>
            </Form>
          );
        }}
      </Formik>
      <a
        className="info__link"
        href="https://t.me/iauditor_bot"
        target="_blank"
        rel="noreferrer"
      >
        Или оставьте заявку в телеграм-боте
      </a>
    </>
  ) : (
    <div className="req__successs">Заявка отправлена!</div>
  );
}
