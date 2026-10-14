/* Good Mood plans: every link the plans and welcome pages use lives here.
   Replace each REPLACE_ME url with the real one, then upload.

   checkout  = Stripe Payment Link for that plan and billing cycle
               (Stripe Dashboard > Payment Links; create each as a recurring price,
               turn on "Bank debit (ACH)" under payment methods, and set the
               "After payment" redirect to https://YOUR-SITE/welcome.html)
   booking   = your scheduling page (Google Calendar appointment schedule or Cal.com)
*/
window.PLANS_CONFIG = {
  email: 'michael@goodmood.pics',
  booking: 'https://calendar.app.google/REPLACE_ME_BOOKING',
  plans: [
    { id:'managed',   name:'Managed',          monthly:5000,  quarterly:4500,
      features:['A vetted editor, directed and checked by Michael','Cutdowns, versions and resizes','Promo variations and standard edits'],
      checkout:{ monthly:'https://buy.stripe.com/REPLACE_ME_MANAGED_MONTHLY',
                 quarterly:'https://buy.stripe.com/REPLACE_ME_MANAGED_QUARTERLY' } },
    { id:'signature', name:'Signature',        monthly:7500,  quarterly:6750, selected:true,
      features:['Michael edits, start to finish','Trailers, sizzles and hero promos','Product animation and motion'],
      checkout:{ monthly:'https://buy.stripe.com/REPLACE_ME_SIGNATURE_MONTHLY',
                 quarterly:'https://buy.stripe.com/REPLACE_ME_SIGNATURE_QUARTERLY' } },
    { id:'partner',   name:'Creative Partner', monthly:18500, quarterly:16650,
      features:['Signature and Managed lanes together','A producer who writes scripts and pitches concepts','A mixer and a colorist to finish your work'],
      checkout:{ monthly:'https://buy.stripe.com/REPLACE_ME_PARTNER_MONTHLY',
                 quarterly:'https://buy.stripe.com/REPLACE_ME_PARTNER_QUARTERLY' } }
  ]
};
