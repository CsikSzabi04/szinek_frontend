import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <div className='beker'>
            <Link to="/szinek"><input type="button" className='b' value="Szinek" /></Link> 
            <Link to="/ujszin"><input type="button" className='b' value="Új szín" /></Link> 
            <Link to="/nevjegy"><input type="button" className='b' value="Névjegy" /></Link> 
        </div>
        <Outlet />
    </div>
  )
}
