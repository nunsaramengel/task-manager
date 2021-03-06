import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [

        {
            id: 1,
            text: 'Doctors Appointment',
            day: "Feb 5th at 2:30pm",
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: "Feb 6th at 1:30pm",
            reminder: true,
        },
        {
            id: 3,
            text: 'Grocery Shopping',
            day: "Feb 7th at 5:30pm",
            reminder: false,
        },
        {
            id: 4,
            text: 'Get Birthday Present',
            day: "Feb 8th at 8:00am",
            reminder: false,
        }
    ]
)


// add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() *10000) +1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle task reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

return (
  <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
    {showAddTask && <AddTask onAdd={addTask} />}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <p id="noTask">No tasks to show</p>}
  </div>
);
}


export default App;
