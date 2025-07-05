import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  User,
  Car,
  CreditCard,
  Bell,
  Shield,
  Edit,
  Plus,
  Trash2,
  Calendar,
  DollarSign,
  Settings,
  LogOut,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

export default function Profile() {
  const { user, signOut } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Downtown, CA 90210",
  });

  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "BMW X5",
      year: 2022,
      color: "Black",
      type: "SUV",
      plate: "ABC123",
      isDefault: true,
    },
    {
      id: 2,
      name: "Tesla Model S",
      year: 2023,
      color: "White",
      type: "Sedan",
      plate: "XYZ789",
      isDefault: false,
    },
  ]);

  const [isAddingVehicle, setIsAddingVehicle] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    name: "",
    year: "",
    color: "",
    type: "",
    plate: "",
  });

  const handleSaveProfile = () => {
    // In real app, make API call to update profile
    setIsEditing(false);
  };

  const handleAddVehicle = () => {
    const vehicle = {
      id: vehicles.length + 1,
      ...newVehicle,
      year: parseInt(newVehicle.year),
      isDefault: vehicles.length === 0,
    };
    setVehicles([...vehicles, vehicle]);
    setNewVehicle({ name: "", year: "", color: "", type: "", plate: "" });
    setIsAddingVehicle(false);
  };

  const handleDeleteVehicle = (id: number) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  const handleSetDefaultVehicle = (id: number) => {
    setVehicles(vehicles.map((v) => ({ ...v, isDefault: v.id === id })));
  };

  const subscriptionInfo = {
    plan: "Monthly Maintenance",
    status: "active",
    nextBilling: "Jan 15, 2025",
    price: 89,
  };

  const accountStats = {
    totalBookings: 12,
    totalSpent: 1247,
    memberSince: "June 2024",
    favoriteService: "Signature Detail",
  };

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
                <h1 className="text-xl font-bold">Profile</h1>
                <p className="text-sm text-muted-foreground">
                  Manage your account and preferences
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
        {/* Profile Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src="" />
                <AvatarFallback className="text-2xl bg-primary/20 text-primary">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-bold">{user?.name}</h2>
                  <Badge
                    variant="outline"
                    className="bg-green-500/10 text-green-500 border-green-500/20"
                  >
                    Active Member
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-1">{user?.email}</p>
                <p className="text-sm text-muted-foreground">
                  Member since {accountStats.memberSince}
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit className="w-4 h-4 mr-2" />
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Account Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Bookings
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {accountStats.totalBookings}
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
                ${accountStats.totalSpent}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Plan</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-green-500">
                ${subscriptionInfo.price}/mo
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Favorite Service
              </CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm font-medium">
                {accountStats.favoriteService}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="name"
                        value={editedUser.name}
                        onChange={(e) =>
                          setEditedUser({ ...editedUser, name: e.target.value })
                        }
                        className="pl-9"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={editedUser.email}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            email: e.target.value,
                          })
                        }
                        className="pl-9"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="phone"
                        value={editedUser.phone}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            phone: e.target.value,
                          })
                        }
                        className="pl-9"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="address"
                        value={editedUser.address}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            address: e.target.value,
                          })
                        }
                        className="pl-9"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div className="flex space-x-2 pt-4">
                    <Button
                      onClick={handleSaveProfile}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vehicles" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>My Vehicles</CardTitle>
                  <CardDescription>
                    Manage your vehicles for easier booking
                  </CardDescription>
                </div>
                <Dialog
                  open={isAddingVehicle}
                  onOpenChange={setIsAddingVehicle}
                >
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Vehicle
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Vehicle</DialogTitle>
                      <DialogDescription>
                        Add a vehicle to your profile for easier booking
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Make & Model</Label>
                          <Input
                            placeholder="BMW X5"
                            value={newVehicle.name}
                            onChange={(e) =>
                              setNewVehicle({
                                ...newVehicle,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Year</Label>
                          <Input
                            placeholder="2023"
                            value={newVehicle.year}
                            onChange={(e) =>
                              setNewVehicle({
                                ...newVehicle,
                                year: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Color</Label>
                          <Input
                            placeholder="Black"
                            value={newVehicle.color}
                            onChange={(e) =>
                              setNewVehicle({
                                ...newVehicle,
                                color: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Type</Label>
                          <Select
                            value={newVehicle.type}
                            onValueChange={(value) =>
                              setNewVehicle({ ...newVehicle, type: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sedan">Sedan</SelectItem>
                              <SelectItem value="suv">SUV/Crossover</SelectItem>
                              <SelectItem value="truck">
                                Pickup Truck
                              </SelectItem>
                              <SelectItem value="luxury">
                                Luxury Vehicle
                              </SelectItem>
                              <SelectItem value="motorcycle">
                                Motorcycle
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>License Plate</Label>
                        <Input
                          placeholder="ABC123"
                          value={newVehicle.plate}
                          onChange={(e) =>
                            setNewVehicle({
                              ...newVehicle,
                              plate: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setIsAddingVehicle(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleAddVehicle}
                        className="bg-primary hover:bg-primary/90"
                      >
                        Add Vehicle
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent className="space-y-4">
                {vehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Car className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <div className="font-semibold">{vehicle.name}</div>
                          {vehicle.isDefault && (
                            <Badge variant="secondary" className="text-xs">
                              Default
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {vehicle.year} • {vehicle.color} • {vehicle.type} •{" "}
                          {vehicle.plate}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {!vehicle.isDefault && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleSetDefaultVehicle(vehicle.id)}
                        >
                          Set Default
                        </Button>
                      )}
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteVehicle(vehicle.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscription" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Details</CardTitle>
                <CardDescription>
                  Manage your monthly maintenance plan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div>
                    <div className="font-semibold text-lg">
                      {subscriptionInfo.plan}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Next billing: {subscriptionInfo.nextBilling}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      ${subscriptionInfo.price}/mo
                    </div>
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                      {subscriptionInfo.status}
                    </Badge>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold">Plan Benefits</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Monthly detail service included</li>
                    <li>• Priority booking slots</li>
                    <li>• 15% discount on additional services</li>
                    <li>• Free vehicle pickup and delivery</li>
                    <li>• Cancel or pause anytime</li>
                  </ul>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button variant="outline">Pause Subscription</Button>
                  <Button variant="destructive">Cancel Subscription</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose what notifications you'd like to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Booking Confirmations</div>
                    <div className="text-sm text-muted-foreground">
                      Get notified when bookings are confirmed
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Appointment Reminders</div>
                    <div className="text-sm text-muted-foreground">
                      Receive reminders before your appointments
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Promotional Offers</div>
                    <div className="text-sm text-muted-foreground">
                      Get notified about special deals and offers
                    </div>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Monthly Statements</div>
                    <div className="text-sm text-muted-foreground">
                      Receive monthly billing and usage summaries
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Actions</CardTitle>
                <CardDescription>
                  Manage your account security and data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                  <Shield className="w-4 h-4 mr-2" />
                  Change Password
                </Button>
                <Button variant="outline" className="w-full">
                  Download My Data
                </Button>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={signOut}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>
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
            className="flex flex-col items-center space-y-1 text-muted-foreground"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xs">Bookings</span>
          </Link>
          <Link
            to="/profile"
            className="flex flex-col items-center space-y-1 text-accent"
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
