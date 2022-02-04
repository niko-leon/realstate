import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '6d20df2c23mshf176f5993f9a3a6p1f0eebjsna5fc7cd98aa0'
    }
  })
  return data
}