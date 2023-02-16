import React, { useEffect, useState } from 'react'
import axios from "axios";


const TripDetails = () => {

    const [hotelDesc, setHotelDesc] = useState("");
    const [hotelImg, setHotelImg] = useState([]);
   
    let dataArrays = [];
    let url_prefix = "";
    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://apidojo-booking-v1.p.rapidapi.com/properties/list',
    //         params: {
    //             offset: '0',
    //             arrival_date: '2023-02-16',
    //             departure_date: '2023-02-17',
    //             guest_qty: '1',
    //             dest_ids: '-3712125',
    //             room_qty: '1',
    //             search_type: 'city',
    //             children_qty: '2',
    //             children_age: '5,7',
    //             search_id: 'none',
    //             price_filter_currencycode: 'USD',
    //             order_by: 'popularity',
    //             languagecode: 'en-us',
    //             travel_purpose: 'leisure'
    //         },
    //         headers: {
    //             'X-RapidAPI-Key': '4204410126msh03e76ee6e93ad89p147f49jsn962ceeedadda',
    //             'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
    //         }
    //     };

    //     axios.request(options).then(function (response) {
    //         console.log(response.data.review_score_word);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }, [])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://apidojo-booking-v1.p.rapidapi.com/properties/get-description',
            params: {
                hotel_ids: '2343234',
                check_out: '2019-03-15',
                languagecode: 'en-us',
                check_in: '2019-03-13'
            },
            headers: {
                'X-RapidAPI-Key': 'a7566592c1mshff0e35ec36469c4p192a4fjsne98a6f5b867d',
                'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data[0].description);
            setHotelDesc(response.data[0].description);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://apidojo-booking-v1.p.rapidapi.com/properties/get-hotel-photos',
            params: { hotel_ids: '2343234', languagecode: 'en-us' },
            headers: {
                'X-RapidAPI-Key': 'a7566592c1mshff0e35ec36469c4p192a4fjsne98a6f5b867d',
                'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            // console.log(response.data.url_prefix);
            dataArrays = response.data.data[2343234];
            url_prefix = response.data.url_prefix;
            dArrays(dataArrays);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])


    function dArrays(dataArrays) {
        console.log(dataArrays, "line 102");
        dataArrays.map((dataArray) => (
            setHotelImg(hotelImg => [...hotelImg, url_prefix.concat(dataArray[4])])
            // console.log(url_prefix.concat(dataArray[4]))
        ))
    }

    return (
        <>
            <div style={{ width: "50vw", margin: "auto", marginBottom: "8%", marginTop: "4%" }}>
                <h2>Maldieves Trip</h2>
                <p>Trip to maldieves. Maldives, officially the Republic of Maldives, is an archipelagic state in South Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India, about 750 kilometres from the Asian continent's mainland.
                    <br />
                    I stayed in hotel Merry Land Hotel Da Nang. {hotelDesc}
                </p>

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={{ marginBottom: "4%" }}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        {
                            hotelImg && hotelImg.slice(0, 5).map((caraouselImg) => (
                                <div className="carousel-item active">
                                    <img src={caraouselImg} className="d-block w-100" alt="..." style={{ height: "45vh" }} />
                                </div>
                            ))
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <hr style={{ border: "1px solid grey", width: "50vw", margin: "auto" }} />
            </div>
        </>
    )
}

export default TripDetails

