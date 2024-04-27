import Profile from "./Profile/Profile";
import userData from "../userData.json";
import FriendList from "./FriendList/FriendList";
import friendsData from "../friends.json";
import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <>
      <div>
        <Profile
          name={username}
          tag={tag}
          location={location}
          image={avatar}
          stats={stats}
        />
        <>
          <FriendList friends={friendsData} />
          <TransactionHistory transactions={transactions} />
        </>
      </div>
    </>
  );
}
