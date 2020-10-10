import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.h1`
        margin-top: 5rem;
        text-align: center;
        `;

const Error404 = () => {
    return(
        <MensajeError>No se puede mostrar</MensajeError>
    )
}

export default Error404;