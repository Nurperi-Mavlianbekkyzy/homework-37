import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { About } from './Components/About';
import { Contacts } from './Components/Contacts';
import { Employees } from './Components/Employees';
import { Home } from './Components/Home';
const pages = [
  {
  route: "/",
  name: "Главная",
  component: Home
  },
  {
  route: "/contacts",
  name: "Контакты",
  component: Contacts
  },
  {
  route: "/about",
  name: "О нас",
  component: About
  },
  {
  route: "/employees",
  name: "Сотрудники",
  component: Employees
  },
  ];
export function App() {
  return(
    <div>
      <BrowserRouter>
      {
        pages.map((el, id) => {
          return (
            <div>
              <ul>
                <li>
                <Link to={el.route}>{el.name}</Link>
                </li>
              </ul>
            </div>
          )
        })
      }
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contacts">
          <Contacts/>
        </Route>
        <Route>
          <Route path="/employees">
            <Employees/>
          </Route>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

