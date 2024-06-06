import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [viewMode, setViewMode] = useState('view');
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    bio: '',
    education: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setViewMode('view');
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-options">
        <button onClick={() => setViewMode('view')}>View Profile</button>
        <button onClick={() => setViewMode('update')}>Update Profile</button>
      </div>
      {viewMode === 'view' ? (
        <div className="profile-view">
          <h3>Your Profile</h3>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
          <p><strong>Education:</strong> {profile.education}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
        </div>
      ) : (
        <div className="profile-update">
          <h3>Update Your Profile</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={profile.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>Education</label>
              <input
                type="text"
                name="education"
                value={profile.education}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;
