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
  Picker
} from 'react-native';

var BACK = require('../Icons/back.png')
var FORW = require('../Icons/forward.png')
var BACKGROUND = require('../images/linear.jpg')


var {height, width} = Dimensions.get('window');

const PINK_COLOR = 'rgb(223, 153, 127)'
const TEAL_COLOR = 'rgb(52, 126, 127)'

const options = {
  genderOptions: ["male", "female", "non-binary"],
  year_options: ["1", "2", "3", "4", "4+"]
}

const signupSteps = 10

export default class MakeProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      email: "",
      confirmationcode: "",

      password: "",
      confirmpassword: "",

      firstname: "",
      gender: "",
      gender_pref: [],
      birthday: "",
      year: "",
      year_pref: [],
      bio: "",

      //ageRange: "",
      //pictures: []
    }
  }

  build_Payload() {
    return postData = {
      firstname: this.state.firstname,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      gender_pref: this.state.gender_pref,
      birthday: this.state.birthday,
      year: this.state.year,
      year_pref: this.state.year_pref,
      bio: this.state.bio,
    };

    //POST REQUEST TO BACK END
  }

  _handleBack() {
     if (this.state.step > 1)  {
       this.setState({step: (this.state.step - 1)})
     }
   }

  _handleNext() {
    //SEND CONFIRMATION TO EMAIL
    if (this.state.step === 2) {
      //// TODO:

      this.setState({step: this.state.step + 1});
    }
    //PASS CREDS TO AWS TO MAKE COGNITO USER
    else if (this.state.step === 4) {
      //// TODO:

      this.setState({step: this.state.step + 1});
    }
    //CONTINUE THROUGH FORM
    else if (this.state.step < (signupSteps - 1)) {
      this.setState({step: this.state.step + 1});
    }
    //Submit form to backend to set cognito fields
    else {
      var user_fields = this.build_Payload();

      //// TODO: 
      //React-navigator to point to swipe pages
    }
  }

  /**** PICKER EXAMPLE  ****
  updateUser = (user) => {
     this.setState({ user: user })
  }

  <View>
     <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
        <Picker.Item label = "Steve" value = "steve" />
        <Picker.Item label = "Ellen" value = "ellen" />
        <Picker.Item label = "Maria" value = "maria" />
     </Picker>
     <Text style = {styles.text}>{this.state.user}</Text>
  </View>
  **************************/

  render() {
    switch(this.state.step) {

      case 1:
        return <View style = {styles.workspace}>

            <Text style={styles.title}> Preferred First Name </Text>
            <TextInput
              style={styles.text}
              onChangeText={(firstname) => this.setState({firstname})}
              value={this.state.firstname}
              placeholder="Preferred Name"
            />

            <View style = {styles.row}>
              <TouchableOpacity onPress={() => this._handleBack()}>
                <Image source = {BACK} style = {styles.arrows} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this._handleNext()}>
                <Image source = {FORW} style = {styles.arrows} />
              </TouchableOpacity>
          </View>

        </View>;
      case 2:
        return <View style = {styles.workspace}>

          <Text style={styles.title}> University Email </Text>
          <TextInput
          style={styles.text}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            placeholder="University Email"
          />

          <View style = {styles.row}>
            <TouchableOpacity onPress={() => this._handleBack()}>
              <Image source = {BACK} style = {styles.arrows} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._handleNext()}>
              <Image source = {FORW} style = {styles.arrows} />
            </TouchableOpacity>
        </View>

      </View>;

      case 3:
        return <View style = {styles.workspace}>

          <Text style={styles.title}> Check your email for {'\n'} your confirmation code</Text>
          <TextInput
          style={styles.text}
            onChangeText={(confirmationcode) => this.setState({confirmationcode})}
            value={this.state.confirmationcode}
            placeholder="Confirmation Code"
          />

          <View style = {styles.row}>
            <TouchableOpacity onPress={() => this._handleBack()}>
              <Image source = {BACK} style = {styles.arrows} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._handleNext()}>
              <Image source = {FORW} style = {styles.arrows} />
            </TouchableOpacity>
        </View>

      </View>;

      case 4:
        return <View style = {styles.workspace}>

            <Text style={styles.title}>Set a Password</Text>

            <TextInput
              style={styles.text}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              placeholder="Password"
              secureTextEntry={true}
            />

            <TextInput
              style={{ height: 40,
                   borderColor: '#444',
                   borderRadius: 20,
                   borderWidth: 1,
                   margin: 30,
                   marginTop: 10,
                   padding: 10,
                   fontSize: 18,
                   fontWeight: '300',
                   color: '#555'
              }}
              onChangeText={(confirmpassword) => this.setState({confirmpassword})}
              value={this.state.confirmpassword}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />

            <View style = {styles.row}>
              <TouchableOpacity onPress={() => this._handleBack()}>
                <Image source = {BACK} style = {styles.arrows} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this._handleNext()}>
                <Image source = {FORW} style = {styles.arrows} />
              </TouchableOpacity>
          </View>

        </View>;

      case 5:
      return <View style = {styles.workspace}>

          <Text>GENDER</Text>

          <View style = {styles.row}>
            <TouchableOpacity onPress={() => this._handleBack()}>
              <Image source = {BACK} style = {styles.arrows} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._handleNext()}>
              <Image source = {FORW} style = {styles.arrows} />
            </TouchableOpacity>
          </View>

      </View>;

      case 6:
      return <View style = {styles.workspace}>

        <Text>GENDER PREF</Text>


          <View style = {styles.row}>
          <TouchableOpacity onPress={() => this._handleBack()}>
              <Image source = {BACK} style = {styles.arrows} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._handleNext()}>
              <Image source = {FORW} style = {styles.arrows} />
            </TouchableOpacity>
        </View>

      </View>;

      case 7:
      return <View style = {styles.workspace}>

          <Text>BIRTHDAY</Text>


          <View style = {styles.row}>
          <TouchableOpacity onPress={() => this._handleBack()}>
              <Image source = {BACK} style = {styles.arrows} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._handleNext()}>
              <Image source = {FORW} style = {styles.arrows} />
            </TouchableOpacity>
        </View>

      </View>;

      case 8:
      return <View style = {styles.workspace}>

      <Text>YEAR</Text>


          <View style = {styles.row}>
          <TouchableOpacity onPress={() => this._handleBack()}>
              <Image source = {BACK} style = {styles.arrows} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._handleNext()}>
              <Image source = {FORW} style = {styles.arrows} />
            </TouchableOpacity>
        </View>

      </View>;

      case 9:
      return <View style = {styles.workspace}>

      <Text>YEAR PREF</Text>


          <View style = {styles.row}>
          <TouchableOpacity onPress={() => this._handleBack()}>
              <Image source = {BACK} style = {styles.arrows} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._handleNext()}>
              <Image source = {FORW} style = {styles.arrows} />
            </TouchableOpacity>
        </View>

      </View>;

      case 10:
      return <View style = {styles.workspace}>

      <Text>BIO ??</Text>


          <View style = {styles.row}>
          <TouchableOpacity onPress={() => this._handleBack()}>
              <Image source = {BACK} style = {styles.arrows} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleNext()}>
              <Image source = {FORW} style = {styles.arrows} />
          </TouchableOpacity>
          </View>
      </View>;
    }
  }
}


const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: PINK_COLOR,
   },
   workspace: {
     flex: 1,
     width: width - 16,
     //height: height ,
     borderRadius: 20,
     backgroundColor: 'rgba(255,255,255,.6)',
     alignItems: 'center',
     justifyContent: 'center'
   },
   row: {
     flexDirection:'row',
     margin:15,
     marginBottom:20,
     marginTop:5,
     alignItems:'center',
   },
   background: {
     width: width,
     height: height,
     position: 'absolute',
     marginTop: 0
   },
   arrows: {
     width: 64,
     height: 64,
     margin: 30,
     padding: 10
   },
   title: {
     fontSize:26,
     fontWeight:'300',
     color:'#555',
     marginTop: 30
   },
   text: {
     height: 40,
     borderColor: '#444',
     borderRadius: 20,
     borderWidth: 1,
     margin: 30,
     padding: 10,
     fontSize: 18,
     fontWeight: '300',
     color: '#555'
   }
});
