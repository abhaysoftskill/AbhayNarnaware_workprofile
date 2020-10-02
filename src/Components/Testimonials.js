import React, { Component,useState } from 'react';

  const Testimonials = ({data}) => {
      const [newTestimonials, setNewTestimonials] = useState('');

      if (data) {
         var testimonials = data.testimonials.map(function (testimonials) {
            return <li key={testimonials.user}>
               <blockquote>
                  <p>{testimonials.text}</p>
                  <cite>{testimonials.user}</cite>
               </blockquote>
            </li>
         })
      }

      return (
         <section id="testimonials">
            <div className="text-container">
               <div className="row">

                  <div className="two columns header-col">
                     <h1><span>Client Testimonials</span></h1>
                  </div>

                  <div className="ten columns flex-container">
                     <ul className="slides">
                        {testimonials}
                     </ul>
                     <textarea id="newTestmonial" value={newTestimonials} onChange={e => setNewTestimonials(e.target.value)}  cols="30" rows="10"  name="newTestmonial"
                     placeholder="Write about me"></textarea>

                  </div>
               </div>
            </div>
         </section>
      );
}

export default Testimonials;
