import PropTypes from "prop-types"
import "./FriendList.css"
export function FriendListItem({isOnline, avatar, name }) {
    return (<li className="friend-list__item">
  <span className={isOnline ? "status__true status" : "status__false status"}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
</li>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};