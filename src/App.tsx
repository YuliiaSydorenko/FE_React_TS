import React from 'react';

import GlobalStyles from './styles/GlobalStyles';

import Homework10 from './Homeworks/Homework10/Homework10';
import Lesson11 from './Lessons/Lesson11/Lesson11';

// import React from 'react';
// import Button from './Components/Button/Button';
// import Counter from './Components/Counter/Counter';

//lessons
// import Lesson06 from './Lessons/Lesson06/lesson06';
// import Lesson07 from './Lessons/Lesson07/lesson07';
// import Lesson08 from './Lessons/Lesson08/lesson08';
// import Lesson09 from './Lessons/Lesson09/lesson09'

//homeworks
//import Homework08 from './Homeworks/Homework08/Homework08'; 
//import Homework09 from './Homeworks/Homework09/homework09'; 
//import Homework10 from './Homeworks/Homework10/Homework10';

//consultations
// import Consultation03 from './consultations/Consultation03/Consultation03';

function App() {
  return (
    <> 
      <GlobalStyles/>
      {/* Topic: TypeScript - Introduction */}
      {/* <Lesson06/> */}
      {/* Topic: TypeScript - Object types */}
      {/* <Lesson07/> */}
      {/* <Homework07/> */}
      {/* Topic: Styling components */}
      {/* <Lesson08 /> */}
      {/* <Homework08/> */}
      {/* <Lesson09 /> */}
      {/* <Homework09/> */}
      {/* <Lesson10 />  */}
      {/* <Homework10/> */}

      <Lesson11 />
      {/* <Consultation03/> */}

      </>
  );
}

export default App;
