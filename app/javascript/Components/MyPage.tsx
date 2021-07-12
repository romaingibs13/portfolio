import * as React from 'react';
import MyMenu from './MyMenu';

interface MyPageProps {
  name: string
}

const styles = {
  
}

const MyPage = (props: MyPageProps): React.ReactElement => {

  return (
    <div className="container" >
      <MyMenu/>
    </div>
  );
}

export default MyPage;