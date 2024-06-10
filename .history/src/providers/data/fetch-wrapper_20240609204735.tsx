const customFetch = async (url: string, options: RequestInit) => {
    const acessToken = localStorage.getItem('access_token');

    const headers = options.headers as Record
}