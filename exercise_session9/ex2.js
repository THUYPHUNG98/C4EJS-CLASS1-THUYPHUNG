const fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
fetchPromise.then(connection => {
    console.log('Connected');
    console.log(connection);
    const jsonPromise = connection.json();
    jsonPromise.then(
        result => console.log(result)
    )
});