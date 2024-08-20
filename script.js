const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

async function getMealData() {
    try {
        const response = await fetch(randomMealURL);

        if (!response.ok) {
            throw new Error(`Response Status: ${response}`);
        }

        const mealData = await response.json();
        console.log(mealData);
    }
    catch (error) {
        console.log(error);
    }
}

getMealData();