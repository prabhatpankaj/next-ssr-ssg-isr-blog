import React from 'react';
import fetch from 'isomorphic-unfetch';

const TodoList = ({ todos }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.id} {todo.completed ? <del>{todo.todo}</del> : todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://dummyjson.com/todos');
  const data = await res.json();

  return {
    props: {
      todos: data.todos,
    }
  };
}

export default TodoList;

