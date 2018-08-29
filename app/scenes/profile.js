
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
  TextInput,
} from 'react-native';

import Modal from "react-native-modal";


var {height, width} = Dimensions.get('window');

var image1 = require('../images/image1.jpeg')
var image2 = require('../images/image2.jpeg')
var image3 = require('../images/image3.jpeg')
var image4 = require('../images/image4.jpeg')
var image5 = require('../images/image5.jpeg')

var SETON = require('../Icons/checked.png')
var SETOFF = require('../Icons/setoff.png')

export default class Profile extends Component {
  constructor(props){
    super(props)

    //GET IN POST REQUEST
    const user = {
      "firstname": "Nick",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images": [image1, image2, image3, image4, image5],
      "school": "University Name",
      "major": "Major",
      "year": "3rd",
      "age": 19,
      "organizations": "Frats, Labs, Clubs",
      "distance": 6
    }

    this.state = {
      profile: user,
      editting: false,
      name_text: user.firstname,
      major_text: user.major,
      bio_text: user.bio,
      org_text: user.organizations,
      imageNum: 0,
    }
  }

  imageChange(n)
  {
    if (( n - 1 ) > this.state.imageNum) {
      this.setState({ imageNum: this.state.imageNum + 1 })
    }
    else {
      this.setState({ imageNum: 0 })
    }
  }

  _editor = () =>
    this.setState({editting: !this.state.editting});

  render() {
    return (
      <ScrollView style = {{flex:1, maxHeight: (height - 70), marginTop: - 27}}>
        <TouchableOpacity activeOpacity = {.8} onPress = {() => this.imageChange(this.state.profile.images.length)}>
          <Image source ={this.state.profile.images[this.state.imageNum]} resizeMode="stretch" style={{height:width + 15, width:width - 24, borderRadius: 20, marginTop: 10, marginLeft: 4}} />
            <View style={{position: "absolute", marginLeft: width - 70, marginTop: 15, borderRadius: 20, padding: 5, backgroundColor: 'rgba(255, 255, 255, .5)'}}>
              <Text style={{fontSize: 16, fontWeight:'200', color :'#555'}}>
                  {(1 + this.state.imageNum) + "/" + this.state.profile.images.length}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.container}>

          <View style={[styles.row, {marginTop:15}]}>
          {
            (this.state.editting) ? (
              <View>
                  <TextInput
                     style={{height: 29, borderBottomColor: '#999', borderBottomWidth: 1, width: width-200, fontSize: 24}}
                     onChangeText={(name_text) => this.setState({name_text})}
                     value={this.state.name_text}
                     autoCapitalize = 'words'
                     multiline = 'false'
                     textContentType = "givenName"
                   />
                  <Text style={{fontSize:22, fontWeight:'300', color:'#999'}}>{this.state.profile.age}</Text>
              </View>
            ) : (
              <View>
                  <Text style={{fontSize:24, fontWeight:'600', color:'#444', width: width- 200}}>{this.state.name_text} </Text>
                  <Text style={{fontSize:22, fontWeight:'300', color:'#999'}}>{this.state.profile.age}</Text>
              </View>
            )
          }
          <View style={{alignSelf: 'flex-end'}}>
          {
            (this.state.editting) ? (
              <TouchableOpacity onPress={(this._editor)}>
              <View style={{marginLeft: width - 280}}>
                  <Image source = {SETON} style = {{width: 40, height: 40}} />
              </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={(this._editor)}>
              <View style={{marginLeft: width - 280}}>
                  <Image source = {SETOFF} style = {{width: 40, height: 40}} />
              </View>
              </TouchableOpacity>
            )
          }
          </View>

          </View>

          <View style={{margin: 15, marginBottom: 0}}>
            <Text style={{color:'#444', fontSize:15}}> {this.state.profile.school} </Text>
            {
              (this.state.editting) ? (
                <View>
                    <TextInput
                       style={{height: 24, borderBottomColor: '#999', color: '#444', borderBottomWidth: 1, width: width-100, fontSize: 15}}
                       onChangeText={(major_text) => this.setState({major_text})}
                       value={this.state.major_text}
                       autoCapitalize = 'words'
                       multiline = 'false'
                     />
                  </View>
              ) : (
                <View>
                <Text style={{color:'#444', fontSize:15, width: width - 100}}> {this.state.major_text} </Text>
                </View>
              )
            }
          </View>

          <View style={styles.description}>
          {
            (this.state.editting) ? (
              <View>
                <TextInput
                   style={{height: 200, color: '#222', width: width-40, fontSize: 16}}
                   onChangeText={(bio_text) => this.setState({bio_text})}
                   value={this.state.bio_text}
                   autoCapitalize = 'sentences'
                   multiline = 'true'
                   numberOfLines= '25'
                 />
              </View>
            ) : (
              <View>
                <Text style = {{paddingTop: 5, fontSize:  16, color: '#222'}}> {this.state.bio_text} </Text>
              </View>
            )
          }
          </View>

          <View style={styles.description}>
          {
            (this.state.editting) ? (
              <View>
                <TextInput
                   style={{height: 70, color: '#222', width: width-40, fontSize: 16}}
                   onChangeText={(org_text) => this.setState({org_text})}
                   value={this.state.org_text}
                   autoCapitalize = 'sentences'
                   multiline = 'true'
                   numberOfLines= '10'
                 />
              </View>
            ) : (
              <View>
              <Text style = {{paddingTop: 5, fontSize:  16, color: '#222'}}> {this.state.org_text} </Text>
              </View>
            )
          }
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 16,
    //height: height - 200,

    borderRadius: 20,
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,.7)',
  },
  row: {
    flexDirection:'row',
    margin:15,
    marginBottom:0,
    marginTop:5,
    alignItems:'flex-end'
  },
  title:{
    fontSize:14,
    fontWeight:'600',
    color:'#333'
  },
  commons:{
    padding:15
  },
  buttons:{
    width:80,
    height:80,
    borderWidth:10,
    borderColor:'#e7e7e7',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40
  },
  description:{
    padding:15,
    borderTopWidth:1,
    borderColor:'#999',
    marginTop:10,
    marginBottom:10
  },
  buttonSmall:{
    width:50,
    height:50,
    borderWidth:10,
    borderColor:'#e7e7e7',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25
  },
   card: {
    flex: 1,
    alignItems: 'center',
    alignSelf:'center',
    borderWidth:2,
    borderColor:'#e3e3e3',
    width: 350,
    height: 420,
  }

});
