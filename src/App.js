import { useEffect, useState } from 'react';
import './App.css';
import { Button } from '@mui/material';
import { FormControl,InputLabel,Input,FormHelperText } from '@mui/material';
import Todo from './Todo';
import db from './firebase'
import firebase from "firebase"

function App() {
  const [todos, setTodos] = useState([])
  const [input,setInput] = useState('')

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({
        id: doc.id,
        tasker: doc.data().task}))) 
    })
  },[])

  function addTodo(e){
    // setTodos([...todos,input])
    e.preventDefault()
    db.collection('todos').add({
      task:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
      // 'task' as from backend
    })
    setInput('')
  }
  return (
    <div className="App">
      <h1>Hello Clever Programmers 🚀 !</h1>
      <form>
        <FormControl>
          <InputLabel>✔  Write a To-do</InputLabel>
          <Input value={input} onChange={(e)=>setInput(e.target.value)}/>
        </FormControl>

        <Button disabled={!input} type='submit' onClick={addTodo} variant='contained' color='primary'>Add To-Do</Button>
        
      </form>
      <ul>
        {todos.map(todo=>
          <Todo task={todo}/>
        )}
      </ul>
    </div>
  );
}

export default App;
