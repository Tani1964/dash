import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';

const Taskbar = () => {
  return (
    <div className="flex justify-between pt-2 pr-6">
      <div className="flex p-2 border-2 rounded-md border-gray-400 w-5/6">
        <button>
          <SearchIcon />
        </button>
        <input type="text" className="w-10/12 bg-transparent border-none outline-none" />
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <Badge badgeContent={1} color="error" className="animate-pulse	">
        <NotificationsIcon className="text-white" />
        </Badge>
      </div>
    </div>
  );
};

export default Taskbar;
