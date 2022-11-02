async function fetchData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3c2b0b5ff3msh993681c9cd68238p12cccejsnff86a475f9f7",
      "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Buenos%20Aires&minDate=2022-11-01&maxDate=2022-11-30&page=1",
    options
  );

  const record = await response.json();

  console.log(record);
  document.getElementById("extension").innerHTML = record.data
    .map(
      (item) =>
        `<li><h2>${item.name}</h2><img class='img' src="${item.image}"></img><p>${item.description}</p></li>`
    )
    .join("");
}
fetchData();
