function onClick(e) {
    e.preventDefault();
    
  
    // setup URL
    let url = "https://api.kanye.rest/";
    // call API
    fetch(url)
      .then(function(response) {
        // make sure the request was successful
        if (response.status != 200) {
          return {
            text: "Error calling the Numbers API service: " + response.statusText
          }
        }
        return response.json();
      }).then(function(json) {
        // update DOM with response
        updateResult(json.quote);
      });
  }
  
  function updateResult(info) {
    document.getElementById('result').textContent = info;
  }
  
  document.getElementById('woo').addEventListener('click', onClick);
  