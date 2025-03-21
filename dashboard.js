import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";

// Register Chart.js components
ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
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
    <Container fluid className="p-4">
      <Row>
        <Col md={6}>
          <Card className="p-3">
            <h5>Booking Statistics</h5>
            <Bar data={barData} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3">
            <h5>User Distribution</h5>
            <Pie data={pieData} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
