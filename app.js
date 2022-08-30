let loadMeals = () => {
	let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=a`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayMeals(data.meals));
};

let displayMeals = (meals) => {
	let foodContainer = document.getElementById('food-container');
	foodContainer.innerHTML = '';

	meals.forEach((meal) => {
		console.log(meal);
		let foodDiv = document.createElement('div');
		foodDiv.classList.add('col');
		foodDiv.innerHTML = `
        
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 100)}
            </p>
        </div>
        </div>
        `;
		foodContainer.appendChild(foodDiv);
	});
};

loadMeals();
