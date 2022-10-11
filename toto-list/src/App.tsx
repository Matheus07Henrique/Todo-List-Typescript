import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { Listitem } from './components/Listitem'
import { AddArea } from './components/AddArea'


const App = () => {
  const [list, setlist] = useState<Item[]>([
    {
      id: 1,
      name: 'test',
      done: false,
    },
    {
      id: 2,
      name: 'test 2',
      done: true,
    },
    {
      id: 3,
      name: 'test 3',
      done: false,
    },
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setlist(newList);
  }

  return ( 
    <C.Container>
      <C.Area>
        <C.Header>
          <p>Lista de tarefas</p>
        </C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <Listitem key={index} item={item}/>
        ))}
      </C.Area>
    </C.Container>
   );
}
 
export default App;