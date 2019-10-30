import * as React from 'react';
import './App.css';
import Home from './component/Home/Home';
import Work from './component/Work/Work'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'

const Homeul = React.memo(props => {
  return (
    <header>
    <div className="Header_center">
      <a className="Header_title" href="">
        Power Launch
      </a>
      <ul>
        <li>
          <Link to={`/home`}>
          <a href="">
            <span>Home</span>
          </a>
          </Link>
        </li>
        <li>
          <Link to={`/our-work`}>
          <a href="">
            <span>Work</span>
          </a>
          </Link>
        </li>
        <li>
          <a href="">
            <span>Service</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>Blog</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
    </header>
  );
});

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Homeul/>
        <Switch>
          <Route  path="/home" component={Home}></Route>
          <Route path="/our-work" component={Work}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
