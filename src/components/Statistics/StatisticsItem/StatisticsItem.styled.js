import styled from 'styled-components';

export const ItemWrapper = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 100px;
padding: 10px;
gap: 10px;
background-color: ${({percentage}) => (
    (percentage < 10) ? '#874cbb'
        : ((percentage >= 10 && percentage < 15) ? '#a64444'
            : ((percentage >= 15 && percentage < 20) ? '#295397'
                : ((percentage >= 20 && percentage < 30) ? '#5bcf95'
                    : ((percentage >= 30 && percentage < 45) ? '#947fff'
                    : ((percentage >= 45 && percentage < 75) ? '#7fffa8'
                        : '#105633'))))))
                    }
`;

export const Label = styled.span`
color: #ffffff;
`;

export const Percentage = styled.span`
color: #ffffff;
font-size: 32px;
`;