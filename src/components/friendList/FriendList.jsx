import PropTypes from "prop-types"
import "./FriendList.css"
import {FriendListItem} from "./FriendListItem"

export function FriendList({ friends }) {
    return (
        <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem
                key={id}
                isOnline={isOnline}
                avatar={avatar}
                name={name}
            />
        ))}
</ul>)
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
    })),
};