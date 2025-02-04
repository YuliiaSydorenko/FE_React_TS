import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ClientsPage = styled.div`
  padding: 20px;
`;

export const StyledLink = styled(Link)`
  display: block;
  margin: 10px 0;
  text-decoration: none;
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`;

export const CompanyPage = styled.div`

  padding: 20px;
  color: blue;
`;

export const CompanyInfo = styled.p`
  margin-top: 10px;
`;
