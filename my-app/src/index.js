import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import CommentList from './chapter_05/CommentList';
// import NotificationList from './chapter_06/NotificationList';
// import Accommodate from './chapter_07/Accommodate';
// import ConfirmButton from './chapter_08/ConfirmButton';
// import LandingPage from './chapter_09/LandingPage';
// import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));



setInterval(() => {

  //5챕터
  // root.render(
  //   <React.StrictMode>
  //     <CommentList />
  //   </React.StrictMode>
  // );

  // 6챕터
  // root.render(
  //   <React.StrictMode>
  //     <NotificationList />
  //   </React.StrictMode>
  // );

  // 7챕터
  // root.render(
  //   <React.StrictMode>
  //     <Accommodate />
  //   </React.StrictMode>
  // );

  // 8챕터
  // root.render(
  //   <React.StrictMode>
  //     <ConfirmButton />
  //   </React.StrictMode>
  // );

  //  9챕터
  // root.render(
  //   <React.StrictMode>
  //     <LandingPage />
  //   </React.StrictMode>
  // );

  // 10챕터
//   root.render(
//     <React.StrictMode>
//       <AttendanceBook />
//     </React.StrictMode>
//   );
// },1000)

// 11챕터
// root.render(
//   <React.StrictMode>
//     <SignUp />
//   </React.StrictMode>
// );
// },1000)


// 12챕터
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
},1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
