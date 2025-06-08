import { useState } from "react";

export function Profile() {
  const [userProfile, setUserProfile] = useState({
    name: '',
    age: ''
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setUserProfile((previousProfile) => ({
      ...previousProfile,
      [name]: value
    }));
  }

  return (
    <div>
      <h1>User Profile</h1>

      <div>
        <label>Name:
          <input type="text" name="name" value={userProfile.name} onChange={handleChange} />
        </label>

        <br />

        <label>Age:
          <input type="text" name="age" value={userProfile.age} onChange={handleChange} />
        </label>
      </div>

      <h1>Profile Information</h1>
      <p>Name: {userProfile.name}</p>
      <p>Age: {userProfile.age}</p>
    </div>
  )
}