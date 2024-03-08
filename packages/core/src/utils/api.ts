export const buildV3Url = <TParams>(apiKey: string, url: string, params?: TParams) => {
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
  const urlEndpoint = `${url}?api_key=${apiKey}${params ? `&${searchParams.toString()}` : ""}`;
  return urlEndpoint;
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
  const urlEndpoint = `${url}${params ? `?${searchParams.toString()}` : ""}`;
  return urlEndpoint;
};
