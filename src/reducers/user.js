import { generateUser } from '../static-data'

export default (state= generateUser(), action) => {
    return state
}