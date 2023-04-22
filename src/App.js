//What Simple List component does ?
// 1. It takes an array of objects as a prop.
// 2. It renders a list of items from the array.


import './App.css';
import List from './SteelEye';

function App() {
  const list = [
    {
      text:"List 1"
    },{
      text:"List 2"
    },{
      text:"List 3"
    }

  ]
  return (
    <div className="App">
      <List items={list}/>
    </div>
  );
}

export default App;
