import React, {useEffect} from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'

const CityItem = ({item, nav}) => {
  const onPressHandler = item => {
    console.log('pressed item: ', item)
    nav.push('Details', item)
  }
  useEffect(() => {
    console.log('item is: ', item)
  }, [item])

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressHandler(item)}>
      <Text style={styles.text}>{item.city}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#cecece',
  },
  text: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default CityItem
