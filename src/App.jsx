import Posts from "./posts/Posts";
import Todos from "./todos/components/Todos";

const App = () => {
  return (
    <div>
      <Todos />
      <Posts />
    </div>
  );
};

export default App;
