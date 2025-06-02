const API_URL = 'http://localhost:5050';

export async function fetchUsers() {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
        throw new Error('Error ao buscar usuários');
    }
    return await response.json();
}
