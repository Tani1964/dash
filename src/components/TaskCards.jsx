const TaskCards = () => {
  return (
    <div className="w-full bg-gray-600 px-3 py-1 flex flex-col gap-2 rounded-xl ">
        <div className="border-b-gray-400 border-b-2 flex justify-between">
            <div>
                <h1 className="text-white text-md">Making the food</h1>
                <p className="text-sm">James is to do this</p>
            </div>
            <input type="checkbox" className="bg-transparent" />
        </div>
        {/* time range */}
        <div className="text-sm">
            8:00am-5:00pm
        </div>
    </div>
  )
}

export default TaskCards