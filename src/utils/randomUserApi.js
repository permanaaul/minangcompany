// utils/randomUserApi.js
import axios from 'axios';

export async function fetchRandomUsers(count = 5) {
  try {
    const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching random users:', error);
    return [];
  }
}
