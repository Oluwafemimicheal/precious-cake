import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Toast, ToastViewport } from '@/components/ui/toast'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [toastOpen, setToastOpen] = useState(false)
  const [toastDetails, setToastDetails] = useState({ title: '', description: '' })

  useEffect(() => {
    if (!toastOpen) {
      return
    }

    const timeout = window.setTimeout(() => setToastOpen(false), 3200)
    return () => window.clearTimeout(timeout)
  }, [toastOpen])

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-purple-600" />,
      title: "Call Us",
      description: "Mon-Fri: 9AM - 6PM, Sat: 10AM - 4PM",
      value: "+234 123 456 7890"
    },
    {
      icon: <Mail className="w-8 h-8 text-pink-600" />,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      value: "hello@preciouscake.com"
    },
    {
      icon: <MapPin className="w-8 h-8 text-indigo-600" />,
      title: "Visit Us",
      description: "Our physical location",
      value: "123 Bakery Street, Ikoyi, Lagos"
    },
    {
      icon: <Clock className="w-8 h-8 text-fuchsia-600" />,
      title: "Working Hours",
      description: "Visit us at your convenience",
      value: "9AM - 7PM Daily"
    }
  ]

  const faqs = [
    {
      question: "What's the minimum order quantity?",
      answer: "Our minimum order is for 6 servings. Custom orders with special requirements may have different minimums."
    },
    {
      question: "How much notice do you need for custom orders?",
      answer: "We recommend placing custom orders at least 2 weeks in advance. For simple designs, 1 week is usually sufficient."
    },
    {
      question: "Do you offer delivery?",
      answer: "Yes! We offer free delivery for orders above ₦25,000 within Lagos. Delivery fees apply for smaller orders."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely. We offer vegan, gluten-free, and sugar-free options. Please inform us during ordering."
    }
  ]

  const socials = [
    // { name: "Instagram", icon: <Instagram className="w-6 h-6" />, handle: "@preciouscake_" },
    // { name: "Facebook", icon: <Facebook className="w-6 h-6" />, handle: "PreciousCake Bakery" },
    // { name: "Twitter", icon: <Twitter className="w-6 h-6" />, handle: "@preciouscake" }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    setToastDetails({
      title: "Message Sent!",
      description: "Thank you for reaching out! We will get back to you soon.",
    })
    setToastOpen(true)

    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-purple-900 via-violet-800 to-fuchsia-700 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 text-center">
          <div className="mb-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3">
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Get In Touch</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            We'd Love to <span className="bg-linear-to-r from-pink-300 to-yellow-200 bg-clip-text text-transparent">Hear From You</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/90 leading-relaxed">
            Whether you have a question about custom orders, event catering, or just want to share your love for our creations,
            we're here to help. Reach out to us using any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-linear-to-br from-gray-50 to-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{info.title}</CardTitle>
                  <CardDescription className="text-xs">{info.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-purple-600">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700">
                  Send us a Message
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Have a Question?
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  We typically respond within 24 business hours.
                </p>
              </div>

              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-gray-300"
                        required
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-gray-300"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+234 123 456 7890"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-gray-300"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="min-h-32 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        required
                      />
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-3 flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4 bg-pink-100 text-pink-700">
                  Visit Us
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Find Our Location
                </h2>
                <p className="text-gray-600 mb-8">
                  Visit our warm and welcoming bakery in the heart of Ikoyi. 
                  Walk-ins are always welcome, and our friendly team is ready to help you find the perfect treat.
                </p>

                <Card className="border-0 shadow-xl overflow-hidden bg-white">
                  <div className="w-full h-72 bg-linear-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">123 Bakery Street, Ikoyi, Lagos</p>
                      <p className="text-sm text-gray-500 mt-2">Click to open in maps</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="border-0 shadow-lg bg-linear-to-br from-purple-50 to-pink-50">
                <CardHeader>
                  <CardTitle className="text-gray-900">Opening Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">By Appointment</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-indigo-100 text-indigo-700">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Feel free to contact us directly.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 flex items-start gap-3">
                    <span className="text-purple-600 font-bold min-w-fit">Q{index + 1}.</span>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed ml-10">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-linear-to-r from-purple-900 to-fuchsia-800 py-20 text-white">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
            Follow Us on Social Media
          </h2>
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
            Stay updated with our latest creations, special offers, and behind-the-scenes content.
            Join our community and be part of the PreciousCake family!
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {socials.map((social, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-8 flex flex-col items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{social.name}</h3>
                    <p className="text-white/80">{social.handle}</p>
                  </div>
                  <Button variant="outline" className="border-white/60 bg-transparent text-white hover:border-white hover:bg-white/10">
                    Follow
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 py-16 text-white text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-2xl font-bold mb-4">Ready to Place Your Order?</h2>
          <p className="text-gray-300 mb-8">
            Browse our menu and create your perfect celebration with PreciousCake.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg">
              View Our Menu
            </Button>
            <Button variant="outline" className="border-white/60 bg-transparent text-white hover:border-white hover:bg-white/10 px-8 py-3 rounded-lg">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
      <ToastViewport>
        <Toast
          open={toastOpen}
          title={toastDetails.title}
          description={toastDetails.description}
          onOpenChange={setToastOpen}
        />
      </ToastViewport>
    </div>
  )
}

export default Contact
