import { useState, useEffect } from 'react';


const UserSettings = () => {
  const userId = 1; // Ersätt med det faktiska användar-ID

  // Tillstånd för användaruppgifter
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Hämta användaruppgifter som finns
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await fetch(`/api/editprofile/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setName(data.user.name);
      setPassword(data.user.password);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`/api/editprofile/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        alert('Profilen har uppdaterats!');
      } else {
        const errorData = await response.json();
        console.error('Error saving user profile:', errorData.message);
      }
    } catch (error) {
      console.error('Error saving user profile:', error);
    }
  };

  return (
      <div>
        <h2>Användarinställningar</h2>
        <label htmlFor="name">Nytt namn:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ color: 'black', backgroundColor: 'white' }}
        />
        <br />
        <label htmlFor="password">Nytt lösenord:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ color: 'black', backgroundColor: 'white' }}
        />
        <br />
        <button onClick={handleSaveChanges}>Spara ändringar</button>
      </div>
    );
};

export default UserSettings;
