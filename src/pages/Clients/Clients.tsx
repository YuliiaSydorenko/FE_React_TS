//import React from 'react';
import { ClientsPage, StyledLink } from './styles';

function Clients() {
  return (
    <ClientsPage>
      <h1>Clients</h1>
      <StyledLink to="facebook">Facebook</StyledLink>
      <StyledLink to="google">Google</StyledLink>
      <StyledLink to="amazon">Amazon</StyledLink>
    </ClientsPage>
  );
}

export default Clients;


