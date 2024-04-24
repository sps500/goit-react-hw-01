import Profile from "./profile";
import userData from "../userData.json";

export default function App() {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <div>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
    </div>
  );
}
