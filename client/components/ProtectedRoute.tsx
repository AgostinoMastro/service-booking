import { ReactNode, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { AuthDialog } from "@/components/AuthDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 max-w-md">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F085a9b05759146b484dc56707545fc78%2F66187e514b454aaba95efd57460a2212?format=webp&width=800"
                  alt="wash o clock logo"
                  className="h-16 w-auto"
                />
              </div>
              <CardTitle className="text-2xl">
                Welcome to wash o clock
              </CardTitle>
              <CardDescription>
                Sign in to access your premium car detailing dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => setIsAuthDialogOpen(true)}
              >
                Sign In to Continue
              </Button>
            </CardContent>
          </Card>

          <AuthDialog
            open={isAuthDialogOpen}
            onOpenChange={setIsAuthDialogOpen}
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
