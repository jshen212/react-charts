import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

class StockCharts extends Component {
  render() {
    return (
      <Grid columns={5}>
        <Grid.Row>
          <Grid.Column>
            Test1
          </Grid.Column>
          <Grid.Column>
            Test2
          </Grid.Column>
          <Grid.Column>
            Test3
          </Grid.Column>
          <Grid.Column>
            Test4
          </Grid.Column>
          <Grid.Column>
            Test5
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default StockCharts;
