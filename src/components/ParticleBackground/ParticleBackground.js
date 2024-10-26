import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./ParticleConfig";

export default function ParticleBackground() {
    console.log("ParticleBackground is rendering!"); // ✅ Confirm this log appears
    return (
        <Particles
            id="tsparticles"
            options={ParticleConfig}
            style={{
                position: 'absolute',
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                top: 0,
                left: 0,
            }}
        />
    );
}