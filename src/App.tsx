import { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

export default class App extends Component {
  componentDidMount(): void {
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    )
  }
}

