import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  User,
  LogOut,
  Plus,
  Clock,
  Car,
  Shield,
  Star,
  CreditCard,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function Dashboard() {
  const { user, signOut } = useAuth();

  const upcomingBookings = [
    {
      id: 1,
      service: "Signature Detail",
      date: "Dec 15, 2024",
      time: "10:00 AM",
      vehicle: "BMW X5",
      price: 149,
      status: "confirmed",
    },
    {
      id: 2,
      service: "Premium Polish",
      date: "Dec 28, 2024",
      time: "2:00 PM",
      vehicle: "Tesla Model S",
      price: 299,
      status: "pending",
    },
  ];

  const recentBookings = [
    {
      id: 3,
      service: "Signature Detail",
      date: "Nov 20, 2024",
      price: 149,
      status: "completed",
    },
    {
      id: 4,
      service: "Monthly Maintenance",
      date: "Nov 5, 2024",
      price: 89,
      status: "completed",
    },
  ];

  const totalSpent = recentBookings.reduce(
    (sum, booking) => sum + booking.price,
    0,
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F085a9b05759146b484dc56707545fc78%2F66187e514b454aaba95efd57460a2212?format=webp&width=800"
                alt="wash o clock logo"
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold">Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                  Welcome back, {user?.name}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 pb-20 md:pb-8">
        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-primary/20 hover:border-primary/50 transition-colors cursor-pointer group">
            <Link to="/services">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Plus className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Book New Service</CardTitle>
                <CardDescription>
                  Schedule your next car detailing appointment
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="border-accent/20 hover:border-accent/50 transition-colors cursor-pointer group">
            <Link to="/bookings">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>Manage Bookings</CardTitle>
                <CardDescription>
                  View, reschedule, or cancel appointments
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>
        </div>

        {/* Stats Overview */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                ${totalSpent + 448}
              </div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">
                {upcomingBookings.length}
              </div>
              <p className="text-xs text-muted-foreground">Next: Dec 15</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                {recentBookings.length + 3}
              </div>
              <p className="text-xs text-muted-foreground">This year</p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Bookings */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Bookings</CardTitle>
              <CardDescription>Your scheduled appointments</CardDescription>
            </div>
            <Link to="/bookings">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Car className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{booking.service}</div>
                    <div className="text-sm text-muted-foreground">
                      {booking.vehicle} • {booking.date} at {booking.time}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-primary">
                    ${booking.price}
                  </div>
                  <Badge
                    variant={
                      booking.status === "confirmed" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {booking.status}
                  </Badge>
                </div>
              </div>
            ))}

            {upcomingBookings.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No upcoming bookings</p>
                <Link to="/services">
                  <Button className="mt-4 bg-primary hover:bg-primary/90">
                    Book Your First Service
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your booking history</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <div>
                    <div className="font-medium text-sm">{booking.service}</div>
                    <div className="text-xs text-muted-foreground">
                      {booking.date}
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium">${booking.price}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <nav className="border-t border-border bg-card/50 backdrop-blur-sm fixed bottom-0 left-0 right-0 md:hidden">
        <div className="flex items-center justify-around py-3">
          <Link
            to="/"
            className="flex flex-col items-center space-y-1 text-accent"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F085a9b05759146b484dc56707545fc78%2F66187e514b454aaba95efd57460a2212?format=webp&width=800"
                alt="wash o clock"
                className="h-5 w-auto"
              />
            </div>
            <span className="text-xs">Dashboard</span>
          </Link>
          <Link
            to="/services"
            className="flex flex-col items-center space-y-1 text-muted-foreground"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Plus className="w-5 h-5" />
            </div>
            <span className="text-xs">Book</span>
          </Link>
          <Link
            to="/bookings"
            className="flex flex-col items-center space-y-1 text-muted-foreground"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xs">Bookings</span>
          </Link>
          <Link
            to="/profile"
            className="flex flex-col items-center space-y-1 text-muted-foreground"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
