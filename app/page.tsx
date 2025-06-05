"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, Award, BookOpen, Zap, Heart, Shield, Target, Globe } from "lucide-react";
import coursesData from "@/data/courses.json";

export default function Home() {
  const featuredCourses = coursesData.courses.filter(course => course.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Future with 
                <span className="text-accent-500"> Expert-Led</span> 
                Online Courses
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join thousands of learners advancing their careers through our comprehensive, industry-focused courses designed by professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button className="bg-accent-500 text-slate-900 hover:bg-accent-600 text-lg px-8 py-4 h-auto">
                    Explore Courses
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4 h-auto"
                  onClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Students collaborating in modern classroom" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
              <div className="text-slate-600 font-medium">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">200+</div>
              <div className="text-slate-600 font-medium">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-600 mb-2">95%</div>
              <div className="text-slate-600 font-medium">Completion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">4.8/5</div>
              <div className="text-slate-600 font-medium">Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose EduPro?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide world-class education with cutting-edge technology and personalized learning experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Expert Curriculum</h3>
                <p className="text-slate-600 leading-relaxed">
                  Industry-vetted courses designed by professionals to ensure you learn the most relevant and up-to-date skills.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Interactive Learning</h3>
                <p className="text-slate-600 leading-relaxed">
                  Engage with interactive assignments, projects, and real-world scenarios to reinforce your learning.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Certification</h3>
                <p className="text-slate-600 leading-relaxed">
                  Earn industry-recognized certificates upon completion to showcase your new skills to employers.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Flexible Schedule</h3>
                <p className="text-slate-600 leading-relaxed">
                  Learn at your own pace with lifetime access to course materials and 24/7 availability.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Community Support</h3>
                <p className="text-slate-600 leading-relaxed">
                  Connect with fellow learners and instructors in our vibrant community forums and study groups.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Career Support</h3>
                <p className="text-slate-600 leading-relaxed">
                  Get personalized career guidance, resume reviews, and job placement assistance from our career team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Popular Courses</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our most sought-after courses designed to accelerate your career growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary-100 text-primary-700">
                      {course.category}
                    </Badge>
                    <div className="flex items-center text-sm text-slate-500">
                      <Star className="w-4 h-4 mr-1 fill-current text-yellow-400" />
                      {course.rating} ({course.reviews})
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{course.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{course.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">${course.price}</span>
                    <Link href={`/courses/${course.id}`}>
                      <Button className="bg-primary-600 hover:bg-primary-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/courses">
              <Button className="bg-slate-800 hover:bg-slate-900 text-lg px-8 py-4 h-auto">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of professionals who have transformed their careers with EduPro. Start learning today and unlock your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button className="bg-white text-primary-600 hover:bg-slate-50 text-lg px-8 py-4 h-auto">
                Browse Courses
              </Button>
            </Link>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4 h-auto">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}