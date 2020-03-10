import React, { Component } from "react";
import { RoomContext, RoomConsumer } from "../context";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
