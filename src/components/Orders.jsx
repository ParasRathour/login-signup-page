import busimg from "../assets/7731088.jpg"
import BusCard from "./BusCard"

function Orders() {
  return (
    <div className=" flex gap-20  items-center bg-slate-200  h-full">
        <div className="w-1/2 text-center">

            <input className="bg-white m-4 w-[300px] h-10 p-2 rounded-md shadow-md" placeholder="Search bus" type="search" />
            <button className=" bg-slate-300 p-2 w-20 rounded-md font-semibold shadow-sm hover:bg-slate-400">Search</button>

        <img className="rounded-md ml-10 shadow-md " height={600} width={600} src={busimg} alt="" />

        </div>
        <div className=" pt-20 pb-20 flex flex-col gap-2  rounded-md h-[600px] w-1/2 ">
            <h1 className="text-2xl font-semibold text-center ml-[-100px] text-gray-600 ">Search result for searched text</h1>
            <BusCard/>
            <BusCard/>
            <BusCard/>
           
        </div>

        
    
    
    </div>
  )
}

export default Orders