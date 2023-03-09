const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zWaRZXYIpikM7iBZs8Wm/scores/';

const getData = async (response, data) => {
  response = await fetch(url);
  data = await response.json();
  return data;
};
export default getData;