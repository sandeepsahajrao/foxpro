import logo from './logo.svg';
import './App.css';
import { Header1 } from './component/header/Header1';
import { Header2 } from './component/header/Header2';
import MainC from './component/Home/MainC';
import Header3 from './component/header/Header3';

function App() {
  return (
    <>
    <Header1></Header1>
    <Header2></Header2>
    {/* <Header3></Header3> */}
    <MainC></MainC>
    </>
  );
}

export default App;
