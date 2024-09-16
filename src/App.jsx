import clsx from "clsx"
import { useCallback, useState } from "react"
import DeletIcon from './images/Delet.svg'

const Item = ({name, initialStatus, onDelete, id}) => {
  const [status,SetStatus] = useState(initialStatus)
  
  var handleOnDone = () => {
    if (status === 'todo') {
      return 'Done' 
    } else {
      return 'UnDone'
    }
    
  }

  var handleOnClick = () => {
      if (status === 'todo') {
        SetStatus('done')
      } else {
        SetStatus ('todo')
      }
  }

  var deletTaskHandler = () => {
    onDelete(id)
  }
  return (
    <div>

      <div className={clsx({
        'done' : status === 'done',
      })}>
      {name}
      </div>
      
      <button onClick={handleOnClick}>
        {handleOnDone()}
      </button>
      <button onClick={deletTaskHandler}>
        Delet task
      </button>
     
      
  
    </div>
    
  )
}


const List = ({tasks , onDelete}) => {

  if (!tasks.length) {
    return (
      <div>
        Add something
      </div>
    )
  }
  return (

    <div > 
      {tasks.map(item => {
        return (
          <Item key={item.id} name={item.name} initialStatus={item.status} tasks={tasks} onDelete={onDelete} id={item.id}/>
        )
      })}
    </div>
  )
}

const Inputbar = () => {
  const [value, setValue] = useState('')
  const [taskList, setTaskList] = useState([])

  var handleOnchange = (e) => {
   return setValue(e.target.value)
  }

  var handleOnClick = () => {
    setTaskList(
      [
        ...taskList, {
          id: taskList.length+1,
          name: value,
          status: 'todo'
        }
      ]
    )
  }

  const handleDelete = (id) => {
    setTaskList(taskList.filter(task => task.id !== id))
  }

  return ( 
    <div>
      <input onChange= {handleOnchange} type="text" />
      <button onClick={handleOnClick}> Add task</button>
      <List onDelete = {handleDelete} tasks = {taskList}/>
    </div>
  )
}

const App = () => {
  return (
    <Inputbar />
  )
}

export default App 