import React from 'react';
import './main_block.css';
import MainBlockItemTasks from './main_block-item-tasks/main_block-item-tasks';
import MainBlockItemAddTask from './main_block-add-task/main_block-add-task';
import MainBlockItemDeleteTask from './main_block-delete-task/main_block-delete-task';

const MainBlock = (props) => {
  const importanceTasks = props.todoData.filter((elem) => elem.importance === 'important')
  const currentTasks = props.todoData.filter((elem) => elem.importance === 'current')
  const completedTasks = props.todoData.filter((elem) => elem.importance === 'completed')

  return (
    <main className="main">
      <section className="main__tasks main__tasks-important">
        <h2 className="main__tasks-important-text">Important tasks</h2>
        <MainBlockItemAddTask onItemAdded={props.onItemAdded}
                              idButon="important-task-btn"  />
        <MainBlockItemTasks classList="important"
                            importanceTasksData={importanceTasks}
                            onItemDeleted={props.onItemDeleted}
                            onUpdateStatusTask={props.onUpdateStatusTask} />
      </section>

      <section className="main__tasks main__tasks-current">
        <h2 className="main__tasks-important-text">Current tasks</h2>
        <MainBlockItemAddTask onItemAdded={props.onItemAdded}
                              idButon="current-task-btn" />
        <MainBlockItemTasks classList="current"
                            importanceTasksData={currentTasks}
                            onItemDeleted={props.onItemDeleted}
                            onUpdateStatusTask={props.onUpdateStatusTask} />
      </section>

      <section className="main__tasks main__tasks-completed" >
        <h2 className="main__tasks-important-text">Completed tasks</h2>
        <MainBlockItemDeleteTask />
        <MainBlockItemTasks classList="completed"
                            importanceTasksData={completedTasks}
                            onItemDeleted={props.onItemDeleted}
                            onUpdateStatusTask={props.onUpdateStatusTask} />
      </section>
    </main>
  );
};

export default MainBlock;