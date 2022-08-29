document.getElementById('spinner').style.display = 'none';

let loadFoods = (searchText, foodLimit) => {
	let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayFoods(data.meals));
};

loadFoods('');

let displayFoods = (meals, foodLimit) => {
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
                                <p class="card-text">${meal.strInstructions.slice(0, 150)}
                                </p>
                            </div>
        </div>
        `;
		foodContainer.appendChild(foodDiv);
	});
};
