
import * as actions from '../actions/votes';

export const initialState = {
  current_page: 0,
  from: 0,
  to: 0,
  per_page: 0,
  last_page: 0,
  total: 0,
  votes: [],
  selectedVote: undefined,
  loading: false,
  hasErrors: false,
}

export default function VotesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_VOTE:
    case actions.GET_VOTES:
    case actions.GET_VOTE:
    case actions.DELETE_VOTE:
      return {...state, loading: true}
    case actions.CREATE_VOTE_SUCCESS:
      return {...state, selectedVote: action.payload, loading: false, hasErrors: false}
    case actions.CREATE_VOTE_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case actions.GET_VOTES_SUCCESS:
      return {...state,
        current_page: action.payload.current_page,
        from: action.payload.from,
        to: action.payload.to,
        per_page: action.payload.per_page,
        last_page: action.payload.last_page,
        total: action.payload.total,
        votes: action.payload.data,
        loading: false,
        hasErrors: false}
    case actions.GET_VOTE_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case actions.GET_VOTE_SUCCESS:
      return {...state,
        selectedVote: action.payload,
        loading: false,
        hasErrors: false
      };
    case actions.GET_VOTES_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case actions.DELETE_VOTE_SUCCESS:
      return {...state,
        loading: false,
        hasErrors: false,
        votes: state.votes.filter(item => item.id !== action.payload.voteId),
      };
    case actions.DELETE_VOTE_FAILURE:
      return {...state, loading: false, hasErrors: true};
    default:
      return state
  }
}

