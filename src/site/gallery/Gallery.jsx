import { Timer } from "./timer/Timer"
import gallery1 from '../../assets/img/novios-4.jpg';
import gallery2 from '../../assets/img/novios-6.jpg';
import gallery3 from '../../assets/img/novios-8.jpg';
import gallery4 from '../../assets/img/novios-9.jpg';

export const Gallery = () => {
  return (
    <section className="gallery section-space">
      <div className="gallery__container main-container">
        <Timer />
        <div className="gallery__photos grid grid-4-cols">
          <figure className="gallery__photo">
            <img src={ gallery1 } alt="Novios photo 1" className="gallery__img" />
          </figure>
          <figure className="gallery__photo">
            <img src={ gallery3 } alt="Novios photo 3" className="gallery__img" />
          </figure>
          <figure className="gallery__photo">
            <img src={ gallery2 } alt="Novios photo 2" className="gallery__img" />
          </figure>
          <figure className="gallery__photo">
            <img src={ gallery4 } alt="Novios photo 4" className="gallery__img" />
          </figure>
        </div>
      </div>
    </section>
  )
}
