import 'bootstrap/dist/css/bootstrap.css';
import {v4 as uuid} from 'uuid';
import {useState} from "react";
import Column from "./Column";

const initialList = [
    {id: uuid(), name: 'Alice', status: 'todo', priority: 6},
    {id: uuid(), name: 'Steve', status: 'progress', priority: 5},
    {id: uuid(), name: 'Mary', status: 'review', priority: 4},
    {id: uuid(), name: 'Bob', status: 'done', priority: 3},
    {id: uuid(), name: 'Rachel', status: 'todo', priority: 2},
    {id: uuid(), name: 'Jhon', status: 'done', priority: 1}
];

const statuses = ['todo', 'progress', 'review', 'done'];


function App() {

    const [tasks, setTasks] = useState(initialList);

    const changePriority = (id, digit) => {
        const newPriority = tasks.map(el => {
            return el.id === id ? {...el, priority: el.priority + digit} : el;
        })
        setTasks(newPriority)
    };

    const moveCard = (id, direction) => {
        const newCard = tasks.map(el => {
            if(el.id === id){
                if(direction === 'right') el.status = statuses[statuses.indexOf(el.status) + 1];
                if(direction === 'left') el.status = statuses[statuses.indexOf(el.status) - 1];
            }
            return el;
        })
        setTasks(newCard)
    }

    return (
        <div className='container'>
            <div className='row'>
                {statuses.map((el, index) => <Column
                    elstat={el}
                    tasks={tasks}
                    changePriority={changePriority}
                    moveCard={moveCard}
                    index={index}
                />)}
            </div>

        </div>
    );
}

export default App;
