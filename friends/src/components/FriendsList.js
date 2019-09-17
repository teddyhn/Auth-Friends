import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getFriends } from '../actions';

const FriendsList = ({ friends, getFriends, history, isFetching }) => {
    const logout = () => {
        localStorage.clear();
        history.push('/login');
    };

    const toAddFriend = () => {
        history.push('/add-friend');
    };

    useEffect(() => {
        getFriends();
    }, [getFriends]);

    if (isFetching) {
        return <h3>Retrieving friends...</h3>;
    }

    console.log(friends);

    return (
        <div>
            <button onClick={toAddFriend}>ADD UR FRIEND :)</button>
            <h1>Friends! IF YOU HAVE ANY LOL</h1>
            {friends.map(friend => (
                <p>{friend.name}</p>
            ))}
            <button onClick={logout}>Log Out</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
      friends: state.friends,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getFriends }
  )(FriendsList);