import './App.css'
import Board from './components/Board'
import { BoardProvider } from './components/BoardContext'

function App() {
  

  return (
    <div>
   <BoardProvider>
    <Board/>
   </BoardProvider>
   </div>
  )
}

export default App