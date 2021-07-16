import * as React from 'react';
import MyCalendar from './MyCalendar';
import MyDescription from './MyDescription';
import MyHome from './MyHome';
import MyMenu from './MyMenu';

interface MyPageProps {

}

export enum Location {
  HOME = "home",
  APPOINTMENT = "appointment",
  CONTACT = "contact",
  ABOUTME = "about me"
}

const MyPage = (props: MyPageProps): React.ReactElement => {
  const [location, setLocation] = React.useState(Location.HOME)
  const [windowSizes, setWindowSizes] = React.useState({height: window.innerHeight, with: window.innerWidth})

  React.useEffect(() =>  window.addEventListener("resize", () => setWindowSizes), []);
  return (
    <div style={windowSizes} className="container">
      <MyMenu setLocation={setLocation}/>
      {location == Location.HOME  && <MyHome/>}
      {location == Location.APPOINTMENT  && <MyCalendar/>}
      {location == Location.ABOUTME  && <MyDescription/>}
    </div>
  );
}

export default MyPage;