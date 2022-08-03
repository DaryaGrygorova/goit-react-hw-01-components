import styled from 'styled-components';

export const ItemWrapper = styled.li`
display: flex;
min-width: 400px;
align-items: center;
padding: 5px 10px;
margin-bottom: 10px;
gap: 15px;
border: 1px solid #cacaca;
border-radius: 13px;
`;

export const Marker = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${({isOnline}) => (isOnline ? 'green' : 'red')}
`;

export const Avatar = styled.img`
width: 60px;
height: 60px;
border: 1px solid #cacaca;
border-radius: 8px;
`;

export const UserName = styled.p``;