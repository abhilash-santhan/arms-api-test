const express = require("express");
const app = express();
const PORT = 4000;
app.use(express.json());

app.get("/api/users", (req, res) => res.status(200).json({ success: true, users: [{ id: 1, name: "Abhilash" }, { id: 2, name: "Sakshi" }] }));
// Intentionally missing: GET /api/products
app.get("/api/profile", (req, res) => res.status(200).json({ success: true, user: { username: "abhilash", email: "abhilash@example.com" } }));
app.get("/api/orders/:id", (req, res) => res.status(404).json({ success: false, message: "Order not found" }));
app.get("/api/reports", (req, res) => res.status(500).json({ success: false, message: "Internal server error" }));
app.get("/api/dashboard", (req, res) => res.status(401).json({ success: false, message: "Unauthorized access" }));
app.get("/api/statistics", (req, res) => res.status(200).json({ totalUsers: "150", activeUsers: 120, growth: true }));
app.get("/api/company", (req, res) => res.status(200).json({ success: true, data: { company: { name: "ARMS Technologies", address: { city: "Greater Noida", country: "India" } } } }));
app.get("/api/slow", async (req, res) => { await new Promise(resolve => setTimeout(resolve, 10000)); res.status(200).json({ success: true, message: "Slow API completed" }); });
app.get("/api/search", (req, res) => { const { q, page } = req.query; res.status(200).json({ success: true, query: q || "", page: Number(page) || 1, results: [] }); });
app.post("/api/login", (req, res) => { const { email, password } = req.body; if (!email || !password) return res.status(400).json({ success: false, message: "Email and password required" }); res.status(200).json({ success: true, token: "test-token-123", user: { id: 1, name: "Abhilash", email } }); });
app.patch("/api/users/:id", (req, res) => { const { id } = req.params; const { name, email } = req.body; res.status(200).json({ success: true, message: "User updated", updatedUser: { id: Number(id), name: name || "Updated User", email: email || "updated@example.com" } }); });
app.delete("/api/users/:id", (req, res) => res.status(200).json({ success: true, message: `User ${req.params.id} deleted` }));
app.get("/api/notifications", (req, res) => res.status(200).json([{ id: 1, message: "New notification" }, { id: 2, message: "Project updated" }]));
app.get("/api/settings", (req, res) => res.status(200).json({ darkMode: false, notificationsEnabled: true }));
app.get("/api/empty", (req, res) => res.status(204).send());
app.get("/api/health", (req, res) => res.status(200).json({ status: "healthy", service: "ARMS Test Server" }));

app.listen(PORT, () => console.log(`Test backend running at http://localhost:${PORT}`));
