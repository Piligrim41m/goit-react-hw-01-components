import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics"
import { FriendList } from "./friendList/FriendList"
import {TransactionHistory} from "./transactionHistory/TransactionHistory"
import user from "../data/user.json"
import data from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        // color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title="Upload stat"
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        transactions={transactions}
      />
    </div>
  );
};
