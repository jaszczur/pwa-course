import { ApplicationState, INITIAL_STATE } from ".";
import { FeedAction, ADD_POST, DELETE_POST } from "./actions";

export function rootReducer(state = INITIAL_STATE, action: FeedAction): ApplicationState {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                feed: [...state.feed, action.post]
            };
        case DELETE_POST:
            return {
                ...state,
                feed: state.feed.filter(post => post.id !== action.postId)
            }
        default:
            return state;
    }
}
