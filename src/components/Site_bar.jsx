import React from 'react'
import { BiCoinStack } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'
import { FaRegDotCircle, FaRegWindowRestore } from 'react-icons/fa'
import { HiBars3BottomRight, HiOutlineHome } from 'react-icons/hi2'
import { IoCalendarClearOutline } from 'react-icons/io5'
import { LiaPagerSolid } from 'react-icons/lia'
import { LuShoppingCart } from 'react-icons/lu'
import { MdOutlineSms, MdOutlineSsidChart } from 'react-icons/md'
import { PiDotsThreeCircleBold } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'

export default function Site_bar({siteBar, setSiteBar}) {
  return (
    <div className={siteBar ? 'site_bar' : 'site_bar active_site_bar'} >
      <button className='bars' onClick={() => setSiteBar(true)} >
        <HiBars3BottomRight />
      </button>
      <ul className='hover_bg'>
        <li>
          <NavLink to={'/'} ><HiOutlineHome /></NavLink>
        </li>
        <li>
          <NavLink to={'/pages'} > <LiaPagerSolid /> </NavLink>
        </li>
        <li>
          <NavLink to={'/chart'} > <MdOutlineSsidChart /> </NavLink>
        </li>
        <li>
          <NavLink to={'/coin'} > <BiCoinStack /> </NavLink>
        </li>
        <li>
          <NavLink to={'/window'} > <FaRegWindowRestore /> </NavLink>
        </li>
        <li>
          <NavLink to={'/gmail'} > <CgMail /> </NavLink>
        </li>
        <li>
          <NavLink to={'/sms'} > <MdOutlineSms /> </NavLink>
        </li>
        <li>
          <NavLink to={'/cart'} > <LuShoppingCart /> </NavLink>
        </li>
        <li>
          <NavLink to={'/circle'} > <PiDotsThreeCircleBold /> </NavLink>
        </li>
        <li>
          <NavLink to={'/dotCircle'} > <FaRegDotCircle /> </NavLink>
        </li>
        <li>
          <NavLink to={'/calendar'} > <IoCalendarClearOutline /> </NavLink>
        </li>
      </ul>
    </div>
  )
}
