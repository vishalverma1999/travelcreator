import React from 'react'

const Caraousel = () => {
    const caraouselImgs = ['https://www.shutterstock.com/image-photo/aerial-view-maldives-island-luxury-260nw-1907145007.jpg', 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__480.jpg', 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/velifushi-home-carousel-stay-00-900x550.jpg']
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {caraouselImgs.map((caraouselImg) => (
                        <div className="carousel-item active">
                            <img key={caraouselImg} src={caraouselImg} className="d-block w-100" alt="carousel-trip-images" style={{ height: "45vh" }} />
                        </div>
                    ))}
                    {/* <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div> */}
                    {/* <div className="carousel-item">
                        <img src="https://www.shutterstock.com/image-photo/aerial-view-maldives-island-luxury-260nw-1907145007.jpg" className="d-block w-100" alt="caraousel-trip-images" style={{height: "45vh"}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.shutterstock.com/image-photo/aerial-view-maldives-island-luxury-260nw-1907145007.jpg" className="d-block w-100" alt="caraousel-trip-images" style={{height: "45vh"}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Caraousel