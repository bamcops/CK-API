
import React from 'react'
import { Card , Button } from 'react-bootstrap'

 const UserCard = ({el}) => {
  return (
    <div style={{margin:"5%"}}><Card style={{ width: '10rem' }}>

    <Card.Body>
      <Card.Title>{el.name}</Card.Title>
      <Card.Text>
        {el.username}
      </Card.Text>
      <Card.Text>
        {el.email}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card></div> 
  )
}

export default UserCard