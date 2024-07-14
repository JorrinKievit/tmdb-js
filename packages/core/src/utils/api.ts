export const buildV3Url = <TParams>(url: string, apiKey?: string, params?: TParams) => {
  const searchParams = new URLSearchParams();
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (Array.isArray(value)) {
        searchParams.append(key, value.join(","));
      } else {
        searchParams.append(key, value as string);
      }
    }
  }
  if (apiKey) searchParams.append("api_key", apiKey);

  return `${url}?${searchParams.toString()}`;
};

export const buildV4Url = <TParams>(url: string, params?: TParams) => {
  const searchParams = new URLSearchParams();
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (Array.isArray(value)) {
        searchParams.append(key, value.join(","));
      } else {
        searchParams.append(key, value as string);
      }
    }
  }
  return `${url}?${searchParams.toString()}`;
};
