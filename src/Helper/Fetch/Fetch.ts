const BASEURL = "http://localhost:8085/";

export const Fetch = async ({ url, data:body, method}: FetchParams): Promise<FetchResponse|null> => {
  const URL = BASEURL + url;
  let response: Response;
  if (method !== 'GET') {
    response = await fetch(
      URL,
      {
        method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body),
      },
    );
  } else {
    response = await fetch(URL);
  }



  if (!response.ok || response.status !== 200) {
    return null;
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
