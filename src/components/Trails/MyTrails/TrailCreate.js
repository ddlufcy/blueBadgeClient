import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import '../TrailStyles/TrailCreate.css'
import APIURL from '../../../helpers/environment'

const TrailCreate = (props) => {
    const [name, setName] = useState('');
    const [distance, setDistance] = useState('');
    const [location, setLocation] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/userTrails/addTrail`, {
            method: "POST",
            body: JSON.stringify({name: name, distance: distance, location: location, difficulty: difficulty}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => console.log(res))
        .then((logData) => {
            console.log(logData);
            setName('');
            setDistance('');
            setLocation('');
            setDifficulty('');
            props.fetchTrails();
        })
        .catch(err => console.log(err))
    }
    return(
        <>
            <h3>Make a trail</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="description" />
                    <Input name="name" value={name} onChange={(e) => setName(e.target.value)}  placeholder="name"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="distance" />
                    <Input type="text" name="distance" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="distance"/>               
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="location" />
                    <Input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="location"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="difficulty" />
                    <Input type="text" name="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} placeholder="difficulty (B, BI, I, IA)" />
                </FormGroup>
                <Button type="submit" color="success" >Click to Submit</Button>
            </Form>
        </>
    )
}

export default TrailCreate;