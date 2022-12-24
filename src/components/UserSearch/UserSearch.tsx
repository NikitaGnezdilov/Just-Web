import React from 'react'
import './UserSearch.scss'

type Props = {}

const UserSearch = (props: Props) => {
  return (
	<div className='userSearch'>
    <input type="text" placeholder='Найти пользователя'/>
  </div>
  )
}

export default UserSearch