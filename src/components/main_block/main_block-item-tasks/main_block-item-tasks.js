import React, { Component } from 'react';
import './main_block-item-tasks.css';

export default class MainBlockItemTasks extends Component { 
  
  onDragStart = (e) => {
    const empties = document.querySelectorAll(".main__tasks-block-list")
    const garbage = document.querySelector(".main__tasks-delete-task-garbage")
    const dragElem = e.target;
    const that = this;   

    const newEmpties = [...empties, garbage]

    function divDragOver(e) {      
      e.preventDefault();
    }
    
    function divDrop(e) {
      e.preventDefault();
      const parentNodeClass = e.currentTarget.classList[1];
      let statusItem = 'important'

      if (parentNodeClass === 'main__tasks-block-list-completed') {
        statusItem = 'completed';
      } else if (parentNodeClass === 'main__tasks-block-list-current') {
        statusItem = 'current';
      }

      that.props.onUpdateStatusTask(dragElem.id, statusItem);
      
      if (e.target.className === 'main__tasks-delete-task-garbage') that.props.onItemDeleted(dragElem.id);

      for (const empty of newEmpties) {
        empty.removeEventListener("dragover", divDragOver);
        empty.removeEventListener("drop", divDrop);
      }
    }

    for (const empty of newEmpties) {
      empty.addEventListener("dragover", divDragOver);
      empty.addEventListener("drop", divDrop);
    }
  
  }
  render() {
    let elements;

    if (this.props.importanceTasksData) {
      elements = this.props.importanceTasksData.map((item) => {

        return (
          <li key={item.id} className="main__tasks-block-list-item"              
              onDragStart={this.onDragStart}
              draggable="true"
              id={item.id}
          >
            {item.label}
          </li>
        );
      });
    } else {
      elements = '';
    }
    
    return (
      <ul className={`main__tasks-block-list main__tasks-block-list-${this.props.classList}`}>
        {elements}
      </ul>
    );
  }
};
