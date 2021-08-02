// Create Redux action types
import * as API from "../../api";
import * as LOADING_OVERLAY_ACTIONS from './loadingOverlay';

export const GET_VOTE = 'GET_VOTE'
export const GET_VOTE_SUCCESS = 'GET_VOTE_SUCCESS'
export const GET_VOTE_FAILURE = 'GET_VOTE_FAILURE'

export const GET_VOTES = 'GET_VOTES'
export const GET_VOTES_SUCCESS = 'GET_VOTES_SUCCESS'
export const GET_VOTES_FAILURE = 'GET_VOTES_FAILURE'

export const CREATE_VOTE = 'CREATE_VOTE';
export const CREATE_VOTE_SUCCESS = 'CREATE_VOTE_SUCCESS';
export const CREATE_VOTE_FAILURE = 'CREATE_VOTE_FAILURE';

export const DELETE_VOTE = 'DELETE_Vote'
export const DELETE_VOTE_SUCCESS = 'DELETE_VOTE_SUCCESS'
export const DELETE_VOTE_FAILURE = 'DELETE_VOTE_FAILURE'

// Create Redux action creators that return an action
export const getVote = () => ({
    type: GET_VOTE,
});

export const getVoteSuccess = (response) => ({
    type: GET_VOTE_SUCCESS,
    payload: response,
});

export const getVoteFailure = () => ({
    type: GET_VOTE_FAILURE,
});


export const getVotes = () => ({
    type: GET_VOTES,
})

export const getVotesSuccess = (response) => ({
    type: GET_VOTES_SUCCESS,
    payload: response,
})

export const getVotesFailure = () => ({
    type: GET_VOTES_FAILURE,
})

export const createVote = () => ({
    type: CREATE_VOTE,
})

export const createVoteSuccess = (response) => ({
    type: CREATE_VOTE_SUCCESS,
    payload: response,
})

export const createVoteFailure = () => ({
    type: CREATE_VOTE_FAILURE,
})


export const deleteVoteAction = () => ({
    type: DELETE_VOTE,
});

export const deleteVoteSuccess = (VoteId, response) => ({
    type: DELETE_VOTE_SUCCESS,
    payload: {VoteId, response}
})

export const deleteVoteFailure = (VoteId) => ({
    type: DELETE_VOTE_FAILURE,
});


// Combine them all in an asynchronous thunk
export function fetchVotes(page = 1, perPage = 18 ) {
    return async (dispatch) => {
        dispatch(getVotes())

        try {
            const response = await API.Votes.list(perPage, page);

            if(response.data){
                dispatch(getVotesSuccess(response));
            }else{
                dispatch(getVotesFailure())
            }

        } catch (error) {
            dispatch(getVotesFailure())
        }
    }
}

export function fetchVote(id) {
    return async (dispatch) => {
        dispatch(getVote())

        try {
            const response = await API.Votes.get(id);
            dispatch(getVoteSuccess(response));

        } catch (error) {
            dispatch(getVoteFailure())
        }
    }
}

export function create(payload) {
    return async (dispatch) => {
        try {
            const response = await API.Votes.create(
                payload
            );
            dispatch(createVoteSuccess(response));
        } catch (err) {
            await dispatch(createVoteFailure());
            throw err;
        } finally {
            dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
        }
    };
}

export function deleteVote(VoteId, payload) {
    return async (dispatch) => {
        try {
            const response = await API.Votes.deleteVote(VoteId, payload);
            dispatch(deleteVoteSuccess(VoteId, response));
        } catch (err) {
            await dispatch(deleteVoteFailure(VoteId,));
            throw err;
        } finally {
            dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
        }
    };
}


