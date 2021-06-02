import React, { useEffect, useState } from 'react';
import TodoForm from './Form.js';
import TodoList from './List.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import './todo.scss';

const ToDo = props => {

  const [list, setList] = useState([])

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList( [...list, item] );
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
  };

  // componentDidMount() { //useEffect 
  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    setList(list);
  }, []);

    return (
      <>
        <header>
          <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>
        <Card>
  <Form>
    <Card.Body>
      <Card.Title>Add To Do Item</Card.Title>

      <Form.Group>
        <Form.Label>To Do Item</Form.Label>
        <Form.Text>Item Details</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Assigned To</Form.Label>
        <Form.Text>Asignee Name</Form.Text>
      </Form.Group>
    </Card.Body>
  </Form>
</Card>
        <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
        </section>
      </>
    );
}


export default ToDo;
