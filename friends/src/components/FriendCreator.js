import React, { useState } from 'react'
import { connect } from 'react-redux';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendCreator = ({ friends, history }) => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = evt => {
        setNewFriend({ ...newFriend, [evt.target.name]: evt.target.value })
    };

    const createFriend = evt => {
        evt.preventDefault();
        const newFriendToAdd = {
            ...newFriend,
            id: friends[friends.length - 1].id + 1,
            age: parseInt(newFriend.age),
        };
        axiosWithAuth()
            .post('/friends', newFriendToAdd);
        history.push('/friends');
    }

    console.log(friends);

    return (
        <div>
            <h1>Add a friend! (you're not fooling anyone though...)</h1>
            <form onSubmit={createFriend}>
                Name:
                <input
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={evt => handleChange(evt)} />
                Age:
                <input
                    type="number"
                    name="age"
                    value={newFriend.age}
                    onChange={evt => handleChange(evt)} />
                Email:
                <input
                    type="email"
                    name="email"
                    value={newFriend.email}
                    onChange={evt => handleChange(evt)} />
                <button>Submit</button>
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return {
      friends: state.friends,
    };
  };
  
  export default connect(
    mapStateToProps,
    { }
  )(FriendCreator);