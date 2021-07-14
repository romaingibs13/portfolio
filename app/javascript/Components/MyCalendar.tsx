import * as React from 'react';

interface MyCalendarProps {
}

const styles = {
  
}

const MyCalendar = (props: MyCalendarProps): React.ReactElement => {

  return (
    <div className="container" >
      <iframe src="https://calendar.google.com/calendar/embed?src=i6arhhfva0o1fei2s8joolnci0%40group.calendar.google.com&ctz=Europe%2FParis" style={{border: 0}} width="800" height="600" frameBorder={0} scrolling="no"></iframe>
    </div>
  );
}

export default MyCalendar;