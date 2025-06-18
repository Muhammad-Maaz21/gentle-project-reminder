
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Users, QrCode, Bell, TrendingUp, Activity } from "lucide-react";
import Navigation from "@/components/Navigation";

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  const stats = [
    { title: "Total Events", value: "156", change: "+12%", icon: Calendar, color: "text-blue-600" },
    { title: "Active Users", value: "2,847", change: "+8%", icon: Users, color: "text-green-600" },
    { title: "QR Scans Today", value: "342", change: "+24%", icon: QrCode, color: "text-purple-600" },
    { title: "Notifications Sent", value: "1,234", change: "+16%", icon: Bell, color: "text-orange-600" },
  ];

  const recentEvents = [
    { id: 1, title: "Tech Conference 2024", status: "Active", registrations: 150, capacity: 200 },
    { id: 2, title: "AI Workshop", status: "Upcoming", registrations: 35, capacity: 50 },
    { id: 3, title: "Career Fair", status: "Planning", registrations: 320, capacity: 500 },
    { id: 4, title: "Cultural Festival", status: "Completed", registrations: 280, capacity: 300 },
  ];

  const recentUsers = [
    { id: 1, name: "John Doe", email: "john@university.edu", role: "Student", joinDate: "2024-12-20" },
    { id: 2, name: "Jane Smith", email: "jane@university.edu", role: "Faculty", joinDate: "2024-12-19" },
    { id: 3, name: "Mike Johnson", email: "mike@university.edu", role: "Student", joinDate: "2024-12-18" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">System overview and management</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-muted p-1 rounded-lg mb-8 w-fit">
          {["overview", "events", "users", "analytics"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-md capitalize transition-colors ${
                selectedTab === tab
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {selectedTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.title} className="bg-background border rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change}</p>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {event.registrations}/{event.capacity} registered
                        </p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        event.status === 'Active' ? 'bg-green-100 text-green-800' :
                        event.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                        event.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {user.role}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(user.joinDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "events" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Event Management</h2>
              <Button>Create New Event</Button>
            </div>
            
            <div className="flex gap-4">
              <Input placeholder="Search events..." className="max-w-sm" />
              <select className="px-3 py-2 border rounded-md bg-background">
                <option>All Status</option>
                <option>Active</option>
                <option>Upcoming</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="bg-background border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4">Event Name</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Registrations</th>
                    <th className="text-left p-4">Date</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentEvents.map((event) => (
                    <tr key={event.id} className="border-t">
                      <td className="p-4 font-medium">{event.title}</td>
                      <td className="p-4">
                        <span className={`text-xs px-2 py-1 rounded ${
                          event.status === 'Active' ? 'bg-green-100 text-green-800' :
                          event.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {event.status}
                        </span>
                      </td>
                      <td className="p-4">{event.registrations}/{event.capacity}</td>
                      <td className="p-4">Dec 25, 2024</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Edit</Button>
                          <Button size="sm" variant="outline">View</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === "users" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">User Management</h2>
              <Button>Add User</Button>
            </div>
            
            <div className="flex gap-4">
              <Input placeholder="Search users..." className="max-w-sm" />
              <select className="px-3 py-2 border rounded-md bg-background">
                <option>All Roles</option>
                <option>Student</option>
                <option>Faculty</option>
                <option>Admin</option>
              </select>
            </div>

            <div className="bg-background border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4">Name</th>
                    <th className="text-left p-4">Email</th>
                    <th className="text-left p-4">Role</th>
                    <th className="text-left p-4">Join Date</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-t">
                      <td className="p-4 font-medium">{user.name}</td>
                      <td className="p-4">{user.email}</td>
                      <td className="p-4">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {user.role}
                        </span>
                      </td>
                      <td className="p-4">{new Date(user.joinDate).toLocaleDateString()}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Edit</Button>
                          <Button size="sm" variant="outline">View</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === "analytics" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Analytics & Reports</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold">Event Trends</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Technology Events</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Cultural Events</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Academic Events</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold">User Activity</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">89%</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">76%</div>
                    <div className="text-sm text-muted-foreground">Event Attendance Rate</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">4.8/5</div>
                    <div className="text-sm text-muted-foreground">Average Event Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
