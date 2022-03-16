import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Ahnaf', 'Anika', 'Kamrul'];
  return (
    < div className="App" >
      {
        names.map(name => <li>{name}</li>)
      }
      <Person></Person>
      <Person></Person>
      {/* New Component */}
      <Friend name="Jhanku" job="Saving Lives"></Friend>
      <Friend name="Panku"></Friend>
      <Friend name="Sir<3"></Friend>
    </div >
  );
}
function Person(props) {
  console.log(props)
  return (
    <div className='jhanku'>
      <h1>Jhankar</h1>
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