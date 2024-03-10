import { useEffect } from "react";
import { useState } from "react";

export const Timer = () => {

  const [targetDate, setTargetDate] = useState( Math.ceil((new Date('07/27/2024 20:00').getTime() - new Date()) * 0.001) );
  const [timeData, setTimeData] = useState({
    days:     0,
    hours:    0,
    minutes:  0,
    seconds:  0
  })

  useEffect( () => {
    setInterval( () => setTargetDate( Math.ceil((new Date('07/27/2024 20:00').getTime() - new Date()) * 0.001) ), 1000)
  }, []);

  useEffect( () => {
    let temp = 0

    let days = ( targetDate / 86400).toString().split('.');
    temp = Number((`.` + days[1]).slice(0, 6)).toFixed(6);
    days = days[0];

    let hours = (temp * 24).toString().split('.');
    temp = Number((`.` + hours[1]).slice(0, 6)).toFixed(6);
    hours = hours[0];

    let minutes = (temp * 60).toString().split('.');
    temp = Number((`.` + minutes[1]).slice(0, 6)).toFixed(6);
    minutes = minutes[0];

    let seconds = (temp * 60).toString().split('.');
    seconds = seconds[0];

    setTimeData({
      days,
      hours,
      minutes,
      seconds
    });
  }, [targetDate]);

  return (
    <section className="timer">
      <div className="timer__container text-center">
        <h2 className="heading-section">Save the date</h2>
        <p className="timer__text">Queremos que seas parte de este importante momento en nuestras vidas. Eres alguien especial para nosotros.</p>

        <div className="timer__grid flex flex-center">
          <div className="timer__element">
            <p className="timer__number">{timeData.days <= 9 ? `0${timeData.days}`: timeData.days}:</p>
            <p className="timer__concept">Días</p>
          </div>
          <div className="timer__element">
            <p className="timer__number">{timeData.hours <= 9 ? `0${timeData.hours}`: timeData.hours}: </p>
            <p className="timer__concept">Hrs</p>
          </div>
          <div className="timer__element">
            <p className="timer__number">{timeData.minutes <= 9 ? `0${timeData.minutes}`: timeData.minutes}: </p>
            <p className="timer__concept">Min</p>
          </div>
          <div className="timer__element">
            <p className="timer__number">{timeData.seconds <= 9 ? `0${timeData.seconds}`: timeData.seconds}</p>
            <p className="timer__concept">Seg</p>
          </div>
        </div>

      </div>
    </section>
  )
}
