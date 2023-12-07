import Taskbar from "../components/Taskbar";
import Cards from "../components/Cards";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import CachedIcon from "@mui/icons-material/Cached";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import MessagePreview from "../components/MessagePreview";
import TeamMembers from "../components/TeamMembers";
import TaskCards from "../components/TaskCards";
import Calender from "../components/Calender";
import moment from 'moment'

const events = [
  {
    start: moment("2023-12-07T10:00:00").toDate(),
    end: moment("2023-12-07T11:00:00").toDate(),
    title: "MRI Registration",
  },
  {
    start: moment("2023-12-07T09:00:00").toDate(),
    end: moment("2023-12-08T11:00:00").toDate(),
    title: "Pay Now dashboard Project",
  },
  {
    start: moment("2023-03-18T14:00:00").toDate(),
    end: moment("2023-03-18T15:30:00").toDate(),
    title: "ENT Appointment",
  },
];

const Overview = () => {

  return (
    <div className=" lg:flex ">
      <div className=" overflow-hidden lg:w-2/3 border-gray-700 border-r-2 flex flex-col gap-4 ">
        <Taskbar className="border-b-2 border-gray-700" />
        {/* cards */}
        <div className="border-t-2 border-gray-700 ">
          <div className="flex justify-between pr-6 items-center">
            <div>
              <h1 className="text-white text-bold text-xl">Project Summary</h1>
              <p className="text-sm">Add new project and manage all of project</p>
            </div>
            <button className="bg-blue-600 text-white px-4 h-fit py-2 rounded-md">
              + Add Project
            </button>
          </div>
        </div>

        <div className="flex pr-6 justify-between animate-slide-left  -mb-72">
          <div className="relative overflow-hidden rounded-2xl ">
            <Cards
            className="absolute inset-0"
              color="rgba(215,84,40,255)"
              icon={<UpcomingIcon />}
              title="Upcoming"
              rating={40}
            />
          </div>

          <div className="overflow-clip  rounded-2xl">
            <Cards
            className="fixed"
              color="purple"
              icon={<CachedIcon />}
              title="In progress"
              rating={87}
            />
          </div>
          <div className="overflow-clip  rounded-2xl">
            <Cards
            className="fixed"
            color="blue"
              icon={<CheckCircleRoundedIcon />}
              title="Completed"
              rating={102}
            />
          </div>
        </div>


        {/* Calender */}
        <div className="flex flex-col pr-6 animate-slide-right">
            <h1>Timeline of the year</h1>
            <div className="h-96">
            <Calender events={events} defaultView={"week"}/>
            </div>
            
          </div>
      </div>
      {/* rignt */}
      <div className="lg:w-1/3 px-2 flex flex-col gap-4">
        <div className="flex justify-between items-middle">
          <h1 className="text-xl text-white font-semibold">Recent Messages</h1>
          <p className="text-blue-500 text-md">
            <a href="#">See all</a>
          </p>
        </div>
        <div className="">
          <MessagePreview />
        </div>
        {/* Team members */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-middle">
            <h1 className="text-xl text-white font-semibold">Team Members</h1>
            <p className="text-blue-500 text-md">
              <a href="#">See all</a>
            </p>
          </div>
          <TeamMembers />
        </div>
        {/* Today's task */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-middle">
            <div>
              <h1 className="text-xl text-white font-semibold">
                Today&apos;s Task
              </h1>
              {/* input today's date */}
              <p className="text-md">By june 2023</p>
            </div>
            <p className="text-blue-500 text-md">
              <a href="#">See all</a>
            </p>
          </div>
          {/* task cards */}
          <form className="flex flex-col gap-3 h-96 bg-black p-4 rounded-2xl overflow-y-scroll scroll-ps-6 ">
            <div className="flex flex-col gap-3 animate-slide-up">
            <TaskCards />
            <TaskCards />
            <TaskCards />
            <TaskCards />
            <TaskCards />
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Overview;
