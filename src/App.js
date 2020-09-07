import React from 'react';
import Header from './components/Header';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NinjaList from './components/NinjaList';
import CreateNinja from './components/createNinja';
import EditNinja from './components/editNinja';
import { Delete } from './components/delete';


function App() {
  console.log("App Component");
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={NinjaList} />
        <Route path="/createninja" component={CreateNinja} />
        <Route path="/editninja/:id" component={EditNinja} />
        <Route path="/deleteninja/:id" component={Delete} />
      </BrowserRouter>

    </div>
  );
}

export default App;
