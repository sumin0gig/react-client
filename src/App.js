import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import LedgerEnter from './Components/page/ledgerEnter/LedgerEnter';
import './Components/NM/style.css'
import AddAccountTitle from './Components/page/addAccountTitle/AddAccountTitle'
import FundsState from './Components/page/fundsState/FundsState';
import ShowAllLedger from './Components/page/showAllLedger/ShowAllLedger';
import Main from './Components/Main';

export const serveraddress= "http://localhost:8080/";

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <div id='Main'>
        <div id='NM'>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/ledgerenter' element={<LedgerEnter/>}/>
          <Route path='/addaccounttitle' element={<AddAccountTitle/>}/>
          <Route path='/fundsstate' element={<FundsState/>}/>
          <Route path='/showAllLedger' element={<ShowAllLedger/>}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
