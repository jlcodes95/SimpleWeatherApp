const express = require('express')
const got = require('got')
const moment = require('moment')
const redis = require('redis')
const app = express()
const port = process.env.port || 3000
const WEATHERAPIURL =
   'https://api.weatherapi.com/v1/current.json?key=12e4d25efc094e4587e03115210404&q='

const REQUEST_LIMIT_PER_MINUTE = 5
const REQUEST_TIME_LIMIT = 60

const client = redis.createClient()

app.get('/', (req, res, next) => {
   const city = req.query.city
   if (!client || !city) {
      next('Server Error')
   } else {
      const getDataAndSend = async (res, city) => {
         got(`${WEATHERAPIURL + city}`)
            .then((response) => {
               res.send(response.body)
            })
            .catch((err) => {
               next(err)
            })
      }

      client.get(req.ip, (err, rec) => {
         if (err) throw err
         const time = moment().unix()
         console.log(rec)

         if (!rec) {
            console.log('norecord')
            //new record
            client.set(
               req.ip,
               JSON.stringify({
                  count: REQUEST_LIMIT_PER_MINUTE,
                  refreshTime: time,
               })
            )
            getDataAndSend(res, city)
         } else {
            console.log('hasrecord')
            //old record
            let data = JSON.parse(rec)
            if (data.refreshTime + REQUEST_TIME_LIMIT <= time) {
               console.log('less')
               data.refreshTime = time
               data.count = REQUEST_LIMIT_PER_MINUTE - 1
               client.set(req.ip, JSON.stringify(data))
               getDataAndSend(res, city)
            } else if (data.count > 0) {
               console.log('more')
               data.count -= 1
               client.set(req.ip, JSON.stringify(data))
               getDataAndSend(res, city)
            } else {
               console.log('err')
               next('Maximum request reached, please wait.')
            }
         }
      })
   }
})

app.listen(port, () => {
   console.log(`Weather Server listening at http://localhost:${port}`)
})
