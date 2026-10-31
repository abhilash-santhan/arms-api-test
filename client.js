const API = "http://localhost:4000";

async function getUsers() { const response = await fetch(`${API}/api/users`); const data = await response.json(); console.log(data.users); }
async function getProducts() { const response = await fetch(`${API}/api/products`); const data = await response.json(); console.log(data.products); }
async function getProfile() { const response = await fetch(`${API}/api/profile`); const data = await response.json(); console.log(data.user.name); }
async function getOrder() { const response = await fetch(`${API}/api/orders/101`); const data = await response.json(); console.log(data.order); }
async function getReports() { const response = await fetch(`${API}/api/reports`); const data = await response.json(); console.log(data.reports); }
async function getDashboard() { const response = await fetch(`${API}/api/dashboard`); const data = await response.json(); console.log(data.dashboard); }
async function getStatistics() { const response = await fetch(`${API}/api/statistics`); const data = await response.json(); const totalUsers = data.totalUsers + 10; console.log(totalUsers); }
async function getCompany() { const response = await fetch(`${API}/api/company`); const data = await response.json(); console.log(data.data.company.address.city); }
async function getSlowData() { const response = await fetch(`${API}/api/slow`); const data = await response.json(); console.log(data.message); }
async function searchUsers() { const response = await fetch(`${API}/api/search?q=abhilash&page=1`); const data = await response.json(); console.log(data.results); }
async function loginUser() { const response = await fetch(`${API}/api/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: "abhilash@example.com", password: "123456" }) }); const data = await response.json(); console.log(data.token); }
async function updateUser() { const response = await fetch(`${API}/api/users/1`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: "Updated Abhilash", email: "updated@example.com" }) }); const data = await response.json(); console.log(data.updatedUser); }
async function deleteUser() { const response = await fetch(`${API}/api/users/1`, { method: "DELETE" }); const data = await response.json(); console.log(data.message); }
async function getNotifications() { const response = await fetch(`${API}/api/notifications`); const data = await response.json(); console.log(data[0].message); }
async function getSettings() { const response = await fetch(`${API}/api/settings`); const data = await response.json(); console.log(data.darkMode); }
async function getEmptyData() { const response = await fetch(`${API}/api/empty`); console.log(response.status); }
async function checkHealth() { const response = await fetch(`${API}/api/health`); const data = await response.json(); console.log(data.status); }

module.exports = { getUsers, getProducts, getProfile, getOrder, getReports, getDashboard, getStatistics, getCompany, getSlowData, searchUsers, loginUser, updateUser, deleteUser, getNotifications, getSettings, getEmptyData, checkHealth };
