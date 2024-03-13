import templeImage from '../../assets/img/templo-image.jpg';
import gardenImage from '../../assets/img/salon-image.jpg';
import cruzImage from '../../assets/img/cruz.png';
import copaImage from '../../assets/img/copa.png';
import flor1 from '../../assets/img/flor-1.png';

export const Location = () => {
  return (
    <main className="location section-space">
    
      <div className="location__container">
        <header className="location__header main-container flex flex-column-center">
          <h2 className="heading-section">Te esperamos</h2>
          <p className="location__text">No importa el lugar, lo que importan son las personas. Los estaremos esperando en estas ubicaciones. Por favor se puntual.</p>
          <p className='text-important text-underline'>Ubicaciones</p>
        </header>
        <section className="location__grid">
          <div className="location__content flex flex-column-center">
            <div className="location__iconBox">
              <img src={ cruzImage } alt="Cruz" className="location__img" />
            </div>
            <h3 className='location__type'>Ceremonia</h3>
            <p className="location__information">Parroquia del Sagrado Corazón de Jesús</p>
            <p className="location__address">5 de Mayo 602, Zona Centro, 20000 Aguascalientes, Ags.</p>
            <p className="location__hour text-important">19:00</p>
            <a className='location__button' href="https://maps.app.goo.gl/fNAe3g82yUVQu3Vw5">Ver Mapa</a>
          </div>
          <figure className="location__figure">
            <img className='location__img' src={ templeImage } alt="Templo" />
            <div className="location__figure-layout"></div>
          </figure>
          <div className="location__empty"></div>
          <div className="location__empty"></div>
          <figure className="location__figure">
            <img className='location__img' src={ gardenImage } alt="Templo" />
            <div className="location__figure-layout"></div>
          </figure>
          <div className="location__content flex flex-column-center">
            <div className="location__iconBox">
              <img src={ copaImage } alt="Cruz" className="location__img" />
            </div>
            <h3 className='location__type'>Recepción</h3>
            <p className="location__information">Salon Terraza Jardin El Herradero</p>
            <p className="location__address">20326 Aguascalientes, Ags.</p>
            <p className="location__hour text-important">20:00</p>
            <a className='location__button' href="https://maps.app.goo.gl/fNAe3g82yUVQu3Vw5">Ver Mapa</a>
          </div>
        </section>
      </div>

    </main>
  )
}
