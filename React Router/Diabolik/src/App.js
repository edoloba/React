import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Diabolik from './pages/Diabolik';
import EvaKent from './pages/Eva_Kent';
import InspectorGinko from './pages/Inspector_Ginko';
import Title from './pages/Title';
import Intro from'./pages/intro';



function App() {
  return (
    
    <div className="App">
      <Title/>
      <Routes>
        <Route path='/diabolik' element={<Diabolik />}/>
        <Route path='/evakent' element={<EvaKent />}/>
        <Route path='/inspectorginko' element={<InspectorGinko />}/>
        
      </Routes>

    </div>
  );
}

export default App;
