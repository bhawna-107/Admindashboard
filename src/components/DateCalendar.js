import React, {useState} from 'react'

import Calendar from "react-calendar";

const DateCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className='border border-2 p-4 m-6 bg-white shadow-lg rounded-[20px] h-full text-xl font-semibold'>
      <Calendar onChange={onChange} value={date} />
     
    </div>
  );
}

export default DateCalendar;