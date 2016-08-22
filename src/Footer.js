import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <footer>
          <p>Created by: Fayyaz Azam</p>
          /** How to include icons**/
          <i className="fa fa-facebook-official"></i>
        </footer>
      </Grid>
    );
  }
}
