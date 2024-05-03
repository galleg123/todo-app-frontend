// import LoginPage from "./Login_Page/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Login_Page/LoginPage";
import TodoPage from "./Todo_Page/TodoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>} />
        <Route path="/todos" element={<TodoPage></TodoPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
