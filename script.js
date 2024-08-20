const container = document.getElementById("container");
const mealDataContainer = document.getElementById("mealDataContainer");
const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";
const newRecipeButton = document.getElementById("newRecipeButton");
const clearButton = document.getElementById("clearButton");

async function getMealData() {
    try {
        const response = await fetch(randomMealURL);

        if (!response.ok) {
            throw new Error(`Response Status: ${response}`);
        }

        const mealData = await response.json();
        console.log(mealData);
        return mealData;
    }
    catch (error) {
        console.log(error);
        return null;
    }
};

function showMealData(mealData) {
    clearMealData();

    if (mealData) {
        mealName = document.createElement("div");
        mealName.style.fontWeight = "bold"
        mealName.textContent = `${mealData.meals[0].strMeal}`;
        mealDataContainer.appendChild(mealName);

        mealImage = document.createElement("img");
        mealImage.src = mealData.meals[0].strMealThumb;
        mealDataContainer.appendChild(mealImage);

        instructionsHeader = document.createElement("div");
        instructionsHeader.classList.add("instructionsHeader");
        instructionsHeader.textContent = "Cooking Instructions: ";
        mealDataContainer.appendChild(instructionsHeader);

        mealInstructions = document.createElement("div");
        mealInstructions.textContent = `${mealData.meals[0].strInstructions}`;
        mealDataContainer.appendChild(mealInstructions);

        console.log(`Meal Name is: ${mealData.meals[0].strMeal}`);
        console.log(`Image: ${mealData.meals[0].strMealThumb}`);
        console.log(`Cooking Instructions: ${mealData.meals[0].strInstructions}`);
    } else {
        console.log("No meal data available.");
    }

};

function clearMealData() {
    while (mealDataContainer.firstChild) {
        mealDataContainer.removeChild(mealDataContainer.firstChild);
    }
}

newRecipeButton.addEventListener("click", async () => {
    const mealData = await getMealData();
    showMealData(mealData);
});

clearButton.addEventListener("click", clearMealData);


