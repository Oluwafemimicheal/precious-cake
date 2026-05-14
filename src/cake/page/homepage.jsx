import React from 'react'
import Navbar from '../ccomponents/ui/navbar'
import { Hero } from '../ccomponents/ui/hero'
import { Categories } from '../ccomponents/ui/categories'
import { RecentCake } from '../ccomponents/ui/recent-cake'
import { FeaturedCake } from '../ccomponents/ui/featured-cake'
import { Footer } from '../ccomponents/ui/footer'
import { FQA } from '../ccomponents/ui/fqa'

const Homepage = () => {
  return (
    <div>
       <Hero/>
       <Categories/>
       <RecentCake/>
       <FeaturedCake/>
    </div>
  )
}

export default Homepage
