import { Route, Routes } from "react-router"
import { Admin } from "../src/layouts/Admin";

export const VitalSave = () => {
  return (
    <Routes>
        <Route path="/inicio/*" element={ <Admin /> }/>
    </Routes>
  )
}
