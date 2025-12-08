import Header from "../components/Header";
import MoodSelector from "../components/MoodSelector";
import RecipesList from "../components/RecipesList";

export default function Home() {
  const { useState } = require("react");
  const [activeMood, setActiveMood] = useState("Happy");
  return (
    <div className="container">
      <Header />

      {/* Mood Selection Component */}
      <MoodSelector activeMood={activeMood} onChangeMood={setActiveMood} />

      {/* Recipes List Component */}
      <RecipesList activeMood={activeMood} />
    </div>
  );
}
