import React from "react";
import { Element } from "react-scroll";
import exterior from "../../../images/exteriorPainting.jpg";
import interior from "../../../images/interiorPainting.jpg";
import wall from "../../../images/wallPainting2.jpg";
import furniture from "../../../images/furniturePainting.jpg";
import wood from "../../../images/woodPainting.jpg";
import spray from "../../../images/sprayPainting.jpg";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

const projectData = [
  {
    name: "Exterior Painting",
    img: exterior,
  },
  {
    name: "Interior Painting",
    img: interior,
  },
  {
    name: "Wall Painting",
    img: wall,
  },
  {
    name: "Furniture Painting",
    img: furniture,
  },
  {
    name: "Wood Painting",
    img: wood,
  },
  {
    name: "Spray Painting",
    img: spray,
  },
];
const Project = () => {
  return (
    <>
      <section
        id="project_section"
        className="container"
        style={{ padding: "80px" }}
      >
        <div className="text-center">
          <h5 id="project" style={{ color: "#BB2D3B" }}>
            Project
          </h5>
          <h2 style={{ color: "#4C4B7D", fontWeight: "700" }}>
            Take A Look <br /> Our Latest Project
          </h2>
        </div>
        <div className="mt-3" style={{ columns: 3, columnGap: "10px" }}>
          {projectData.map((project) => (
            <ProjectDetail project={project}></ProjectDetail>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
