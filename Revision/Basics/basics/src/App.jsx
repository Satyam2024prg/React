import './App.css';
import Header from './components/header.jsx'
import Card from './components/card.jsx'
import List from './components/list.jsx'
import Button from './hooks/useStateHook.jsx'
import UpdateObject from './components/updateObject.jsx';
import Timer from './components/timer.jsx';
import ComponentA from './components/component_a.jsx';
import InputBox from './hooks/useRefHook.jsx';

function App() {

  const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Mango' },
    { id: 4, name: 'Papaya' },
    { id: 5, name: 'Kiwi' }
  ]

  const vegetables = [
    { id: 1, name: 'LadyFinger' },
    { id: 2, name: 'Cabbage' },
    { id: 3, name: 'Potato' },
    { id: 4, name: 'Onion' },
    { id: 5, name: 'Beans' }
  ]
  return <>
    <Timer></Timer>
    <InputBox></InputBox>
    <ComponentA></ComponentA>
    <Header></Header>
    <Card name="Alex" id={1} logged={true}></Card>
    <Card id={2} logged={false}></Card>
    <List items={fruits} category="Fruits"></List>
    <List items={vegetables} category="Vegetables"></List>

    <Button></Button>
    <UpdateObject></UpdateObject>

  </>
}

export default App
