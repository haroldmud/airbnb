export default function Card(props) {
  return(
    <div className="w-[176px] ">
      <div className="relative w-[fit-content]">
        <img src={`/images/${props.image}.png`} alt="" />
        <h2 className={`text-center bg-white py-1 w-[61px] absolute top-2 left-2 rounded-sm text-[10.24px] font-[400] ${props.style}`}>{props.state}</h2>
      </div>
      <div className="mt-[9px] text-[12px]">
        <div className="flex gap-[2px]">
          <div className="flex flex-col justify-center">
            <img className="w-[14px]" src="/icons/star.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-[12px]">{props.rate}</h2>
          </div>
          <div className="text-[#918E9B] font-thin flex gap-[2px] text-[12px]">
            <div className="flex flex-col justify-center">
            <p>({props.times})</p>
            </div>
            <div className="flex flex-col justify-center">
              <img className="w-[2px]" src="/icons/dot.png" alt="" />
           </div>
           <div className="flex flex-col justify-center">
           <p>USA</p>
           </div>
          </div>
        </div>
        <p className="mt-1 tracking-wider">{props.description}</p>
        <p><span className="font-bold">From ${props.price}</span> / person</p>
      </div>
    </div>
  )
}