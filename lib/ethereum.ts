axios.get('https://api.coingecko.com/api/v3/coins/ethereum')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
