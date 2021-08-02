import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as VOTE_ACTIONS from '../actions/votes';

export default function useVotes() {
  const dispatch = useDispatch();
  const vote = useSelector(state => state.selectedVote);
  const list = useCallback(() => {
    dispatch(VOTE_ACTIONS.fetchVotes(page = 1, perPage = 18))
  }, [dispatch]);

  const create = useCallback(async (payload) => {
    try {
      await dispatch(VOTE_ACTIONS.create(payload));
    } catch (err) {
      console.log("create_vote_error", err);
    }
  }, [dispatch]);

  const deleteVote = useCallback(async (voteId, payload) => {
    try {
      await dispatch(VOTE_ACTIONS.deleteVote(voteId, payload));
    } catch (err) {
      console.log("delete_vote_error", err);
    }
  }, [dispatch]);

  return {
    vote: vote,
    create,
    deleteVote,
    list
  };
}
