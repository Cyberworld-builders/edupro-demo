import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Zap, Award, Users, Heart, Target } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us | EduPro',
  description: 'Learn about EduPro\'s mission to democratize education and empower millions of learners worldwide. Meet our team and discover our values.',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About EduPro</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize education and empower millions of learners worldwide to achieve their career goals through accessible, high-quality online learning.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At EduPro, we believe that everyone deserves access to world-class education. Our mission is to bridge the gap between traditional learning and the rapidly evolving demands of the modern workplace.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We partner with industry experts and leading professionals to create comprehensive, practical courses that not only teach theoretical concepts but also provide hands-on experience that employers value.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Industry-relevant curriculum designed by experts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Zap className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Flexible learning that fits your schedule</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Personalized career support and guidance</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse team collaborating in modern office" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the learning experience we provide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Excellence</h3>
                <p className="text-slate-600 leading-relaxed">
                  We maintain the highest standards in course quality, instructor expertise, and student support to ensure exceptional learning outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Inclusivity</h3>
                <p className="text-slate-600 leading-relaxed">
                  We create an inclusive learning environment where everyone, regardless of background, can access quality education and achieve their goals.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Innovation</h3>
                <p className="text-slate-600 leading-relaxed">
                  We continuously innovate our teaching methods, technology, and course offerings to stay ahead of industry trends and learner needs.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Empowerment</h3>
                <p className="text-slate-600 leading-relaxed">
                  We empower learners with practical skills, confidence, and resources they need to transform their careers and lives.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Impact</h3>
                <p className="text-slate-600 leading-relaxed">
                  We measure our success by the positive impact we have on our learners' careers, communities, and the broader economy.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Flexibility</h3>
                <p className="text-slate-600 leading-relaxed">
                  We provide flexible learning options that adapt to different schedules, learning styles, and life circumstances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our diverse team of educators, technologists, and industry experts is dedicated to transforming online education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                alt="Sarah Johnson, CEO and Co-founder" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Sarah Johnson</h3>
              <p className="text-primary-600 font-medium mb-4">CEO & Co-founder</p>
              <p className="text-slate-600 leading-relaxed">
                Former VP of Learning at Google with 15 years of experience in education technology and curriculum development.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                alt="Michael Chen, CTO and Co-founder" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Michael Chen</h3>
              <p className="text-secondary-600 font-medium mb-4">CTO & Co-founder</p>
              <p className="text-slate-600 leading-relaxed">
                Former Senior Engineer at Netflix, specializing in scalable learning platforms and AI-powered education tools.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b639?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                alt="Dr. Emily Rodriguez, Head of Curriculum" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Dr. Emily Rodriguez</h3>
              <p className="text-accent-600 font-medium mb-4">Head of Curriculum</p>
              <p className="text-slate-600 leading-relaxed">
                PhD in Educational Psychology from Stanford, with expertise in online learning effectiveness and student engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Since our founding in 2018, we've been proud to make a meaningful difference in learners' lives worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100 font-medium text-lg">Students Enrolled</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-blue-100 font-medium text-lg">Expert Instructors</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-blue-100 font-medium text-lg">Courses Available</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100 font-medium text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}