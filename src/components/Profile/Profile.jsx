import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={css.container}>
      <div className={css.div_img}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.texthi}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.listStyle}>
        <li className={css.list}>
          <span>Followers</span>
          <span className={css.texthi}>{followers}</span>
        </li>
        <li className={css.list}>
          <span>Views</span>
          <span className={css.texthi}>{views}</span>
        </li>
        <li className={css.list}>
          <span>Likes</span>
          <span className={css.texthi}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
