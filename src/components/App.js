import React from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, markAsDone, removeAll } from './../actions';
class App extends React.Component {
  render() {
    const handleSubmit = (event) => {
      event.preventDefault();
      if (event.target.task.value !== '') {
        this.props.addTodo(event.target.task.value);
      }
      document.getElementById('todo-form').reset();
    };
    return (
      <div>
        <form id="todo-form" onSubmit={handleSubmit}>
          <label>
            Create New Task:
            <input name="task" type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button
          onClick={() => {
            this.props.removeAll();
          }}
        >
          Remove All Tasks
        </button>
        <h3>Active:</h3>
        <ul>
          {this.props.activeTodos?.map((todo) => (
            <li key={todo.id}>
              <input
                onChange={() => {
                  this.props.markAsDone(todo.id);
                }}
                type="checkbox"
                name={todo.body}
                id={todo.id}
              />
              <span>{todo.body}</span>
              <span
                style={{ cursor: 'pointer', marginLeft: '20px' }}
                onClick={() => this.props.removeTodo(todo.id)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <h3>Done:</h3>
        <ul>
          {this.props.doneTodos?.map((todo) => (
            <li key={todo.id}>
              <input
                onChange={() => {
                  this.props.markAsDone(todo.id);
                }}
                checked
                type="checkbox"
                name={todo.body}
                id={todo.id}
              />
              <span>{todo.body}</span>
              <span
                style={{ cursor: 'pointer', marginLeft: '20px' }}
                onClick={() => this.props.removeTodo(todo.id)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return {
    activeTodos: todos.active,
    doneTodos: todos.done,
  };
};

export default connect(mapStateToProps, {
  addTodo,
  removeTodo,
  markAsDone,
  removeAll,
})(App);
