import { useEffect, useState } from 'react';
import AppConnectApi from './app-api';
import {Ui, Dialog, Login} from '@nx-demo/ui';

interface Todo {
  title: string;
}


const ConnectAPI = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const data = JSON.stringify(todos);
  
  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(res => setTodos(res));
  }, []);

  function addTodo() {
    fetch('https://randomuser.me/api/', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <h1>Connect to an API</h1>
      <h3>{data}</h3>
    </>
  );
};

const AppBasic = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Todo 1' },
    { title: 'Todo 2' },
  ]);

  const [value, setValue] = useState(2)

  function addTodo() {
    const newValue = value + 1;
    setTodos([
      ...todos,
      {
        title: `Todo ${newValue}`,
      },
    ]);
    setValue(newValue);
  }

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((t) => (
          <li className={'todo'} role="li">{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export const App = () => {
  return (
    <>
      <AppBasic/>
      {/* <Ui/>
      <Dialog/>
      <Login/>
      <AppConnectApi/> */}
      <ConnectAPI/>
    </>
  );
};

export default App;