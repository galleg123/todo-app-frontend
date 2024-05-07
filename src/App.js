// import LoginPage from "./Login_Page/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Login_Page/LoginPage";
import TodoPage from "./Todo_Page/TodoPage";
import FriendsList from "./Friends_List/FriendsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>} />
        <Route path="/todos" element={<TodoPage></TodoPage>} />
        <Route path="/friends" element={<FriendsList></FriendsList>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
