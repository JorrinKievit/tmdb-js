export const createV4Proxy = (methods: any, accessToken?: string) => {
    return new Proxy(methods, {
        get(target, prop, receiver) {
            const origMethod = Reflect.get(target, prop, receiver);
            if (typeof origMethod === "function") {
                return (...args: any[]) => {
                    if (accessToken === undefined) {
                        throw new Error("Access token is required for the v4 API");
                    }
                    return origMethod.apply(this, args);
                };
            } else {
                return origMethod;
            }
        },
    });
};
