import coupleHero from '../../assets/gifs/video-desktop.gif'

export const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${coupleHero})`}}>
      <div className="hero__container flex flex-column-center">
        <h1 className="heading-primary">Claudia & Mario</h1>
        <p className="hero__text">Nuestra Boda</p>
      </div>
      <div className="hero__layout"></div>
    </section>
  )
}
