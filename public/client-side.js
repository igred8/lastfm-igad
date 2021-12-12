
let lat, lng, ts;
// getLatlng();


function makeRequestString(apiurl, method, apikey) {
    // make a request string out of the given input
    const reqstring = `${apiurl}/?method=${method}&api_key=${apikey}&format=json`
    return reqstring
}

// let database = [];
const buttonTopArtists = document.getElementById('topartists');
buttonTopArtists.addEventListener('click', async event => {

    console.log('i have been clicked');

    const options = {
        method: 'GET'
      };
      
    // fetch data from /api server with options
    // const response = await fetch('/lastfm_api', options);
    // const json = await response.json();
    // console.log(json);

    // fetch from lastfm api
    const lastfm_api_url = 'http://ws.audioscrobbler.com/2.0';
    let lastfm_api_method = 'chart.getTopArtists'
    const lastfm_api_key = '27fb573df9e65acbfd6b16082ea48270';
    
    let reqstr = makeRequestString(lastfm_api_url,lastfm_api_method,lastfm_api_key);
    const response = await fetch(reqstr);
    const data = await response.json();
    console.log(data);

    
});

const buttonTopTracks = document.getElementById('toptracks');
buttonTopTracks.addEventListener('click', async event => {

    console.log('i have been clicked');

    const options = {
        method: 'GET'
      };
      
    // fetch data from /api server with options
    // const response = await fetch('/lastfm_api', options);
    // const json = await response.json();
    // console.log(json);

    // fetch from lastfm api
    const lastfm_api_url = 'http://ws.audioscrobbler.com/2.0';
    let lastfm_api_method = 'chart.getTopTracks'
    const lastfm_api_key = '27fb573df9e65acbfd6b16082ea48270';
    
    let reqstr = makeRequestString(lastfm_api_url,lastfm_api_method,lastfm_api_key);
    const response = await fetch(reqstr);
    const data = await response.json();
    console.log(data);

    
});

const buttonTopTags = document.getElementById('toptags');
buttonTopTags.addEventListener('click', async event => {

    console.log('i have been clicked');

    const options = {
        method: 'GET'
      };
      
    // fetch data from /api server with options
    // const response = await fetch('/lastfm_api', options);
    // const json = await response.json();
    // console.log(json);

    // fetch from lastfm api
    const lastfm_api_url = 'http://ws.audioscrobbler.com/2.0';
    let lastfm_api_method = 'chart.getTopTags'
    const lastfm_api_key = '27fb573df9e65acbfd6b16082ea48270';
    
    let reqstr = makeRequestString(lastfm_api_url,lastfm_api_method,lastfm_api_key);
    const response = await fetch(reqstr);
    const data = await response.json();
    console.log(data);

    
});

async function getLatlng() {
    // check if geolocation is available on the browser through navigator api
    if ('geolocation' in navigator) {
        console.log( 'geolocation is available');
    
        // GET the current position 
        navigator.geolocation.getCurrentPosition( async pos => {
            // console.log(pos)
            lat = pos.coords.latitude;
            lng = pos.coords.longitude;
            document.getElementById('latitude').textContent = lat.toFixed(3);
            document.getElementById('longitude').textContent = lng.toFixed(3);
             
        });
        
        
    } else {
        console.log('geolocation is NOT available');
    };

    // setTimeout(()=> {
    //     console.log('waited for 2 sec...')
    // }, 2000);

};
