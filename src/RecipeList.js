import React from "react";
import Recipe from "./Recipe";

function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
 
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
 
        <tbody className="content_row">
          { 
            recipes.map((recipe, index) => 
              ( <Recipe key={index} index={index} deleteRecipe={deleteRecipe} recipe={recipe} /> )
            ) 
          }  
        </tbody>
      </table>
    </div>
    //map over the recipies to create the list.
  );
}

export default RecipeList;
