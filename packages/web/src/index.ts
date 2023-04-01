import TMDBAPI, { Http, ITMDBAPI, TMDBApiError } from "../../core";

export * from "../../core";

const client: Http = {
  get: async (url, accessToken) => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
    });

    if (!res.ok) {
      const data = (await res.json()) as TMDBApiError;
      throw new Error(data.status_message);
    }
    const data = await res.json();
    return data;
  },
  post: async (url, body, accessToken) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const data = (await res.json()) as TMDBApiError;
      throw new Error(data.status_message);
    }
    const data = await res.json();
    return data;
  },
  put: async (url, body, accessToken) => {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const data = (await res.json()) as TMDBApiError;
      throw new Error(data.status_message);
    }
    const data = await res.json();
    return data;
  },
  delete: async (url, body, accessToken) => {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const data = (await res.json()) as TMDBApiError;
      throw new Error(data.status_message);
    }
    const data = await res.json();
    return data;
  },
};

export class TMDBWebAPI extends TMDBAPI implements ITMDBAPI {
  constructor(apiKey: string, accessToken?: string) {
    super(client, apiKey, accessToken);
  }
}
