import React, { Component } from 'react';

import './main_block-add-task.css';

export default class MainBlockItemAddTask extends Component {

  state = {
    label: '',
    isButtionDisable: true,
  }

  onLabelChange = (e) => {
    this.setState((state) => {
      if (e.target.value.length > 0) {
        return {
          label: e.target.value,
          isButtionDisable: false,
        }
      } else {
        return {
          label: e.target.value,
          isButtionDisable: true,
        }
      }
      
    })
  }

  onFormSubmit = (e) => { 
    e.preventDefault();
    
    let isImportance = 'important';
    if (e.target.lastChild.id === 'current-task-btn') isImportance = 'current';

    this.props.onItemAdded(this.state.label, isImportance)
    this.setState({
      label: '',
      isButtionDisable: true,
    })
  }

  render() {
    return (
      <div className="main__tasks-add-task">
        <form className="main__tasks-add-task-form"
              onSubmit={this.onFormSubmit}
        >
          <input type="text"
                className="main__tasks-add-task-form-input"
                onChange={this.onLabelChange}
                placeholder="Enter your task"
                value={this.state.label}
          />  
          <button
            className="main__tasks-add-task-form-btn"
            id={this.props.idButon}
            disabled={this.state.isButtionDisable}
          >
            Add Item
          </button>
        </form>
      </div>
    )
  }
}