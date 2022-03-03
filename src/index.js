import ReactDOM from "react-dom";
// Componentes
import PrimeraApp from './PrimeraApp';
// CSS
import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value={2022} />, divRoot);
