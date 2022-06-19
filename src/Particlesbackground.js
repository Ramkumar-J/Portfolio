import React from 'react';
import Particles from "react-tsparticles";
import particlesConfig from './config/particles-config';

function Particlesbackground() {
  return (
    <Particles params={particlesConfig}></Particles>
  )
}

export default Particlesbackground;