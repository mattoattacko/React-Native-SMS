import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Constants, SMS } from 'expo';

export default class App extends React.Component {

  onPress = async () => {
    if (await SMS.isAvailableAsync()) {
      alert("SMS is Available!")
    }
    const status = await SMS.sendSMSAsync(
      '18082277864', /*'12065038598'*/ '18082772819', 
      'This is my SMS test message'
    );
    console.log(status);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button 
          onPress={this.onPress} 
          title="Press to Begin Message" 
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
