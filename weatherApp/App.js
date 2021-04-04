/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import MainStackNavigator from './src/navigators/MainStackNavigator'
import {Provider} from 'react-redux'
import configureStore from './src/redux/configureStore'

const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </Provider>
    )
    // return (
    //   <View>
    //     <TouchableOpacity
    //       style={{width: '100%', padding: 20, backgroundColor: 'blue'}}
    //       onPress={() => console.log('pressed...')}>
    //       <Text>Click Me</Text>
    //     </TouchableOpacity>
    //     <Button title="hello" onPress={() => console.log('clicked')} />
    //   </View>
    // )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
