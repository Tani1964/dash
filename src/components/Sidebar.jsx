import React from "react";

import CloudSharpIcon from "@mui/icons-material/CloudSharp";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import DriveFileMoveSharpIcon from "@mui/icons-material/DriveFileMoveSharp";
import AdjustSharpIcon from "@mui/icons-material/AdjustSharp";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import ForumSharpIcon from "@mui/icons-material/ForumSharp";
import DateRangeSharpIcon from "@mui/icons-material/DateRangeSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import UpdateSharpIcon from "@mui/icons-material/UpdateSharp";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { SidebarContext } from "../contexts/SidebarContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const Switch = () => {
  return <div></div>;
};

const Opened = () => {
  const { setSidebar } = useContext(SidebarContext);
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="border-b-1 py-4 flex justify-between">
          <Link to="/" className="flex items-center gap-3">
            <CloudSharpIcon style={{ fontSize: "200%", color: "skyblue" }} />{" "}
            <div className="font-bold text-2xl text-white">TASK</div>
          </Link>
          <div className="bg-gray-700 rounded-full px-1 translate-x-4 shadow-lg border-black border">
            <ArrowBackIosOutlinedIcon
              onClick={() => {
                setSidebar(false);
              }}
            />
          </div>
        </div>

        {/* Overview */}
        <div className="flex flex-col gap-6 ">
          <Link
            to="/"
            className="hover:bg-slate-500  rounded-l-full hover:pl-4 delay-150 duration-300 ease-in-out"
            onClick={() => {
              setSidebar(false);
            }}
          >
            <div>
              <DashboardSharpIcon /> Overview
            </div>
          </Link>

          {/* Project */}
          <Link
            to="/project"
            className="hover:bg-slate-500  rounded-l-full hover:pl-4 delay-150 duration-300 ease-in-out"
            onClick={() => {
              setSidebar(false);
            }}
          >
            <div>
              <DriveFileMoveSharpIcon /> Project
            </div>
          </Link>

          {/* Activity */}
          <Link
            to="/activity"
            className="hover:bg-slate-500  rounded-l-full hover:pl-4 delay-150 duration-300 ease-in-out flex justify-between px-1"
            onClick={() => {
              setSidebar(false);
            }}
          >
            <div className="-ml-1">
              <AdjustSharpIcon /> Activity
            </div>
            <Tooltip
              title={
                <React.Fragment className="flex flex-row">
                  <p color="inherit m-4">
                    You have a new Activity available today!
                  </p>
                  <button className="bg-blue-600 w-full text-white px-6 h-fit py-3 rounded-md">
                    Check Them
                  </button>
                </React.Fragment>
              }
              arrow
            >
              <div className="bg-red-700 px-2  rounded-md text-white animate-pulse	">
                1
              </div>
            </Tooltip>
          </Link>

          {/* Messages */}
          <Link
            to="/messages"
            className="hover:bg-slate-500  rounded-l-full hover:pl-4 delay-150 duration-300 ease-in-out flex justify-between px-1"
            onClick={() => {
              setSidebar(false);
            }}
          >
            <div className="-ml-1">
              <ForumSharpIcon /> Messages
            </div>
            <Tooltip
              title={
                <React.Fragment className="flex flex-row">
                  <p color="inherit m-4">
                    You have new messages available today!
                  </p>
                  <button className="bg-blue-600 w-full text-white px-6 h-fit py-3 rounded-md">
                    Check Them Now
                  </button>
                </React.Fragment>
              }
              arrow
            >
              <div className="bg-red-700 px-2 rounded-md text-white animate-pulse	">
                1
              </div>
            </Tooltip>
          </Link>

          <Link
            to="/members"
            className="hover:bg-slate-500  rounded-l-full hover:pl-4 delay-150 duration-300 ease-in-out"
            onClick={() => {
              setSidebar(false);
            }}
          >
            <div>
              <PeopleAltSharpIcon /> Members
            </div>
          </Link>

          <Link
            to="/calenders"
            className="hover:bg-slate-500  rounded-l-full hover:pl-4 delay-150 duration-300 ease-in-out"
            onClick={() => {
              setSidebar(false);
            }}
          >
            <div>
              <DateRangeSharpIcon /> Calenders
            </div>
          </Link>

          <Link
            to="setting"
            className="hover:bg-slate-500  rounded-l-full hover:pl-4 delay-150 duration-300 ease-in-out"
            onClick={() => {
              setSidebar(false);
            }}
          >
            <div>
              <SettingsSharpIcon /> Setting
            </div>
          </Link>

          <Link
            to="/new_update"
            className="hover:bg-slate-500  rounded-l-full hover:pl-4 delay-150 duration-300 ease-in-out flex justify-between px-1"
            onClick={() => {
              setSidebar(false);
            }}
          >
            <div className="-ml-1">
              <UpdateSharpIcon /> New update
            </div>
            <Tooltip
              title={
                <React.Fragment className="flex flex-row">
                  <p color="inherit m-4">
                    You have a new feature available today!
                  </p>
                  <button className="bg-blue-600 w-full text-white px-6 h-fit py-3 rounded-md">
                    Update New
                  </button>
                </React.Fragment>
              }
              arrow
            >
              <div className="bg-red-700 text-white px-2 rounded-md animate-pulse	">
                1
              </div>
            </Tooltip>
          </Link>
        </div>
      </div>

      <div>
        <Switch />
        <div className="flex gap-2 pb-6 items-center">
          <div className="rounded-full bg-white w-10 h-10"></div>
          <div>
            <h1 className="text-white text-semibold text-md">Robert Fox</h1>
            <p className="text-sm">Manager</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Closed = () => {
  const { setSidebar } = useContext(SidebarContext);
  return (
    <>
      <div>
        <div className="border-b-1 py-6 -translate-x-2 pl-4">
          <Link to="/" className="mb-4">
            <CloudSharpIcon style={{ fontSize: "200%", color: "skyblue" }} />
          </Link>
          <div className="bg-gray-700 rounded-full w-fit px-1  mt-2 shadow-lg border-black border delay-100  ">
            <ArrowForwardIosOutlinedIcon
              onClick={() => {
                setSidebar(true);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-3 ">
          <Link
            to="/"
            className="hover:translate-x-4 hover:bg-slate-500 rounded-full pt-1 pr-3 pb-3 pl-3 w-fit h-fit transition delay-150 duration-300 ease-in-out"
          >
            <DashboardSharpIcon />
          </Link>
          <Link
            to="/project"
            className="hover:translate-x-4 hover:bg-slate-500 rounded-full pt-1 pr-3 pb-3 pl-3 w-fit h-fit transition delay-150 duration-300 ease-in-out"
          >
            <DriveFileMoveSharpIcon />
          </Link>
          <Link
            to="activity"
            className="hover:translate-x-4 hover:bg-slate-500 rounded-full pt-1 pr-3 pb-3 pl-3 w-fit h-fit transition delay-150 duration-300 ease-in-out"
          >
            <AdjustSharpIcon />
          </Link>
          <Link
            to="/messages"
            className="hover:translate-x-4 hover:bg-slate-500 rounded-full pt-1 pr-2 pb-1 pl-3 w-fit h-fit transition delay-150 duration-300 ease-in-out"
          >
            <ForumSharpIcon />
          </Link>
          <Link
            to="/members"
            className="hover:translate-x-4 hover:bg-slate-500 rounded-full pt-1 pr-2 pb-1 pl-3 w-fit h-fit transition delay-150 duration-300 ease-in-out"
          >
            <PeopleAltSharpIcon />
          </Link>
          <Link
            to="/calenders"
            className="hover:translate-x-4 hover:bg-slate-500 rounded-full pt-1 pr-3 pb-3 pl-3 w-fit h-fit transition delay-150 duration-300 ease-in-out"
          >
            <DateRangeSharpIcon />
          </Link>
          <Link
            to="/setting"
            className="hover:translate-x-4 hover:bg-slate-500 rounded-full pt-1 pr-3 pb-3 pl-3 w-fit h-fit transition delay-150 duration-300 ease-in-out"
          >
            <SettingsSharpIcon />
          </Link>
          <Link
            to="new_update"
            className="hover:translate-x-4 hover:bg-slate-500 rounded-full pt-1 pr-3 pb-3 pl-3 w-fit h-fit transition delay-150 duration-300 ease-in-out"
          >
            <UpdateSharpIcon />
          </Link>
        </div>
      </div>
      <div>
        <Switch />
      </div>
    </>
  );
};

const Sidebar = () => {
  const { sidebar } = useContext(SidebarContext);
  return (
    <div
      className={`${
        sidebar
          ? " w-3/6 lg:w-1/6 bg-gray-700 text-gray-400 text-sm md:text-sm h-screen flex flex-col justify-between align-middle pl-4 transition delay-700 duration-300 ease-in-out fixed z-30"
          : "w-fit bg-gray-700 text-gray-400 text-lg h-screen flex flex-col justify-between align-middle  transition delay-700 duration-300 ease-in-out fixed"
      }`}
    >
      {sidebar ? <Opened /> : <Closed />}
    </div>
  );
};

export default Sidebar;
