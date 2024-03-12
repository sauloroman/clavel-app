import dressImage from '../../assets/img/dress.png';
import paperFlowers from '../../assets/img/paper-flowers.png';

export const Dress = () => {
  return (
    <section className="dress section-space" style={{ backgroundImage: `url(${paperFlowers})`}}>
      <div className="dress__container main-container flex flex-column-center">
        <figure className="dress__figure">
          <img src={ dressImage } alt="Dress image" className="dress__img" />
        </figure>
        <h2 className="heading-section dress__title">Código de vestimenta</h2>
        <p className="dress__shape text-important text-underline">Formal</p>
        <p className="dress__text">El color blanco está reservado para la novia</p>
      </div>
    </section>
  )
}
