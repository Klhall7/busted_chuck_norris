'use strict';

function get(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            return (data);
        })
        .catch(function (error) {
            console.error('ERROR:', error);
        });
}