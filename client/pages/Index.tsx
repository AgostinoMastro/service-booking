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
  Zap,
  Shield,
  Star,
  Calendar,
  User,
  CreditCard,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthDialog } from "@/components/AuthDialog";
import { useAuth } from "@/contexts/AuthContext";

export default function Index() {
  const { user, isAuthenticated, signOut } = useAuth();
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F085a9b05759146b484dc56707545fc78%2F66187e514b454aaba95efd57460a2212?format=webp&width=800"
                alt="wash o clock logo"
                className="h-10 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-accent" />
                    </div>
                    <span className="hidden sm:block">
                      Welcome, {user?.name}
                    </span>
                  </div>
                  <Link to="/profile">
                    <Button variant="ghost" size="sm">
                      Profile
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={signOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/profile">
                    <Button variant="ghost" size="sm">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                  </Link>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => setIsAuthDialogOpen(true)}
                  >
                    Sign In
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-4 bg-accent/20 text-accent border-accent/30"
          >
            Premium Car Detailing
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Luxury That Moves
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience premium car detailing services that bring showroom
            quality to your doorstep. Book, track, and manage all your
            appointments with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Book Service
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-accent text-accent hover:bg-accent/10"
            >
              View Packages
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Premium Services</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of professional detailing services designed to
            keep your vehicle in pristine condition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-border hover:border-accent/50 transition-colors group">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Signature Detail</CardTitle>
              <CardDescription>
                Complete exterior and interior detailing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary mb-2">$149</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Hand wash & dry</li>
                <li>• Interior vacuum & wipe</li>
                <li>• Tire shine & glass clean</li>
                <li>• 3-hour service</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-accent/50 transition-colors group">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Premium Polish</CardTitle>
              <CardDescription>
                Paint correction and ceramic coating
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary mb-2">$299</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Paint decontamination</li>
                <li>• Machine polish</li>
                <li>• Ceramic coating application</li>
                <li>• 6-hour service</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-accent/50 transition-colors group">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <CreditCard className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Monthly Maintenance</CardTitle>
              <CardDescription>
                Subscription service for regular care
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary mb-2">
                $89<span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Monthly detail service</li>
                <li>• Priority booking</li>
                <li>• 15% discount on extras</li>
                <li>• Cancel anytime</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Why Choose wash o clock</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Easy Booking</h4>
            <p className="text-muted-foreground">
              Schedule, reschedule, or cancel appointments with just a few taps
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Secure Payments</h4>
            <p className="text-muted-foreground">
              Safe and secure payment processing with full transaction history
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Premium Quality</h4>
            <p className="text-muted-foreground">
              Professional detailers using premium products and techniques
            </p>
          </div>
        </div>
      </section>

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
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="/services"
            className="flex flex-col items-center space-y-1 text-muted-foreground"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
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

      <AuthDialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen} />
    </div>
  );
}
