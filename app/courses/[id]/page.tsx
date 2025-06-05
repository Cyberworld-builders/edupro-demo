import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Award, CheckCircle, Play } from "lucide-react";
import coursesData from "@/data/courses.json";
import { Metadata } from "next";

interface CourseDetailsProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: CourseDetailsProps): Promise<Metadata> {
  const course = coursesData.courses.find(c => c.id === params.id);
  
  if (!course) {
    return {
      title: 'Course Not Found | EduPro',
    };
  }

  return {
    title: `${course.title} | EduPro`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [course.image],
    },
  };
}

export default function CourseDetails({ params }: CourseDetailsProps) {
  const course = coursesData.courses.find(c => c.id === params.id);

  if (!course) {
    notFound();
  }

  const totalLessons = course.curriculum.reduce((total, module) => total + module.lessons, 0);
  const totalDuration = course.curriculum.reduce((total, module) => {
    const hours = parseInt(module.duration.split(' ')[0]);
    return total + hours;
  }, 0);

  return (
    <>
      {/* Course Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Badge className="bg-primary-500 text-white mr-4">{course.category}</Badge>
                <div className="flex items-center text-sm">
                  <Star className="w-4 h-4 mr-1 fill-current text-yellow-400" />
                  {course.rating} ({course.reviews} reviews)
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">{course.description}</p>
              <div className="flex flex-wrap gap-6 text-sm mb-8">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {course.instructor.name}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  {course.level}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {course.students.toLocaleString()} students
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary-600 hover:bg-primary-700 text-lg px-8 py-4 h-auto">
                  Enroll Now - ${course.price}
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 h-auto">
                  <Play className="w-5 h-5 mr-2" />
                  Preview Course
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={course.image} 
                alt={course.title} 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* What You'll Learn */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <Card key={index} className="border border-slate-200">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">
                              {index + 1}. {module.title}
                            </h3>
                            <p className="text-sm text-slate-600">
                              {module.lessons} lessons • {module.duration}
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Play className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Your Instructor</h2>
                <Card className="bg-slate-50">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <img 
                        src={course.instructor.image} 
                        alt={course.instructor.name} 
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{course.instructor.name}</h3>
                        <p className="text-slate-600 mb-4">{course.instructor.title}</p>
                        <p className="text-slate-700 leading-relaxed">{course.instructor.bio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-slate-900">${course.price}</span>
                        {course.originalPrice > course.price && (
                          <span className="text-lg text-slate-500 line-through">${course.originalPrice}</span>
                        )}
                      </div>
                      <p className="text-slate-600">One-time payment • Lifetime access</p>
                    </div>
                    
                    <Button className="w-full bg-primary-600 hover:bg-primary-700 mb-4 h-12 text-lg">
                      Enroll Now
                    </Button>
                    
                    <Button variant="outline" className="w-full mb-6 h-10">
                      Add to Wishlist
                    </Button>
                    
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Duration:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Level:</span>
                        <span className="font-medium">{course.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Lessons:</span>
                        <span className="font-medium">{totalLessons}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Video:</span>
                        <span className="font-medium">{totalDuration}h total</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Students:</span>
                        <span className="font-medium">{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Certificate:</span>
                        <span className="font-medium">Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Access:</span>
                        <span className="font-medium">Lifetime</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Money Back Guarantee */}
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="font-semibold text-green-800">30-Day Money Back Guarantee</span>
                    </div>
                    <p className="text-green-700 text-sm">Not satisfied? Get a full refund within 30 days, no questions asked.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}