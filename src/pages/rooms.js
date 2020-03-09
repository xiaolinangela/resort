import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="our rooms">
        <Link to="/home" className="btn btn-primary">
          back to home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
