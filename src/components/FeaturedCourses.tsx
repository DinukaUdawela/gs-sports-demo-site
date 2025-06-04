
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      name: "Basketball Fundamentals",
      instructor: "Coach Mike Johnson",
      schedule: "Mon, Wed, Fri - 6:00 PM",
      fee: 199,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
      description: "Master the basics of basketball with our experienced coach"
    },
    {
      id: 2,
      name: "Tennis Training Elite",
      instructor: "Sarah Williams",
      schedule: "Tue, Thu - 7:00 PM",
      fee: 299,
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
      description: "Advanced tennis techniques for competitive players"
    },
    {
      id: 3,
      name: "Youth Soccer Academy",
      instructor: "Coach Rodriguez",
      schedule: "Sat, Sun - 10:00 AM",
      fee: 149,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop",
      description: "Fun and engaging soccer training for young athletes"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Sports Academy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our professional training programs and take your skills to the next level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-lg">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{course.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {course.description}
                </CardDescription>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <User size={16} className="mr-2" />
                    {course.instructor}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-2" />
                    {course.schedule}
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  ${course.fee}/month
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/courses">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
