import React from 'react';

const CustomCountDown = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <p className="text-[32px] text-white font-extralight">
        {days}
        <span className="font-semibold uppercase mx-1">d</span> : {hours}
        <span className="font-semibold uppercase mx-1">h</span> : {minutes}
        <span className="font-semibold uppercase mx-1">m</span> : {seconds}
        <span className="font-semibold uppercase mx-1">s</span>
      </p>
    </div>
  );
};

export default CustomCountDown;
