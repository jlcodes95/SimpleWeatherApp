import React, {useEffect} from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'
import CitiesList from '../components/CitiesList'

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CitiesList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default MainScreen
