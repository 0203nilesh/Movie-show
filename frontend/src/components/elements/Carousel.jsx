import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Carousel() {
  const [carouselData, setCarouselData] = useState([]);
  useEffect(() => {
    axios.get("/carouselData").then((response) => {
      // console.log(response);
      // sectionData= response.data;
      setCarouselData(response.data);
      // console.log(sectionData);
    });
  }, []);
  console.log(carouselData);
  return (
    <>
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade w-75 m-auto"
        data-mdb-ride="carousel"
        data-interval="2000" data-ride="carousel"
      >
        <div className="carousel-indicators">
          {carouselData.map((carousel, index) => {
            if (index === 0) {
              return (
                <>
                  <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                </>
              );
            } else {
              return (
                <>
                  <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to={index}
                    aria-label={"Slide " + index + 1}
                  ></button>
                </>
              );
            }
          })}
        </div>

        <div className="carousel-inner">
          {carouselData.map((carousel, index) => {
            return (
              <>
                <div
                  className={
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }
                >
                  <img
                    src={carousel.src}
                    className="d-block w-100"
                    alt="Sunset Over the City"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5> {carousel.title} </h5>
                    <p> {carousel.detail} </p>
                  </div>
                </div>
              </>
            );
          })}

          {/* <div className="carousel-item active">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
              className="d-block w-100"
              alt="Sunset Over the City"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
              className="d-block w-100"
              alt="Canyon at Nigh"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fourth slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div> */}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
