import React, { useState } from 'react'
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendCreator = ({ history }) => {
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
            age: parseInt(newFriend.age),
        };
        axiosWithAuth()
            .post('/friends', newFriendToAdd);
        history.push('/friends');
    }

    return (
        <div className="add-friend">
            <h1>Add a friend! (you're not fooling anyone though...)</h1>
            <Form className="react-bootstrap-form" onSubmit={createFriend}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text"
                        name="name"
                        value={newFriend.name}
                        onChange={evt => handleChange(evt)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control 
                        type="number"
                        name="age"
                        value={newFriend.age}
                        onChange={evt => handleChange(evt)} 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email"
                        name="email"
                        value={newFriend.email}
                        onChange={evt => handleChange(evt)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
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