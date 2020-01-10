const apiUrl = 'http://localhost:3001';

export const store = async (data) => {
    const response = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
    });

    const responseBody = await response.json();

    return responseBody;
};

export const edit = async (id, data) => {
    const response = await fetch(`${apiUrl}/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const responseBody = await response.json();

    return responseBody;
};

export const show = async (id) => {
    const response = await fetch(`${apiUrl}/users/${id}`);

    const responseBody = await response.json();

    return responseBody;
};

export const remove = async (id) => {
    const response = await fetch(`${apiUrl}/users/${id}`, {
        method: 'DELETE'
    });

    const responseBody = await response.json();

    return responseBody;
};

