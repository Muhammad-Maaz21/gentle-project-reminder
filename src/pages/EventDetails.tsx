
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, QrCode, Share2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import QRCodeComponent from "@/components/QRCodeComponent";

const EventDetails = () => {
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // Mock event data - in real app, fetch from API using id
  const event = {
    id: parseInt(id || "1"),
    title: "Tech Conference 2024",
    description: "Join us for the annual technology conference featuring the latest innovations in AI, blockchain, and web development. This comprehensive event brings together industry leaders, students, and professionals for a day of learning and networking.\n\nFeatured speakers include renowned experts from major tech companies who will share insights on emerging technologies and career opportunities. Don't miss this chance to expand your knowledge and connect with like-minded individuals.",
    date: "2024-12-25",
    time: "10:00 AM - 5:00 PM",
    venue: "Main Auditorium, University Campus",
    organizer: "Computer Science Department",
    capacity: 200,
    registered: 150,
    category: "Technology",
    status: "upcoming",
    registrationDeadline: "2024-12-20",
    requirements: ["Student ID required", "Laptop recommended", "Business casual attire"],
    agenda: [
      { time: "10:00 AM", activity: "Registration & Welcome Coffee" },
      { time: "10:30 AM", activity: "Keynote: Future of AI" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Panel Discussion: Web3 Technologies" },
      { time: "3:00 PM", activity: "Networking Session" },
      { time: "4:00 PM", activity: "Closing Remarks" }
    ]
  };

  const handleRegister = () => {
    setIsRegistered(true);
    toast({
      title: "Registration Successful!",
      description: "You've been registered for the event. Check your email for confirmation.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "Event link has been copied to clipboard.",
    });
  };

  const handleGenerateQR = () => {
    setShowQR(true);
    toast({
      title: "QR Code Generated",
      description: "Use this QR code for event entry.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
              <p className="text-muted-foreground">Organized by {event.organizer}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                {event.status}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Info */}
              <div className="bg-background border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Event Details</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <span>{event.registered}/{event.capacity} registered</span>
                  </div>
                </div>
                <div className="prose max-w-none">
                  <p className="text-muted-foreground whitespace-pre-line">{event.description}</p>
                </div>
              </div>

              {/* Agenda */}
              <div className="bg-background border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Event Agenda</h2>
                <div className="space-y-3">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex gap-4 pb-3 border-b last:border-b-0">
                      <span className="font-medium text-primary min-w-[80px]">{item.time}</span>
                      <span>{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-background border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {event.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <div className="bg-background border rounded-lg p-6">
                <h3 className="font-semibold mb-4">Registration</h3>
                {isRegistered ? (
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">✓ You're Registered!</p>
                    </div>
                    <Button 
                      onClick={handleGenerateQR}
                      className="w-full gap-2"
                    >
                      <QrCode className="w-4 h-4" />
                      Generate QR Code
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {event.capacity - event.registered}
                      </div>
                      <div className="text-sm text-muted-foreground">spots remaining</div>
                    </div>
                    <Button onClick={handleRegister} className="w-full">
                      Register Now
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Registration closes on {new Date(event.registrationDeadline).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>

              {/* QR Code Display */}
              {showQR && isRegistered && (
                <div className="bg-background border rounded-lg p-6">
                  <h3 className="font-semibold mb-4 text-center">Your Entry QR Code</h3>
                  <QRCodeComponent eventId={event.id.toString()} />
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Show this QR code at the event entrance
                  </p>
                </div>
              )}

              {/* Organizer Info */}
              <div className="bg-background border rounded-lg p-6">
                <h3 className="font-semibold mb-4">Organizer</h3>
                <p className="text-muted-foreground mb-4">{event.organizer}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Organizer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
