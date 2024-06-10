const customFetch = async (url: string, options: RequestInit) => {
    const accessToken = localStorage.getItem('access_token');

    const headers = options.headers as Record<string, string>;

    return await fetch(url, {
       ...options,
        headers: {
           ...headers,
            'Authorization': headers?.Authorization || `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            "Apollo-Require-Preflight": "true",
        }
    });
}

const getGraphQLErrors = (body: Record<"errors", GraphQLFormattedError[] || undefined>) => {};