import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  TextInput,
} from 'react-native';

var {height, width} = Dimensions.get('window');

const PINK_COLOR = 'rgb(223, 153, 127)'
const TEAL_COLOR = 'rgb(52, 126, 127)'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

    //POST REQUEST TO BACK END

  _handleSubmit = () => {
    var schoolemail = false;
    var parsed = this.state.email.split("@")

    if (parsed[parsed.length - 1] === "school.edu") {
      schoolemail = true;
    }
    else {
      schoolemail = false;
    }

    const postData = {
      email: this.state.email,
      password: this.state.password,
      academicEmail: schoolemail
    };


  }

  render() {
      return <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style = {styles.workspace}>
                <TextInput
                  style={styles.textBox}
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                  placeholder="Email"
                />
            </View>

            <View style = {styles.workspace}>
                <TextInput
                style={styles.textBox}
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  placeholder="Password"
                  secureTextEntry={true}
                />
            </View>


            <View style = {{borderRadius: 30, borderWidth: 1, padding: 10, borderColor: 'transparent', marginTop: 20, backgroundColor: 'rgba(255,255,255,.6)', marginTop: 20}}>
              <TouchableOpacity onPress={() => this._handleSubmit()}>
                  <Text style={styles.text}> Login </Text>
              </TouchableOpacity>
          </View>

        </View>

  }
}


const styles = StyleSheet.create({
  container: {
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: PINK_COLOR,
   },
   workspace: {
     width: width - 16,
     borderRadius: 30,
     backgroundColor: 'rgba(255,255,255,.6)',
     alignItems: 'center',
     justifyContent: 'center',
     marginBottom: 20,
     marginLeft: 50,
     marginRight: 50,
   },
   text: {
     fontWeight: '200',
     fontSize: 25,
     color: '#444'
   },
   textBox: {
     borderColor: '#444',
     borderRadius: 20,
     borderWidth: 1,
     padding: 10,
     paddingLeft: 20,
     fontSize: 27,
     fontWeight: '100',
     color: '#555',
     borderColor: 'transparent',
     height: 40
   }
});
