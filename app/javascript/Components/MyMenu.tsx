import * as React from 'react';

interface MyMenuProps {

}

const styles = {
  
}

const MyMenu = (props: MyMenuProps): React.ReactElement => {

  return (
    <div className="sidebar" >
      <h1>Portfolio Menu</h1>
      <a href="#">About Me</a>
      <a href="#">Book an appointment</a>
      <a href="#">Contact</a>
    </div>
  );
}

export default MyMenu;