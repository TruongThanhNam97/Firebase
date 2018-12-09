import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import Form from './Form';
import Noti from './Noti';

class App extends Component {
  render() {
    return (
      <div>
      <Noti></Noti>
      <Header></Header>
  {/* Start HTML SearchForm */}
  <div className="searchForm">
    <div className="container">
      <div className="row">
        <Search></Search>
        <div className="col-12">
          <hr />
        </div>
        <Table></Table>
        <Form></Form>
      </div>
    </div>
  </div>
  {/* End HTML SearchForm */}
</div>
    );
  }
}

export default App;
