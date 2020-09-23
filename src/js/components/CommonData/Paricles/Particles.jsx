import style from "./Particles.module.css";
import Particles from "react-particles-js";
import React from "react";


const Particle = () => (<Particles
  params={{
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 500,
        },
      },
      color: {
        value: "#000000"
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size:
        {value: 2},
      line_linked: {
        enable: true,
        distance: 150,
        color: "#000",
      },
      move:
        {
          speed: 1
        }
    }
  }}
  //TODO: РАСТЯНУТЬ КАНВАС ПО ВЫСОТЕ!
  canvasClassName={style.backgroundPartickle}
  width={"100%%"}
  height={"93%"}/>)



export default Particle

