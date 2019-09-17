import React, { useState, useEffect } from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getFriends()
    }, []);

    const getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    };

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <div>
            <h1>Friends! IF YOU HAVE ANY LOL</h1>
            {friends.map(friend => (
                <p>{friend.name}</p>
            ))}
            <button onClick={logout}>Log Out</button>
        </div>
    );
}

export default FriendsList;