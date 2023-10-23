import { Provider } from "react-redux";
import store from "./redux/store";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <h1>Book Library</h1>
          <BookList />
        </div>
      </Provider>
    </>
  );
}

export default App;
