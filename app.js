document.getElementById('spinner').style.display = 'none';

let loadFoods = (searchText, foodLimit) => {
	let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayFoods(data.meals, foodLimit));
};

loadFoods('');

let displayFoods = (meals, foodLimit) => {
	let foodContainer = document.getElementById('food-container');
	foodContainer.innerHTML = '';

	// validation for Error message
	let errorMessage = document.getElementById('error-message');
	if (meals.length === 0) {
		errorMessage.classList.remove('d-none');
	}
	// else {
	// 	errorMessage.classList.add('d-none');
	// }

	// display 10 food items
	let showAll = document.getElementById('show-all');

	if (foodLimit && meals.length > 10) {
		meals = meals.slice(0, 10);
		showAll.classList.remove('d-none');
	} else {
		showAll.classList.add('d-none');
	}

	// display all meals
	meals.forEach((meal) => {
		console.log(meal);

		let foodDiv = document.createElement('div');
		foodDiv.classList.add('col');
		foodDiv.innerHTML = `
        <div class="card h-100">
                            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${meal.strMeal}</h5>
                                <p class="card-text">${meal.strInstructions.slice(0, 150)}
                                </p>
                            </div>
        </div>
        `;
		foodContainer.appendChild(foodDiv);
	});
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
