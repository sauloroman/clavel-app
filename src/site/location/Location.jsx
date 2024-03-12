import paperLocation from '../../assets/img/novios-2.jpg';

export const Location = () => {
  return (
    <main className="location" style={{ backgroundImage: `url(${ paperLocation })`}}>
      <div className="location__container main-container">
        <h2 className="heading-section">Location</h2>
      </div>
      <div className="location__layout"></div>
    </main>
  )
}
