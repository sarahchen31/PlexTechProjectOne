import React from "react";

const Recipe = ({title, image, ingredients}) => {
  return(
    <div className="card">
      <h2>{title}</h2>
      <p>Ingredients:</p>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img src = {image} alt= "" />
    </div>
  )
}

export default Recipe;

    // app.get('/api/courses/:id',(req, res) => {
    //     let course = courses.find(c => c.id == parseInt(req.params.id))
    //     if (!course) res.status(404).send('course DNE')
    //     res.send(course)
    // });

    