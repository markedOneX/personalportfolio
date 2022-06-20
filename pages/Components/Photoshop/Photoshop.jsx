import {
  photoshop,
  titles,
  carouselStack,
  cardWide,
  cardPort,
  carousel,
} from "../../../styles/Main.module.scss";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BA } from "./BA";

function Photoshop() {
  return (
    <section className={photoshop}>
      <div>
        <h1 className={titles}>I'm pretty handy with Photoshop as well..</h1>
      </div>
      <div className={carouselStack}>
        <div className={cardWide}>
          <Carousel>
            {BA.filter((e) => e.type == "wide").map((image) => (
              <ReactCompareSlider
                id={image.id}
                itemOne={
                  <ReactCompareSliderImage src={image.before} loading="eager" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={image.after} loading="eager" />
                }
              />
            ))}
          </Carousel>
        </div>
        <div className={cardPort}>
          <Carousel className={carousel}>
            {BA.filter((e) => e.type == "portrait").map((image) => (
              <ReactCompareSlider
                id={image.id}
                itemOne={
                  <ReactCompareSliderImage src={image.before} loading="eager" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={image.after} loading="eager" />
                }
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Photoshop;
