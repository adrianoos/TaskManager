import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(true)

  const deleteTask = (id) =>{
 setTasks(tasks.filter((task) => task.id !== id))
};

 const toggleReminder = (id) =>{
 setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task ))
 }

 const addTask = (task) => {
   const id = Date()
   const newTask = { id, ...task}
   setTasks([...tasks, newTask])
 }

  return (
    <Router>
   <div className='container'>
<Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />

 <Route path='/' exact render={(props) => (
   <>
{showAddTask && <AddTask onAdd={addTask}/>}
{ tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) :
 ('No Tasks to do ')  }

   </>
 )} />
 <Route path='/about' component={About} />
<Footer />
  </div>
  </Router>
  );
}

export default App;
