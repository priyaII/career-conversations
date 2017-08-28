var quoteBank= [
  " Disruptive: A word that a startup uses to make themselves sound, erm, well...disruptive, despite the fact that every other startup labels themselves as disruptive, leaving the rest of us wondering -is anybody actually disruptive?" ,
  "Investable:A term used by a startup for no other reason than it needs money. Preferably now. This minute. Please, our team are starving.",
  "First-mover: A term used by startups after a single Google search reveals no similar businesses on page 1 to 3.",
  "Global: A label given to English startups after they accidentally acquire a customer in Wales.",
  "Elevator Pitch: A jumble of nonsensical jargon practiced repeatedly in case a founder is ever stuck in a lift with Richard Branson. Which they won’t be. Ever. Richard Branson isn't even real; he's a hologram.",
  "Pivot : The point where a startup realises their idea is shit and decide to take the business in a different (and probably shittier) direction.",
  "Seed Round : The point where a startup acquires initial money from investors into an idea that will pivot so often in the coming months that it will end up looking absolutely nothing like the business the investors invested in in the first place. It probably won’t even have the same name.",
  "Future Rounds (A, B, C etc.): The point where a startup needs more money because they spent the seed round on beanbags and an office dog.",
  "Prerevenue: The term used by startup founders who are too scared to ask their customers for money. Prerevenue startup founders can often be found scavenging from the ‘nibbles’ table at networking events.",
  "Internship: A position advertised by startups that can’t afford to pay you a salary but need your skills. May offer you equity in the company but, in truth, you'll be lucky if you get a brew.",
  "Projections:A technique similar to one used by Native Americans to predict the weather whereby a founder looks to the sky, puts a finger in the air and predicts their startup's financials for the next 5 years. The only difference is, Native Americans are pretty good at predicting the weather.",
  "Pre-money valuation:A number plucked out of a founder’s arse.",
  "Post-money valuation: A grossly exaggerated number imagined, post investment, by a startup team during a 4-day crack bender.",
  "An Accelerator: A programme where startup teams gather to spend more time talking about being a startup than actually being a startup.",
  "Mentor: A person (generally an old, white man) who saunters around accelerator programmes chucking crappy anecdotes at founders and being about as useful as a paper umbrella.",
  "CTO : A person who’s slightly better at IT than the CEO.",
  "Growth Hacker : A marketer who couldn’t be arsed learning to code but still wants to be known as a hacker because, nowadays, hackers get all the action.",
  "Potential to scale:A term used alongside fudged figures to hide the fact that a startup's recent growth is staler than the breadsticks at the back of your nan’s cupboard.",
"Award-winning: A startup that sponsored an event and received an award by beating all the other entrants that didn’t sponsor the event who lost out on the award simply because...yep, you guessed it...they didn't sponsor the event.",
"Pitch Deck : A medley of the above bollocks condensed into a pretty slide show."
];
var l=quoteBank.length;
$(document).ready(function() {$("#getQ" ).on( "click", function(){
      // Only change code below this line.

      $("#quote").html(quoteBank[Math.floor(Math.random() * l)]);


    });
  });
