import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import axios

// Reusable StatCard Component
const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <p className="text-gray-500 text-lg">{title}</p>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

function Dashboard() {
  let navigate = useNavigate();

  const [caseCount, setCaseCount] = useState(0);
  const [totalPaidUsers, setTotalPaidUsers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/violations");

        // If data.violations is an array, calculate total cases and paid users
        const violations = response.data.violations || response.data || [];
        setCaseCount(violations.length);
        setTotalPaidUsers(violations.filter((v) => v.status === "Paid").length);
        
        setLoading(false);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
        setError("Failed to load data. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center bg-white p-4 shadow rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">RTO Dashboard</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
        >
          Logout
        </button>
      </header>

      {/* Dashboard Content */}
      <div className="w-full max-w-4xl mt-8">
        {loading ? (
          <p className="text-gray-600 text-center text-lg">Loading data...</p>
        ) : error ? (
          <p className="text-red-500 text-center text-lg">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatCard title="Total Cases" value={caseCount} />
            <StatCard title="Total Paid Users" value={totalPaidUsers} />
          </div>
        )}

        {/* Navigation Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate("/getdata")}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition duration-200"
          >
            Get Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// // Reusable StatCard Component
// const StatCard = ({ title, value }) => (
//   <div className="bg-white p-6 rounded-lg shadow-md text-center">
//     <p className="text-gray-500 text-lg">{title}</p>
//     <p className="text-2xl font-bold text-gray-800">{value}</p>
//   </div>
// );

// function Dashboard() {
//   let navigate = useNavigate();

//   const [totalPaidUsers, setTotalPaidUsers] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [caseCount, setCaseCount] = useState(0);

//   useEffect(() => {
//     const fetchCaseCount = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/violations", {
//           // Uncomment this if you are using HTTPS and having SSL issues
//           // httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
//         });

//         // Assuming response.data is an array of violations
//         setCaseCount(response.data.length);
//       } catch (error) {
//         console.error("Error fetching violations:", error);
//       }
//     };

//     fetchCaseCount();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
//       {/* Header */}
//       <header className="w-full max-w-4xl flex justify-between items-center bg-white p-4 shadow rounded-lg">
//         <h1 className="text-2xl font-bold text-gray-800">RTO Dashboard</h1>
//         <button
//           onClick={() => navigate("/")}
//           className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
//         >
//           Logout
//         </button>
//       </header>

//       {/* Dashboard Content */}
//       <div className="w-full max-w-4xl mt-8">
//         {loading ? (
//           <p className="text-gray-600 text-center text-lg">Loading data...</p>
//         ) : error ? (
//           <p className="text-red-500 text-center text-lg">{error}</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <StatCard title="Total Cases" value={caseCount} />
//             <StatCard title="Total Paid Users" value={totalPaidUsers} />
//           </div>
//         )}

//         {/* Navigation Button */}
//         <div className="mt-8 flex justify-center">
//           <button
//             onClick={() => navigate("/getdata")}
//             className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition duration-200"
//           >
//             Get Data
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
