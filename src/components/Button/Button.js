import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
width: 127px;
height: 27px;
background-color: black;
color: white;
border-radius: 4px;
`;

const Button = ({children}) => (
<StyledButton>{children}</StyledButton>
)

export default Button;