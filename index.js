const express = require('express');

// create application
const app = express();
const portnum = 3000;

app.listen(portnum, () => {
    console.log(`app listening at http://localhost:${portnum}`)
  })
// use the files in 'public' 
app.use(express.static('public'));

// limit the data stream into the server
app.use(express.json({limit: '1mb'}));
// post the requested data back to the client
// app.post('/api', async (request, response) => {
//     console.log('request:');
//     console.log(request.body);
//     const datarow = await request.body;
//     // timestamp of button click
//     const timestamp = Date.now();
//     datarow.ts = timestamp;
//     // add to database
//     // db.insert(datarow);
    
//     response.json(datarow);
//     // response.json({
//     //     stauts: 'success',
//     //     latitude: datarow.lat,
//     //     longitude: datarow.lng,
//     //     timestamp: datarow.ts
//     // });
// });

const lastfm_auth_url = 'http://www.last.fm/api/auth/';
const lastfm_api_key = '27fb573df9e65acbfd6b16082ea48270';
app.get('/lastfm_api', (request, response) => {
    auth_url = lastfm_auth_url + '?api_key=' + lastfm_api_key;
    fetch(auth_url);
    const data = response.json();
    // response.json({test: '123'});
});

