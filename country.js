const allCountries = [];
const filteredCountries = [];

function addCountry() {
  const countryInput = document.getElementById("countryInput").value;
  if (countryInput !== "") {
    const countryList = document.getElementById("countryList");
    const listItem = document.createElement("li");
    listItem.classList.add("country-list");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");
    deleteButton.onclick = function () {
      // Sletter landet når knappen er trykket
      listItem.remove();

      // Fjerner landet fra allCountries array
      const index = allCountries.indexOf(countryInput);
      if (index !== -1) {
        allCountries.splice(index, 1);
      }

      displayFilteredCountries();
    };

    listItem.textContent = countryInput;
    listItem.appendChild(deleteButton);
    countryList.appendChild(listItem);
    allCountries.push(countryInput);
    console.log(allCountries);

    //fjerner input feltet og feilmeldingen
    document.getElementById("countryInput").value = "";
    document.getElementById("errorCountry").innerHTML = "";

    displayFilteredCountries();
  } else {
    document.getElementById("errorCountry").innerHTML =
      "<span style='color: red;'>Må skrive noe inn i input feltet</span>";
  }
}

function filterCountries(searchWord) {
  return allCountries.filter((country) =>
    country.toLowerCase().startsWith(searchWord.toLowerCase())
  );
}

function displayFilteredCountries() {
  const searchInput = document.getElementById("searchCountry");
  const searchResults = document.getElementById("countryList");
  const searchWord = searchInput.value.trim();

  const filteredCountries = allCountries.filter((country) =>
    country.toLowerCase().includes(searchWord.toLowerCase())
  );

  searchResults.innerHTML = "";

  filteredCountries.forEach((country) => {
    const listItem = document.createElement("li");
    listItem.textContent = country;
    listItem.classList.add("country-list");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");
    deleteButton.onclick = function () {
      listItem.remove();

      const index = allCountries.indexOf(country);
      if (index !== -1) {
        allCountries.splice(index, 1);
      }

      displayFilteredCountries();
    };

    listItem.appendChild(deleteButton);
    searchResults.appendChild(listItem);
  });
}
