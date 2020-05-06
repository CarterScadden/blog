export const Fetch = async ({ url, data:body, method}: FetchParams): Promise<FetchResponse> => {
  const response = await fetch(url, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`[FETCH] response ok failed. status: ${response.status}`);
  }

  const data = await response.json();

  const obj: FetchResponse = {
    data,
    headers: response.headers,
    status: response.status,
  };

  return obj;
}

export interface FetchParams {
  url: string;
  data: any;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
};

export interface FetchResponse {
  data: any;
  headers: Headers;
  status: number;
};
