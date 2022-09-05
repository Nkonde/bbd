
let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose UN country';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://restcountries.com/v3.1/all';
fetch(url)
    .then(
        function (response) {
            response.json().then(function (data) {

                let countries = data.filter(element => element.unMember === true);

                //sorting by country
                countries.sort((a, b) => {
                    let fa = a.name.common,
                        fb = b.name.common;

                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                });
                countries.forEach(unCoutries => {
                    let option;
                    option = document.createElement('option');
                    option.text = unCoutries.name.common;
                    dropdown.add(option);

                });

            });
        }
    )
    .catch(function (err) {
        console.error('Fetch Error -', err);
    });



dropdown.addEventListener('change', (event) => {
    getSACovidData(event.target.value);
});



const covidApiUrl = "https://api.covid19api.com/summary";

async function getSACovidData(input) {
    const response = await fetch(covidApiUrl);
    const covidData = await response.json();

    let data_filter = covidData.Countries.filter(element => element.Country == input);


    data_filter.forEach(CountryCovidSummary => {

        if (CountryCovidSummary.Countries === null) {
            alert("Country Not found from Covid API");
        } else {

            document.getElementById("countryname").textContent = CountryCovidSummary.Country;
            document.getElementById("countrycode").textContent = CountryCovidSummary.CountryCode;
            document.getElementById("totalC").textContent = CountryCovidSummary.TotalConfirmed;
            document.getElementById("totalD").textContent = CountryCovidSummary.TotalDeaths;
            document.getElementById("totalR").textContent = CountryCovidSummary.TotalRecovered;
            document.getElementById("date").textContent = CountryCovidSummary.Date;
            document.getElementById("confirmed").textContent = CountryCovidSummary.NewConfirmed;
            document.getElementById("death").textContent = CountryCovidSummary.NewDeaths;
            document.getElementById("recovey").textContent = CountryCovidSummary.NewRecovered;
        }

    });
}

