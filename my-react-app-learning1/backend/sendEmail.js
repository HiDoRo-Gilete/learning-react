const axios = require('axios');

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);

async function sendEmail(name, email, subject, message) {
    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": "huynhhuy06022003@gmail.com", "Name": "21-0253 Huỳnh Quốc HuyHuy"},
        "To": [{"Email": "trankhai6323@gmail.com", "Name": "Khai Tran"}],
        "Subject": subject,
        "TextPart": "Hello"
      }]
    });
  
    const config = {
      method: 'post',
      url: 'https://api.mailjet.com/v3.1/send',
      data: data,
      headers: {'Content-Type': 'application/json'},
      auth: {username: 'huynhhuy06022003', password: 'Huy06022003@'},
    };
  
    return axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  
  }
  
  // define your own email api which points to your server.
  http.post('/api/sendemail/', function (req, res) {
    const {name, email, subject, message} = req.body;
    //implement your spam protection or checks.
    sendEmail(name, email, subject, message);
  });