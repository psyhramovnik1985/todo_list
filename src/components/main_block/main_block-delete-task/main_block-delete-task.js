import React from 'react';
import './main_block-delete-task.css';
import imageGarbageSmile from '../../../images/garbage-smile.png'
import imageGarbageNoSmile from '../../../images/garbage-nosmile.png'

const MainBlockItemDeleteTask = (props) => {
  //const garbage = document.getElementsByClassName('main__tasks-delete-task-garbage');
  let isGarbageSmile = false;

  const timerObj = {
    timerOpenSmileId: null,
  };

  (function tick() {
    const garbage = document.getElementsByClassName('main__tasks-delete-task-garbage');
    
    timerObj.timerOpenSmileId = requestAnimationFrame(tick);

    if (isGarbageSmile && (new Date()).getSeconds() % 2 === 0 && garbage[0]) {
      garbage[0].style.backgroundImage = `url(${imageGarbageNoSmile})`;
      isGarbageSmile = false;
    } else if (!isGarbageSmile && (new Date()).getSeconds() % 2 !== 0 && garbage[0]) {
      garbage[0].style.backgroundImage = `url(${imageGarbageSmile})`;
      isGarbageSmile = true;
    }
  })()

    
  return (
    <div className="main__tasks-delete-task">
      <div className="main__tasks-delete-task-garbage"></div>
    </div>
  );
};

export default MainBlockItemDeleteTask;