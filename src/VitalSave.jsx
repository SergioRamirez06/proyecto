import { Navigate, Route, Routes } from "react-router"
import { Admin } from "../src/layouts/Admin";
import React from 'react';

export const VitalSave = () => {
  return (
    <Routes>
        <Route path="/inicio/*" element={ <Admin /> }/>
        <Route path="/" element={ <Navigate to="inicio/vitalsave" replace/> }/>
    </Routes>
  )
}
