import React, { Component } from 'react';
import UIButton from './button';
import Header from './header';
import StockCharts from './stock_charts';
import MainSearch from './main_search';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='header-container'>
          <Header />
        </div>
        <div className='main-search-container'>
          <MainSearch />
        </div>
        <div className='charts-container'>
          <StockCharts />
        </div>
      </div>
    );
  }
}
