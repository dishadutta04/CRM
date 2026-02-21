import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { resultsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link"; // Added for navigation

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: "exam" | "assignment";
  date: string;
  score: number;
};

const columns = [
  { header: "Subject", accessor: "subject" },
  { header: "Student", accessor: "student" },
  { header: "Score", accessor: "score", className: "hidden md:table-cell" },
  { header: "Teacher", accessor: "teacher", className: "hidden md:table-cell" },
  { header: "Class", accessor: "class", className: "hidden md:table-cell" },
  { header: "Date", accessor: "date", className: "hidden md:table-cell" },
  { header: "Actions", accessor: "action" },
];

const ResultListPage = () => {
  const renderRow = (item: Result) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight transition-all duration-200"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.subject}</h3>
          <p className="text-xs text-gray-500 capitalize">{item.type}</p>
        </div>
      </td>
      <td className="font-medium text-gray-700">{item.student}</td>
      <td className="hidden md:table-cell">
        {/* SCORE BADGE TRICK: Green for pass, Red for fail */}
        <span className={`px-2 py-1 rounded-md font-semibold ${item.score >= 50 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {item.score}
        </span>
      </td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell text-gray-500">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* Action Buttons */}
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
             <Image src="/view.png" alt="" width={16} height={16} />
          </button>
          {(role === "admin" || role === "teacher") && (
            <>
              <FormModal table="result" type="update" data={item} />
              <FormModal table="result" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0 shadow-sm">
      {/* TOP SECTION */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="hidden md:block text-xl font-bold text-gray-800">Exam & Assignment Results</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow hover:bg-yellow-400 transition-colors">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow hover:bg-yellow-400 transition-colors">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {(role === "admin" || role === "teacher") && (
              <FormModal table="result" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST SECTION */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />
      {/* PAGINATION */}
      <div className="mt-4">
        <Pagination />
      </div>
    </div>
  );
};

export default ResultListPage;