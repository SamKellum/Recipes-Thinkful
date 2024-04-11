import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  };

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody className="content_row">
          <tr>
            <td>
              <input type="text" value={formData.name} onChange={handleChange} name="name" required placeholder="Name" />
            </td>
            <td>
              <input type="text" value={formData.cuisine} onChange={handleChange} name="cuisine" required placeholder="Cuisine" />
            </td>
            <td>
              <input type="url" value={formData.photo} onChange={handleChange} name="photo" required placeholder="URL" />
            </td>
            <td>
              <textarea type="text" value={formData.ingredients} onChange={handleChange} name="ingredients" required placeholder="Ingredients" />
            </td>
            <td>
              <textarea type="text" value={formData.preparation} onChange={handleChange} name="preparation" required placeholder="Preparation" />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;