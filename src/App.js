import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      {/* New Component */}
      <Friend name="Jhanku" job="Saving Lives"></Friend>
      <Friend name="Panku"></Friend>
      <Friend name="Sir<3"></Friend>
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
function Friend(props) {
  console.log(props)
  return (
    <div style={{ backgroundColor: "blue", color: "white" }}>
      <h1>{props.name}</h1>
      <p>Profession: {props.job}</p>
    </div>
  )
}

export default App;