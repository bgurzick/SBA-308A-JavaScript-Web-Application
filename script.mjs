async function fetchData() {
    //two lines. fetches data.
    const result = await fetch ( 'api URL here');

    const data = await result.json();

    // console.log(data.results[0].name);

    // const nameDisplay = document.querySelector ('h1');
    // nameDisplay.innerText = "first item in the array";

    //loops through the list of pokemon fetched from the api
    for(let i=0; i<data.results.length; i++) {
        //create a new h1 element
      const nameDisplay = document.createElement ('h1');
      //sets the text of the element to pokemon name
      nameDisplay.innerText = data.results[i].name;
      //displays the element by appending it to the body
      document.querySelector('body').appendChild(nameDisplay);  
    }
}

fetchData();