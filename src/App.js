import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      {/* New Component */}
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}
function Person(props) {
  console.log(props)
  return (
    <div className='jhanku'>
      <h1>Jhankar Mahmud</h1>
      <p>Profession: Programmer</p>
    </div>
  )
}
function Friend() {
  return (
    <div style={{ backgroundColor: "blue", color: "white" }}>
      <h1>Sakif</h1>
      <p>Profession: Nibbatizer</p>
    </div>
  )
}

export default App;