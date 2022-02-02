import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';
import { TimerPadre } from './components/TimerPadre';
import { CounterRed } from './components/CounterRed';
import { Formulario } from './components/Formulario';
import { Formulario2 } from './components/Formulario2';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <Counter />
      <Usuario />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre />
      <h2>useReducer</h2>
      <hr />
      <CounterRed />
      <h2>customHooks</h2>
      <hr />
      <Formulario />
      <Formulario2 />

    </>
  );
}

export default App;
