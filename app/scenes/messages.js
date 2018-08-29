/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ListView,
  View,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

var image1 = require('../images/image1.jpeg')
var image2 = require('../images/image2.jpeg')
var image3 = require('../images/image3.jpeg')
var image4 = require('../images/image4.jpeg')
var image5 = require('../images/image5.jpeg')

var source = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Messages extends Component {
  constructor(props){
    super(props)

    //GET FROM POST REQUEST
    var convos = [{
      "id": 1,
      "name": "Convo 1",
      "message": "This is a placeholder for the first conversation",
      "image" : image1
    }, {
      "id": 2,
      "name": "Convo 2",
      "message": "This is a placeholder for the second conversation",
      "image" : image2
    }, {
      "id": 3,
      "name": "Convo 3",
      "message": "This is a placeholder for the third conversation",
      "image" : image3
    }, {
      "id": 4,
      "name": "Convo 4",
      "message": "This is a placeholder for the fourth conversation",
      "image" : image4
    }, {
      "id": 5,
      "name": "Convo 5",
      "message": "This is a placeholder for the fifth conversation",
      "image" : image5
    }]

    var newMatches = [{
      "id": 1,
      "first_name": "Match 1",
      "image" : image1
    }, {
      "id": 2,
      "first_name": "Match 2",
      "image" : image2
    }, {
      "id": 3,
      "first_name": "Match 3",
      "image" : image3
    }, {
      "id": 4,
      "first_name": "Match 4",
      "image" : image4
    }, {
      "id": 5,
      "first_name": "Match 5",
      "image" : image5

    }]

    this.state = {
      matchData: source.cloneWithRows(newMatches),
      convoData: source.cloneWithRows(convos),
    }

  }

  getMatch(x){
    return(
      <TouchableOpacity style={{alignItems:'center'}}>
        <Image source = {x.image} style={{width:70, height:70, borderRadius:35, margin:10}} />
        <Text style={{fontWeight:'600', color:'#444'}}>{x.first_name}</Text>
      </TouchableOpacity>
    )
  }

  getConvo(x){
    return(
            <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5, borderBottomWidth:1, borderColor:'white'}}>
                <Image source = {x.image} style={{width:70, height:70, borderRadius:35, margin:10}} />
                <View>
                    <Text style={{fontWeight:'600', color:'#111'}}>{x.name}</Text>
                    <Text numberOfLines = {1} style={{fontWeight:'400', color:'#888', width:width- 150}}> {x.message} </Text>
                </View>
            </TouchableOpacity>
          )
    }


  render() {
    return (
      <ScrollView style = {{flex:1, maxHeight: (height - 70), marginTop: -27}}>
          <ScrollView style={styles.container}>

              <View style={styles.comp}>
                  <Text style = {styles.displayText}>
                      MATCHES
                  </Text>

                  <ListView
                      horizontal={true}
                      showsHorizontalScrollIndicator = {false}
                      dataSource={this.state.matchData}
                      pageSize = {5}
                      renderRow={(rowData) => this.getMatch(rowData)}
                  />
              </View>

              <View style = {styles.comp}>
                  <Text style = {styles.displayText}>
                      MESSAGES
                  </Text>

                  <ListView
                      horizontal={false}
                      scrollEnabled = {false}
                      dataSource={this.state.convoData}
                      pageSize = {5}
                      renderRow={(rowData) => this.getConvo(rowData)}
                  />
              </View>
          </ScrollView>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  displayText: {
    color:'black',
    fontWeight:'200',
    fontSize:18,
    marginLeft: 20
  },
  comp: {
    paddingTop:15,
    paddingBottom:15,
    backgroundColor: 'rgba(255, 255, 255, .7)',
    borderRadius: 20,
    marginBottom: 10
  }
});
