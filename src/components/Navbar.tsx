import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-white shadow-sm sticky top-0 z-50'>
      
      {/* LEFT: SEARCH BAR */}
      <div className='flex-1 hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-3 py-2 w-max max-w-[300px] focus-within:ring-gray-500 transition-all'>
        <Image src="/search.png" alt="search" width={14} height={14}/>
        <input 
          type="text" 
          placeholder="Search anything..." 
          className="bg-transparent outline-none w-full text-gray-700"
        />
      </div>

      {/* CENTER: BRANDING & QUOTE */}
      <div className='flex-[2] flex flex-col items-center text-center'>
        <h1 className="text-3xl font-black tracking-widest text-slate-900 leading-none">
          MAANAD SCHOOL
        </h1>
        {/* FIX: Maine yahan se duplicate italic class hata di hai */}
        <p className="hidden sm:block text-[11px] mt-1 font-serif text-slate-600 font-medium italic">
          "Education is the most powerful weapon which you can use to change the world."
        </p>
      </div>

      {/* RIGHT: ICONS AND USER */}
      <div className='flex-1 flex items-center gap-5 justify-end'>
        <div className="flex items-center gap-3">
          <div className='bg-gray-50 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors'>
            <Image src="/message.png" alt="messages" width={18} height={18}/>
          </div>
          <div className='bg-gray-50 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer relative hover:bg-gray-100 transition-colors'>
            <Image src="/announcement.png" alt="announcements" width={18} height={18}/>
            <div className='absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-red-600 text-white rounded-full text-[10px] font-bold'>1</div>
          </div>
        </div>

        <div className='flex items-center gap-3 border-l pl-4 border-gray-200'>
          <div className='hidden lg:flex flex-col text-right'>
            <span className="text-xs leading-3 font-bold text-slate-900">John Doe</span>
            <span className="text-[10px] text-gray-500 font-semibold uppercase">Admin</span>
          </div>
          <Image src="/avatar.png" alt="user profile" width={38} height={38} className="rounded-full border border-gray-200"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar