export default function getResponseFromAPI(success) {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    // Check if the API call is successful
    if (success) {
    // Resolve the promise with a success response
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
