import React from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native';

export default class Intro extends React.Component {

  startedApp() {

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Texpeech</Text>
        <Text>텍스피치</Text>
        <Text>텍스트와 음성으로 상황에 맞게 소통하세요</Text>
        <View style={styles.test} />
        <View style={{ backgroundColor: '#fff', padding: 100, height: 30 }} />
        <Button
          onPress={this.startedApp}
          title="시작하기"
          color="#424242"
          accessibilityLabel="Learn more about this purple button"
        />
        <View style={styles.container2}>
          <TouchableOpacity>
            <Text style={styles.btnTest}>
              시작하기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    padding: 20,
  },
  test: {
    backgroundColor: '#fff',
    padding: 100,
    height: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 36,
  },
  container2: {
    alignItems: 'center',
  },
  btnTest: {
    borderWidth: 1,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16,
    color: '#fff',
    borderColor: 'black',
    borderRadius: 4,
    backgroundColor: '#424242',
  },
});
