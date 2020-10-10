import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Titulo, Error } from '../components/ui/Formulario';

import firebase from '../firebase';

//validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';

const STATE_INICIAL = {

  email: '',
  password: ''
}

const Login = () => {

  const [ error, guardarError ] = useState(false);
  
  const {valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);
  
  const {  email, password } = valores;
  
  async function iniciarSesion(){
    
    try {
      
      await firebase.login(email, password);
      Router.push('/');

    } catch (error) {
      console.error('Hubo un error al autenticar al usuario', error.message);
      guardarError(error.message);
    }
  }
  
      return (
          <div>
            <Layout>
                <>
                  <Titulo>Iniciar Sesión</Titulo>
                  <Formulario
                             onSubmit={handleSubmit} >
                      
                      <Campo>
                          <label htmlFor="email">Email</label>
                          <input type="text" 
                                 id="email" 
                                 placeholder="tu email..." 
                                 name="email"
                                 value={email}
                                 onChange={handleChange}
                                 onBlur={handleBlur}/>
                      </Campo>
                      {errores.email && <Error>{errores.email}</Error>}
                      <Campo>
                          <label htmlFor="password">Password</label>
                          <input type="password" 
                                 id="password" 
                                 placeholder="tu password..." 
                                 name="password"
                                 value={password}
                                 onChange={handleChange}
                                 onBlur={handleBlur}/>
                      </Campo>
  
                      {errores.password && <Error>{errores.password}</Error>}
                      {error && <Error>{error}</Error> }
  
                      <InputSubmit type="submit"
                              value="Iniciar Sesión" />
                  </Formulario>
               </>
            </Layout>
          </div>
        )
  }

  export default Login