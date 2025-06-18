
import { Button } from "@/components/ui/button";
import { Calendar, Users, QrCode, Bell, MessageSquare, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Uni-Connect-System
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Your Ultimate University Event Management Platform
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Connect, organize, and participate in university events seamlessly. 
            From registration to feedback, we've got everything covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-background shadow-sm">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Event Management</h3>
              <p className="text-muted-foreground">Create and manage events with detailed information, dates, and venues.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-background shadow-sm">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">User Registration</h3>
              <p className="text-muted-foreground">Easy registration system for students, faculty, and administrators.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-background shadow-sm">
              <QrCode className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">QR Code Entry</h3>
              <p className="text-muted-foreground">Generate and scan QR codes for seamless event entry.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-background shadow-sm">
              <Bell className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Smart Notifications</h3>
              <p className="text-muted-foreground">Automated email and SMS notifications for event updates.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-background shadow-sm">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">AI Chatbot</h3>
              <p className="text-muted-foreground">Get instant answers to frequently asked questions.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-background shadow-sm">
              <BarChart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground">Track attendance, engagement, and event performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Events?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of universities already using Uni-Connect-System
          </p>
          <Link to="/register">
            <Button size="lg">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Uni-Connect-System. Built for university communities.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
