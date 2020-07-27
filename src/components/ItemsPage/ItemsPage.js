import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./ItemsPage.css"; 

class ItemsPage extends Component {
  
  
    render() {
      return(
        <div className= "categories">
            <p>
              This be Items page
            </p>

            <p>
              This be Items page
            </p>

            <p>
              This be Items page
            </p>

        </div>
      )
    }
}

export default connect()(ItemsPage); 