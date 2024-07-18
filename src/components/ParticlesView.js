/* eslint-disable no-unused-vars */
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { loadFountainPreset } from "tsparticles-preset-fountain";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import "./ParticlesView.css";
const commonOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    //   links: {
    //     color: "#ffffff",
    //     distance: 150,
    //     enable: true,
    //     opacity: 0.5,
    //     width: 1,
    //   },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
const commonStyles = {
  width: "100% !important",
  height: "100% !important",
  position: "absolute",
  zIndex: "0 !important",
  top: "auto !important",
  left: "auto !important",
  pointerEvents: "none",
};
const Fire = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFirePreset(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = {
    preset: "fire",
    ...commonOptions,
  };

  return (
    <Particles
      id={"tsparticles_fire" + Math.random() * 1500}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      style={commonStyles}
      canvasClassName="tsCanvas"
    />
  );
};
const Bubbles = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadBubblesPreset(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
    let containers = document.getElementsByTagName("canvas");
    console.log(containers);
    Array.from(containers).forEach((item) => {
      console.log(item);
      let ctx = item.getContext("2d");
      item.style =
        "width: 100% !important; height: 100% !important; position: abosulte !important; pointer-events: none; z-index: 99 !important; top: 0px !important; left: 0px !important;";
      console.log("ljk", item.style);
    });
  };
  const options = {
    preset: "bubbles",
    ...commonOptions,
  };

  return (
    <Particles
      id={"tsparticles_bubbles" + Math.random() * 1500}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      style={commonStyles}
      canvasClassName="tsCanvas"
    />
  );
};
const Confetti = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadConfettiPreset(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = {
    preset: "confetti",
    ...commonOptions,
  };

  return (
    <Particles
      id={"tsparticles_confetti" + Math.random() * 1500}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      style={commonStyles}
      canvasClassName="tsCanvas"
    />
  );
};
const FireWorks = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFireworksPreset(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = {
    preset: "fireworks",
    ...commonOptions,
  };

  return (
    <Particles
      id={"tsparticles_fireworks" + Math.random() * 1500}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      style={commonStyles}
      canvasClassName="tsCanvas"
    />
  );
};
const Fountain = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFountainPreset(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = {
    preset: "fountain",
    ...commonOptions,
  };

  return (
    <Particles
      id={"tsparticles_fountain" + Math.random() * 1500}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      style={commonStyles}
      canvasClassName="tsCanvas"
    />
  );
};
const Triangles = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadTrianglesPreset(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = {
    preset: "triangles",
    ...commonOptions,
  };

  return (
    <Particles
      id={"tsparticles_triangles" + Math.random() * 1500}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      style={commonStyles}
      canvasClassName="tsCanvas"
    />
  );
};

const ParticlesView = ({ type = "triangles" }) => {
  const Elemtentals = {
    fire: <Fire />,
    confetti: <Confetti />,
    triangles: <Triangles />,
    fountain: <Fountain />,
    fireworks: <FireWorks />,
    bubbles: <Bubbles />,
  };
  return Elemtentals[type.toString().toLowerCase()];
};

export default ParticlesView;
