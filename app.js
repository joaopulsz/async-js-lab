const countriesSection = document.getElementById('countries');
const list = document.createElement('ul');
countriesSection.appendChild(list);

const getCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();

    const countryNames = countries.map(country => country.name.common);
    countryNames.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        list.appendChild(listItem);
    })
}

getCountries()