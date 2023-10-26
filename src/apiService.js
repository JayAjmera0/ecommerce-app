import axios from 'axios';

// Hard-coded API URL


// Function to fetch data from the API Gateway
export const fetchData = async () => {
    const API_URL = "https://w5eu7kkkd2.execute-api.ap-south-1.amazonaws.com/demo"; //takes data idhar se

  try {
    // Make a GET request to the API Gateway URL
    const response = await axios.get(API_URL);
    console.log('Response:', response);

    // Parse the 'body' field from the 'data' field of the response
    const responseBody = JSON.parse(response.data.body);

    // Now responseBody is a JavaScript object/array that you can use
    console.log('Parsed body:', responseBody);

    // Return the parsed body
    return responseBody;

  } catch (error) {
    // Log any errors and re-throw them
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (product) => {
    var post_json = { 'id': 5 };
    const apiUrl = "https://w5eu7kkkd2.execute-api.ap-south-1.amazonaws.com/demo11"; //change kar
    try {
        const response = await fetch(apiUrl, {
            method: 'POST', // Request method
            headers: {
                'Content-Type': 'application/json', // Setting content type
            },
            body: JSON.stringify(post_json), // The JSON payload
        });
        console.log('Response:', response);
        console.log('post', post_json);

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log('Data successfully sent to API Gateway and stored in DynamoDB:', jsonResponse);
            return jsonResponse;
        } else {
            console.error('Failed to send data:', response.status, response.statusText);
            return { error: response.statusText, statusCode: response.status };
        }
    } catch (error) {
        console.error('An error occurred:', error);
        return { error: error.message };
    }
};
