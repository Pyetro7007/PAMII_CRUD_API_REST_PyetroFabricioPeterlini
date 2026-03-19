import api from './api';

// Buscar todas as pessoas 
export const getPeople = async () => {
    // Realiza requisição GET e converte a resposta como JSON por meio do Axios
    const response = await api.get('/people');

    // Retorna lista
    return response.data;
};

// Adicionar (criar) as pessoas
export const addPerson = async (newPerson) => {
    // Realiza requisição POST e converte a resposta como JSON por meio do Axios
    const response = await api.post('/people', newPerson);

    // Retorna lista
    return response.data;
};

// Editar (atualizar) as pessoas
export const updatePerson = async (id, updatedPerson) => {
    // Realiza requisição PUT e converte a resposta como JSON por meio do Axios
    const response = await api.put(`/people/${id}`, updatedPerson);
    
    // Retorna a lista
    return response.data;
};

// Deletar as pessoas
export const deletePerson = async (id) => {
    // Realiza requisição DELETE e converte a resposta como JSON por meio do Axios
    await api.delete(`/people/${id}`);
};