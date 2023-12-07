import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview"
import Project from "./pages/Project"
import Activity from "./pages/Activity"
import Messages from "./pages/Messages"
import Members from "./pages/Members"
import Calender from "./pages/Calender"
import Setting from "./pages/Setting"
import NewUpdate from "./pages/NewUpdate"
import { SidebarContext } from "./contexts/SidebarContextProvider";
import { useContext } from "react";



export default function App() {
  const {sidebar} = useContext(SidebarContext)
  return (
    <BrowserRouter>
      <div className="flex m-0 p-0">
        <Sidebar className={sidebar?`w-1/3 p-2 pl-4 bg-gray-800 text-gray-400`: `w-1/3 bg-gray-800 p-2 pl-20  text-gray-400`}/>
        <div className={sidebar?`w-full p-2 pl-4 bg-gray-800 text-gray-400`: `w-full bg-gray-800 p-2 pl-20  text-gray-400`}>
          <Routes>
            <Route path="/" element={<Overview/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/activity" element={<Activity/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/members" element={<Members/>}/>
            <Route path="/calenders" element={<Calender/>}/>
            <Route path="/setting" element={<Setting/>}/>
            <Route path="/new_update" element={<NewUpdate/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
