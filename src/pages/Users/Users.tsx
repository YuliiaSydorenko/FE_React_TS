import { Link, useNavigate } from "react-router-dom"

import Button from "../../Components/Button/Button"
import { Title, UsersPage } from "./styles"

function Users() {
//useNavigate  - при его вызове возвращается функция, 
// которая позволяет перейти на другую страницу

const navigate = useNavigate();

const goToAbboutPage = () => {
  navigate('/about');
};

  return (
    <UsersPage>
      <Title>Select user</Title>
      {/* <Link to='/users/user'>Go to User page</Link> */}
      <Link to='user'>Go to User page</Link>
      <Button name="Go to About Page" onClick={() => {goToAbboutPage }} />
    </UsersPage>
  )
}

export default Users