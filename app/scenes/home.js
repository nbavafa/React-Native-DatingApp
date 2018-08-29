

import React, { Component } from 'react';
import Tabs from 'react-native-tabs';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import SwipePage from "./swipe.js"
import Messages from "./messages.js"
import Profile from "./profile.js"
import MakeProfile from "./makeprofile.js"
import Login from "./login.js"

var BACK = require('../images/linear.jpg')
var {height, width} = Dimensions.get('window');

const PINK_COLOR = 'rgb(223, 153, 127)'
const TEAL_COLOR = 'rgb(52, 126, 127)'

export default class Home extends Component {
  constructor(props){
    super(props)
    console.disableYellowBox = true;
    this.state = {
        page:'swipe',

        //THESE DEFINE SIGN UP FLOW
        loggedin: true,
        signupflow: false,
        loginflow: false,
    };

  }

  handleSignup = () => {
    this.setState({signupflow: true})
  }

  handleLogin = () => {
    this.setState({loginflow: true})
  }

  _handleCancel = () => {
    this.setState({loginflow: false, signupflow: false})
  }

  _handleLogout = () => {
    this.setState({loginflow: false, signupflow: false, loggedin: false})
  }

  render() {
      if (this.state.loggedin) {
        if (this.state.page === "chat") {
          return <View style={styles.container}>
              <Image source ={BACK} blurRadius={10} style ={{resizeMode: 'stretch', position: 'absolute'}}/>
                  <Tabs selected={this.state.page} style={{backgroundColor:'white', marginBottom: 0}} onSelect={el=>this.setState({page:el.props.name})}>
                      <Text name="profile" selectedIconStyle={{borderTopWidth:2, borderTopColor: TEAL_COLOR}} selectedStyle={{color:TEAL_COLOR}} >My Profile</Text>
                      <Text name="swipe" selectedIconStyle={{borderTopWidth:2, borderTopColor: TEAL_COLOR}} selectedStyle={{color:TEAL_COLOR}} >Explore</Text>
                      <Text name="chat" selectedIconStyle={{borderTopWidth:2, borderTopColor: TEAL_COLOR}} selectedStyle={{color:TEAL_COLOR}} >Messages</Text>
                  </Tabs>
                  <View style={{marginTop: -10}}><Messages/></View>

              </View>

        }
        else if (this.state.page === "swipe") {
          return <View style={styles.container}>
              <Image source ={BACK} blurRadius={10} style ={{resizeMode: 'stretch', position: 'absolute'}}/>
                  <Tabs selected={this.state.page} style={{backgroundColor:'white', marginBottom: 0}} onSelect={el=>this.setState({page:el.props.name})}>
                      <Text name="profile" selectedIconStyle={{borderTopWidth:2, borderTopColor: TEAL_COLOR}} selectedStyle={{color:TEAL_COLOR}} >My Profile</Text>
                      <Text name="swipe" selectedIconStyle={{borderTopWidth:2, borderTopColor: TEAL_COLOR}} selectedStyle={{color:TEAL_COLOR}} >Explore</Text>
                      <Text name="chat" selectedIconStyle={{borderTopWidth:2, borderTopColor: TEAL_COLOR}} selectedStyle={{color:TEAL_COLOR}} >Messages</Text>
                  </Tabs>
                  <View style={{marginBottom: 50, marginTop: 30}}><SwipePage/></View>

              </View>
        }
        else { //Profile
          return <View style={styles.container}>
              <Image source ={BACK} blurRadius={10} style ={{resizeMode: 'stretch', position: 'absolute'}}/>
                  <Tabs selected={this.state.page} style={{backgroundColor:'white', marginBottom: 0}} onSelect={el=>this.setState({page:el.props.name})}>
                      <Text name="profile" selectedIconStyle={{borderTopWidth:2, borderTopColor: TEAL_COLOR}} selectedStyle={{color:TEAL_COLOR}} >My Profile</Text>
                      <Text name="swipe" selectedIconStyle={{borderTopWidth:2, borderTopColor: TEAL_COLOR}} selectedStyle={{color:TEAL_COLOR}} >Explore</Text>
                      <Text name="chat" selectedIconStyle={{borderTopWidth:2, borderTopColor: TEAL_COLOR}} selectedStyle={{color:TEAL_COLOR}} >Messages</Text>
                  </Tabs>
                    <View style = {{backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 15, borderColor: 'transparent', alignSelf: 'flex-start', marginLeft: 10, marginTop: -30}}>
                      <TouchableOpacity onPress={() => this._handleLogout()}>
                          <Text style={styles.text, {padding: 5}}> Logout </Text>
                      </TouchableOpacity>
                    </View>
                  <View style={{marginTop: 35, height: height - 135}}><Profile/></View>

              </View>
          }
      }
      else { //Not logged in
        if (this.state.signupflow) {
          return <View style={styles.container}>
                <Image source ={BACK} blurRadius={10} style ={{resizeMode: 'stretch', position: 'absolute'}}/>
                  <View style = {{margin: 20, justifyContent: 'center', alignItems: 'center', height: height - 100}}>
                    <MakeProfile/>
                  </View>
                  <View style = {{backgroundColor: 'transparent'}}>
                  <TouchableOpacity onPress={() => this._handleCancel()}>
                      <Text style={styles.text}> Cancel </Text>
                  </TouchableOpacity>
                  </View>
            </View>

        }
        else if (this.state.loginflow) {
          return <View style={styles.container}>
                <Image source ={BACK} blurRadius={10} style ={{resizeMode: 'stretch', position: 'absolute'}}/>
                  <View style = {{margin: 20, justifyContent: 'center', alignItems: 'center', height: height - 100}}>
                    <Login/>
                  </View>

                  <View style = {{backgroundColor: 'transparent'}}>
                  <TouchableOpacity onPress={() => this._handleCancel()}>
                      <Text style={styles.text}> Cancel </Text>
                  </TouchableOpacity>
                  </View>
            </View>
        }
        else { //Hasn't picked signup or login
          return <View style={styles.container}>
          <Image source ={BACK} blurRadius={10} style ={{resizeMode: 'stretch', position: 'absolute'}}/>

              <TouchableOpacity activeOpacity = {.8} onPress = {this.handleSignup}>
                  <View style={styles.button}>
                        <Text style={styles.text}>
                          Become a Giggler
                        </Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity = {.8} onPress = {this.handleLogin}>
                  <View style={styles.button}>
                        <Text style={styles.text}>
                          Already a Giggler?
                        </Text>
                  </View>
              </TouchableOpacity>
              </View>

        }

      }
  }
}

const styles = StyleSheet.create({
  container: {
     justifyContent: 'center',
     alignItems: 'center',
     //flex: 1,
     width: width,
     height: height,
     backgroundColor: 'rgb(190, 196, 223)'
   },
   button: {
     height: 50,
     width: width - 80,
     borderRadius: 30,
     borderColor: "transparent",
     borderWidth: 0,
     padding: 10,
     marginBottom: 15,
     marginTop: 15,
     backgroundColor: 'rgba(255,255,255,0.5)',
     alignItems: 'center',
     justifyContent: 'center'
   },
   text: {
     fontWeight: '200',
     fontSize: 25,
     color: '#444'
   },
   image: {
     flex: 1,
     resizeMode: 'stretch',

   }

});
