let button = document.querySelector('#button');
let name = document.querySelector('#name');
let height = document.querySelector('#height');
let mass = document.querySelector('#mass');
let birthYear = document.querySelector('#birth-year');
let chargeIcon = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>';




let displayInfo = () => {
    updateWhenLoadingPage();
    let randomInfo = Math.floor((Math.random() * 88) + 1);

    axios.get(`https://swapi.co/api/people/${randomInfo}`).then( response => {
    updateInfo(response.data);
    }).catch( e => {
        updateInfoWhenApiError();
        //This will execute when Api interaction get an error.
    })
}

let updateInfo = (data) => {
    name.innerText = data.name;
    height.innerText = `Height: ${data.height} cm`;
    mass.innerText = `Mass: ${data.mass}`;
    birthYear.innerText = `Birth Year: ${data.birth_year}`;
  
}

let updateInfoWhenApiError = () => {
    name.innerText = 'Api Error, That person is not Available'
    height.innerText = ''
    mass.innerText = ''
    birthYear.innerText = ''
    
}

let updateWhenLoadingPage = () => {
    name.innerHTML = chargeIcon;
    height.innerText = ''
    mass.innerText = ''
    birthYear.innerText = ''
    
}

button.addEventListener('click', displayInfo);