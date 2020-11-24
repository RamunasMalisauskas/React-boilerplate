import React, { useState } from "react";
import { FormTemplate, Section } from "../../components/";
import formData from "../../utils/FormData";

function Login(fieldValues) {
  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: fieldValues.name,
      password: fieldValues.password,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data.token))
    .catch((err) => console.log("error: " + err));
}

function LoginPage() {
  return (
    <>
      <Section>
        <FormTemplate
          callback={(fieldValues) => Login(fieldValues)}
          fields={formData}
          buttonText="Login"
        />
      </Section>
    </>
  );
}

export default LoginPage;
