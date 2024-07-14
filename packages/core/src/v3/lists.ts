import { Credentials, Http, ITMDBAPI } from "..";
import { ListsAddMovieResponse } from "../types/v3/lists/add-movie";
import { ListsCheckItemStatusResponse } from "../types/v3/lists/check-item-status";
import { ListsClearListResponse } from "../types/v3/lists/clear-list";
import { ListsCreateListResponse } from "../types/v3/lists/create-list";
import { ListsDeleteListResponse } from "../types/v3/lists/delete-list";
import { ListsGetDetailsResponse } from "../types/v3/lists/get-details";
import { ListsRemoveMovieResponse } from "../types/v3/lists/remove-movie";
import { buildV3Url } from "../utils/api";

export const createV3ListsMethods = (client: Http, url: string, { apiKey, accessToken }: Credentials): ITMDBAPI["v3"]["lists"] => {
  return {
    getDetails: async (listId, params) => {
      return client.get<ListsGetDetailsResponse>(buildV3Url(`${url}list/${listId}`, apiKey, params), accessToken);
    },
    checkItemStatus: async (listId, params) => {
      return client.get<ListsCheckItemStatusResponse>(buildV3Url(`${url}list/${listId}/item_status`, apiKey, params), accessToken);
    },
    createList: async (body, params) => {
      return client.post<ListsCreateListResponse, typeof body>(buildV3Url(`${url}list`, apiKey, params), body, accessToken);
    },
    addMovie: async (listId, body, params) => {
      return client.post<ListsAddMovieResponse, typeof body>(buildV3Url(`${url}list/${listId}/add_item`, apiKey, params), body, accessToken);
    },
    removeMovie: async (listId, body, params) => {
      return client.post<ListsRemoveMovieResponse, typeof body>(buildV3Url(`${url}list/${listId}/remove_item`, apiKey, params), body, accessToken);
    },
    clearList: async (listId, params) => {
      return client.post<ListsClearListResponse>(buildV3Url(`${url}list/${listId}/clear`, apiKey, params), undefined, accessToken);
    },
    deleteList: async (listId, params) => {
      return client.delete<ListsDeleteListResponse>(buildV3Url(`${url}list/${listId}`, apiKey, params), undefined, accessToken);
    },
  };
};
