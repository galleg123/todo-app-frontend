import { useState } from "react"
import styles from "FriendsList.module.css"

function FriendsList() {

    const [friends, setFriends] = useState([]);
    const [addFriendText, setAddFriendText] = useState("");
    const [burgerState, setBurgerState] = useState(false);

    const handleAddFriendChange = (e) =>{
        setAddFriendText(e.target.value);
    }

    const handleAddFriend = (friendToAdd) => {
        const updatedFriendsList = [...friends, friendToAdd];
        setFriends(updatedFriendsList);
    }

    const handleRemoveFriend = (friendToRemove) => {
        const newFriendsList = friends.filter((friend) => friend !== friendToRemove);
        setFriends(newFriendsList);
    }

    
    const burgerToggle = () => {
        setBurgerState(!burgerState);
    };



    return <> 
             <div className={styles.container}>
                <header className={styles.todoHeader}>
                    <div
                        className={`${styles.burgerMenu} ${burgerState ? styles.burgerChange : ""}`}
                        onClick={burgerToggle}
                    >
                        <div className={styles.bar1}></div>
                        <div className={styles.bar2}></div>
                        <div className={styles.bar3}></div>
                    </div>
                    <form onSubmit={handleAddFriend} className={styles.newTodoForm}>
                        <input
                            type="text"
                            value={addFriendText}
                            className={styles.addFriendText}
                            onChange={handleAddFriendChange}
                            placeholder="Add Friend"
                        ></input>
                        <button type="submit" className={styles.NewTodo}><div className={styles.button_plus}></div></button>
                    </form>
                    
                </header>
            </div>           
        </>
}

export default FriendsList;
