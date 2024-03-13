import { Dress } from "./dress/Dress"
import { Timer } from "./timer/Timer"
import { Hero } from "./hero/Hero"
import { History } from "./history/History"
import { Location } from "./location/Location"
import { Presents } from "./presents/Presents"

export const InvitationApp = () => {
  return (
    <>
      <Hero />
      <History />
      <Timer />
      <Dress />
      <Location />
      <Presents />
    </>
  )
}
