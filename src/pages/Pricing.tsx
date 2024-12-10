import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { toast } from "sonner";

const PricingPage = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      description: "Perfect for trying out the platform",
      features: [
        "10 free credits",
        "Basic writer styles",
        "Standard support",
        "7-day trial period"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "For individual content creators",
      features: [
        "100 credits/month",
        "All writer styles",
        "Priority support",
        "Content history"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "For professional content teams",
      features: [
        "500 credits/month",
        "All writer styles",
        "24/7 Priority support",
        "Advanced analytics",
        "Team collaboration",
        "Custom writer training"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const handleSubscribe = (plan: string) => {
    // This will be connected to authentication and payment later
    toast.info("Authentication and payment will be implemented soon!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the perfect plan for your content creation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name}
                className={`relative p-8 ${
                  plan.popular ? 'border-primary-600 border-2' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleSubscribe(plan.name)}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;