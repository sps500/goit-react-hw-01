import css from "./FriendList.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="70%" />
      <p>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
