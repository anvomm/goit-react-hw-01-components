import styled from 'styled-components';

export const Table = styled.table`
  width: 300px;
  margin: 80px auto 0 auto;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  border-collapse: collapse;
  border-style: hidden;

  @media (min-width: 480px) {
    width: 450px;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 1200px) {
    width: 900px;
  }
`;

export const Categories = styled.th`
  color: #fff;
  border-right: 1px solid #fff;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: #3790bf;
`;

export const TableRow = styled.tr`
  height: 50px;
  text-align: center;
  color: #6e7a76;

  &:nth-child(even) {
    background-color: #d2eaf7;
  }
`;

export const TableColumn = styled.td`
  border: 1px solid #bce1f5;
`;

export const Type = styled(TableColumn)`
  text-transform: capitalize;
`;
