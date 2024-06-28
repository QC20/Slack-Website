# Slack Website

Welcome to the Slack-Website proof-of-concept! This project is a playful exploration of web animations and user experience design, inspired by the smooth, dynamic aesthetic of Slack's login page. 

## 🌟 Demo

![Slack-Website Demo](path-to-your-demo-gif-or-image)

## ✨ Features

- **Seamless Loading Screen**: A visually appealing loading screen that sets the stage for the main content.
- **Dynamic Particle Background**: Leveraging the power of `particles.js` to create a captivating animated background with vibrant colors and smooth interactions.
- **Responsive Design**: Ensuring a consistent and engaging experience across all devices.

## 🛠️ Technologies Used

- **HTML5**: The backbone of the project structure.
- **CSS3**: Styling that brings the project to life.
- **JavaScript**: The driving force behind the interactive elements.
- **[particles.js](https://github.com/VincentGarreau/particles.js/)**: The magic behind the particle animation.

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository**
    ```sh
    git clone https://github.com/your-username/slack-website.git
    ```
2. **Navigate to the project directory**
    ```sh
    cd slack-website
    ```
3. **Open `index.html` in your web browser**
    Just open the `index.html` file in your preferred web browser to see the project in action.

## 🎨 Customization

### Particle Configuration

Want to tweak the particles? You can easily customize the particle settings in the `particles-config.js` file. Change the number, color, size, and movement of particles to create your own unique effect. For detailed configuration options, refer to the [particles.js documentation](https://github.com/VincentGarreau/particles.js/#readme).

### Loading Screen

Adjust the duration and style of the loading screen by modifying the `particles-config.js` file and the CSS in `index.html`.

### Example Configuration

Here's a snippet of the particle configuration:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Show loader
    document.getElementById('loader').style.display = 'flex';

    // Hide loader and show main content after 3 seconds
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        
        // Initialize particles.js
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
                },
                shape: {
                    type: ["circle"],
                    stroke: {
                        width: 0,
                        color: "#fff"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 8,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 10,
                        size_min: 10,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#808080",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 5,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }, 3000); // 3000 milliseconds = 3 seconds
});
