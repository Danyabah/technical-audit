import axios from "axios";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { baseUrl } from "../utils";

export default function RequestForm({ company_name }) {
  const [success, setSuccess] = useState(false);

  const validSchema = Yup.object().shape({
    email: Yup.string()
      .required("Необходимо указать почту")
      .email("Укажите настояющую почту"),
  });

  function handleSubmit(values) {
    axios
      .post(`${baseUrl}/api/request`, {
        company_name: company_name,
        email: values.email,
      })
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
          company_name: company_name,
          email: "",
        }}
        validationSchema={validSchema}
        onSubmit={handleSubmit}
      >
        {() => {
          return (
            <Form action="" className="info__form req__form">
              <Field
                name="email"
                placeholder="Ваша почта"
                type="email"
                className="info__email req__email"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="form-control"
              />

              <button type="submit" className="btn info__btn req__btn">
                Заказать полный отчет
              </button>
            </Form>
          );
        }}
      </Formik>
      <a
        className="info__link req__link"
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
