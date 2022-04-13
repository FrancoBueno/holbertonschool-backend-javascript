export default function handleResponseFromAPI(promise) {
  const msg = { status: 200, body: 'success' };
  return promise
    .then(() => msg)
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
