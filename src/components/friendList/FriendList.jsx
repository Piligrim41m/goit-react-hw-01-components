import PropTypes from "prop-types"
import css from "./FriendList.module.css"
import {FriendListItem} from "./FriendListItem"

export function FriendList({ friends }) {
    return (
        <ul>
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