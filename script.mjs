async function fetchDogData(breedName) {
  const apiKey = 'api_key=live_QGO7LW8ikoaacC6p0AWsCtWFAB7QVMeX5EEhnEJDfoe3VzFMbyUlWJZeTLD7xIed';
  const url = `https://api.thedogapi.com/v1/breeds/search?q=${breedName}&${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function displayBreedInfo(breedName, containerId) {
  const breedInfoDiv = document.getElementById(containerId);

  try {
    const data = await fetchDogData(breedName);
    if (data && data.length > 0) {
      const breed = data[0];
      const breedInfo = `
        <h3>${breed.name}</h3>
        <p><strong>Ideal Dog Job:</strong> ${breed.bred_for}</p>
        <p><strong>Attitude Towards Work:</strong> ${breed.temperament}</p>
      `;
      breedInfoDiv.innerHTML = breedInfo;
    } else {
      breedInfoDiv.innerHTML = `<p>No information found for ${breedName}.</p>`;
    }
  } catch (error) {
    console.error('Error displaying breed info:', error);
    breedInfoDiv.innerHTML = `<p>Error fetching or processing data for ${breedName}.</p>`;
  }
}

function searchDogBreed() {
  const searchInput = document.getElementById('search-input');
  const breedName = searchInput.value.trim(); // to trim any disruptive spaces

  //adds search results to empty container
  if (breedName) {
    displayBreedInfo(breedName, 'breed-info-4'); 
    
  } else{
    alert('Search for a dog breed!');
  }
}