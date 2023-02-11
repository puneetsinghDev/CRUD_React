import Create from './Create.js'
import Read from './Read.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './Update.js';


function Demo() {
   

    
  
    return (
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Create />}> </Route>
        <Route exact path="/read" element={<Read />}> </Route>
        <Route exact path="/update" element={<Update />}> </Route>
     

      </Routes>
        </BrowserRouter>
    );
    } 
    export default Demo;