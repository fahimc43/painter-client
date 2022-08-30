import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceDetail = ({ service }) => {
  const { title, price, brief, imageUrl, _id } = service;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <Link
      to={`/dashboard/book/${_id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Card
        style={{
          width: "18rem",
          height: "25rem",
          backgroundColor: "#F7F7F7",
          borderRadius: "0.5rem",
          padding: "10px",
        }}
        className="card shadow text-center"
      >
        <animated.div
          class="card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <Card.Img style={{ width: "100%" }} variant="top" src={imageUrl} />
        </animated.div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <h5 className="text-danger">$ {price}</h5>
            <small>{brief}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ServiceDetail;
