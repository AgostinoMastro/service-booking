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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  ArrowLeft,
  Car,
  Truck,
  Bike,
  Shield,
  Star,
  CreditCard,
  Zap,
  Calendar as CalendarIcon,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Services() {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

  const vehicleTypes = [
    { id: "sedan", name: "Sedan", icon: Car, multiplier: 1.0 },
    { id: "suv", name: "SUV/Crossover", icon: Car, multiplier: 1.3 },
    { id: "truck", name: "Pickup Truck", icon: Truck, multiplier: 1.5 },
    { id: "luxury", name: "Luxury Vehicle", icon: Car, multiplier: 1.4 },
    { id: "motorcycle", name: "Motorcycle", icon: Bike, multiplier: 0.6 },
  ];

  const services = [
    {
      id: "signature",
      name: "Signature Detail",
      description: "Complete exterior and interior detailing",
      basePrice: 149,
      duration: "3 hours",
      features: [
        "Hand wash & dry",
        "Interior vacuum & wipe",
        "Tire shine & glass clean",
        "Dashboard treatment",
      ],
      icon: Shield,
      popular: false,
    },
    {
      id: "premium",
      name: "Premium Polish",
      description: "Paint correction and ceramic coating",
      basePrice: 299,
      duration: "6 hours",
      features: [
        "Paint decontamination",
        "Machine polish",
        "Ceramic coating application",
        "Interior deep clean",
      ],
      icon: Star,
      popular: true,
    },
    {
      id: "monthly",
      name: "Monthly Maintenance",
      description: "Subscription service for regular care",
      basePrice: 89,
      duration: "2 hours",
      features: [
        "Monthly detail service",
        "Priority booking",
        "15% discount on extras",
        "Cancel anytime",
      ],
      icon: CreditCard,
      popular: false,
      subscription: true,
    },
  ];

  const getCalculatedPrice = (basePrice: number) => {
    const vehicle = vehicleTypes.find((v) => v.id === selectedVehicle);
    if (!vehicle) return basePrice;
    return Math.round(basePrice * vehicle.multiplier);
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
                  Back
                </Button>
              </Link>
              <h1 className="text-xl font-bold">Book Service</h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold">LuxeDetail</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="vehicle">1. Vehicle</TabsTrigger>
            <TabsTrigger value="services">2. Service</TabsTrigger>
            <TabsTrigger value="booking">3. Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="vehicle" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Select Your Vehicle</h2>
              <p className="text-muted-foreground">
                Choose the type of vehicle you'd like detailed
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {vehicleTypes.map((vehicle) => (
                <Card
                  key={vehicle.id}
                  className={`cursor-pointer transition-all hover:border-accent/50 ${
                    selectedVehicle === vehicle.id
                      ? "border-primary bg-primary/5"
                      : ""
                  }`}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <vehicle.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{vehicle.name}</CardTitle>
                    <CardDescription>
                      {vehicle.multiplier !== 1.0 && (
                        <Badge variant="secondary" className="mt-2">
                          {vehicle.multiplier > 1 ? "+" : ""}
                          {Math.round((vehicle.multiplier - 1) * 100)}% pricing
                        </Badge>
                      )}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Choose Your Service</h2>
              <p className="text-muted-foreground">
                Select the detailing package that suits your needs
              </p>
            </div>

            <div className="grid gap-6">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all hover:border-accent/50 relative ${
                    selectedService === service.id
                      ? "border-primary bg-primary/5"
                      : ""
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  {service.popular && (
                    <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="flex items-center space-x-2">
                            {service.name}
                            {service.subscription && (
                              <Badge variant="outline" className="text-xs">
                                Subscription
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription>
                            {service.description}
                          </CardDescription>
                          <div className="text-sm text-muted-foreground mt-1">
                            Duration: {service.duration}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          $
                          {selectedVehicle
                            ? getCalculatedPrice(service.basePrice)
                            : service.basePrice}
                          {service.subscription && (
                            <span className="text-sm text-muted-foreground">
                              /mo
                            </span>
                          )}
                        </div>
                        {selectedVehicle &&
                          vehicleTypes.find((v) => v.id === selectedVehicle)
                            ?.multiplier !== 1.0 && (
                            <div className="text-sm text-muted-foreground line-through">
                              ${service.basePrice}
                            </div>
                          )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="booking" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Schedule Your Service</h2>
              <p className="text-muted-foreground">
                Pick a date and time that works for you
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Select Date</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) =>
                      date < new Date() || date.getDay() === 0
                    }
                    className="rounded-md border w-full"
                  />
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Times</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "9:00 AM",
                        "11:00 AM",
                        "1:00 PM",
                        "3:00 PM",
                        "5:00 PM",
                      ].map((time) => (
                        <Button key={time} variant="outline" className="w-full">
                          {time}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedVehicle && (
                      <div className="flex justify-between">
                        <span>Vehicle:</span>
                        <span>
                          {
                            vehicleTypes.find((v) => v.id === selectedVehicle)
                              ?.name
                          }
                        </span>
                      </div>
                    )}
                    {selectedService && (
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span>
                          {services.find((s) => s.id === selectedService)?.name}
                        </span>
                      </div>
                    )}
                    {selectedDate && (
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{selectedDate.toLocaleDateString()}</span>
                      </div>
                    )}
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total:</span>
                        <span className="text-primary">
                          {selectedService && selectedVehicle
                            ? `$${getCalculatedPrice(services.find((s) => s.id === selectedService)?.basePrice || 0)}`
                            : "--"}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                      Continue to Payment
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
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
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="/services"
            className="flex flex-col items-center space-y-1 text-accent"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <span className="text-xs">Book</span>
          </Link>
          <Link
            to="/bookings"
            className="flex flex-col items-center space-y-1 text-muted-foreground"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Shield className="w-5 h-5" />
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
