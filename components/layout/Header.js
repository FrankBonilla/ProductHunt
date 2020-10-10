import React, { useContext } from 'react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from '@emotion/styled';
import Boton from '../ui/Boton';
import { FirebaseContext } from '../../firebase';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    } 
    `;

const Logo = styled.a`
        color: var(--naranja);
        font-size: 4rem;
        line-height: 0;
        font-weight: 700;
        font-family: 'Roboto Slab', serif;
        margin-right: 2rem;
    `;

const HeaderP = styled.header`
    border-bottom: 2px solid var(--gris3);
    padding: 1rem 0;
    `;

const ContenedorNombre = styled.div`
    display: flex;
    align-items: center;
    `;

const Nombre = styled.p`
    margin-right: 2rem;
    `;

const Enlaces = styled.div`
    display: flex;
    align-items: center;
`;


const Header = () => {

    const {usuario, firebase } = useContext(FirebaseContext);

    return(
        <HeaderP>
            <ContenedorHeader>
                <Enlaces>
                <Link href="/">
                    <Logo>P</Logo>
                </Link>
                    <Buscar />
                    <Navegacion />
                </Enlaces>
                <ContenedorNombre>
                    { usuario ? ( <> <Nombre>Hola: {usuario.displayName}</Nombre>
                                     <Boton bgColor="true"
                                            onClick={() => firebase.cerrarSesion()}>Cerrar Sesión</Boton>
                                </>) 
                    : ( <> <Link href="/login">
                            <Boton bgColor="true">Login</Boton>
                            </Link>
                            <Link href="/crear-cuenta">
                                <Boton>Crear Cuenta</Boton>
                            </Link> 
                        </>)}
                </ContenedorNombre>
            </ContenedorHeader>
        </HeaderP>
    )
}
export default Header;