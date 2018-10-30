import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const styles = {
  header: ''
}

class Header extends Component{

  render(){

    return(
      <div style={styles.header}>
        <Link to={'/'}><h1>Cookbook</h1></Link>
        <Link to={'/new'}>+</Link>
      </div>
    );

  }
}


const mapStateToProps = (state) => (
    {
      recipts: state.recipts,
    }
);

const mapActionsToProps = (dispatch) => (
    bindActionCreators({

    }, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(Header);
