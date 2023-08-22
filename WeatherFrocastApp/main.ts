// Standard variation
function api<T>() {
    const txtbox=document.querySelector('#input-box') as HTMLInputElement
    const url = "http://api.weatherapi.com/v1/forecast.json?key=cecdda0161a94d299c7102158232208&q="+txtbox.value+"&days=5&aqi=no&alerts=no";
    fetch(url)
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data: string) => {
        console.log("data", data);
        // displaying the data
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

