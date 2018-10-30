import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { newRecipe } from '../actions';
import Header from './header';

const styles = {
  new: ''
}

class New extends Component{

  constructor(props){
    super(props);
    this.state = {
      editorState: '',
      name: ''
    }
  }

  onEditorStateChange(editorState){
    console.log(editorState);
    this.setState(editorState);
  }

  onNameChange(name){
    console.log(name);
    this.setState(name);
  }

  render(){

    const {editorState} = this.state;

    return(
      <div>
        <Header />
        <FormControl variant="outlined">
          <InputLabel
            htmlFor="component-outlined"
          >
            Name
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={this.state.name}
            onChange={(name) => this.onNameChange(name)}
          />
        </FormControl>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={(editorState) => this.onEditorStateChange(editorState)}
        />
        <Button variant="contained" color="primary">
          Primary
        </Button>
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
      newRecipe
    }, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(New);
