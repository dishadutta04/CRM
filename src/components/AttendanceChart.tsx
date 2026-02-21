"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", present: 60, absent: 40 },
  { name: "Tue", present: 70, absent: 60 },
  { name: "Wed", present: 90, absent: 75 },
  { name: "Thu", present: 90, absent: 75 },
  { name: "Fri", present: 65, absent: 55 },
  { name: "Sat", present: 45, absent: 30 },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 h-full border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-slate-700">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} barSize={20} margin={{ top: 10, right: 10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tick={{ fill: "#475569", fontWeight: 500 }} 
            tickLine={false} 
          />
          <YAxis 
            axisLine={false} 
            tick={{ fill: "#475569", fontWeight: 500 }} 
            tickLine={false} 
          />
          <Tooltip
            contentStyle={{ 
              borderRadius: "12px", 
              border: "none", 
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)" 
            }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Bar
            dataKey="present"
            /* Soft Vibrant Lavender */
            fill="#a5b4fc" 
            legendType="circle"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="absent"
            /* Soft Vibrant Mint */
            fill="#6ee7b7" 
            legendType="circle"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;