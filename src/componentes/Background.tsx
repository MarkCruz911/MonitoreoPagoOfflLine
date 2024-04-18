import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Background = () => {

    const options = useMemo(() => {
        return {
            background: {
                color: "#0F0839"
            },
            fullScreen: {
                enable: true,
                zIndex: 0
            },
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
                },
                modes: {
                    push: {
                        quantity: 5,
                    },
                    repulse: {
                        distance: 200,
                    },
                },
            },
            particles: {
                number: {
                    value: 60, // Cantidad de partículas
                    density: {
                        enable: true,
                        value_area: 800 // Densidad de partículas
                    }
                },
                shape: {
                    type: "image",
                    image: {
                        src: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
                        width: 400, // Ancho de la imagen
                        height: 400 // Alto de la imagen
                    }
                },
                size: {
                    value: 20 // Tamaño de las partículas
                },
                links: {
                    enable: true,
                    color: "#ffffff", // Color de las líneas de conexión entre partículas
                    distance: 200 // Distancia máxima de la línea
                },
                move: {
                    enable: true,
                    speed: { min: 1, max: 5 },
                },
                opacity: {
                    value: { min: 0.6, max: 0.9 }
                },
                color: {
                    value: "#ffffff" // Color de las partículas
                }
            }
        };
    }, []);

    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
        />
    );

}
export default Background;