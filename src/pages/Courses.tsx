
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Clock, User, Users, Calendar } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: "Basketball Fundamentals",
      instructor: "Coach Mike Johnson",
      schedule: "Mon, Wed, Fri - 6:00 PM",
      fee: 199,
      duration: "8 weeks",
      maxStudents: 12,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
      description: "Master the basics of basketball including dribbling, shooting, and team play strategies"
    },
    {
      id: 2,
      name: "Tennis Training Elite",
      instructor: "Sarah Williams",
      schedule: "Tue, Thu - 7:00 PM",
      fee: 299,
      duration: "10 weeks",
      maxStudents: 8,
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
      description: "Advanced tennis techniques for competitive players focusing on serve, volley, and match strategy"
    },
    {
      id: 3,
      name: "Youth Soccer Academy",
      instructor: "Coach Rodriguez",
      schedule: "Sat, Sun - 10:00 AM",
      fee: 149,
      duration: "12 weeks",
      maxStudents: 16,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop",
      description: "Fun and engaging soccer training for young athletes aged 6-14"
    },
    {
      id: 4,
      name: "Volleyball Skills Development",
      instructor: "Jessica Chen",
      schedule: "Mon, Thu - 5:30 PM",
      fee: 179,
      duration: "6 weeks",
      maxStudents: 10,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      description: "Improve your volleyball skills with focus on spiking, setting, and defensive techniques"
    },
    {
      id: 5,
      name: "Swimming Excellence",
      instructor: "Coach Anderson",
      schedule: "Tue, Fri - 6:30 AM",
      fee: 249,
      duration: "8 weeks",
      maxStudents: 6,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "Professional swimming coaching for all strokes and competitive preparation"
    },
    {
      id: 6,
      name: "Baseball Fundamentals",
      instructor: "Coach Thompson",
      schedule: "Wed, Sat - 4:00 PM",
      fee: 189,
      duration: "10 weeks",
      maxStudents: 14,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      description: "Learn the fundamentals of baseball including batting, fielding, and base running"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Sports Academy Courses
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional training programs designed to help you excel in your chosen sport
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-lg">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-blue-600">
                    {course.maxStudents} max students
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{course.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {course.description}
                </CardDescription>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <User size={16} className="mr-2 text-blue-600" />
                    {course.instructor}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-2 text-blue-600" />
                    {course.schedule}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-blue-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2 text-blue-600" />
                    Max {course.maxStudents} students
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
      </div>
    </div>
  );
};

export default Courses;
