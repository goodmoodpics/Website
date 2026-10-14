/* Good Mood plans: every link the plans and welcome pages use lives here.
   Checkout links are blank for now: with none set, the plans page hides
   the Start button and leads with "Book a call". Paste a Stripe link in to turn Start back on.

   checkout  = Stripe Payment Link for that plan and billing cycle
               (Stripe Dashboard > Payment Links; create each as a recurring price,
               turn on "Bank debit (ACH)" under payment methods, and set the
               "After payment" redirect to https://YOUR-SITE/welcome.html)
   booking   = your scheduling page (Google Calendar appointment schedule or Cal.com)
*/
window.PLANS_CONFIG = {
  email: 'michael@goodmood.pics',
  booking: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0If84OpyGN2ovdH8GyJfCT6OlLLmeulu4msQjYsjg7OHxc3RUdM6RMCwMzK1wO0a7jBBppeZhr',
  plans: [
    { id:'managed',   name:'Managed',          monthly:5000,  quarterly:4500,
      meta:'1 editor, 1 workstream',
      features:['Social edits, talking heads and interviews','Cutdowns, versions and resizes','Promo variations and standard edits','An editor managed and trained by Michael'],
      checkout:{ monthly:'',
                 quarterly:'' } },
    { id:'signature', name:'Signature',        monthly:7500,  quarterly:6750, selected:true,
      meta:'Michael, 1 workstream',
      features:['Work directly with Michael to craft your pieces','Trailers, sizzles and hero promos','Product animation and motion'],
      checkout:{ monthly:'',
                 quarterly:'' } },
    { id:'partner',   name:'Creative Partner', monthly:18500, quarterly:16650,
      meta:'2 editors, 2 workstreams, plus a full team',
      features:['Michael and a second editor, working side by side','A writer/producer for scripts and concept pitches','A colorist to grade your hero pieces','A sound designer and mixer to finish them'],
      checkout:{ monthly:'',
                 quarterly:'' } }
  ]
};
