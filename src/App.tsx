import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import Layout from './Components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Users from './pages/Users/Users';
import User from './pages/Users/components/User/User';
import Clients from 'pages/Clients/Clients';
import Facebook from 'pages/Clients/Components/Facebook/Facebook';
import Google from 'pages/Clients/Components/Google/Google';
import Amazon from 'pages/Clients/Components/Amazon/Amazon';
import Lesson14 from 'Lessons/Lesson14/Lesson14';
import Homework14 from './Homeworks/Homework14/Homework14'; 

//lessons
// import Lesson06 from './lessons/Lesson06/Lesson06';
// import Lesson07 from './lessons/Lesson07/Lesson07';
// import Lesson08 from './lessons/Lesson08/Lesson08';
// import Lesson09 from './lessons/Lesson09/Lesson09';
// import Lesson10 from './lessons/Lesson10/Lesson10';
// import Lesson12 from 'lessons/Lesson12/Lesson12';

//import Clients from 'pages/Clients/Components

//homeworks
//import Homework08 from './Homeworks/Homework08/Homework08'; 
//import Homework09 from './Homeworks/Homework09/homework09'; 
//import Homework10 from './Homeworks/Homework10/Homework10';
// import Homework12 from './Homeworks/Homework12/homework12';
// import Homework10 from 'Homeworks/Homework10/Homework10';

//consultations
// import Consultation03 from './consultations/Consultation03/Consultation03';
// import Consultation_04 from './consultations/Consultation_04/Consultation_04';

function App() {
  return (
    //BrowserRouter - компонент из react-router-dom, который позволяет нам работать с маршрутами
    // по всему приложению
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes - собирает все маршруты приложения */}
        <Routes>
          {/* Route - компонент, в который передаётся маршрут и контент, 
         который нужно отрисовать по этому маршруту в Layout */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/user' element={<User />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/clients/facebook' element={<Facebook />} />
          <Route path='/clients/google' element={<Google />} />
          <Route path='/clients/amazon' element={<Amazon />} />
          <Route path='/lesson14' element={<Lesson14 />} />
          <Route path='/homework14' element={<Homework14 />} /> 
          <Route path='*' element='Страница не найдена' />
        </Routes>
      </Layout>
      {/* --Topic: TypeScript - Introduction */}
      {/* <Lesson06/> */}
      {/* <Consultation03 /> */}
      {/* --Topic: TypeScript - Object types, enum */}
      {/* <Lesson07 /> */}
      {/* --Topic: Styling components */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* --Topic: Control components, useEffect */}
      {/* <Lesson09 /> */}
      {/* <Consultation_04 /> */}
      {/* <Homework09 /> */}
      {/* --Topic: useEffect, axios */}
      {/* <Lesson10 /> */}
      {/* <Homework10 /> */}
      {/* --Topic: formik, yup */}
      {/* <Lesson12 /> */}
      {/* <Homework12/> */}
    </BrowserRouter>
  );
}

export default App;
