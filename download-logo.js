const fs = require('fs');
const https = require('https');

const url = 'https://files.fm/u/jb9jnmddd5';
const file = fs.createWriteStream('public/original-logo.png');

https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Logo downloaded successfully!');
  });
}).on('error', (err) => {
  console.log('Error downloading logo:', err.message);
});