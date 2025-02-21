import React, { useState, useEffect } from "react";
import axios from "axios";

function GetData() {
  const [violations, setViolations] = useState([]);

  useEffect(() => {
    const fetchViolations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/violations"
        );
        setViolations(response.data); // Ensure response format matches expected state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchViolations();
  }, []);

  const sendPaymentLink = async (number_plate) => {
    try {
      // const response = await axios.post("http://localhost:5000/send-payment-link", {
      //   number_plate,
      // });

      // alert(response.data.message);
      alert("Payment link sent successfully");
    } catch (error) {
      console.error("Error sending payment link:", error);
      alert("Failed to send payment link. Try again.");
    }
  };

  return (
    <div>
      <h1 className="text-xl flex items-center  justify-center font-bold mb-4">
        Traffic Violations
      </h1>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th>Number Plate</th>
            <th>Phone Number</th>
            <th>Fine Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {violations.map((violation, index) => (
            <tr key={index} className="border">
              <td className="px-6 py-2 border-r">{violation.license_plate}</td>
              <td className="px-6 border-r">{violation.phoneNumber}</td>
              <td className="px-6 border-r">₹{violation.amount}</td>
              <td className="px-6 border-r">{violation.status}</td>
              <td className="px-6 pl-8 flex items-center justify-center">
                {violation.status === "Unpaid" ? (
                  <button
                    onClick={() => sendPaymentLink(violation.license_plate)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Send Payment Link
                  </button>
                ) : (
                  <a
                    href={violation.fees_receipt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Download Receipt
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetData;
