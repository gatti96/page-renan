import Menu from "./component/menu.js";
import ContentIndex from "./component/contentIndex.js";
import "./component/scss/index.scss";
import "./component/scss/common.scss";

function App() {
  return (
    <>
      <div>
        <Menu />
      </div>
      <div>
        <ContentIndex />
      </div>
    </>
  );
}

export default App;
