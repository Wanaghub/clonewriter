import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { writers } from "@/data/writers";

const Index = () => {
  const navigate = useNavigate();
  const featuredWriters = writers.slice(0, 10); // Only show first 10 writers on homepage

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container px-4 py-16 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Clone the Writing Style of
            <span className="text-primary-600"> Top Writers</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Generate unique content in the style of your favorite business writers using AI.
            Start your free trial today and access our top writers.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              size="lg"
              onClick={() => navigate('/auth')}
              className="gap-2"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/pricing')}
            >
              View Pricing
            </Button>
          </div>
        </div>

        {/* Writers Showcase Section */}
        <div className="bg-gray-50 py-16">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Writers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn from the best. Our AI clones the writing style of top business minds.
              </p>
            </div>
            
            <Carousel className="max-w-5xl mx-auto">
              <CarouselContent>
                {featuredWriters.map((writer) => (
                  <CarouselItem key={writer.id} className="md:basis-1/3">
                    <div className="p-4">
                      <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-primary-100">
                            <img
                              src={writer.image}
                              alt={writer.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          {writer.isFree && (
                            <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                              <Star className="h-4 w-4" />
                              Free
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{writer.name}</h3>
                        <p className="text-sm text-gray-600">{writer.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* Features Section */}
        <div className="container px-4 mx-auto py-16">
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 text-center">
              <div className="rounded-full bg-primary-100 p-3 mb-4">
                <Check className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">7-Day Free Trial</h3>
              <p className="text-gray-600">Try our service risk-free with access to our top 10 writers</p>
            </div>
            <div className="flex flex-col items-center p-6 text-center">
              <div className="rounded-full bg-primary-100 p-3 mb-4">
                <Check className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">50 Free Credits</h3>
              <p className="text-gray-600">Generate medium-length blog posts during your trial</p>
            </div>
            <div className="flex flex-col items-center p-6 text-center">
              <div className="rounded-full bg-primary-100 p-3 mb-4">
                <Check className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Standard Support</h3>
              <p className="text-gray-600">Get help when you need it with our support team</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;