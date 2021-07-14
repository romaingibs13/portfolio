import * as React from 'react';
import MyCalendar from './MyCalendar';
import MyMenu from './MyMenu';

interface MyPageProps {

}

enum Location {
  ABOUT = "about",
  APPOINTMENT = "appointment",
  CONTACT = "contact"
}

const MyPage = (props: MyPageProps): React.ReactElement => {
  const [location, setLocation] = React.useState(Location.ABOUT)
  
  return (
    <div className="container">
      <img height={window.screen.availHeight} width={window.screen.availWidth} src="/assets/background2.jpeg" alt="background image"/>
      <MyMenu/>
      {/* {location == Location.APPOINTMENT  && <MyCalendar/>} */}
      <MyCalendar/>
    </div>
  );
}

function resizeImage(file:File, maxWidth:number, maxHeight:number):Promise<Blob> {
  return new Promise((resolve, reject) => {
      let image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = () => {
          let width = image.width;
          let height = image.height;
          
          if (width <= maxWidth && height <= maxHeight) {
              resolve(file);
          }

          let newWidth;
          let newHeight;

          if (width > height) {
              newHeight = height * (maxWidth / width);
              newWidth = maxWidth;
          } else {
              newWidth = width * (maxHeight / height);
              newHeight = maxHeight;
          }

          let canvas = document.createElement('canvas');
          canvas.width = newWidth;
          canvas.height = newHeight;

          let context = canvas.getContext('2d');

          context.drawImage(image, 0, 0, newWidth, newHeight);

          canvas.toBlob(resolve, file.type);
      };
      image.onerror = reject;
  });
}

export default MyPage;