import { useState } from "react";
import styles from "./FriendsList.module.css";
import NavBar from "../NavBar/NavBar";

function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [addFriendText, setAddFriendText] = useState("");

  const handleAddFriendChange = (e) => {
    setAddFriendText(e.target.value);
  };

  const handleAddFriend = (friendToAdd) => {
    const updatedFriendsList = [...friends, friendToAdd];
    setFriends(updatedFriendsList);
  };

  const handleRemoveFriend = (event, friendId) => {
    event.preventDefault();
    const newFriendsList = friends.filter((friend) => friend.id !== friendId);
    setFriends(newFriendsList);
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <NavBar />
          <form onSubmit={handleAddFriend} className={styles.newFriendForm}>
            <input
              type="text"
              value={addFriendText}
              className={styles.addFriendText}
              onChange={handleAddFriendChange}
              placeholder="Add Friend"
            ></input>
            <button type="submit" className={styles.newFriend}>
              <div className={styles.button_plus}></div>
            </button>
          </form>
        </header>
        <div className={styles.friends}>
          {friends.map((friend) => {
            return (
              <div className={styles.friend} key={friend.id}>
                <h1 className="friendName">{friend.username}</h1>
                <button
                  className={styles.removeFriend}
                  onClick={(event) => handleRemoveFriend(event, friend.id)}
                ></button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FriendsList;
