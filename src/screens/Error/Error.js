import React from 'react';
import { Typography } from '@material-ui/core';

import { ErrorContainer, LogoContainer, TitleContainer } from "./styles"
import logo from '../../assets/logo.png';

const Error = () => {
    return (
        <ErrorContainer>
            <LogoContainer src={logo}/>
            <div>
                <TitleContainer variant="h4" component="h1">
                    Sorry :/
                </TitleContainer>
                <Typography variant="h5" component="h2">
                    This page doesn't exist
                </Typography>
            </div>
        </ErrorContainer>
    )
}

export default Error;