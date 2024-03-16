

function Feedback() {
  return (

    <div className=" flex  items-center justify-center bg-slate-400 h-full">

        
    
    <form className="m-20 rounded-lg w-6/12 flex flex-col gap-12 p-20 bg-slate-300" action="">
    <h1 className="text-center text-4xl  font-bold text-gray-700">Customer Feedback !</h1>

        <input className="h-6 rounded-md p-4" type="text" placeholder="Name" />
        <input className="h-6 rounded-md p-4" type="text" placeholder="Email" />
        <textarea className="h-30 rounded-md p-4" placeholder="Tell us about your travelling exprience with us?" name="feedback" ></textarea>
        <button className=" bg-slate-400 hover:bg-slate-500 rounded-md p-2 border-1 border-black">Submit</button>

    </form>
    </div>
  )
}

export default Feedback