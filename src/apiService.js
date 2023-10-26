import axios from 'axios';

// Hard-coded API URL


// Function to fetch data from the API Gateway
export const fetchData = async () => {
    const API_URL = "https://w5eu7kkkd2.execute-api.ap-south-1.amazonaws.com/demo"; //takes data idhar se
  try {
    // Make a GET request to the API Gateway URL
    const response = await axios.get(API_URL);
    console.log('Response:', response);
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Log any errors and re-throw them
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (product) => {
  var post_json = {'id': product.id, 'name': product.name, 'price': product.price, 'description': product.description}
  const apiUrl = "https://w5eu7kkkd2.execute-api.ap-south-1.amazonaws.com/demo"; //change kar
  try {
    const response = await fetch(apiUrl, {
      method: 'POST', // Request method
      headers: {
        'Content-Type': 'application/json', // Setting content type
      },
      body: JSON.stringify(post_json), // The JSON payload
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log('Data successfully sent to API Gateway and stored in DynamoDB:', jsonResponse);
      return jsonResponse;
    } else {
      console.error('Failed to send data:', response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }

};