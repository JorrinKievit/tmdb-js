import { Http, ITMDBAPI } from "..";
import { ListsAddMovieResponse } from "../types/v3/lists/add-movie";
import { ListsCheckItemStatusResponse } from "../types/v3/lists/check-item-status";
import { ListsClearListResponse } from "../types/v3/lists/clear-list";
import { ListsCreateListResponse } from "../types/v3/lists/create-list";
import { ListsDeleteListResponse } from "../types/v3/lists/delete-list";
import { ListsGetDetailsResponse } from "../types/v3/lists/get-details";
import { ListsRemoveMovieResponse } from "../types/v3/lists/remove-movie";
import { buildV3Url } from "../utils/api";

export const createV3ListsMethods = (client: Http, apiKey: string, url: string): ITMDBAPI["v3"]["lists"] => {
  return {
    getDetails: async (listId, params) => {
      const res = await client.get<ListsGetDetailsResponse>(buildV3Url(apiKey, `${url}list/${listId}`, params));

      return res;
    },
    checkItemStatus: async (listId, params) => {
      const res = await client.get<ListsCheckItemStatusResponse>(buildV3Url(apiKey, `${url}list/${listId}/item_status`, params));

      return res;
    },
    createList: async (body, params) => {
      const res = await client.post<ListsCreateListResponse, typeof body>(buildV3Url(apiKey, `${url}list`, params), body);

      return res;
    },
    addMovie: async (listId, body, params) => {
      const res = await client.post<ListsAddMovieResponse, typeof body>(buildV3Url(apiKey, `${url}list/${listId}/add_item`, params), body);

      return res;
    },
    removeMovie: async (listId, body, params) => {
      const res = await client.post<ListsRemoveMovieResponse, typeof body>(buildV3Url(apiKey, `${url}list/${listId}/remove_item`, params), body);

      return res;
    },
    clearList: async (listId, params) => {
      const res = await client.post<ListsClearListResponse>(buildV3Url(apiKey, `${url}list/${listId}/clear`, params));

      return res;
    },
    deleteList: async (listId, params) => {
      const res = await client.delete<ListsDeleteListResponse>(buildV3Url(apiKey, `${url}list/${listId}`, params));

      return res;
    },
  };
};
