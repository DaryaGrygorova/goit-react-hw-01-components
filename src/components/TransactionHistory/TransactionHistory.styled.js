import styled from "styled-components";

export const Table = styled.table`
table-layout: fixed; 
width: 900px;
border-color: #cacaca;
text-align: center;
`;

export const TableHead = styled.thead`
background-color: #3E6ED9;
color: #ffffff;

th {
    width: 33%;
    padding: 10px;
    font-weight: 400;
    border: 1px solid #cacaca;
}
`;

export const TableBody = styled.tbody`
color: #555555;
text-transform: capitalize;

tr {
    background-color: #ebeef5;
}

tr:nth-child(2n) {
    background-color: #e0e3ea;
}

td {
    border: 1px solid #cacaca;
    padding: 10px;
}
`;