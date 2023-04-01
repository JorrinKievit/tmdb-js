import { Http, V4IList } from "..";
import { V4ListAddItemsResponse } from "../types/v4/list/add-items";
import { V4ListCheckItemStatusResponse } from "../types/v4/list/check-item-status";
import { V4ListClearListResponse } from "../types/v4/list/clear-list";
import { V4ListCreateListResponse } from "../types/v4/list/create-list";
import { V4ListDeleteListResponse } from "../types/v4/list/delete-list";
import { V4ListGetListResponse } from "../types/v4/list/get-list";
import { V4ListRemoveItemsResponse } from "../types/v4/list/remove-items";
import { V4ListUpdateItemsResponse } from "../types/v4/list/update-items";
import { V4ListUpdateListResponse } from "../types/v4/list/update-list";
import { buildV4Url } from "../utils/api";
import { createV4Proxy } from "../utils/v4proxy";

const getListUrl = (url: string, listId?: string): string => {
  let formattedUrl = url;

  if (listId) {
    formattedUrl = formattedUrl.replace("{list_id}", listId.toString());
  } else {
    formattedUrl = formattedUrl.replace("/{list_id}", "");
  }

  return formattedUrl;
};

export const createV4ListMethods = (
  client: Http,
  apiUrl: string,
  accessToken?: string
): V4IList => {
  const listMethods: V4IList = {
    getList: async (params, listId) => {
      const res = await client.get<V4ListGetListResponse>(
        buildV4Url(getListUrl(`${apiUrl}list/{list_id}`, listId), params),
        accessToken
      );

      return res;
    },
    createList: async (body) => {
      const res = await client.post<V4ListCreateListResponse, typeof body>(
        buildV4Url(`${apiUrl}list`),
        body,
        accessToken
      );

      return res;
    },
    updateList: async (body, listId) => {
      const res = await client.put<V4ListUpdateListResponse, typeof body>(
        buildV4Url(getListUrl(`${apiUrl}list/{list_id}`, listId)),
        body,
        accessToken
      );

      return res;
    },
    clearList: async (listId) => {
      const res = await client.post<V4ListClearListResponse>(
        buildV4Url(getListUrl(`${apiUrl}list/{list_id}/clear`, listId)),
        undefined,
        accessToken
      );

      return res;
    },
    deleteList: async (listId) => {
      const res = await client.delete<V4ListDeleteListResponse>(
        buildV4Url(getListUrl(`${apiUrl}list/{list_id}`, listId)),
        undefined,
        accessToken
      );

      return res;
    },
    addItems: async (body, listId) => {
      const res = await client.post<V4ListAddItemsResponse, typeof body>(
        buildV4Url(getListUrl(`${apiUrl}list/{list_id}/items`, listId)),
        body,
        accessToken
      );

      return res;
    },
    updateItems: async (body, listId) => {
      const res = await client.put<V4ListUpdateItemsResponse, typeof body>(
        buildV4Url(getListUrl(`${apiUrl}list/{list_id}/items`, listId)),
        body,
        accessToken
      );

      return res;
    },
    removeItems: async (body, listId) => {
      const res = await client.delete<V4ListRemoveItemsResponse, typeof body>(
        buildV4Url(getListUrl(`${apiUrl}list/{list_id}/items`, listId)),
        body,
        accessToken
      );

      return res;
    },
    checkItemStatus: async (params, listId) => {
      const res = await client.get<V4ListCheckItemStatusResponse>(
        buildV4Url(
          getListUrl(`${apiUrl}list/{list_id}/item_status`, listId),
          params
        ),
        accessToken
      );

      return res;
    },
  };

  const listMethodsProxy = createV4Proxy(listMethods, accessToken);
  return listMethodsProxy;
};
