import { Route, Routes } from "react-router-dom"
import { InvitationApp } from "./site/InvitationApp"

export const ClavelApp = () => {
  return (
    <Routes>
      <Route path='/' element={ <InvitationApp /> } />
    </Routes>
  )
}
