document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');

  // Show loader
  loader.style.display = 'flex';

  // Hide loader and show main content after 6 seconds (2 times longer)
  setTimeout(function() {
      // Start fading out the loader
      loader.classList.add('fade-out');

      // After the loader fades out, hide it and start fading in the main content
      setTimeout(function() {
          loader.style.display = 'none';
          mainContent.style.display = 'block';

          // Start fading in the main content
          setTimeout(function() {
              mainContent.classList.add('fade-in');

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
          }, 50); // Short delay to ensure display change has taken effect
      }, 800); // 800 milliseconds for fade-out
  }, 6000); // 6000 milliseconds = 6 seconds
});