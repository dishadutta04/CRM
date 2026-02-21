const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400 cursor-pointer">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {/* Announcement 1 */}
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-700">Final Exam Schedule</h2>
            <span className="text-[10px] text-gray-400 bg-white rounded-md px-2 py-1">
              2026-05-15
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            The final examination schedule for the Spring semester has been posted. Please check your student portal for specific room assignments.
          </p>
        </div>

        {/* Announcement 2 */}
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-700">Summer Break Notice</h2>
            <span className="text-[10px] text-gray-400 bg-white rounded-md px-2 py-1">
              2026-06-01
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            School will remain closed from June 15th to August 10th for summer vacation. Have a safe and productive break!
          </p>
        </div>

        {/* Announcement 3 */}
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-700">Inter-School Sports Meet</h2>
            <span className="text-[10px] text-gray-400 bg-white rounded-md px-2 py-1">
              2026-04-20
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Tryouts for the varsity basketball and soccer teams will begin next Monday at 3:30 PM on the main field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;