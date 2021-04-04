import React, {useEffect} from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'
import CityItem from './CityItem'
import {useNavigation} from '@react-navigation/native'
import {useSelector, useDispatch} from 'react-redux'
import {loadCities} from '../redux/actions'

const CitiesList = () => {
  const navigation = useNavigation()
  const cities = useSelector(state => {
    console.log('SELECTOR: ', state)
    return state.city.cities
  })
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('dispatching...')
    dispatch(loadCities())
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        renderItem={i => <CityItem item={i.item} nav={navigation} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    margin: 20,
  },
})

export default CitiesList
