import React, { useEffect, useRef } from "react";
import "./Main.css";
const Main = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;

      const playVideo = () => {
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Automatic playback started!
              // Show controls after some delay if needed
              setTimeout(() => {
                videoRef.current.controls = true;
              }, 5000); // Show controls after 5 seconds
            })
            .catch((error) => {
              // Auto-play was prevented, fallback to muted autoplay
              videoRef.current.muted = true;
              videoRef.current.play();

              // Enable sound on user interaction
              const handleUserInteraction = () => {
                videoRef.current.muted = false;
                videoRef.current.play();
                videoRef.current.controls = true;
                document.removeEventListener('click', handleUserInteraction);
                document.removeEventListener('touchstart', handleUserInteraction);
              };

              document.addEventListener('click', handleUserInteraction);
              document.addEventListener('touchstart', handleUserInteraction);
            });
        }
      };

      playVideo();

      const handleVisibilityChange = () => {
        if (!document.hidden) {
          videoRef.current.play();
          videoRef.current.controls = true;
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);


  return (
    <div className="content-main">
      <div className="main-principal">
        <section className="section-main-principal">
          <div className="tamaño-main-principal">
            <div className="texto-main-principal">
              <h1>
                <span>Confimaciones inteligentes con IA en tu Ecommerce</span>
              </h1>
              <blockquote>
                <p>
                  Estás a punto de transformar tu negocio con <strong>inteligencia artificial</strong> y volverlo <strong>escalable</strong>
                </p>
              </blockquote>
            </div>
            <div className="video-main-principal">
              <div className="video">
                <video
                  ref={videoRef}
                  src="https://storage.googleapis.com/bucket_chatby_app/TE-3199N.mp4"
                  autoPlay
                  loop
                  controls={false}
                  className="video-element"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="boton-main-principal">
              <div className="boton">
                <a href="https://www.instagram.com/joysonllapo/" className="boton-modal"  target="_blank">
                  <svg
                    viewBox="0 0 16 16"
                    focusable="false"
                    class="chakra-icon css-77o726"
                  >
                    <path
                      d="M9.66406 4.01562L11 3.5L11.4922 2.1875C11.5156 2.07031 11.6328 2 11.75 2C11.8438 2 11.9609 2.07031 11.9844 2.1875L12.5 3.5L13.8125 4.01562C13.9297 4.03906 14 4.15625 14 4.25C14 4.36719 13.9297 4.48438 13.8125 4.50781L12.5 5L11.9844 6.33594C11.9609 6.42969 11.8438 6.5 11.75 6.5C11.6328 6.5 11.5156 6.42969 11.4922 6.33594L11 5L9.66406 4.50781C9.54688 4.48438 9.5 4.36719 9.5 4.25C9.5 4.15625 9.54688 4.03906 9.66406 4.01562ZM6.125 3.73438C6.17188 3.59375 6.3125 3.5 6.45312 3.5C6.59375 3.5 6.73438 3.59375 6.80469 3.73438L8.02344 6.40625L10.6953 7.625C10.8359 7.69531 10.9297 7.83594 10.9297 7.97656C10.9297 8.11719 10.8359 8.25781 10.6953 8.32812L8.02344 9.54688L6.80469 12.2188C6.73438 12.3594 6.59375 12.4531 6.45312 12.4531C6.3125 12.4531 6.17188 12.3594 6.125 12.2188L4.88281 9.54688L2.21094 8.32812C2.07031 8.25781 2 8.11719 2 7.97656C2 7.83594 2.07031 7.69531 2.21094 7.625L4.88281 6.40625L6.125 3.73438ZM5.89062 6.875C5.79688 7.10938 5.58594 7.32031 5.35156 7.41406L4.15625 7.97656L5.35156 8.53906C5.58594 8.63281 5.79688 8.84375 5.89062 9.07812L6.45312 10.2734L7.01562 9.07812C7.10938 8.84375 7.32031 8.63281 7.55469 8.53906L8.75 7.97656L7.55469 7.41406C7.32031 7.32031 7.10938 7.10938 7.01562 6.875L6.45312 5.67969L5.89062 6.875ZM11.4922 9.6875C11.5156 9.57031 11.6328 9.5 11.75 9.5C11.8438 9.5 11.9609 9.57031 11.9844 9.6875L12.5 11L13.8125 11.5156C13.9297 11.5391 14 11.6562 14 11.75C14 11.8672 13.9297 11.9844 13.8125 12.0078L12.5 12.5L11.9844 13.8359C11.9609 13.9297 11.8438 14 11.75 14C11.6328 14 11.5156 13.9297 11.4922 13.8359L11 12.5L9.66406 12.0078C9.54688 11.9844 9.5 11.8672 9.5 11.75C9.5 11.6562 9.54688 11.5391 9.66406 11.5156L11 11L11.4922 9.6875Z"
                      fill="currentColor"
                    ></path>
                  </svg>{" "}
                  Unirme
                </a>
              </div>
            </div>
            <div className="redes-main-principal">
              <div className="content-iconos-redes">
                <a
                  class="social-icons__icon social-icons__icon--"
                  href=" https://www.instagram.com/joysonllapo/"
                  target="_blank"
                  rel="noopener"
                  kjb-settings-id="sections_1575400116835_blocks_1575400116835_3_settings_social_icon_link_instagram"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  class="social-icons__icon social-icons__icon--"
                  href="https://www.tiktok.com/@joysonllapo"
                  target="_blank"
                  rel="noopener"
                  kjb-settings-id="sections_1575400116835_blocks_1575400116835_3_settings_social_icon_link_youtube"
                >
                  <i class="fa-brands fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
