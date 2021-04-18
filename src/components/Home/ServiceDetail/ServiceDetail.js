import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceDetail = ({service}) => {
    const { title, price, brief, imageUrl, _id } = service
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <animated.div class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}>
            <Link to={`/dashboard/book/${_id}`} style={{ textDecoration: 'none', color: "black" }}>
                <Card style={{ width: '18rem', backgroundColor: "#F7F7F7", borderRadius: "0.5rem" }} className="card shadow text-center">
                    <Card.Img style={{ height: "250px" }} variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <h5 className="text-danger">$ {price}</h5>
                            <small>{brief}</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </animated.div>
    );
};

export default ServiceDetail;