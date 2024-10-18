import { Route, Routes } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import ListUsers from "../pages/ListUsers";
import LayoutListUsers from "../pages/ListUsers/MainLayout";

export function RoutersMain() {
  return (
    <Routes>
      <Route path="/" element={<LayoutListUsers />}>
        <Route index element={<ListUsers />} />
        <Route path="/:userID" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}
