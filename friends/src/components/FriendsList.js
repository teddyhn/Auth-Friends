import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getFriends } from '../actions';

import FriendCard from './FriendCard';
import CardDeck from 'react-bootstrap/CardDeck';
import Spinner from 'react-bootstrap/Spinner';

const FriendsList = ({ friends, getFriends, isFetching }) => {
    
    useEffect(() => {
        getFriends();
    }, [getFriends]);

    if (isFetching) {
        return (
            <div className="friends-list">
                <h1>Friends! IF YOU HAVE ANY LOL</h1>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div className="friends-list">
            <h1>Friends! IF YOU HAVE ANY LOL</h1>
            <CardDeck>
                {friends.map(friend => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </CardDeck>
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