import TMDBAPI, { Http, TMDBApiError, ITMDBAPI } from "../../core";
import https from "https";

export * from "../../core";

const client: Http = {
  get: async (url, accessToken) => {
    return new Promise((resolve, reject) => {
      https
        .get(
          url,
          {
            headers: {
              "Content-Type": "application/json",
              ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
            },
          },
          (res) => {
            let data = "";
            res.on("data", (chunk) => {
              data += chunk;
            });
            res.on("end", () => {
              if (!res.complete) {
                reject(
                  new Error(
                    "The connection was terminated while the message was still being sent"
                  )
                );
              } else if (res.statusCode && res.statusCode >= 400) {
                const error = JSON.parse(data) as TMDBApiError;
                reject(new Error(error.status_message));
              } else {
                resolve(JSON.parse(data));
              }
            });
          }
        )
        .on("error", (err) => {
          reject(err);
        });
    });
  },
  post: async (url, body, accessToken) => {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify(body);
      const options = {
        headers: {
          "Content-Type": "application/json",
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        },
        method: "POST",
      };
      const req = https
        .request(url, options, (res) => {
          let data = "";
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => {
            if (!res.complete) {
              reject(
                new Error(
                  "The connection was terminated while the message was still being sent"
                )
              );
            } else if (res.statusCode && res.statusCode >= 400) {
              const error = JSON.parse(data) as TMDBApiError;
              reject(new Error(error.status_message));
            } else {
              resolve(JSON.parse(data));
            }
          });
        })
        .on("error", (err) => {
          reject(err);
        });
      req.write(data);
      req.end();
    });
  },
  put: async (url, body, accessToken) => {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify(body);
      const options = {
        headers: {
          "Content-Type": "application/json",
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        },
        method: "PUT",
      };
      const req = https
        .request(url, options, (res) => {
          let data = "";
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => {
            if (!res.complete) {
              reject(
                new Error(
                  "The connection was terminated while the message was still being sent"
                )
              );
            } else if (res.statusCode && res.statusCode >= 400) {
              const error = JSON.parse(data) as TMDBApiError;
              reject(new Error(error.status_message));
            } else {
              resolve(JSON.parse(data));
            }
          });
        })
        .on("error", (err) => {
          reject(err);
        });
      req.write(data);
      req.end();
    });
  },
  delete: async (url, body, accessToken) => {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify(body);
      const options = {
        headers: {
          "Content-Type": "application/json",
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        },
        method: "DELETE",
      };
      const req = https
        .request(url, options, (res) => {
          let data = "";
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => {
            if (!res.complete) {
              reject(
                new Error(
                  "The connection was terminated while the message was still being sent"
                )
              );
            } else if (res.statusCode && res.statusCode >= 400) {
              const error = JSON.parse(data) as TMDBApiError;
              reject(new Error(error.status_message));
            } else {
              resolve(JSON.parse(data));
            }
          });
        })
        .on("error", (err) => {
          reject(err);
        });
      req.write(data);
      req.end();
    });
  },
};

export class TMDBNodeApi extends TMDBAPI implements ITMDBAPI {
  constructor(apiKey: string, accessToken?: string) {
    super(client, apiKey, accessToken);
  }
}
