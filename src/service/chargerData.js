//https://pay-and-charge-backend-qk5dyavsbq-lz.a.run.app/client/charger/1

const baseUrl = process.env.REACT_APP_API_BASE_URL;
let url = baseUrl + '/charger/1';

export const fetchChargerData = async () => {
	try {
		// Perform the fetch call
		const response = await fetch(url);

		// Check if the response is ok (status code in the range 200-299)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// Parse the JSON response
		const data = await response.json();

		// Return the data
		return data;
	} catch (error) {
		// Handle any errors that occurred during the fetch
		console.error('Fetch error:', error.message);

		// Return the error
		return error;
	}
};

// Example usage:
// fetchData('https://api.example.com/data')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
