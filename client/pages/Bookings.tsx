import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  ArrowLeft,
  Calendar,
  User,
  Car,
  Clock,
  MapPin,
  Edit,
  X,
  CheckCircle,
  Plus,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

export default function Bookings() {
  const { user } = useAuth();
  const [cancelingId, setCancelingId] = useState<number | null>(null);

  const upcomingBookings = [
    {
      id: 1,
      service: "Signature Detail",
      date: "Dec 15, 2024",
      time: "10:00 AM",
      vehicle: "BMW X5",
      price: 149,
      status: "confirmed",
      location: "123 Main St, Downtown",
      duration: "3 hours",
      description: "Complete exterior and interior detailing",
    },
    {
      id: 2,
      service: "Premium Polish",
      date: "Dec 28, 2024",
      time: "2:00 PM",
      vehicle: "Tesla Model S",
      price: 299,
      status: "pending",
      location: "456 Oak Ave, Midtown",
      duration: "6 hours",
      description: "Paint correction and ceramic coating",
    },
  ];

  const pastBookings = [
    {
      id: 3,
      service: "Signature Detail",
      date: "Nov 20, 2024",
      time: "11:00 AM",
      vehicle: "BMW X5",
      price: 149,
      status: "completed",
      rating: 5,
    },
    {
      id: 4,
      service: "Monthly Maintenance",
      date: "Nov 5, 2024",
      time: "9:00 AM",
      vehicle: "BMW X5",
      price: 89,
      status: "completed",
      rating: 5,
    },
    {
      id: 5,
      service: "Premium Polish",
      date: "Oct 12, 2024",
      time: "1:00 PM",
      vehicle: "Tesla Model S",
      price: 299,
      status: "completed",
      rating: 4,
    },
  ];

  const handleCancelBooking = (bookingId: number) => {
    setCancelingId(bookingId);
    // In real app, make API call to cancel booking
    setTimeout(() => {
      setCancelingId(null);
      // Remove from upcoming bookings
    }, 1000);
  };

  const totalSpent = pastBookings.reduce(
    (sum, booking) => sum + booking.price,
    0,
  );

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold">My Bookings</h1>
                <p className="text-sm text-muted-foreground">
                  Manage your appointments
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F085a9b05759146b484dc56707545fc78%2F66187e514b454aaba95efd57460a2212?format=webp&width=800"
                alt="wash o clock logo"
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {upcomingBookings.length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                {pastBookings.length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">
                ${totalSpent}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">
              Upcoming ({upcomingBookings.length})
            </TabsTrigger>
            <TabsTrigger value="history">
              History ({pastBookings.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {upcomingBookings.length > 0 ? (
              <>
                {upcomingBookings.map((booking) => (
                  <Card key={booking.id} className="border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Car className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              {booking.service}
                            </CardTitle>
                            <CardDescription>
                              {booking.description}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge
                          variant={
                            booking.status === "confirmed"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {booking.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>
                            {booking.date} at {booking.time}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{booking.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Car className="w-4 h-4 text-muted-foreground" />
                          <span>{booking.vehicle}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{booking.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="text-2xl font-bold text-primary">
                          ${booking.price}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-2" />
                            Reschedule
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <X className="w-4 h-4 mr-2" />
                                Cancel
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Cancel Booking
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to cancel your{" "}
                                  {booking.service} appointment on{" "}
                                  {booking.date}? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>
                                  Keep Booking
                                </AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() =>
                                    handleCancelBooking(booking.id)
                                  }
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  {cancelingId === booking.id
                                    ? "Canceling..."
                                    : "Cancel Booking"}
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">
                    No Upcoming Bookings
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Book your next car detailing service to get started
                  </p>
                  <Link to="/services">
                    <Button className="bg-primary hover:bg-primary/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Book New Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {pastBookings.map((booking) => (
              <Card key={booking.id}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="font-semibold">{booking.service}</div>
                      <div className="text-sm text-muted-foreground">
                        {booking.vehicle} • {booking.date} at {booking.time}
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`text-xs ${i < booking.rating! ? "text-yellow-500" : "text-muted-foreground"}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-lg">
                      ${booking.price}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Completed
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <nav className="border-t border-border bg-card/50 backdrop-blur-sm fixed bottom-0 left-0 right-0 md:hidden">
        <div className="flex items-center justify-around py-3">
          <Link
            to="/"
            className="flex flex-col items-center space-y-1 text-muted-foreground"
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
            className="flex flex-col items-center space-y-1 text-accent"
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
