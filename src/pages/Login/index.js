import React from 'react';
import Form from '../../components/Form';
import Require from '../../lib/validations';

export default function Login() {
    return (
      <Form 
      inputs={[
        {
          name: 'username',
          validations: [],
          style: {},
          type: 'text'
        },
        {
          name: 'password',
          validations: [],
          style: {},
          type: 'text'
        }
      ]}
      onSubmit={(state) => console.log(state)}
    />
    )
  }
