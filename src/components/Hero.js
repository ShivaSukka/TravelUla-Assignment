import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero text-center text-white">
      <Carousel className="hero-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1554990772-0bea55d510d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Maasai Mara at Sunset"
          />
          <Carousel.Caption>
            <h1 className="display-4 fw-bold">Big Cats Week at Maasai Mara</h1>
            <p className="lead">Experience the wild like never before during Diwali 2023!</p>
            <a href="#itinerary" className="btn btn-warning btn-lg mt-3">Explore More</a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1623951581058-58138db08519?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cheetah with Cubs"
          />
          <Carousel.Caption>
            <h1 className="display-4 fw-bold">Witness the Big 5 in Action</h1>
            <p className="lead">Enjoy thrilling safari drives with expert guides.</p>
            <a href="#itinerary" className="btn btn-warning btn-lg mt-3">Discover More</a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mara River Crossing"
          />
          <Carousel.Caption>
            <h1 className="display-4 fw-bold">The Great Migration</h1>
            <p className="lead">Watch thousands of wildebeest cross the Mara River.</p>
            <a href="#itinerary" className="btn btn-warning btn-lg mt-3">Plan Your Journey</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Hero;
