import React from 'react'
import { Link } from 'react-router-dom'

const Activities = () => {

    const activities = [{ activity: 'snorkling in maldieves', embedId: 'NckhIjC0p9U' }, { activity: 'Underwater Spa', embedId: 'DrwnqIuaFZs' }, { activity: 'Scuba Diving in Maldives', embedId: 'vA3hg4htmcA' }];
    return (
        <>
            <div style={{ width: "50vw", margin: "auto" }}>
                <h2>Activities</h2>
                <ul>
                    {
                        // passing props through link to using params id
                        activities.map((activity) => (
                            <Link to={{
                                pathname: `/activities/${activity.activity.split(" ").join("&") + "&" + activity.embedId}`
                            }}>
                                <li key={activity.embedId} >{activity.activity}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Activities