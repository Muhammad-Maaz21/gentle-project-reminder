
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Navigation from "@/components/Navigation";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const events = [
    {
      id: 1,
      title: "Tech Conference 2024",
      description: "Annual technology conference featuring latest innovations",
      date: "2024-12-25",
      time: "10:00 AM",
      venue: "Main Auditorium",
      organizer: "CS Department",
      capacity: 200,
      registered: 150,
      category: "technology",
      status: "upcoming"
    },
    {
      id: 2,
      title: "AI Workshop",
      description: "Hands-on workshop on artificial intelligence and machine learning",
      date: "2024-12-28",
      time: "2:00 PM",
      venue: "Lab Building",
      organizer: "AI Club",
      capacity: 50,
      registered: 35,
      category: "workshop",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Career Fair",
      description: "Connect with top employers and explore career opportunities",
      date: "2025-01-05",
      time: "9:00 AM",
      venue: "Campus Ground",
      organizer: "Career Services",
      capacity: 500,
      registered: 320,
      category: "career",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Cultural Festival",
      description: "Celebrate diversity with music, dance, and food",
      date: "2024-12-15",
      time: "6:00 PM",
      venue: "Student Center",
      organizer: "Cultural Committee",
      capacity: 300,
      registered: 280,
      category: "cultural",
      status: "past"
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || event.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Events</h1>
            <p className="text-muted-foreground">Discover and join university events</p>
          </div>
          <Link to="/create-event">
            <Button>Create Event</Button>
          </Link>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border rounded-md bg-background"
          >
            <option value="all">All Categories</option>
            <option value="technology">Technology</option>
            <option value="workshop">Workshop</option>
            <option value="career">Career</option>
            <option value="cultural">Cultural</option>
          </select>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div key={event.id} className="border rounded-lg p-6 bg-background shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  event.status === 'upcoming' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {event.status}
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{event.venue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{event.registered}/{event.capacity} registered</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link to={`/event/${event.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">View Details</Button>
                </Link>
                {event.status === 'upcoming' && (
                  <Button className="flex-1">Register</Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No events found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
