import api from './api';

// Buscar todas as pessoas 
export const getPeople = async () => {
    // Realiza requisição e converte a resposta como JSON por meio do Axios
    const response = await api.get('/people');

    // Retorna lista
    return response.data;
};

// Adicionar (criar) as pessoas
export const addPerson = async (newPerson) => {
    const response = await api.post('/people', newPerson);

    return response.data;
};

// Editar (atualizar) as pessoas
export const updatePerson = async (id, updatedPerson) => {
    const response = await api.put(`/people/${id}`, updatedPerson);
    
    return response.data;
};

// Deletar as pessoas
export const deletePerson = async (id) => {
    await api.delete(`/people/${id}`);
};