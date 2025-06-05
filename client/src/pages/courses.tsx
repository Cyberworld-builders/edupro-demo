import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";
import SEOHead from "@/components/seo-head";
import { generatePageTitle, generateStructuredData } from "@/lib/seo";
import coursesData from "@/data/courses.json";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filteredCourses = coursesData.courses.filter(course => 
    selectedCategory === "All" || course.category === selectedCategory
  );

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price":
        return a.price - b.price;
      case "newest":
        return b.students - a.students; // Using students as a proxy for newest
      default:
        return b.rating * b.reviews - a.rating * a.reviews; // Popular
    }
  });

  const structuredData = generateStructuredData("ItemList", {
    name: "Online Courses",
    description: "Comprehensive collection of professional development courses",
    numberOfItems: coursesData.courses.length,
    itemListElement: coursesData.courses.map((course, index) => ({
      "@type": "Course",
      position: index + 1,
      name: course.title,
      description: course.description,
      provider: {
        "@type": "Organization",
        name: "EduPro"
      }
    }))
  });

  return (
    <>
      <SEOHead 
        title={generatePageTitle("All Courses")}
        description="Explore our comprehensive collection of online courses in web development, data science, digital marketing, design, and more. Expert-led courses with certificates."
        structuredData={structuredData}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover comprehensive courses designed by industry experts to advance your career and skills.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {coursesData.categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary-600 text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Sort by Popular</SelectItem>
                  <SelectItem value="rating">Sort by Rating</SelectItem>
                  <SelectItem value="price">Sort by Price</SelectItem>
                  <SelectItem value="newest">Sort by Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-slate-600">
              Showing {sortedCourses.length} course{sortedCourses.length !== 1 ? 's' : ''} 
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  {course.originalPrice > course.price && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-500 text-white">
                        {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary-100 text-primary-700 text-xs">
                      {course.category}
                    </Badge>
                    <div className="flex items-center text-xs text-slate-500">
                      <Star className="w-3 h-3 mr-1 fill-current text-yellow-400" />
                      {course.rating} ({course.reviews})
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed line-clamp-2">{course.shortDescription}</p>
                  <div className="flex items-center text-xs text-slate-500 mb-3">
                    <span>{course.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary-600">${course.price}</span>
                      {course.originalPrice > course.price && (
                        <span className="text-sm text-slate-500 line-through">${course.originalPrice}</span>
                      )}
                    </div>
                    <Link href={`/courses/${course.id}`}>
                      <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No courses found for the selected category.</p>
              <Button 
                onClick={() => setSelectedCategory("All")} 
                className="mt-4"
                variant="outline"
              >
                View All Courses
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
