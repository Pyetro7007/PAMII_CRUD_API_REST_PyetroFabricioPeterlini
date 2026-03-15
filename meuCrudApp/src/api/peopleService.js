import api from './api';

export const getPerson = async () => {
    const response = await api.get('/people');
    return response.data;
};

export const addPerson = async (newPerson) => {
    const response = await api.post('/people', newPerson);
    return response.data;
};

export const updatePerson = async (id, updatedPerson) => {
    const response = await api.put(`/people/${id}`, updatedPerson);
    return response.data;
};

export const deletePerson = async (id) => {
    await api.delete(`/people/${id}`);
};