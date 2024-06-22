import React, { useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/UserContext'; 


const LoginV1 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);
  
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <Container className="login-container">
      <div className="logo">
        {/* <img src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png" alt="logo" /> */}
      </div>
      {signinErrors && signinErrors.map((error, i) => (
        <Alert key={i} variant="danger">
          {error}
        </Alert>
      ))}
      <h3 className="text-center">Iniciar sesión</h3>
      <Form onSubmit={onSubmit} className="login-form">
        <Form.Group controlId="email">
          <Form.Label>Username or Email Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            className={` ${errors.email ? "is-invalid" : ""}`} 
            {...register("email", {
              required: {
                value: true,
                message: "El email es requerido",
              },
            })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            className={errors.password ? "is-invalid" : ""}
            {...register("password", {
              required: {
                value: true,
                message: "La contraseña es requerida",
              },
            })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="rememberMe" className="mt-3">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 w-100">
          Log In
        </Button>
        <div className="forgot-password mt-3">
          <Link to="/forgot-password">Lost your password?</Link>
        </div>
        <div className="back-to-blog mt-3">
          <Link to="/">← Back to My blog</Link>
        </div>
        <div className="toggle-form mt-3">
          <Link to="/register" className="btn btn-link">Register</Link>
        </div>
      </Form>
    </Container>
  );
};

export default LoginV1;
