let spinner = document.getElementById('spinner');
// let toggleSpinner = (isTrue) => {
// 	if (isTrue === true) {
// 		spinner.classList.remove('d-none');
// 	} else {
// 		spinner.classList.add('d-none');
// 	}
// };

let loadFoods = (searchText, foodLimit) => {
	// toggleSpinner(true);
	let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayFoods(data.meals, foodLimit));
};

let displayFoods = (meals, foodLimit) => {
	console.log(meals);
	let foodContainer = document.getElementById('food-container');
	foodContainer.innerHTML = '';

	// display 10 food items
	let showAll = document.getElementById('show-all');

	if (foodLimit && meals.length > 10) {
		meals = meals.slice(0, 10);
		showAll.classList.remove('d-none');
	} else {
		showAll.classList.add('d-none');
	}

	// validation for Error message
	let errorMessage = document.getElementById('error-message');
	if (meals.length == 0) {
		errorMessage.classList.remove('d-none');
	} else {
		errorMessage.classList.add('d-none');
	}

	// display all meals
	meals.forEach((meal) => {
		let foodDiv = document.createElement('div');
		foodDiv.classList.add('col');
		foodDiv.innerHTML = `
        <div class="card h-100">
                            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h3 class="card-title fw-bolder">${meal.strMeal}</h3>
                                <h5 class="card-text">Category: ${meal.strCategory}
                                </h5>
                            </div>
        </div>
        `;
		foodContainer.appendChild(foodDiv);
	});
	// toggleSpinner(false);
};

let searchProcess = (foodLimit) => {
	let searchField = document.getElementById('search-field');
	let searchText = searchField.value;
	loadFoods(searchText, foodLimit);
};

document.getElementById('search-btn').addEventListener('click', function (e) {
	searchProcess(10);
});

document.getElementById('search-field').addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		searchProcess(10);
	}
});

document.getElementById('show-all-button').addEventListener('click', function (e) {
	searchProcess();
});

loadFoods('fish');
