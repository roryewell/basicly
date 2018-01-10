import React, { Component } from 'react';
import './ToDoContainer.css';

// import the ToDoList component
import ToDoList from '../ToDoList/ToDoList';

// import the CreateToDo component
import ToDoHeader from '../ToDoHeader/ToDoHeader';

// import the Modal component
import Modal from '../Modal/Modal';

class ToDoContainer extends Component {
  state = {
    // this is all static test data
    toDosInProgress: [
      {
        id: 1,
        name: 'Get a job as a software engineer',
        isCompleted: false
      },
      {
        id: 2,
        name: 'Get in shape for upcoming trip to the Bahamas',
        isCompleted: false
      },
      {
        id: 3,
        name: 'Last through the cedar allergy season',
        isCompleted: false
      }
    ],
    toDosCompleted: [
      {
        id: 4,
        name: 'Live past the year 2017',
        isCompleted: true
      },
      {
        id: 5,
        name: 'Finish the Hack Reactor technical assessment',
        isCompleted: true
      }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Modal>
          Add a to do to your list!
        </Modal>
        <div className="toDoContainer">
          <ToDoHeader
          />
          <ToDoList
            category="In Progress"
            toDos={this.state.toDosInProgress}
          />
          <ToDoList
            category="Completed"
            toDos={this.state.toDosCompleted}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoContainer;
