import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkExt = styled(Link)`
    text-decoration: none,
    &:focus, &:hover, &:visited, &:active {
        text-decoration: none;
        // padding-right: 10em;
    }
`;

export default (props) => <LinkExt{...props} />;