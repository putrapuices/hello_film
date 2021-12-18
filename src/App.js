import React,{Component} from "react";
import { Button,Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import LoginButton from "./components/login-button";
import LogoutButton from "./components/logout-button";
class  App  extends Component {
  render(){
    return(
    <div>
      <LoginButton/>
      <LogoutButton/>
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
