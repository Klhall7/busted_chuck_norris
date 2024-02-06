'use strict';
const categoryListFormEl = document.querySelector('#categoryListForm');

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM IS READY');

    const apiUrl = 'https://api.chucknorris.io/jokes/random?category=dev';
    generateQuote(apiUrl);

    const categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
    get(categoriesUrl).then(function (response) {
        console.log("CATEGORY RESPONSE:", response);
        generateCategoryList(response);
    });

    categoryListFormEl.addEventListener('submit', function (event) {
        event.preventDefault();
        const newCategory = this.querySelector('select').value;
        const apiUrl = `https://api.chucknorris.io/jokes/random?category=${newCategory}`;
        generateQuote(apiUrl);
    });


function generateQuote(apiUrl) {
    const chuckQuote2 =document.querySelector('#chuckQuote');

    get(apiUrl).then(function (response) {
        chuckQuote2.innerText = response.value
    });
}



function generateCategoryList(categoryArray) {
    const selectEl = document.createElement('select');
    // Filter out the explicit category
    const filteredCategories = categoryArray.filter(function (category) {
        if (category !== 'explicit') {
            return category;
        }
    });
    filteredCategories.map(function (category) {
        // create an option element
        const option = document.createElement('option');
        // define option attributes
        option.value = category;
        option.text = category;
        // append the option to the <select>
        selectEl.appendChild(option);
        categoryListFormEl.append(selectEl);
        // append the <select> to the <form>   
        
    });
    
};

});