import * as React from 'react';
import { Location } from './MyPage';

interface MyMenuProps {
  setLocation: (location: Location) => void;
}

const MyMenu = (props: MyMenuProps): React.ReactElement => {

  return (
    <div className="sidebar" >
      <h1>Menu</h1>
      <button onClick={()=>props.setLocation(Location.HOME)}>Home</button>
      <button onClick={()=>props.setLocation(Location.APPOINTMENT)} >Book an appointment</button>
      <button onClick={()=>props.setLocation(Location.ABOUTME)}>About me</button>
    </div>
  );
}

export default MyMenu;