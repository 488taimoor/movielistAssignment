export const apiServices = {
    GetData
  }
function GetData(api) {
      return fetch(api, {
        method: "GET",
      })
        .then(data => data.json())
        .then(response => {
  
          return response
        })
        .catch(err => {

          return {Error:"Something went wrong"};
        })
  }