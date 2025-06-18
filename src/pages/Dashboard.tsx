
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, QrCode, Bell, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const stats = [
    { title: "My Events", value: "12", icon: Calendar, color: "text-blue-600" },
    { title: "Registered", value: "8", icon: Users, color: "text-green-600" },
    { title: "QR Scans", value: "45", icon: QrCode, color: "text-purple-600" },
    { title: "Notifications", value: "3", icon: Bell, color: "text-orange-600" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Conference 2024",
      date: "Dec 25, 2024",
      time: "10:00 AM",
      venue: "Main Auditorium",
      registered: true
    },
    {
      id: 2,
      title: "AI Workshop",
      date: "Dec 28, 2024",
      time: "2:00 PM",
      venue: "Lab Building",
      registered: false
    },
    {
      id: 3,
      title: "Career Fair",
      date: "Jan 5, 2025",
      time: "9:00 AM",
      venue: "Campus Ground",
      registered: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
          </div>
          <Link to="/create-event">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Create Event
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-background border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="bg-background border rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Upcoming Events</h2>
            <Link to="/events">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
          
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {event.date} at {event.time} • {event.venue}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {event.registered ? (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Registered
                    </span>
                  ) : (
                    <Button size="sm" variant="outline">
                      Register
                    </Button>
                  )}
                  <Link to={`/event/${event.id}`}>
                    <Button size="sm">View</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
