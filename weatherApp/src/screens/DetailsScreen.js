import React, {useEffect} from 'react'
import {SafeAreaView, View, StyleSheet, Text, Image} from 'react-native'
import api from '../api/api'

const DetailsScreen = ({navigation, route}) => {
  const [detail, setDetail] = React.useState(null)
  const [weatherInfo, setWeatherInfo] = React.useState(null)
  const [error, setError] = React.useState(null)

  const getWeatherInfo = () => {
    api
      .get(`?city=${detail.city}`)
      .then(res => {
        setWeatherInfo(res.data)
      })
      .catch(err => {
        console.log(err)
        console.log(weatherInfo)
        setError(err)
      })
  }

  useEffect(() => {
    setDetail(route.params)
  }, [route.params])

  React.useLayoutEffect(() => {
    if (detail) {
      navigation.setOptions({
        title: detail.city,
      })
      console.log(detail)
      getWeatherInfo()
    }
  }, [detail])
  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <Text>
          You have reached your request limit, please try again later.
        </Text>
      ) : weatherInfo ? (
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{uri: `https:${weatherInfo.current.condition.icon}`}}
          />
          <Text>{`${weatherInfo.current.temp_c}°C`}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
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
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
})

export default DetailsScreen
