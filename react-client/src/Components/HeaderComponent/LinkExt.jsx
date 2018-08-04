import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkExt = styled(Link)`
    color: #000;
    padding-right: 12px;
    &:focus, &:visited, &:active {
        text-decoration: none;
    };
    &:hover {
        opacity: 0.3;
        text-decoration: none;
    }
`;

export default (props) => <LinkExt{...props} />;