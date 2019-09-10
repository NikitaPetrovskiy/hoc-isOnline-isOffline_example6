import React from 'react';
import {User} from "./Components/User";
import {withStatusComponent} from "./Components/hoc/withStatusComponent";
import './App.css';

const UserWithStatus = withStatusComponent(User);
const UserWithStatusToo = withStatusComponent(User);

function App() {
  return (
    <div className="App">
      <UserWithStatus name='Nikita'/>
      <User />
      <UserWithStatusToo />
      <User name="Stas"/>
    </div>
  );
}

export default App;
