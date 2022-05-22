import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import PetForm from './components/PetForm';
import NavBar from './components/NavBar';
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/pets/new">
            <PetForm />
          </Route>
          <Route exact path="/pets/:id">
            <Detail />
          </Route>
          <Route exact path="/:id/edit">
            <Update />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
    
export default App;

