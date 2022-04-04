window.addEventListener('load', ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')  
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
    
    let ubicacion = document.getElementById('ubicacion')  
    let iconoAnimado = document.getElementById('icono-animado') 

    let vientoVelocidad = document.getElementById('viento-velocidad') 


    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {
           //console.log(posicion.coords.latitude)
           lon = posicion.coords.longitude
           lat = posicion.coords.latitude
            //ubicación actual    
           //const url = `http://api.weatherapi.com/v1/current.json?key= cd1433c2f5be41a59db153636221603&q=London&aqi=yes`

           //ubicación por ciudad
           const url = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&lang=es&units=metric&appid=685b186fe414822385a4d515471be2e3`

           //console.log(url)

           fetch(url)
            .then( response => { return response.json()})
            .then( data => {
                //console.log(data)
                
                let temp = Math.round(data.main.temp)
                //console.log(temp)
                temperaturaValor.textContent = `${temp} ° C`

                //console.log(data.weather[0].description)
                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                ubicacion.textContent = data.name
                
                vientoVelocidad.textContent = `${data.wind.speed} m/s`
                
                //para iconos estáticos
                //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
                //icono.src = urlIcon
                //console.log(data.weather[0].icon)

                //para iconos dinámicos
                console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                      iconoAnimado.src='animated/thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='animated/rainy-2.svg'
                      console.log('Granizo');
                      break;
                    case 'Rain':
                      iconoAnimado.src='animated/rainy-7.svg'
                      console.log('LLUVIA');
                      break;
                    case 'Snow':
                      iconoAnimado.src='animated/snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                    case 'Clear':
                        iconoAnimado.src='animated/day.svg'
                        console.log('LIMPIO');
                      break;
                    case 'Atmosphere':
                      iconoAnimado.src='animated/weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                    case 'Clouds':
                        iconoAnimado.src='animated/cloudy-day-1.svg'
                        console.log('NUBES');
                        break;  
                    default:
                      iconoAnimado.src='animated/cloudy-day-1.svg'
                      console.log('por defecto');
                  }

            })
            .catch( error => {
                console.log(error)
            })
       })
          
    }
})



// http://api.weatherapi.com/v1/current.json?key= cd1433c2f5be41a59db153636221603&q=London&aqi=yes

//http://api.weatherapi.com/v1/forecast.json?key= cd1433c2f5be41a59db153636221603&q=London&days=7&aqi=yes&alerts=yes

//http://api.weatherapi.com/v1/search.json?key= cd1433c2f5be41a59db153636221603&q=London

//http://api.weatherapi.com/v1/history.json?key= cd1433c2f5be41a59db153636221603&q=London&dt=2010-01-01

//http://api.weatherapi.com/v1/future.json?key= cd1433c2f5be41a59db153636221603&q=London&dt=2022-04-15

//http://api.weatherapi.com/v1/astronomy.json?key= cd1433c2f5be41a59db153636221603&q=London&dt=2022-03-16

//http://api.weatherapi.com/v1/timezone.json?key= cd1433c2f5be41a59db153636221603&q=London

//http://api.weatherapi.com/v1/sports.json?key= cd1433c2f5be41a59db153636221603&q=London -->
