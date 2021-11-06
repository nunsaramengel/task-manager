import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
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

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

return (
  <div className="container">
    <Header  />
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks to show'}
  </div>
);
}


export default App;
