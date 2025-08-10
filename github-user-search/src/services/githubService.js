import React, { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

const AdvancedSearch = () => {
  const [form, setForm] = useState({ username: "", location: "", minRepos: 0 });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await fetchAdvancedUsers(form);
      setUsers(results);
    } catch {
      setError("Error fetching advanced search results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Minimum Repositories"
          value={form.minRepos}
          onChange={handleChange}
          className="border p-2"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">
          Advanced Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.length > 0 && (
        <ul className="mt-4">
          {users.map((user) => (
            <li key={user.id} className="flex items-center gap-4 border-b py-2">
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500">
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdvancedSearch;
