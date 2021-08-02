import client from '../client';
import {authHeader, jsonHeader, jsonHeaderPhoto} from "../authRequest";

export function create(payload) {
  return client
      .post('/api/v1/votes', payload)
    .then(({ data }) => data);
}


export function list(perPage=10, page=1) {
  return client
      .get(`/api/v1/votes?perPage=${perPage}&page=${page}`)
      .then(({ data }) => data);
}


export function get(id) {
  return client
      .get(`/api/v1/votes/${id}`)
      .then(({ data }) => data);
}

export function deleteVote(voteId, payload) {
  payload.id = voteId;
  return client
      .delete(`/api/v1/votes/${voteId}`, payload)
      .then(({ data }) => data);
}
