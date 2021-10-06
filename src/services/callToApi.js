function callToApi() {
  return fetch(`https://rickandmortyapi.com/api/character`).then((response) =>
    response.json().then((json) => {
      return json.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          status: character.status,
          species: character.species,
          episodes: character.episode.length,
          homePlanet: character.origin.name,
          gender: character.gender,
        };
      });
    })
  );
}

export default callToApi;
