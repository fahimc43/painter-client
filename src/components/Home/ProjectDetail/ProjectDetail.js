import React from 'react';
import './ProjectDetail.css';

const ProjectDetail = (props) => {
    const {name, img} = props.project;
    return (
        <div className="grid">
            <img src={img} alt="" className="image"/>
            <div ClassName="title">
                <h6 style={{ color: "#4C4B7D", fontWeight: "700" }} className="text-center">{name}</h6>
            </div>
        </div>
    );
};

export default ProjectDetail;