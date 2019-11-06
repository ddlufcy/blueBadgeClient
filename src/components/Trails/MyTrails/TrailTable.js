import React from 'react';
import {Table, Button} from 'reactstrap';
import '../TrailStyles/TrailTable.css'
import APIURL from '../../../helpers/environment';

const TrailTable = (props) => {
    const deleteTrail = (trail) => {
        fetch(`${APIURL}/userTrails/${trail.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchTrails())
    }
    const trailMapper = () => {
        return props.trails.map((trail, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{trail.id}</th>
                    <td>{trail.name}</td>
                    <td>{trail.distance}</td>
                    <td>{trail.location}</td>
                    <td>{trail.difficulty}</td>
                    <td>
                        <Button id="updateButton" color="info" onClick={() =>{props.editUpdateTrail(trail); props.updateOn()}}>Update</Button>
                        <Button id="deleteButton" color="danger" onClick={() => {deleteTrail(trail)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <div className="trailTables">
        <h3>Trails</h3>
        <hr />
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Distance</th>
                    <th>Location</th>
                    <th>Difficulty</th>
                    
                </tr>
            </thead>
            <tbody>
                {trailMapper()}
            </tbody>
        </Table>
        </div>
    )
}

export default TrailTable;