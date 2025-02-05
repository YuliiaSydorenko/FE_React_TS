import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutComponent,
  Header,
  NavContainer,
  LogoContainer,
  Main,
  Footer,
  StyledNavLink
} from './styles';
import { LayoutProps } from './types';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/users', label: 'Users' },
  { path: '/clients', label: 'Clients' },
  { path: '/lesson14', label: 'Lesson 14' },
  { path: '/homework14', label: 'Homework 14' },
];

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <LayoutComponent>
      <Header>
        <LogoContainer onClick={() => navigate('/')} />
        <NavContainer>
          {navLinks.map(({ path, label }) => (
            <StyledNavLink
              key={path}
              to={path}
              style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
            >
              {label}
            </StyledNavLink>
          ))}
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Link to='/'><LogoContainer /></Link>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
