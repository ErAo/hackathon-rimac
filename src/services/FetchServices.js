const API_KEY = process.env.API_KEY;
const API_BASE_URL = process.env.API_BASE_URL;

export default {
    get: async (path) => {
        const response = await fetch(`${API_BASE_URL}${path}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        return response.json();
    },
    post: async (path, body) => {
        const response = await fetch(`${API_BASE_URL}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify(body)
        });

        return response.json();
    },
    put: async (path, body) => {
        const response = await fetch(`${API_BASE_URL}${path}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify(body)
        });

        return response.json();
    },
    delete: async (path) => {
        const response = await fetch(`${API_BASE_URL}${path}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        return response.json();
    }
}