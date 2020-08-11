import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import MainStudent from './Student/Main';
import MainTeacher from './Teacher/Main';

export default function Main() {
  const { teacher } = useSelector((state) => state.user.profile);

  return <>{teacher ? <MainTeacher /> : <MainStudent />}</>;
}
