useEffect(() => {
    fetch('http://localhost:3000/peoples')
        .then(response => response.json())
        .then(data => setPeople(data))
        .catch(error => console.error(error));
}, []);

<FlatList 
    data={people}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
        <View>
            <Text>{item.firstname} {item.lastname}</Text>
            <Text>{item.email}</Text>
        </View>
    )}
/>

fetch('https://localhost:3000/people', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPerson)
})

fetch(`https://localhost:3000/people/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedPerson)
})

fetch(`https://localhost:3000/people/${id}`, {
    method: 'DELETE'
})