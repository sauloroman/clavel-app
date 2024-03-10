export const Timer = () => {
  return (
    <section className="timer">
      <div className="timer__container text-center">
        <h2 className="heading-section">Save the date</h2>
        <p className="timer__text">Queremos que seas parte de este importante momento en nuestras vidas. Eres alguien especial para nosotros.</p>

        <div className="timer__grid flex flex-center">
          <div className="timer__element">
            <p className="timer__number">120:</p>
            <p className="timer__concept">Días</p>
          </div>
          <div className="timer__element">
            <p className="timer__number">10: </p>
            <p className="timer__concept">Hrs</p>
          </div>
          <div className="timer__element">
            <p className="timer__number">20: </p>
            <p className="timer__concept">Min</p>
          </div>
          <div className="timer__element">
            <p className="timer__number">59 </p>
            <p className="timer__concept">Seg</p>
          </div>
        </div>

      </div>
    </section>
  )
}
