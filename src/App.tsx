import './App.css';
import GlobalStyles from './styles/GlobalStyles';

// import React from 'react';
// import Button from './Components/Button/Button';
// import Counter from './Components/Counter/Counter';


//lessons
// import Lesson06 from './Lessons/Lesson06/lesson06';
// import Lesson07 from './Lessons/Lesson07/lesson07';
import Lesson08 from './Lessons/Lesson08/lesson08';

//homeworks

//consultations
// import Consultation03 from './consultations/Consultation03/Consultation03';

function App() {
  return (
    <div className='app'>
      <GlobalStyles/>
      {/* Topic: TypeScript - Introduction */}
      {/* <Lesson06/> */}
      {/* Topic: TypeScript - Object types */}
      {/* <Lesson07/> */}
      {/* <Homework07/> */}
       {/* Topic: Styling components */}
       <Lesson08 />


    </div>
  );
}

export default App;
