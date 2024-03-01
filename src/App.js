import React from 'react';
import {  Route,Switch} from 'react-router-dom';
import Landing from "./Components/Demo Bares/Demo Bares.jsx"
import './App.css';
import { Cafeteria } from './Components/Cafeteria/Cafeteria.jsx';
import { Foot } from './Components/Footer/Footer.jsx';
import { Comidas } from './Components/Comidas/Comidas';
import { Bag } from './Components/myBag/myBag.jsx';
import { MyFoot } from './Components/myFoot/MyFooter.jsx';
import { Bebidas } from './Components/Bebidas/Bebidas.jsx';
import { SpecialEvent } from './Components/SpecialEvent/SpecialEvent.jsx';
import { TrackClub } from './Components/TrackClub/TrackClub.jsx';
import { Inicio } from './Components/LandingStart/LandingStart.jsx';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Bares from './Components/Demo Bares/Demo Bares.jsx';
import { Verdulerias } from './Components/Verdulerias/Verdulerias.jsx';
import DemoCarniceria from './Components/Demo Carniceria/DemoCarniceria.jsx';
import { CarneVacuna } from './Components/CarniceriaComp/CarneVacuna.jsx';
import { Polleria } from './Components/CarniceriaComp/Polleria.jsx';
import { Pescaderia } from './Components/CarniceriaComp/Pescaderia.jsx';
import { Cerdo } from './Components/CarniceriaComp/CarneCerdo.jsx';
import { Pastas } from './Components/CarniceriaComp/Pastas.jsx';

function App() {
  return (
    <div className="App">
<Switch>
          <Route exact path="/:id?" component={Inicio}/>
          <Route exact path="/:id/Landing" component={LandingPage}/>
          <Route exact path="/:id/Landing/Bares/Cafeteria" component={Cafeteria}/>
          <Route exact path="/:id/Landing/Bares/Comidas" component={Comidas}/>
          <Route exact path="/:id/Landing/Bares/Bebidas" component={Bebidas}/>
          <Route exact path="/:id/Landing/Bares" component={Bares}/>
          <Route exact path="/:id/Landing/Carniceria" component={DemoCarniceria}/>
          <Route exact path="/:id/Landing/Verdulerias" component={Verdulerias}/>
          <Route exact path="/:id/Landing/Pastas" component={Pastas}/>
         
          <Route exact path="/:id/Landing/Carniceria/Carnes" component={CarneVacuna}/>
          <Route exact path="/:id/Landing/Carniceria/Pollo" component={Polleria}/>
          <Route exact path="/:id/Landing/Carniceria/Pescaderia" component={Pescaderia}/>
          <Route exact path="/:id/Landing/Carniceria/Cerdo" component={Cerdo}/>

          <Route exact path="/:id/Bag" component={Bag}/>
          <Route exact path="/:id/Landing/Bares/SpecialEvent" component={SpecialEvent}/>
          <Route exact path="/:id/Landing/Bares/TrackClub" component={TrackClub}/>
</Switch>
  <Foot/>
  <MyFoot/>
    </div>
  );
}

export default App;
