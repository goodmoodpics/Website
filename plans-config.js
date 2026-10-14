/* Good Mood plans: every link the plans and welcome pages use lives here.
   Stripe links below are live. To pause selling, deactivate the links in the Stripe dashboard.

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
      checkout:{ monthly:'https://buy.stripe.com/fZu4gA1bNdiC3Mt3Uvbsc00',
                 quarterly:'https://buy.stripe.com/fZu14o5s33I25UBcr1bsc01' } },
    { id:'signature', name:'Signature',        monthly:7500,  quarterly:6750, selected:true,
      meta:'Michael, 1 workstream',
      features:['Work directly with Michael to craft your pieces','Trailers, sizzles and hero promos','Product animation and motion'],
      checkout:{ monthly:'https://buy.stripe.com/cNicN65s3emG82J1Mnbsc02',
                 quarterly:'https://buy.stripe.com/8x26oI4nZcey2Ip9ePbsc03' } },
    { id:'partner',   name:'Creative Partner', monthly:18500, quarterly:16650,
      meta:'2 editors, 2 workstreams, plus a full team',
      features:['Michael and a second editor, working side by side','A writer/producer for scripts and concept pitches','A colorist to grade your hero pieces','A sound designer and mixer to finish them'],
      checkout:{ monthly:'https://buy.stripe.com/6oU28sbQr2DY6YF8aLbsc04',
                 quarterly:'https://buy.stripe.com/6oUdRaf2D5Qafvb0Ijbsc05' } }
  ]
};
