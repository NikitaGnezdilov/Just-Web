import React from 'react'
import Chats from '../Chats/Chats'
import Navbar from '../Navbar/Navbar'
import UserSearch from '../UserSearch/UserSearch'
import './Sidebar.scss'

type Props = {}

const Sidebar = (props: Props) => {
  return (
	<div className='sidebar'>
    <Navbar/>
    <UserSearch />
    <Chats/>
  </div>
  )
}

export default Sidebar