import FriendListItem from "./FriendListItem"; // Шлях до файлу FriendListItem
import css from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, ...friend }) => (
        <li className={css.list_item} key={id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
