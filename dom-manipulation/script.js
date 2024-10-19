const quote = [
  {
    text: "“Life is too short to waste your time on people who don’t respect, appreciate, and value you.”",
    category: "category",
  },
  {
    text: "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”",
    category: "category",
  },
  {
    text: "“I have not failed. I've just found 10,000 ways that won't work.”",
    category: "category",
  },
  {
    text: "“Respect other people's feelings. It might mean nothing to you, but it could mean everything to them.”",
    category: "category",
  },
  {
    text: "“It is never too late to be what you might have been.”",
    category: "category",
  },
  {
    text: "“You can't live your life for other people. You've got to do what's right for you, even if it hurts some people you love.”",
    category: "— Nicholas Sparks",
  },
  {
    text: "“Nothing is impossible, the word itself says 'I'm possible'!”",
    category: "— Audrey Hepburn",
  },
  {
    text: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    category: "— Mahatma Gandhi",
  },
  {
    text: "“The future belongs to those who believe in the beauty of their dreams.”",
    category: "— Eleanor Roosevelt",
  },
  {
    text: "“Be the change that you wish to see in the world.”",
    category: "— Mahatma Gandhi",
  },
  {
    text: "“No amount of regretting can change the past, and no amount of worrying can change the future.”",
    category: "— Roy T. Bennett",
  },
  {
    text: "“Take responsibility of your own happiness, never put it in other people’s hands.”",
    category: "— Roy T. Bennett",
  },
  {
    text: "“Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.”",
    category: "— Roy T. Bennett",
  },
  {
    text: "“A random act of kindness, no matter how small, can make a tremendous impact on someone else's life.”",
    category: "— Roy T. Bennett",
  },
  {
    text: "“Though nobody can go back and make a new beginning, Anyone can start over and make a new ending.”",
    category: "— Chico Xavier",
  },
  {
    text: "“You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?”",
    category: "— George Bernard Shaw",
  },
  {
    text: "“Happiness is only real when shared”",
    category: "— Jon Krakauer",
  },
  {
    text: "“You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone.”",
    category: "— Roy T. Bennett",
  },
  {
    text: "“Stop comparing yourself to other people, just choose to be happy and live your own life.”",
    category: "— Roy T. Bennett",
  },
  {
    text: "“Wanting to be someone else is a waste of the person you are.”",
    category: "— Marilyn Monroe",
  },
  {
    text: "“Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.”",
    category: "— Steve Maraboli",
  },
  {
    text: "“Courage isn't having the strength to go on - it is going on when you don't have strength.”",
    category: "— Napoleon Bonaparte",
  },
  {
    text: "“The unhappiest people in this world, are those who care the most about what other people think.”",
    category: "— C. JoyBell C.",
  },
  {
    text: "“I am a part of all that I have met.”",
    category: "— Alfred Tennyson",
  },
  {
    text: "“Earth provides enough to satisfy every man's needs, but not every man's greed.”",
    category: "— Mahatma Gandhi",
  },
  {
    text: "“It’s your life; you don’t need someone’s permission to live the life you want. Be brave to live from your heart.”",
    category: "— Roy T. Bennett",
  },
  {
    text: "“My only advice is to stay aware, listen carefully, and yell for help if you need it.”",
    category: "— Judy Blume",
  },
  {
    text: "“It's hard to beat a person who never gives up.”",
    category: "— George Herman Ruth",
  },
  {
    text: "“Do what you love, love what you do, and with all your heart give yourself to it.”",
    category: "— Roy T. Bennett",
  },
  {
    text: "“Just because you can doesn't mean you should.”",
    category: "— Sherrilyn Kenyon",
  },
  {
    text: "“When someone tells me 'no' it doesn't mean I can't do it, it simply means I can't do it with them.”",
    category: "— Karen E. Quinones Miller",
  },
  {
    text: "“why trying so hard to fit in, when you're born to stand out?”",
    category: "— Oliver James",
  },
  {
    text: "“I must be willing to give up what I am in order to become what I will be.”",
    category: "— Albert Einstein",
  },
  {
    text: "“The only person who can pull me down is myself, and I'm not going to let myself pull me down anymore.”",
    category: "— C. JoyBell C.",
  },
  {
    text: "“You only live once, but if you do it right, once is enough.”",
    category: "— Mae West",
  },
  {
    text: "“It is better to be hated for what you are than to be loved for what you are not.”",
    category: "— Andre Gide",
  },
  {
    text: "“Life is what happens to us while we are making other plans.”",
    category: "category",
  },
  {
    text: "“Sometimes the questions are complicated and the answers are simple.”",
    category: "category",
  },
  {
    text: "“But better to get hurt by the truth than comforted with a lie.”",
    category: "category",
  },
  {
    text: "“If you don't know where you're going, any road'll take you there”",
    category: "category",
  },
  {
    text: "“Where there is love there is life.”",
    category: "category",
  },
  {
    text: "“Life can only be understood backwards; but it must be lived forwards.”",
    category: "category",
  },
  {
    text: "“A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.”",
    category: "category",
  },
  {
    text: "“Nobody realizes that some people expend tremendous energy merely to be normal.”",
    category: "category",
  },
  {
    text: "“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”",
    category: "category",
  },
  {
    text: "“Success is not how high you have climbed, but how you make a positive difference to the world.”",
    category: "category",
  },
];

let previousIndex = "";

function showRandomQuote() {
  let index = "";
  do {
    index = Math.floor(Math.random() * quote.length);
  } while (previousIndex == index);
  previousIndex = index;
  console.log(index);
  document.getElementById("quoteDisplay").innerHTML = quote[index].text;
  document.getElementById("category").innerHTML = quote[index].category;
}
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

let createAddQuoteForm = document.createElement("form");
document.body.appendChild(createAddQuoteForm);
document.createAddQuoteForm.appendChild(
document.getElementById("createAddQuoteFormChilde")
);
function addQuote() {
  let text = document.getElementById("newQuoteText").value;
  let category = document.getElementById("newQuoteCategory").value;

  if (text !== "" && category !== "") {
    quote.push({ text: text, category: category });
    document.getElementById("quoteDisplay").innerHTML = text;
    document.getElementById("category").innerHTML = category;
  } else {
    alert("Please Enter A Quote And A category !");
  }
}
