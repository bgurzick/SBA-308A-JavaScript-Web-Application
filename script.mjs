// Major League Baseball current standings API

const url = 'https://major-league-baseball-mlb.p.rapidapi.com/standings?year=2020';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f56dfe3632msh1cf042281c4dec1p1c6d53jsn761f54e14fd2',
		'x-rapidapi-host': 'major-league-baseball-mlb.p.rapidapi.com'
	}
};

// async function to fetch data from the API
async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// button click user interaction
async function handleButtonClick(event) {
  const formId = event.currentTarget.parentElement.id;
  let question, correctAnswer;

  switch (formId) {
    case "al-east-form":
      question = "AL East";
      correctAnswer = "New York Yankees"; 
      break;

    case "al-west-form":
      question = "AL West";
      correctAnswer = "Houston Astros";
      break;

    case "al-central-form":
      question = "AL Central";
      correctAnswer = "Chicago White Sox";
      break;

    default:
      break;
  }

  const resultDiv = document.getElementById("result");

  try {
    const data = await fetchData(url, options);
    
    // accessing the team standings array
    const leadingTeam = data.find(team => team.league === "American" && team.division === question);
    
    if (leadingTeam && leadingTeam.team_name === correctAnswer) {
      resultDiv.innerText = "Correct!";
    } else {
      resultDiv.innerText = "Incorrect. Try again!";
    }
  } catch (error) {
    resultDiv.innerText = "Error fetching data.";
  }
}

// event listeners on buttons for each form
document.querySelectorAll(".answer-btn").forEach(button => {
  button.addEventListener("click", handleButtonClick);
});
