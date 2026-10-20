import './App.css';
import Header from './components/header.jsx'
import Card from './components/card.jsx'

function App() {
  return <>
    <Header></Header>
    <Card name="Alex" id={1} logged={true}></Card>
    <Card id={2} logged={false}></Card>
  </>
}

export default App
