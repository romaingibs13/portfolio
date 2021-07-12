import * as React from 'react';

interface MyDescriptionProps {

}

const MyDescription = (props: MyDescriptionProps): React.ReactElement => {

  return (
    <div className="sidebar" >
      <h1>Portfolio Menu</h1>
      <a href="#">About Me</a>
      <a href="#">Book an appointment</a>
      <a href="#">Contact</a>
    </div>
  );
}

export default MyDescription;