import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

const MessageCard = () => {
  return (
    <div className="flex w-full items-center justify-between px-2 bg-black rounded-xl">
        <AccountCircleRoundedIcon fontSize='large'/>
        <div className='w-2/3'><h1 className="text-white font-semibold text-md">John Doe</h1>
        <p className='text-sm'>I want to eat eba</p></div>
        <div className='bg-red-700 px-2 rounded-md text-white text-sm'>1</div>
        <MoreVertRoundedIcon fontSize='medium'/>
    </div>
  )
}

export default MessageCard