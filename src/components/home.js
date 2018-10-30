import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from 'lodash';
import Header from './header';

const styles = {
  recipe: ''
}

class Home extends Component{
  render(){

    const {recipes} = this.props;

    return(
      <div>
        <Header />
        <h2>recipes</h2>
        {_.map(recipes, recipe => (
          <div style={styles.recipe}>
            <h3>{recipe.name}</h3>
            {recipe.description}
          </div>
        ))}
      </div>
    );
  }
}


const mapStateToProps = (state) => (
    {
      recipes: state.recipes,
    }
);

const mapActionsToProps = (dispatch) => (
    bindActionCreators({

    }, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(Home);
