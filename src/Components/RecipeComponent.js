import React, { useState } from "react";

function RecipeComponent() {
    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const [dietryRestriction, setDietryRestriction] = useState('');
    const [recipe, setRecipe] = useState('');

    const createRecipe = async () => {
        try {
            const response = await fetch(`http://localhost:8083/create-recipe?ingredients=${ingredients}&cuisine=${cuisine}&dietryRestriction=${dietryRestriction}`);
            setRecipe(await response.text());
        } catch (error) {

        }
    };

    return (
        <div className="tab-content">
            <h2>Creat a Recipe</h2>
            <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)}
                placeholder="Enter an Engredients (Comma Saperated value)"
            />
            <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)}
                placeholder="Enter an Cuisine"
            />
            <input type="text" value={dietryRestriction} onChange={(e) => setDietryRestriction(e.target.value)}
                placeholder="Enter an Dietry Restriction"
            />
            <button onClick={createRecipe}>Create Recipe</button>
            <div className="output">
                <pre className="recipe-text">{recipe}</pre>
            </div>
        </div >
    );
}

export default RecipeComponent;