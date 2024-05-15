import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { UserMagang, Dashboard, UserAdmin } from '../../pages/pages'
import WithNavbar from './withNavbar'
import WithoutNavbar from './withoutNavbar'

const Path = () => {
  return (
    <Router>
        <Routes>

          <Route element={<WithNavbar/>}>
            <Route path='/Magang' element={<UserMagang/>}/>
            <Route path='/Monitoring' element={<UserAdmin/>}/>
          </Route>

          <Route element={<WithoutNavbar/>}>
            <Route path='/' element={<Dashboard/>}/>
          </Route>

        </Routes>
    </Router>
  )
}

export default Path