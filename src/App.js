import UseStateTuto from './useState/UseStateTuto';
import UseReducerTuto from './useReducer/UseReducerTuto';
import UseEffectTuto from './useEffect/UseEffectTuto';
import UseRefTuto from './useRef/useRefTuto';
import UseLayoutEffectTuto from './useLayoutEffect/UseLayoutEffectTuto';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> #####React Hooks##### </h1>
      <h2>** useState Tutorial</h2>
      <UseStateTuto />
      <h2>** useReducer Tutorial</h2>
      <UseReducerTuto />
      <h2>** useEffect Tutorial</h2>
      <UseEffectTuto />
      <h2>** useRef Tutorial</h2>
      <UseRefTuto />
      <h2>** useLayoutEffect Tutorial</h2>
      <UseLayoutEffectTuto />
    </div>
  );
}

export default App;
