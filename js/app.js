// this function contains all the quotes and randomizes them
(function() {
  const quotes = [
    {
      quote:
        "I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with 'em later.",
      author: " — Mitch Hedberg"
    },
    {
      quote:
        "Gentlemen, you can’t fight in here. This is the war room.",
      author: " — President Merkin Muffley (Peter Sellers), Dr. Strangelove"
    },
    {
      quote:
        "My mother always used to say: The older you get, the better you get, unless you’re a banana.",
      author: " — Rose (Betty White), The Golden Girls"
    },
    {
      quote:
        "Halloween is the beginning of the holiday shopping season. That’s for women. The beginning of the holiday shopping season for men is Christmas Eve.",
      author: " — David Letterman"
    },
    {
      quote:
        "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.",
      author: " — Jack Handey"
    },
    {
      quote:
        "I never forget a face—but in your case, I’ll be glad to make an exception.",
      author: " — Groucho Marx"
    },
    {
      quote:
        "My husband and I fell in love at first sight. Maybe I should have taken a second look.",
      author: " — Halley Reed (Mia Farrow), Crimes and Misdemeanors"
    },
    
    {
      quote:
        "Before you marry a person, you should first make them use a computer with slow internet to see who they really are.",
      author: " — Will Ferrell"
    },
    {
      quote:
        "I love being married. It’s so great to find that one special person you want to annoy for the rest of your life.",
      author: " — Rita Rudner"
    },
    {
      quote:
        "I'm about to do to you what Limp Bizkit did to music in the late '90s.",
      author: " — Deadpool (Ryan Reynolds)"
    },
    {
      quote:
        "I want my children to have all the things I couldn’t afford. Then I want to move in with them.",
      author: " — Phyllis Diller"
    },
    {
      quote:
        "Breaking up is like knocking over a Coke machine. You can’t do it in one push; you got to rock it back and forth a few times, and then it goes over.",
      author: " — Jerry (Jerry Seinfeld), Seinfeld"
    },
    {
      quote:
        "I walk around like everything’s fine, but deep down, inside my shoe, my sock is sliding off.",
      author: " — Anonymous"
    },
    {
      quote:
        "You know you’ve reached middle age when you’re cautioned to slow down by your doctor, instead of by the police.",
      author: " — Joan Rivers"
    },
    {
      quote:
        "Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts.",
      author: " — Lt. Frank Drebin (Leslie Nielsen), Naked Gun 2½: The Smell of Fear"
    },
    {
      quote:
        "Marriage is like an unfunny, tense version of Everybody Loves Raymond, but it doesn’t last 22 minutes. It lasts forever.",
      author: " — Pete (Paul Rudd), Knocked Up"
    },
    {
      quote:
        "To call you stupid would be an insult to stupid people!",
      author: " — Wanda (Jamie Lee Curtis), A Fish Called Wanda"
    },
    {
      quote:
        "Insanity runs in my family. It practically gallops.",
      author: " — Mortimer Brewster (Cary Grant), Arsenic and Old Lace"
    },
    {
      quote:
        "Why can’t you just be happy for me and then go home and talk behind my back later like a normal person?",
      author: " — Lillian (Maya Rudolph), Bridesmaids"
    },
    {
      quote:
        "The key to faking out the parents is the clammy hands. It’s a good non-specific symptom; I’m a big believer in it. A lot of people will tell you that a good phony fever is a dead lock, but you get a nervous mother, you could wind up in a doctor’s office. That’s worse than school. You fake a stomach cramp, and when you’re bent over, moaning and wailing, you lick your palms. It’s a little childish and stupid, but then, so is high school.",
      author: " — Ferris Bueller (Matthew Broderick), Ferris Bueller’s Day Off"
    },
    {
      quote:
        "I like my money where I can see it: hanging in my closet.",
      author: " — Carrie (Sarah Jessica Parker), Sex and the City"
    },
    {
      quote:
        "The worst part of online shopping is having to get up and get your credit card from your purse.",
      author: " — Anonymous"
    },
    {
      quote:
        "People say, ‘But Betty, Facebook is a great way to connect with old friends.’ Well, at my age, if I want to connect with old friends I need a Ouija board.",
      author: " — Betty White"
    },
    {
      quote:
        "From the ages of eight to 18, me and my family moved around a lot. Mostly we would just stretch, but occasionally one of us would actually get up to go to the fridge.",
      author: " — Jarod Kintz"
    },
    {
      quote:
        "The whole purpose of places like Starbucks is for people with no decision-making ability whatsoever to make six decisions just to buy one cup of coffee. Short, tall, light, dark, caf, decaf, low-fat, non-fat. So people who don’t know what they’re doing, or who on earth they are can, for only $2.95, get not just a cup of coffee but an absolutely defining sense of self.",
      author: " — Joe Fox (Tom Hanks), You’ve Got Mail"
    },
    {
      quote:
        "I love airports because the rules of society don’t apply. Eat a pizza and have a glass of wine at 7 am while in track pants. Nobody cares.",
      author: " — Anonymous"
    },
    {
      quote:
        "I’m one stomach flu away from my goal weight.",
      author: " — Emily Charlton (Emily Blunt), The Devil Wears Prada"
    },
    {
      quote:
        "I’d like to have a kid, but I’m not sure I’m ready to spend 10 years of my life constantly asking someone where his shoes are.",
      author: " — Damien Fahey"
    },
    {
      quote:
        "Why yes, I can carry on a conversation made up entirely of movie quotes. ( ͡° ͜ʖ ͡°)",
      author: " — Anonymous"
    },
    {
      quote:
        "I’m sure wherever my Dad is, he’s looking down on us. He’s not dead, just very condescending.",
      author: " — Jack Whitehall"
    },
    {
      quote:
        "My therapist told me the way to achieve true inner peace is to finish what I start. So far I’ve finished two bags of M&Ms and a chocolate cake. I feel better already.",
      author: " — Dave Barry"
    },
    {
      quote:
        "You know you’re getting old when you stoop to tie your shoelaces and wonder what else you could do while you’re down there.",
      author: " — George Burns"
    },
    {
      quote:
        "Instead of the mahi mahi, may I just get the one mahi because I’m not that hungry?",
      author: " — Shelley Darlingson (Anna Faris), The House Bunny"
    },
    {
      quote:
        "Accept who you are. Unless you're a pedophillie. Then get help before you fucking commit a felony",
      author: " — Plextora (The developer of this website)"
    },
    {
      quote:
        "My ability to turn good news into anxiety is rivaled only by my ability to turn anxiety into chin acne.",
      author: " — Tina Fey, Bossypants"
    },
    {
      quote:
        "Why do they call it rush hour when nothing moves?",
      author: " — Robin Williams"
    },
    {
      quote:
        "I don’t have to take this abuse from you; I’ve got hundreds of people dying to abuse me.",
      author: " — Dr. Peter Venkman (Bill Murray), Ghostbusters"
    },
    {
      quote:
        "I grew up with six brothers. That’s how I learned to dance: waiting for the bathroom.",
      author: " — Bob Hope"
    },
    {
      quote:
        "If we’re going to pay this much for crab, it better sing and dance and introduce us to the Little Mermaid.",
      author: " — Claire Foster (Tina Fey), Date Night"
    },
    {
      quote:
        "I prefer not to think before speaking. I like being as surprised as everyone else by what comes out of my mouth.",
      author: " — Anonymous"
    },
    {
      quote:
        "Don't stand at my grave and cry. I am not there, I did not die.",
      author: " — Mary Frye"
    },
    {
      quote:
        "There’s no feeling more intense than starting over. If you deleted your homework the day before it was due, as I have. Or if you left your wallet at home, and you have to go back after spending an hour in the commute. If you won some money at the casino, and then put all of your winnings on red, and it came up black. If you got your best shirt dry-cleaned before a wedding, then immediately dropped food on it. If you won an argument with a friend and then later discovered that they just returned to their original view. Starting over is harder than starting up. If you're not ready for that, like if you've already had a bad day, then what you're about to go through might be too much. Feel free to go away and come back. I'll be here.”",
      author: " — Bennett Foddy, Getting Over It"
    },

  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
