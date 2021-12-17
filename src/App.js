import React,{Component} from "react";
import { Button,Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';


class  App  extends Component {
  render(){
    return(
    <div>
   <h1>Home  </h1>
    <Button content='info' info> {this.props.tes}</Button> 
    </div>
  );
}
}

const stateApp = (state)=>{
  return{
    tes:state.tes    
  }
}
export default connect(stateApp) (App);
