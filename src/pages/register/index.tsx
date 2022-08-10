import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { REGISTER } from '../../graphql/onboarding';
import { FormHandler } from '../../services/form';

function Register() {
  const [register, { loading, error, data }] = useMutation(REGISTER);

  const router = useNavigate();

  useEffect(() => {
    if (data) {
      // router('/')
    }
    console.log(data)
  }, [data])


  const handleSubmit = async (e: React.SyntheticEvent) => {
    const data = FormHandler(e, ['email', 'password', 'name']);
    register({
      variables: {
        input: data
      }
    })
  }

  return (
    <div className='container vh-100 d-flex flex-column align-items-center justify-content-center'>
      <div className="card">
        <Form className="login-form card-body" onSubmit={handleSubmit}>
          <h3 className="mb-3">Register</h3>
          <FormGroup>
            <Label>Name</Label>
            <Input name='name' type='text' placeholder='e.g John Doe' />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type='email' name='email' placeholder='e.g you@example.com' />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input name='password' type='password' placeholder='e.g you@example.com' />
          </FormGroup>
          {error && <div className='notification'>{error.message}</div>}
          <FormGroup>
            <Button block color='success'>Register</Button>
          </FormGroup>
          <div className="text-center">
            <Link className="" to='/login'>Login</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register