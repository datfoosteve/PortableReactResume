import React from 'react'
import { AnnotationIcon } from '@heroicons/react/outline'

const Testimonials = ({ data }) => {
  if (data) {
    var testimonials = data.testimonials.map(function (testimonials) {
      return (
        <li key={testimonials.user} className="testimonials">
          <p className="text">"{testimonials.text}"</p>
          <p className="user">- {testimonials.user}</p>
        </li>
      )
    })
  }

  return (
    <section id="testimonials" className="testimonial">
      <div className="heading2">Client Testimonials</div>
        <div className="flex-items-center mx-auto mt-12 mb-18 max-w-4xl md:grid md:grid-cols-2 md:space-x-8 md:px-8 xl:max-w-6xl"> 
        <AnnotationIcon className="annotationIcon text-slate" />
        <ul className="testimonialList">{testimonials}</ul>
      </div>
    </section>
  )
}

export default Testimonials
