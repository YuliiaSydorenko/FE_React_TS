import { Link } from 'react-router-dom';
import { ClientsPage, CompanyLink } from './styles';

function Clients() {
  return (
    <ClientsPage>
      <h1>Clients</h1>
      <CompanyLink>
        <Link to="/clients/facebook">Facebook</Link>
      </CompanyLink>
      <CompanyLink>
        <Link to="/clients/google">Google</Link>
      </CompanyLink>
      <CompanyLink>
        <Link to="/clients/amazon">Amazon</Link>
      </CompanyLink>
    </ClientsPage>
  );
}

export default Clients;

