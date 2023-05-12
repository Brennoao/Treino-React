import axios from "axios";

const CLIENT_ID = "SEU_CLIENT_ID";
const CLIENT_SECRET = "SEU_CLIENT_SECRET";
const BASE_URL = "https://accounts.spotify.com/api/token";

const apiSpotify = axios.create({
    baseURL: "https://api.spotify.com/v1",
});

let accessToken = null;
const getAccessToken = async () => {
    const response = await axios.post(
        BASE_URL,
        "grant_type=client_credentials",
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${Buffer.from(
                    `${CLIENT_ID}:${CLIENT_SECRET}`
                ).toString("base64")}`,
            },
        }
    );
    return response.data.access_token;
};

const getToken = async () => {
    if (!accessToken) {
        accessToken = await getAccessToken();
        setTimeout(() => {
            accessToken = null;
        }, 3600 * 1000); // token expires in 1 hour
    }
    return accessToken;
};

apiSpotify.interceptors.request.use(async (config) => {
    const token = await getToken();
    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
        },
        cancelToken: new axios.CancelToken((cancel) => {
            // Adicione a lógica para cancelar a requisição, se necessário
        }),
    };
});

export const getTokenSilently = async () => {
    const token = await getToken();
    return token;
};

export default apiSpotify;
