const request = require("request");
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const mongoose = require('mongoose');
const TEST_DATABASE_URL = 'mongodb://blueOperator:BombasticJewel!@ds145148.mlab.com:45148/rias-test-blog-api';

const { User } = require('../models/user.js');
const { app, runServer, closeServer } = require('../server.js');

// SEEDING DATA
function seedUserData(){

}

function generateUser(){

    const options = {
        method: 'GET',
        url: 'http://path_to_your_api/',
        headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5rVXpNRVkxUXpOQ05qQXlOREF4UVRSR1JERXlNREE1UVVNeE4wUkdOamcwTlRjelFrWkNRdyJ9.eyJpc3MiOiJodHRwczovL3JpYWNhcm1pbi5hdXRoMC5jb20vIiwic3ViIjoicjBVOFBjUnR3OUxNYWtrdzBNVjltam5IWWI3Z2s3ZTNAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbWVlbmsubWUvYXBpIiwiZXhwIjoxNTAwMzM1ODA5LCJpYXQiOjE1MDAyNDk0MDksInNjb3BlIjoiIn0.bCsn6HsWBVNSVhGx5tgqxJv812DhJ7BGIsD3sTXokRDR6gTm8IVvZtsEwmOC-PWuwhSumCa07Iei8RuCV4_vWlymAXe94Oj-Hsj3ct5sQNgq_HRvNWdfImeWGP83IhHCFnWm6a5yeopd14hWz21vB8epUK15Zu62RnoJ1umtTIOMpo5BZILGVQQ6DB1_4UHJVpAuKfY5GjQz03_awP1zILMpV8S83zXX25-KFnYcZs29OO5pW6MYxKV-6hMNDjo9eo37TBl0J2Tuia1hzMm2XcejPKT3JTO6mL2Ioxtl0mkFrSGGnuzdhsBs0KlFJyqO3OSeyI4C1CBi7J1_n6Dm_g' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

          console.log(body);
    });
}