import React, { Component } from 'react';

import AppHeader from '../app-header/header';
import MainBlock from '../main_block/main_block';
import AppFooter from '../app-footer/app-footer';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', importance: 'current', id: 1 },
      { label: 'Go to work', importance: 'important', id: 2 },
      { label: 'Have a lunch', importance: 'current', id: 3 },
      { label: 'Get out of bed', importance: 'completed', id: 4 },
    ],
  }

  addItem = (value, _importance) => {
    this.setState((state) => {

      const newArr = [
        ...state.todoData,
        { label: value, importance: _importance, id: this.maxId++ }
      ]

      return {
        todoData: newArr,
      }
    })
  }

  updateStatusTask = (id, statusTask) => {
    this.setState((state) => {

      console.log(state.todoData)
      console.log(statusTask)

      const idx = state.todoData.findIndex((elem) => elem.id === Number(id));
      
      const newArr = [
        ...state.todoData
      ]

      newArr[idx].importance = statusTask;
      /// сделать чтоб менялись местами элементы slice!!!!

      console.log(newArr)

      return {
        todoData: newArr,
      }
    })
    
  }

  deleteItem = (id) => {
    this.setState((state) => {
      console.log(state.todoData)
      console.log(id)
      const idx = state.todoData.findIndex((elem) => elem.id === Number(id));

      console.log(idx)

      const newArr = [
        ...state.todoData.slice(0, idx),
        ...state.todoData.slice(idx + 1)
      ]

      console.log(newArr)

      return {
        todoData: newArr,
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader />
        <MainBlock  todoData={this.state.todoData}
                    onItemAdded={this.addItem}
                    onItemDeleted={this.deleteItem}
                    onUpdateStatusTask={this.updateStatusTask} />
        <AppFooter />
      </div>
    )
  }
}
