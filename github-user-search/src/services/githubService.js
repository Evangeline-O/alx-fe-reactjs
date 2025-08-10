import axios from "axios";


export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchAdvancedUsers = async ({ username = "", location = "", minRepos = 0 }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos > 0) query += `repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`);
    return response.data.items; // The Search API returns an 'items' array
  } catch (error) {
    throw error;
  }
};
