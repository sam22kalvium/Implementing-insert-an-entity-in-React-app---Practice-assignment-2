import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovie.css';

const AddMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Movie Added:', movie);
    alert('Movie added successfully!'); 
    navigate('/'); // Redirect to Dashboard after submission
  };

  return (
    <div className="add-movie-container">
      <div className="add-movie">
        <h2>Add a New Movie</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={movie.title} onChange={handleChange} required />

          <label>Director:</label>
          <input type="text" name="director" value={movie.director} onChange={handleChange} required />

          <label>Genre:</label>
          <select name="genre" value={movie.genre} onChange={handleChange} required>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>

          <label>Release Year:</label>
          <input type="number" name="releaseYear" value={movie.releaseYear} onChange={handleChange} required />

          <label>Synopsis:</label>
          <textarea name="synopsis" value={movie.synopsis} onChange={handleChange} required />

          <label>Poster Image URL:</label>
          <input type="url" name="posterUrl" value={movie.posterUrl} onChange={handleChange} required />

          <div className="button-group">
            <button type="submit" className="submit-button">Add Movie</button>
            <button type="button" className="cancel-button" onClick={() => navigate('/')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
