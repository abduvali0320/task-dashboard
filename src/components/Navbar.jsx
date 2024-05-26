import React from 'react'
import { CgMail } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import profile_img from '../assets/img/profile-img.png'
export default function Navbar() {
  return (
    <div className='d-flex justify_betwen align_center ' >
      <div className='input_search align_center d-flex' >
        <button>
          <CiSearch />
        </button>
        <input type="search" placeholder='search anything' />
      </div>
      <ul>
        <li>
          <a href="#" title='gmail' >
            <CgMail />
          </a>
        </li>
        <li>
          <a href="#" className='relative' title='notification' >
            <span className='noti_count absolute'>5</span>
            <IoIosNotificationsOutline />
          </a>
        </li>
        <li className='profile' title='profile name' >
          <img src={profile_img} alt="profile name" />
        </li>
      </ul>
    </div>
  )
}
