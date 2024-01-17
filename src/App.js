import logo from './logo.svg';
import './App.css';

import { BrowserRouter,  Link,  Route, Routes } from 'react-router-dom'
import { Test } from './Test';
import { useCallback, useEffect, useState } from 'react';
import { Count } from './Count';

function App() {

  const [count, setCount] = useState(0);

  
   useEffect(() => {
     console.log("useEffect Parent", count);
   }, [count]);


   const handleSetCount = useCallback(() => {
    setCount(count + 1);
   }, []);


  return (
    <div className="App">
      <input type='text'></input>
      <div style={{display: 'flex'}}>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>

        <BrowserRouter>

        <Link to='/hey'>Hey</Link>

          <Routes>
            <Route element={<div>Hey</div>} path='/hey' />
          </Routes>
        </BrowserRouter>

        <button onClick={() => {
        //  setT1({id: 200});
       setCount(count + 1);
     }}>Click {count}</button>

        <Count value={count} />


        <Test handleSetCount={handleSetCount} />

      </div>
    </div>
  );
}

export default App;
