import PropTypes from "prop-types"
import "./Profile.css"
export function Profile({ username, tag, location, avatar, followers, views, likes}) {
    return <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
      width={100}
      height={100}
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li className="item">
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li className="item">
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li className="item">
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })),
};