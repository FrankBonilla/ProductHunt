import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Titulo, Error } from '../components/ui/Formulario';

import firebase from '../firebase';

//validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

const CrearCuenta = () => {

const [ error, guardarError ] = useState(false);

const {valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

const { nombre, email, password } = valores;

async function crearCuenta(){

    try {
      await firebase.registrar(nombre, email, password);
      Router.push('/');

    } catch (error) {
      console.error('Hubo un error al crear un usuario', error.message);
      guardarError(error.message);
    }
}
    return (
        <div>
          <Layout>
              <>
                <Titulo>Crear Cuenta</Titulo>
                <Formulario
                           onSubmit={handleSubmit} >
                    <Campo>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" 
                               id="nombre" 
                               placeholder="tu nombre..." 
                               name="nombre"
                               value={nombre}
                               onChange={handleChange}
                               onBlur={handleBlur}/>
                    </Campo>
                    {errores.nombre && <Error>{errores.nombre}</Error>}
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
                            value="Crear Cuenta" />
                </Formulario>
             </>
          </Layout>
        </div>
      )
}

  export default CrearCuenta