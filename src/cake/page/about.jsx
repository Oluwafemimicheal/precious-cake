import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChefHat, Heart, Star, Users, Award, Clock, MapPin, Phone, Mail } from 'lucide-react'
import React from 'react'

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Passion for Perfection",
      description: "Every cake is crafted with unwavering dedication to quality and attention to detail, ensuring each bite is a moment of pure joy."
    },
    {
      icon: <ChefHat className="w-8 h-8 text-purple-600" />,
      title: "Artisan Craftsmanship",
      description: "Our master bakers combine traditional techniques with innovative flavors, creating unique culinary masterpieces for every occasion."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Community First",
      description: "We believe in bringing people together through the universal language of delicious food and memorable celebrations."
    },
    {
      icon: <Award className="w-8 h-8 text-fuchsia-600" />,
      title: "Quality Ingredients",
      description: "Only the finest, freshest ingredients make it into our creations, ensuring every product meets our uncompromising standards."
    }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Master Baker & Founder",
      experience: "15+ years",
      specialty: "Wedding Cakes"
    },
    {
      name: "Marcus Chen",
      role: "Pastry Chef",
      experience: "12+ years",
      specialty: "French Pastries"
    },
    {
      name: "Elena Rodriguez",
      role: "Cake Decorator",
      experience: "10+ years",
      specialty: "Custom Designs"
    },
    {
      name: "David Thompson",
      role: "Operations Manager",
      experience: "8+ years",
      specialty: "Quality Control"
    }
  ]

  const milestones = [
    { year: "2010", event: "PreciousCake founded with a single oven and a dream" },
    { year: "2012", event: "First wedding cake commissioned - the beginning of our specialty" },
    { year: "2015", event: "Expanded to include full pastry line and custom catering" },
    { year: "2018", event: "Won 'Best Bakery in Lagos' award" },
    { year: "2020", event: "Launched online ordering system during the pandemic" },
    { year: "2023", event: "Celebrated 10,000+ happy customers and counting" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-5 lg:px-0 bg-linear-to-b from-purple-700 flex flex-col gap-2 justify-center items-center text-center h-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 text-center mt-10">
          <div className="mb-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3">
            <ChefHat className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">About PreciousCake</span>
          </div>

          <h1 className="mb-6 text-xl font-bold leading-tight sm:text-6xl lg:text-5xl">
            Crafting Sweet <span className="bg-gradient-to-r from-purple-800 to-black bg-clip-text text-transparent">Memories</span>
          </h1>

          
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-purple-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg leading-relaxed text-gray-700">
                  To create extraordinary culinary experiences that bring joy, celebration, and unforgettable moments to every customer.
                  We believe that every cake tells a story, and we're honored to be part of yours.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-pink-50 to-orange-50">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-2xl text-pink-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg leading-relaxed text-gray-700">
                  To be the leading artisanal bakery in Nigeria, recognized for innovation, quality, and the ability to transform
                  ordinary occasions into extraordinary celebrations through exceptional craftsmanship and genuine care.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700">
              Our Core Values
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Drives Us Every Day
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from selecting ingredients to serving our community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-fuchsia-100 text-fuchsia-700">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              The Artisans Behind PreciousCake
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals who pour their passion and expertise into every creation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-pink-100">
                    <ChefHat className="h-10 w-10 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">{member.experience}</Badge>
                    <p className="text-sm text-gray-600">Specialty: {member.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      {/* <section className="bg-gradient-to-r from-purple-900 to-fuchsia-800 py-20 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Our Journey
            </Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">
              From Dream to Reality
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              A timeline of milestones that shaped PreciousCake into the beloved bakery it is today.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/30 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="w-5 h-5 text-pink-300" />
                          <span className="text-2xl font-bold text-pink-300">{milestone.year}</span>
                        </div>
                        <p className="text-white/90 leading-relaxed">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-bold mb-6 sm:text-4xl">
            Ready to Create Your Perfect Celebration?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether it's a wedding, birthday, corporate event, or just because - we're here to make it unforgettable.
            Let's discuss your vision and bring it to life.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mb-10">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-400 text-sm">123 Bakery Street, Lagos, Nigeria</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm">+234 123 456 7890</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm">hello@preciouscake.com</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className=" bg-purple-600 hover:bg-purple-700 px-8 py-3">
              Start Your Order
            </Button>
            <Button variant="outline" className="bg-transparent">
              View Our Menu
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
