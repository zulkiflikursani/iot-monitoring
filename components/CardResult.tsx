import React from "react";
interface TypeProps {
  room: {
    ec: string;
    suhu: string;
    ph: string;
  };
}
function CardResult(props: TypeProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 mb-8">
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center w-52 h-52 bg-black rounded-full">
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-green-500 via-orange-500 to-yellow-500 blur-md" />
          <div className="flex items-center justify-center text-[30px] font-bold text-green-900 absolute w-[100%] h-[100%] rounded-full bg-white ">
            {props.room.ec}
          </div>
        </div>
      </div>
      <div className="rounded-lg text-[35px] font-bold bg-green-500 w-full mb-4">
        EC
      </div>
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center w-52 h-52 bg-black rounded-full">
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-green-500 via-orange-500 to-yellow-500 blur-md" />
          <div className="flex items-center justify-center text-[30px] font-bold text-green-900 absolute w-[100%] h-[100%] rounded-full bg-white ">
            {props.room.suhu}
          </div>
        </div>
      </div>
      <div className="rounded-lg text-[35px] font-bold bg-green-500 w-full mb-4">
        Suhu
      </div>
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center w-52 h-52 bg-black rounded-full">
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-green-500 via-orange-500 to-yellow-500 blur-md" />
          <div className="flex items-center justify-center text-[30px] font-bold text-green-900 absolute w-[100%] h-[100%] rounded-full bg-white ">
            {props.room.ph}
          </div>
        </div>
      </div>
      <div className="rounded-lg text-[35px] font-bold bg-green-500 w-full">
        PH
      </div>
    </div>
  );
}
export default CardResult;
