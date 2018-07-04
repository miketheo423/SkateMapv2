import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, createUser } from '../../actions';
import { Actions } from 'react-native-router-flux';

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const birthdayIcon = require("./signup_birthday.png");

class SignupScreen extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  // onUsernameChange(text) {
  //   this.props.usernameChanged(text);
  // }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.createUser({ email, password });
  }

  renderButton() {
    if(this.props.loading) {
      return <ActivityIndicator />
    }

    return (
    <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
      <View style={styles.signup}>
        <Text style={styles.buttonText}>Join</Text>
      </View>
    </TouchableOpacity>
    );
  }

  renderError() {
    if(this.props.error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{this.props.error}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover"
        >
          <View style={styles.headerContainer}>

            {/* <View style={styles.headerIconView}>
              <TouchableOpacity onPress={() => console.log('did a thing!')} style={styles.headerBackButtonView}>
                <Image 
                  source={backIcon} 
                  style={styles.backButtonIcon} 
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View> */}

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>Sign Up</Text>
            </View>

          </View>

          <View style={styles.inputsContainer}>
          
 
            {/* <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Username"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
                onChangeText={this.onUsernameChange.bind(this)}
                value={this.props.username}
              />
            </View> */}

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={emailIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Email"
                placeholderTextColor="#FFF" 
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={lockIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                secureTextEntry={true}
                style={[styles.input, styles.whiteFont]}
                placeholder="Password"
                placeholderTextColor="#FFF" 
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </View>

            {/* <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={birthdayIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Birthday"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent' 
              />
            </View> */}

          </View>

          <View style={styles.footerContainer}>

            {/* <TouchableOpacity>
              <View style={styles.signup}>
                <Text style={styles.buttonText}>Join</Text>
              </View>
            </TouchableOpacity> */}
            {this.renderError()}
            {this.renderButton()}

            <TouchableOpacity onPress={() => Actions.pop()}>
              <View style={styles.signin}>
                <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth;

  return { email, password, error, loading }
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  // usernameChanged,
  createUser,
})(SignupScreen);

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputsContainer: {
    flex: 3,
    marginTop: 80,
  },
  footerContainer: {
    flex: 2
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
    marginLeft: 20,
    marginRight: 20,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  errorText: {
    fontSize: 14,
    color: 'red'
  },
  signup: {
    backgroundColor: '#00B2EE',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff'
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})
