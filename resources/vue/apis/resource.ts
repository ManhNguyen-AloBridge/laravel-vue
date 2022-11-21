import client from './client';

export default function resource(resource: string) {
  function list<PayloadType, ResponseType>(payload?: PayloadType, config?: object) {
    return client.request<ResponseType>({
      url: resource,
      method: 'GET',
      params: payload,
      ...config,
    });
  }

  function show<ResponseType>(id: number | string) {
    return client.request<ResponseType>({
      url: `${resource}/${id}`,
      method: 'GET',
    });
  }

  function store<ResponseType>(payload: object) {
    return client.request<ResponseType>({
      url: `${resource}`,
      method: 'POST',
      data: payload,
    });
  }

  function update<PayloadType, ResponseType>(id: number | string, payload: PayloadType) {
    return client.request<ResponseType>({
      url: `${resource}/${id}`,
      method: 'PUT',
      data: payload,
    });
  }

  function destroy(id: number | string) {
    return client.request({
      url: `${resource}/${id}`,
      method: 'DELETE',
    });
  }

  return {
    list,
    show,
    store,
    update,
    destroy,
  };
}
