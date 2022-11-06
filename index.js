let getDataBtn = document.getElementById("getDataBtn")
let inpStateName = document.getElementById("inp-state")
let searchBtn = document.getElementById("search-btn")
let result = document.getElementById("result")


getDataBtn.addEventListener("click", () => {
    let loader = `<div class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;
    document.getElementById('result').innerHTML = loader;

    setTimeout(() => {
        getCovidData();
    }, 1000);
})

function getCovidData() {
    //     let loader = `<div class="text-center">
    //     <div class="spinner-border" role="status">
    //       <span class="visually-hidden">Loading...</span>
    //     </div>
    //   </div>`;
    //     document.getElementById('result').innerHTML = loader;

    let url = "https://data.covid19india.org/v4/min/data.min.json"
    fetch(url).then(Response => Response.json()).then((data) => {
        result.innerHTML =
            `
        <div class="container" id="result">
        <h1>Meta Data</h1>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">✔</th>
                    <th scope="col">Date</th>
                    <th scope="col">Last updated</th>
                    <th scope="col">Population</th>
                </tr>
            </thead>
            <tbody>
                <tr id="metaData">
                    <th scope="row">🔗</th>
                    <td> ${data.GJ.meta.date} </td>
                    <td> ${data.GJ.meta.last_updated} </td>
                    <td> ${data.GJ.meta.population} </td>
                </tr >
            </tbody >
        </table >
        <hr>
        <h1>Totals</h1>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">✔</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Deceased</th>
                    <th scope="col">Recovered</th>
                </tr>
            </thead>
            <tbody>
                <tr id="totalData1">
                    <th scope="row">🔗</th>
                    <td>${data.GJ.total.confirmed}</td>
                    <td>${data.GJ.total.deceased}</td>
                    <td>${data.GJ.total.recovered}</td>
                </tr>
            </tbody>
        </table>

        <table class="table table-dark table-hover table-striped">
            <thead>
                <tr>
                    <th scope="col">✔</th>
                    <th scope="col">Tested</th>
                    <th scope="col">Vaccinated-1</th>
                    <th scope="col">Vaccinated-2</th>
                </tr>
            </thead>
            <tbody>
                <tr id="totalData2">
                    <th scope="row">🔗</th>
                    <td>${data.GJ.total.tested}</td>
                    <td>${data.GJ.total.vaccinated1}</td>
                    <td>${data.GJ.total.vaccinated2}</td>
                </tr>
            </tbody>
        </table />

        <hr>
        <h5>Recovery Rate</h5>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success " role="progressbar"
                aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                style="width: 65%">
            </div>
        </div>
        <hr>
        <h5>Death Rate</h5>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated  bg-danger" role="progressbar"
                aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                style="width: 45%">
            </div>
        </div>
        <hr>
        <h5>Testing</h5>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-info " role="progressbar"
                aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                style="width: 90%">
            </div>
        </div>
        <div class="container">
            <h1>Extra empty space</h1>
        </div>
    </div > `








    })
}