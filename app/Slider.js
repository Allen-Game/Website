import { Carousel } from 'react-bootstrap';
import styles from '../public/css/Slider.module.css';
import Silder_effect from './Silder_effect.jsx';

const Slider = () => {
    return (
        <div className={styles.sliderContainer}>
            <Carousel className={`${styles.carousel} ${styles.banner}`}>
                <Carousel.Item className={styles.banner_image}>
                    <img
                        className="d-block w-100"
                        src="https://tr.rbxcdn.com/e6225053b83a3364292aa14b5adbd0ea/420/420/Image/Png"
                        alt="Every Second +1 ki in DBZ"
                    />
                    <div>Every Second +1 ki in DBZ</div>
                </Carousel.Item>
                <Carousel.Item className={styles.banner_image}>
                    <img
                        className="d-block w-100"
                        src="https://tr.rbxcdn.com/091981dd1705a8a13bc9134c93483635/420/420/Image/Png"
                        alt="Clicker Fighting Simulator"
                    />
                    <div>Clicker Fighting Simulator</div>
                </Carousel.Item>
                <Carousel.Item className={styles.banner_image}>
                    <img
                        className="d-block w-100"
                        src="https://tr.rbxcdn.com/ca116716b6d59182792e5ea76d8eac6f/420/420/Image/Png"
                        alt="Naruto But Every Second +1 Chakra"
                    />
                    <div>Naruto But Every Second +1 Chakra</div>
                </Carousel.Item>
            </Carousel>

            <Silder_effect /> {/* Add the Silder_effect component */}
        </div>
    );
};

export default Slider;