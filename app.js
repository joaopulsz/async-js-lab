const countriesSection = document.getElementById('countries');
const list = document.createElement('ul');
countriesSection.appendChild(list);

const getCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();

    const countryNameAndFlag = countries.map(country => {
        const name = country.name.common;
        const flag = country.flag;
        return `${flag} ${name}`;
    });

    countryNameAndFlag.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    })
}

getCountries()