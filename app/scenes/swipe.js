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
  View,
  Dimensions
} from 'react-native';

import SwipeCards from '../SwipeCards/SwipeCards.js';
import Modal from "react-native-modal";

var USER = require("../Icons/user.png")
var BOOK = require("../Icons/book.png")
var DIST = require("../Icons/distance.png")
var ARROW = require("../Icons/arrow.png")

var {height, width} = Dimensions.get('window');

var image1 = require('../images/image1.jpeg')
var image2 = require('../images/image2.jpeg')
var image3 = require('../images/image3.jpeg')
var image4 = require('../images/image4.jpeg')
var image5 = require('../images/image5.jpeg')


const TEAL_COLOR = "#347e7f"
const PINK_COLOR = "#e2af9c"

export default class SwipePage extends Component {
  constructor(props){
    super(props)

    //Get in post request
    var Profiles = [{
      "firstname": "Name",
      "bio": "This is a super cool bio placeholder that will for sure result in plenty of matches on this cool new hip dating app",
      "images": [image1, image2, image3, image4, image5],
      "school": "University Name",
      "major": "Major",
      "year": "2nd",
      "age": 19,
      "organizations": "Frats, Clubs, etc",
      "distance": 6
    }]

    this.state = {
      cards: Profiles,
      imageNum: 0,
      isModalVisible: false
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

  Card(x){
    return (
      <View style={styles.card}>

        <View style={{flexDirection:'row', margin:15, marginTop:25, marginBottom: 10, justifyContent: 'space-between'}} >
          <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
            <Text style={{fontSize:30, fontWeight:'700', color:'#444'}}>{x.firstname} </Text>
            <Text style={{fontSize:24, fontWeight:'400', color:'#999'}}>{x.age}</Text>
          </View>


          <View style = {{alignSelf: 'flex-end'}}>
            <TouchableOpacity onPress={this._toggleModal}>
              <Image source = {USER} style = {{width: 36, height: 36}} />
            </TouchableOpacity>

            <Modal isVisible={this.state.isModalVisible}>
            <TouchableOpacity onPress={this._toggleModal}>

              <View style={styles.modalcontainer}>
              <View style={{flexDirection:'row', margin:15, marginTop:25, marginBottom: 10, justifyContent: 'space-between'}} >

                <View style={{alignSelf: 'flex-start', justifyContent: 'flex-start'}}>
                  <Image source = {x.images[0]} style = {{width: 90, height: 90, borderRadius: 45}} />
                </View>

                <View style = {{alignSelf: 'flex-end'}}>
                <View style={{alignSelf: 'flex-start', flexDirection:'row'}}>
                  <Text style={{fontSize:28, fontWeight:'800', color:TEAL_COLOR}}> {x.firstname} </Text>
                  <Text style={{fontSize:26, fontWeight:'500', color:'#888'}}> {x.age} </Text>
                </View>
                <Text style={{fontSize:20, fontWeight:'500', color:'#444'}}> {x.school} </Text>
                <Text style={{fontSize:18, fontWeight:'400', color:'#444'}}> {x.major} </Text>
                </View>
              </View>

              <View style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 15}}>
                <View style = {{borderTopColor: '#a9a9a9', borderTopWidth:1, marginLeft: 10, marginRight: 10}}>
                  <Text style = {{paddingTop: 5, paddingBottom: 5, fontSize:  16, color: '#222'}}> {x.bio} </Text>
                </View>
                <View style = {{borderTopColor: '#a9a9a9', borderTopWidth:1, marginLeft: 10, marginRight: 10}}>
                  <Text style = {{paddingTop: 5, paddingBottom: 5, fontSize:  16, color: '#222'}}> {x.organizations} </Text>
                </View>
              </View>
              </View>

              </TouchableOpacity>
            </Modal>

          </View>

        </View>


        <TouchableOpacity activeOpacity = {.8} onPress = {() => this.imageChange(x.images.length)}>
          <View style = {{alignSelf: 'center', justifyContent: 'center'}}>
            <Image source ={x.images[this.state.imageNum]} style ={styles.image} />
          </View>
          <View style={{position: "absolute", marginLeft: width - 50, borderRadius: 20, padding: 5, backgroundColor: 'rgba(255, 255, 255, .5)'}}>
          <Text style={{fontSize: 16, fontWeight:'200', color :'#555'}}>
                  {(1 + this.state.imageNum) + "/" + x.images.length}
          </Text>
          </View>
        </TouchableOpacity>



        <View style={{width:350, height: 70, flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between'}}>

            <View style={{margin:15, marginTop:15, justifyContent: 'center'}} >
                <Text style = {{fontSize:18, fontWeight:'400', color:'#555', justifyContent: 'flex-start'}}>
                    {x.school}
                </Text>
                <Text style = {{fontSize:16, fontWeight:'200', color:'#555', justifyContent: 'flex-end'}}>
                    {x.major}
                </Text>
            </View>

            <View style={{flexDirection:'row', justifyContent: 'center'}}>
                <View style={{padding:13, alignItems:'center', justifyContent:'space-between'}}>
                    <Image source = {DIST} style = {{width: 20, height: 20}} />
                    <Text style = {{fontSize:16, fontWeight:'200', color:'#555'}}>{x.distance}</Text>
                </View>

                <View style={{padding:13, alignItems:'center', justifyContent: 'center'}}>
                    <Image source = {BOOK} style = {{width: 20, height: 20}} />
                    <Text style = {{fontSize:16, fontWeight:'200', color:'#555'}}>{x.year}</Text>
                </View>
            </View>

        </View>

      </View>
    )
  }

  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }

  //In reality, just do another API call to get more matches
  noMore(){
    return (
      <View style={styles.card} >
        <Text>No More Cards</Text>
      </View>
    )
  }

  yup(){
    console.log(this.refs['swiper'])
    this.refs['swiper']._goToNextCard()
  }

  nope(){
    console.log(this.refs['swiper'])
    this.refs['swiper']._goToNextCard()
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        ref = {'swiper'}
        containerStyle = {{  backgroundColor: 'transparent', alignItems:'center', margin:20}}
        renderCard={(cardData) => this.Card(cardData)}
        renderNoMoreCards={() => this.noMore()}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
}
}
//onPress = {() => this.renderNope()}

const styles = StyleSheet.create({
  modalcontainer: {
    margin: 10,
    backgroundColor: 'rgba(255, 255, 255, .85)',
    borderRadius: 30,
    marginTop: 70,
    marginBottom: 70
  },
  card: {
    flex: 1,
    alignSelf:'center',
    borderRadius:20,
    backgroundColor: 'rgba(255, 255, 255, .7)',
    width: width - 10,
  },
  image: {
    width: width - 16,
    height: width - 16,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center'
  }

});
