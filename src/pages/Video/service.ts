import request from 'umi-request';

export async function queryRoom(params: any) {
  return request(`/video/room`, {
    params,
  });
}

export async function getVideoToken(params: any) {
  return request(`/video/token`, {
    params,
  });
}

export async function createRoom(params: any) {
  return request(`/video/room`, {
    method: 'POST',
    params,
  });
}