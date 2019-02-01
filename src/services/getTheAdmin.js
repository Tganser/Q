import axios from 'axios';

export default async function getTheAdmin() {
  try {
    let response = await axios.get('/admin')
   return response
 } catch (error) {
   console.error(error)
 }
}
