
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-10"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          GS Sports
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Your ultimate destination for premium sporting goods and professional sports training
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/products">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 w-full sm:w-auto">
              <ShoppingCart className="mr-2" size={20} />
              Shop Products
            </Button>
          </Link>
          <Link to="/courses">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
              <Users className="mr-2" size={20} />
              View Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
