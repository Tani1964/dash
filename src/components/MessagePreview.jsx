import MessageCard from './MessageCard';

const MessagePreview = () => {
  return (
    <div className="flex flex-col gap-1">
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
    </div>
  )
}

export default MessagePreview