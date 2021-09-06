export default function({ $axios, app }) {
    $axios.onError(error => {
        const statusCode = error.response.status;

        // refresh token if it expired
        if (statusCode === 403) {
            const originalRequest = error.config;
            if (!originalRequest._retry) {
                originalRequest._retry = true;
                return $axios.post('auth/refreshtoken', { 'refreshToken': app.$auth.getRefreshToken('local') })
                    .then((response) => {
                        console.log("hi", response);
                        originalRequest.headers['Authorization'] = 'Bearer ' + response.data.data.refreshToken;
                        app.$auth.setToken('local', "Bearer " + response.data.data.refreshToken);
                        return $axios(originalRequest);
                    });
            }
        }

        return Promise.reject(error);
    });
}