import { Navigation } from './navigation/Navigation';
import coupleHero from '../../assets/img/novios-1.jpg'
import logoCouple from '../../assets/img/logo-matrimonio.png';
import anilloImage from '../../assets/img/anillo.png';

export const Hero = () => {
  return (
    <>
      <div className="hero__top flex flex-between main-container">
        <figure className="hero__top-figure">
          <img className='hero__top-img' src={ logoCouple } alt="Logo Couple" />
        </figure>
        <Navigation />
      </div>
      <section className="hero" style={{ backgroundImage: `url(${coupleHero})`}}>
        <div className="hero__container flex flex-column-center">
          <h1 className="heading-primary">Claudia & Mario</h1>
          <p className="hero__text">Nuestra Boda</p>
          <figure className="hero__figure">
            <img className='hero__img' src={ anilloImage } alt="Anillo image" />
          </figure>
        </div>
        <div className="hero__layout"></div>
      </section>
    
    </>
  )
}
