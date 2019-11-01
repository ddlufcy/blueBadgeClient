import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';


const TrailEdit = (props) => {
    const [editName, setEditName] = useState(props.trailToUpdate.name);
    const [editDistance, setEditDistance] = useState(props.trailToUpdate.distance);
    const [editLocation, setEditLocation] = useState(props.trailToUpdate.location);
    const [editDifficulty, setEditDifficulty] = useState(props.trailToUpdate.difficulty);
    // Put
    const trailUpdate = (event, trail) => {
        event.preventDefault();
        fetch(`http://localhost:3001/userTrails/${props.trailToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({name: editName, distance: editDistance, location: editLocation, difficulty: editDifficulty}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.fetchTrails();
            props.updateOff();
        })
    }

    return(
       <Modal isOpen={true}>
           <ModalHeader>Make a trail</ModalHeader>
           <ModalBody>
               <Form onSubmit={trailUpdate}>
                   <FormGroup>
                       <Label htmlFor="name">Edit Name</Label>
                       <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor="distance">Edit Distance</Label>
                       <Input name="distance" value={editDistance} onChange={(e) => setEditDistance(e.target.value)} />
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor="location">Edit Location</Label>
                       <Input name="location" value={editLocation} onChange={(e) => setEditLocation(e.target.value)} />
                   </FormGroup>
                   <FormGroup>
                        <Label htmlFor="difficulty">Edit Difficulty</Label>
                        <Input name="difficulty" value={editDifficulty} onChange={(e) => setEditDifficulty(e.target.value)} />
                   </FormGroup>
                   <Button type="submit">Update Trail</Button>
               </Form>
           </ModalBody>
       </Modal>
    )

}

export default TrailEdit;