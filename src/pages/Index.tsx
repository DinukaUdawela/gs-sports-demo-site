
import { Link } from "react-router-dom";
import { ShoppingCart, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedCourses from "@/components/FeaturedCourses";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <FeaturedCourses />
      
      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to gear up for your next adventure or join our training programs? 
            We're here to help you achieve your sporting goals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
