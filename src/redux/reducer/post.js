import { LOAD_POSTS } from "../types"

const intialState = {
    allPosts: [],
    bookedPosts: []
}


export const postReducer = (state = intialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                allPosts: action.payload,
                bookedPosts: action.payload.filter(post => post.booked)
            }
        default: return state
    }

}