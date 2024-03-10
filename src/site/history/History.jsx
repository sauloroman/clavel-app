import paperHistory from '../../assets/img/paper-history.png';

export const History = () => {
  return (
    <section className="history" style={{ backgroundImage: `url(${paperHistory})`}}>
      <div className="history__container main-container flex flex-column-center">
        <p className="history__text">"Nuestra historia comenzó con una mirada, se mantuvo con amor y durará para siempre con paciencia. Con la bendición de Dios y la felicidad de nuestros amigos y familiares."</p>
        <h2 className="heading-section">Nos casamos</h2>
        <p className="history__date text-underline">27 / Jul / 2024</p>
      </div>
    </section>
  )
}
