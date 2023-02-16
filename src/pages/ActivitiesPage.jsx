import React from 'react'
import '../style.css'
import YoutubeEmbed from '../components/YoutubeEmbed'
import { useParams } from 'react-router-dom'

const ActivitiesPage = () => {
    // accepting params/props passed from activities component
    let { id } = useParams();
    
    return (
        <div>
            <h1 style={{marginTop: "5vh", marginBottom: "5vh", textAlign: "center" }}>{id.split("&").slice(0, -1).join(" ")}</h1>
            <YoutubeEmbed embedId={id.split("&").slice(-1)} />
        </div>
    )
}

export default ActivitiesPage