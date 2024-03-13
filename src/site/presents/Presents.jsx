import mesaPaper from '../../assets/img/mesa-paper.png';
import regaloImage from '../../assets/img/regalo.png';

export const Presents = () => {
  return (
    <section className="presents section-space flex flex-column-center text-center" style={{ backgroundImage: `url(${mesaPaper})`}}>
      <div className="presents__container main-container">

        <header className="presents__header flex flex-column-center">
          <div className="presents__line"></div>
          <figure className="presents__icon flex flex-center">
            <img src={ regaloImage } alt="Regalo" className="presents__icon-img" />
          </figure>
          <h2 className="heading-section presents__title">Detalles</h2>
          <p className="presents__text">No son necesarios los regalos. Pero si gustas tener un detalle te dejamos las opciones que tenemos.</p>
        </header>

        <div className="presents__grid grid grid-3-cols">
          <div className="presents__category flex flex-column-center">
            <h3 className="presents__category-title text-important text-underline">Mesa de regalos</h3>
            <p className="presents__category-name">Liverpool</p>
            <p className="presents__category-text">Visita nuestra mesa de regalos para poder obsequiar algo. Agradecemos tu intención.</p>
            <a className='presents__category-button' href="#">Ir a Mesa</a>
          </div>
          <div className="presents__category">
            <h3 className="presents__category-title text-important text-underline">Datos Bancarios</h3>
            <p className="presents__category-name">Santander</p>
            <p className="presents__category-account">Titular: <span>Saulo Román Santillán Nava</span></p>
            <p className="presents__category-account">Número de cuenta: <span>123456789</span></p>
            <p className="presents__category-account">CLABE: 123456789101112</p>
          </div>
          <div className="presents__category">
            <h3 className="presents__category-title text-important text-underline">Lluvia</h3>
            <p className="presents__category-name">Sobres</p>
            <p className="presents__text">Es la tradición de regalar dinero en efectivo en un sobre a los novios el día del evento. Cualquier cantidad se agradece.</p>
          </div>
        </div>


      </div>
    </section>
  )
}
