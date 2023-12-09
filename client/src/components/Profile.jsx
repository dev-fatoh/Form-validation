import { useState } from 'react';
import { user } from "./Home.jsx"

const Profile = () => {
  const [pro, setPro] = useState(user);

  return (
    <div>
      <p>{pro}</p>
    </div>
  )
}

export default Profile;
