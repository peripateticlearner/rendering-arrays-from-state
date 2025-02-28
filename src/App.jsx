import { useState } from "react";
import Learner from "./components/Learner";
import learners from "./data/learners";

function App() {
  const [learnerData] = useState(learners);

  return (
    <div>
      <h1>React Learners</h1>
      {learnerData.map((learner, index) => (
        <Learner key={index} name={learner.name} bio={learner.bio} scores={learner.scores} />
      ))}
    </div>
  );
}

export default App;
