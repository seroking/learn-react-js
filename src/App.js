import './index.css';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employees';
import Customers from './pages/customers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dictionary from './components/Dictionary';

function App() {
  return (

        <BrowserRouter>
          <Header>
            <Routes>
              <Route path='/employees' element={<Employees/>} />
              <Route path='/customers' element={<Customers/>} />
              <Route path='/dictionary' element={<Dictionary/>} />
            </Routes>
          </Header>
        </BrowserRouter>
  );
}
export default App;
