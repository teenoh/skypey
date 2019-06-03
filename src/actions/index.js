import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, DELETE_MESSAGE } from '../constants/action-types'

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});

export const setTypingValue = ({number, userId, value}) => ({
    type: SET_TYPING_VALUE,
    payload: {
        number,
        userId,
        value
    }
})

export const sendMessage = ({ number, userId, value }) => ({
    type: SEND_MESSAGE,
    payload: {
        number,
        userId,
        value,
    }
})

export const deleteMessage = ({ userId, number }) => ({
    type: DELETE_MESSAGE,
    payload: {
        userId,
        number
    }
})