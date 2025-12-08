export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      {/* TODO: Add dynamic image */}
      <img src={recipe.img} alt={recipe.title} />

      <div className="recipe-card-content">
        <h3>{recipe.title}</h3>

        {/* TODO: Add description */}
        <p className="recipe-desc">{recipe.description || "A delicious treat curated for your mood."}</p>
        {/* TODO: Add view more button */}
        <button className="view-more-btn" onClick={() => alert(`${recipe.title}`)}>View more</button>
      </div>
    </div>
  );
}
