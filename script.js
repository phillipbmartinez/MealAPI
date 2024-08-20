const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";
const newRecipeButton = document.getElementById("newRecipeButton");

async function getMealData() {
    try {
        const response = await fetch(randomMealURL);

        if (!response.ok) {
            throw new Error(`Response Status: ${response}`);
        }

        const mealData = await response.json();
        console.log(mealData);
        // console.log(mealData.meals[0].strMeal);
        return mealData;
    }
    catch (error) {
        console.log(error);
        return null;
    }
};

function showMealData(mealData) {
    if (mealData) {
        console.log(`Meal Name is: ${mealData.meals[0].strMeal}`);
    } else {
        console.log("No meal name available.");
    }
    
};



newRecipeButton.addEventListener("click", async () => {
    const mealData = await getMealData();
    showMealData(mealData);
});




