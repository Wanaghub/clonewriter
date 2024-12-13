import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Lock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { writers } from "@/data/writers";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();
  const featuredWriters = writers.slice(0, 6);

  const handleWriterClick = (writerId: string) => {
    navigate(`/writers?selected=${writerId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-16 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Clone the Writing Style of
              <span className="text-primary-600"> Top Writers</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto mb-12">
              Generate unique content in the style of your favorite business writers using AI.
              Start your free trial today and access our top writers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {featuredWriters.map((writer) => (
              <motion.div
                key={writer.id}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md cursor-pointer"
                onClick={() => handleWriterClick(writer.id)}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100/50 to-primary-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-primary-100 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={writer.image}
                        alt={writer.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {writer.isFree ? (
                      <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                        <Star className="h-4 w-4" />
                        Free
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Lock className="h-4 w-4" />
                        Premium
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{writer.name}</h3>
                  <p className="text-sm text-gray-600">{writer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              Why Choose Our AI Writing Service?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Learn from the Best
                </h3>
                <p className="text-gray-600">
                  Access the writing styles of world-renowned thought leaders, bestselling authors, and business experts. Our AI has analyzed thousands of their works to capture their unique voice and insights.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Save Time & Energy
                </h3>
                <p className="text-gray-600">
                  Stop spending hours trying to perfect your writing style. Our AI helps you create content that resonates with your audience in minutes, not days.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Unlimited Possibilities
                </h3>
                <p className="text-gray-600">
                  From blog posts to social media content, create engaging content in any format. Each piece is unique and tailored to your needs while maintaining the essence of your chosen writer's style.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Risk-Free Trial
                </h3>
                <p className="text-gray-600">
                  Start with our free writers and 50 credits. Experience the power of AI-driven content creation before upgrading to access our premium collection of world-class writers.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-x-6">
              <Button 
                size="lg"
                onClick={() => navigate('/auth')}
                className="gap-2 animate-fade-in"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/pricing')}
                className="animate-fade-in"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>

        <div className="container px-4 mx-auto py-16 bg-gray-50">
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