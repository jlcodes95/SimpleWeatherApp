import * as axios from 'axios'

export default axios.create({
  //default server location
  // baseURL: 'http://localhost:3000',
  //connecting via wifi - change IP address to server
  baseURL: 'http://192.168.68.115:3000',
})
