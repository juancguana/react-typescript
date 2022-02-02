import { useReducer } from 'react';

const initialState = {
  contador: 0,
};

type ActionType =
  | { type: 'incrementar' }
  | { type: 'decrementar' }
  | { type: 'custom'; payload: number };

const contadorReducer = (
  state: typeof initialState = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case 'incrementar':
      return { ...state, contador: state.contador + 1 };
    case 'decrementar':
      return { ...state, contador: state.contador - 1 };
    case 'custom':
      return { ...state, contador: state.contador - action.payload };
    default:
      return state;
  }
};

export const CounterRed = () => {
  const [{ contador }, dispatch] = useReducer(contadorReducer, initialState);
  return (
    <div className='mt-5'>
      <h3>Counter: {contador}</h3>
      <br />
      <button
        className='btn btn-outline-danger'
        onClick={() => dispatch({ type: 'incrementar' })}
      >
        +1
      </button>
      <button
        className='btn btn-outline-danger'
        onClick={() => dispatch({ type: 'decrementar' })}
      >
        -1
      </button>
      <button
        className='btn btn-outline-danger'
        onClick={() => dispatch({ type: 'custom', payload: 100 })}
      >
        100
      </button>
    </div>
  );
};
