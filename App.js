import React from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native';
import Intro from './Views/Intro/Intro.js';
import { Scene, Router } from 'react-native-router-flux';

export default class App extends React.Component {

  startedApp() {

  }

  render() {
    return (
      <Intro />
    )
  }
};
