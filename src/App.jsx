import React,{useState,useEffect} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import OrgsTable from './OrgsTable/OrgsTable';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/data-challenge-style.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="container">
        <div className="row">
         <OrgsTable></OrgsTable>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;