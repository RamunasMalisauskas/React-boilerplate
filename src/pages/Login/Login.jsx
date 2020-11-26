import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FormTemplate, Section } from "../../components/";
import loginFormData from "../../utils/LoginFormData";

function Login(fieldValues, auth) {
  fetch("http://localhost:8081/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: fieldValues.name,
      password: fieldValues.password,
    }),
  })
    .then((res) => res.json())
    .then(
      (data) => auth.setToken("Bearer " + data.token) + console.log(data.token)
    )
    .catch((err) => console.log("error: " + err));
}

function LoginPage() {
  const auth = useContext(AuthContext);

  return (
    <>
      <Section>
        <h1>login</h1>

        <FormTemplate
          callback={(fieldValues) => Login(fieldValues, auth)}
          fields={loginFormData}
          buttonText="Login"
          buttonType="submit"
        />
      </Section>
    </>
  );
}

export default LoginPage;
