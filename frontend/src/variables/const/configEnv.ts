const prodEnv = {
    SERVER_URL: 'http://localhost:8000', // Server URL (e.g. http://localhost:8000)
};

const devEnv = {
    SERVER_URL: 'http://localhost:8000', // Server URL (e.g. http://localhost:8000)
};

export const configEnv = process.env.NODE_ENV === 'production' ? prodEnv : devEnv;