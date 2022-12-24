import React from 'react'
import Message from '../Message/Message'
import './Messages.scss'

type Props = {}

const Messages = (props: Props) => {
  return (
	<div className='messages'>
		<Message/>
		<Message/>
		<Message/>
		<Message/>
	</div>
  )
}

export default Messages