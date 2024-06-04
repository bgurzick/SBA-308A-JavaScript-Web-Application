//for Major League Baseball stats and info. 

const url = 'https://mlb-data.p.rapidapi.com/json/named.proj_pecota_batting.bam?season='2017'&player_id='592789'&league_list_id='mlb'';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'mlb-data.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}