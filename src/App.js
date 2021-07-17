import { Route, Switch } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App container text-light">
      <Switch>
        <Route path="/" component={CountryList} exact />
        <Route path="/:country" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
