import * as React from 'react';

interface MyHomeProps {
}

const MyHome = (props: MyHomeProps): React.ReactElement => {

  return (
    <div className="home" >
        <p className="presentation">Hello, I'm <i className="romain">Gibassier Romain</i>, 
        and I <i>happen</i> to be a <strong className="fullstack">full stack engineer </strong>.</p>
    </div>
  );
}

export default MyHome;