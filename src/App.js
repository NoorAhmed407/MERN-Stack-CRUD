import React from 'react';
import Header from './components/Header';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NinjaList from './components/NinjaList';
import CreateNinja from './components/createNinja';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={NinjaList} />
        <Route path="/createninja" component={CreateNinja} />
      </BrowserRouter>

    </div>
  );
}

export default App;
