import React, { useEffect, useState } from 'react'
import axios from "axios";

const OptionalFeatures = () => {

    const [features, setFeatures] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://apidojo-booking-v1.p.rapidapi.com/properties/get-rooms',
            params: {
                departure_date: '2023-02-17',
                rec_guest_qty: '2,2',
                hotel_id: '1720410',
                arrival_date: '2023-02-16',
                search_id: 'a56cd696f11676498319520bbca6fbd2237:1:121',
                rec_children_age: '5,7',
                recommend_for: '3',
                travel_purpose: 'leisure',
                languagecode: 'en-us',
                rec_children_qty: '1,1'
            },
            headers: {
                'X-RapidAPI-Key': 'a7566592c1mshff0e35ec36469c4p192a4fjsne98a6f5b867d',
                'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data[0].top_ufi_benefits);
            // response.data[0].top_ufi_benefits.map((benefits)=>)
            setFeatures(response.data[0].top_ufi_benefits);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <>
            <div style={{ width: "50vw", margin: "auto", marginBottom: "8%", marginTop: "4%" }}>
                <h2>Optional Features</h2>
                <ul>
                    {features.map((feature) => (
                        <li>{feature.translated_name}</li>
                    ))}
                </ul>
                <hr style={{ border: "1px solid grey", width: "50vw", margin: "auto" }} />
            </div>
        </>
    )
}

export default OptionalFeatures