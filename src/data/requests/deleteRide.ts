import axios from 'axios'

const deleteRide = async (id: string) => {
  try {
    await axios.delete(`http://localhost:3000/bikingData/${id}`).then((res) => {
      console.log(res)
    })

  } catch (error) {
    console.log('Error - ', error)
  }
}

export default deleteRide
