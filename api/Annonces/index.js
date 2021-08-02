import client from '../client';
import {authHeader, jsonHeader, jsonHeaderPhoto} from "../authRequest";

export function create(payload) {
  return client
      .post('/api/v1/ideas', payload)
    .then(({ data }) => data);
}

export function get(id) {
  return client
      .get(`/api/v1/ideas/${id}`)
      .then(({ data }) => data);
}

export function search(perPage, page, owner) {
  return client
      .get(`/api/v1/ideas/search?perPage=${perPage}&page=${page}&owner=${owner ? owner : ''}`)
      .then(({ data }) => data);
}

export function filter(perPage, page, title, postal_code, category, owner_type, usage, experience_eco, note ) {
  let url = `/api/v1/ideas/search?`;
  url += perPage ? 'perPage=' + perPage  : '',
      url += page ? '&page=' + page  : '',
      url += title ? '&title=' + title  : '',
      url += postal_code ? '&postal_code=' + postal_code  : '',
      url += category ? '&category=' + category  : '',
      url += owner_type ? '&owner_type=' + owner_type  : '',
      url += usage ? '&usage=' + usage  : '',
      url += experience_eco ? '&experience_eco=' + experience_eco  : '',
      url += note ? '&note=' + note  : '';

  return client
      .get(url)
      .then(({ data }) => data);
}

export async function addPhoto(ideaId, payload) {
  payload.id = ideaId;
  return client
      .post(`/api/v1/ideas/${ideaId}/uploads`, payload)
      .then(({ data }) => data);
}

export function removePhoto(ideaId, payload) {
  payload.idea_id = ideaId;
  return client
      .delete(`/api/v1/ideas/${ideaId}/uploads/${payload.id}`, payload)
      .then(({data}) => data);
}

export function updateIdea(ideaId, payload) {
  payload.id = ideaId;
  return client
      .put(`/api/v1/ideas/${ideaId}`, payload)
      .then(({ data }) => data);
}

export function deleteIdea(ideaId, payload) {
  payload.id = ideaId;
  return client
      .delete(`/api/v1/ideas/${ideaId}`, payload)
      .then(({ data }) => data);
}

