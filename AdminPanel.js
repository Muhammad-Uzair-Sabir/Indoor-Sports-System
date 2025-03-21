import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPanel = () => {
  const barData = {
    labels: ["Football", "Basketball", "Tennis", "Badminton"],
    datasets: [
      {
        label: "Bookings",
        data: [50, 30, 20, 40],
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
      },
    ],
  };

  const pieData = {
    labels: ["Admins", "Users", "Coaches"],
    datasets: [
      {
        data: [5, 50, 10],
        backgroundColor: ["#007bff", "#28a745", "#ffc107"],
      },
    ],
  };

  return (
    <div className="container">
      <h4>Admin Panel</h4>
      <p>Manage bookings, users, and reports.</p>
      <div className="card p-3">
        <h5>Booking Statistics</h5>
        <Bar data={barData} />
      </div>
      <div className="card p-3 mt-4">
        <h5>User Distribution</h5>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default AdminPanel;
