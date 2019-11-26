import React from 'react';
import FormsReg from './Formsreg';
export default function Registration() {
  return (
    <div>
      <br></br>
      <FormsReg
        input={[
          {
            name: "username",
            type: "text",
            id: "13",
            validation: ["usernameValidation"]
          },
          {
            name: "name",
            type: "text",
            validation: ["nameValidation"]
          },
          {
            name: "surname",
            type: "text",
            validation: ["nameValidation"]
          },

          {
            name: "date",
            type: "date",
            validation: ["dateValidation"]
          },
          {
            name: "email",
            type: "text",
            validation: ["emailValidation"]
          },
          {
            name: "password",
            type: "text",
            validation: ["passwordValidation"]
          },
          {
            name: "confirm password",
            type: "text",
            validation: ["passwordValidation"]
          },
          

        ]}
      />
    </div>
  )
}