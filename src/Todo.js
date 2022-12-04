import { List,ListItem,ListItemText,ListItemAvatar } from '@mui/material';
import db from './firebase'
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Modal,Box } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import './Todo.css'


// const useStyles=makeStyles((theme)=>({
//   paper:{
//     position:'absolute',
//     width: 400,
//     backgroundColor: theme.pallette.background.paper,
//     border:'2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2,4,3),
//   },
// }))

function Todo(props) {
  const [open,setOpen]=useState(false)
  const [input,setInput]=useState(props.task.tasker)
  function updater(){
    db.collection('todos').doc(props.task.id).set({
      task:input
      // as from backend
    },{merge: true})
    setOpen(false)
  }
  return (
    <>
        <Modal
          open={open}
          onClose={e=>setOpen(false)}
        >
          <div className='modal'>
            <input placeholder={props.task.tasker} value={input} onChange={(e)=> setInput(e.target.value)} />
            <Button variant='dark' onClick={updater}>Update Changes</Button>
          </div>
        </Modal>

        <List className='todo__list'>
            <ListItem>
                <ListItemText primary={props.task.tasker} secondary='Dummy Deadline 🕗'/>  
                {/* Parent k props wali value ko utha or tasker me pade hue tak ko utha */}
                {/* 2 cheeze h tasker and id, jispar hum khel rahe h */}
                <ListItemAvatar>

                </ListItemAvatar>
                <Button onClick={e=>setOpen(true)}>Edit</Button>
                <DeleteForeverIcon onClick={e=>db.collection('todos').doc(props.task.id).delete()}>❌ Delete Task</DeleteForeverIcon>
            </ListItem>
        </List>
    </>
  )
}

export default Todo