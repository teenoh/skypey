import React from 'react'
import store from '../store'
import { setTypingValue, sendMessage } from '../actions'
import './MessageInput.css'

const MessageInput = ({ user, message }) => {
    const state = store.getState();
    const { user_id } = user;
    const { number, value } = message
    const handleChange = e => {store.dispatch(setTypingValue({ number, userId: user_id, value: e.target.value }))}
    const handleSubmit = e => {
        e.preventDefault()
        const { typing } = state
        if  (!typing.value){
            return 
        }
        store.dispatch(sendMessage({...typing}))
    }

    return (
        <form onSubmit={handleSubmit} className='Message'>
            <input 
                className='Message__input'
                onChange={handleChange}
                value={value}
                placeholder='Write a message'
            />
        </form>
    )
}

export default MessageInput;