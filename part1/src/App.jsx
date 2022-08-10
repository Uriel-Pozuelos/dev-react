import './App.css'
import Mensaje from './Mensaje'


function App() {
  return (
    <div className="App">
      <Mensaje color='red' message="Hola estamos trabajando"/>
      <Mensaje color='blue' message="en un curso"/>
      <Mensaje color='green'message="de react"/>
    </div>
  )
}

export default App
