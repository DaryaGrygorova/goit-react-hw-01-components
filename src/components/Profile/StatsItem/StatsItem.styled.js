import styled from 'styled-components';

export const ItemWrap = styled.li`
flex-grow: 1;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
min-width: 28%;
padding: 10px;
border: 1px solid #aaaaaa;
`;

export const Label = styled.span`
display: block;
margin-bottom: 10px; 
text-align: center;
color: #555555;
`;

export const Quantity = styled.span`
display: block;
margin-bottom: 10px; 
text-align: center;
font-weight: 500;
color: #000000;
`;