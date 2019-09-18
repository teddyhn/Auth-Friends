import React from 'react';
import Card from 'react-bootstrap/Card';

const FriendCard = ({ friend }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{friend.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Age: {friend.age}</Card.Subtitle>
                <Card.Text>{friend.email}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FriendCard;