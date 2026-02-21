import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl p-4 flex-1 min-w-[130px] 
      odd:bg-sky-200 even:bg-rose-200 
      hover:shadow-md transition-shadow duration-300">
      
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white/70 px-2 py-1 rounded-full text-slate-700 font-semibold">
          2025/26
        </span>
        <Image src="/more.png" alt="More" width={20} height={20} />
      </div>

      <h1 className="text-2xl font-bold my-4 text-slate-900">1,234</h1>
      <h2 className="capitalize text-sm font-semibold text-slate-600">
        {type}s
      </h2>
    </div>
  );
};

export default UserCard;