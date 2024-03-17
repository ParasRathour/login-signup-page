function BusCard() {
  return (
    <div className=" shadow-lg w-[80%] m-2 bg-white rounded-md h-40 text-center">
        <h1 className="text-sm font-bold text-start pl-2 text-gray-500">Starts from  Ghaziabad</h1>
      <div className="flex justify-around font-semibold text-slate-700">
        <span>IntrCity SmartBus</span>
        <span>22:1518 MAR 08hrs 30mins 06:4519 MAR</span>
        <span> Price : 619 /-</span>
      </div>
      <h1 className="text-xl m-2 font-mono text-start">Bharat Benz A/C Seater /Sleeper (2+1)</h1>
    </div>
  );
}

export default BusCard;
