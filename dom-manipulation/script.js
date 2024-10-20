let quotes = JSON.parse(localStorage.getItem("quotes")) || [
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
    category: "— category",
  },
  {
    text: "“Nothing is impossible, the word itself says 'I'm possible'!”",
    category: "— category",
  },
  {
    text: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    category: "— category",
  },
  {
    text: "“The future belongs to those who believe in the beauty of their dreams.”",
    category: "— category",
  },
  {
    text: "“Be the change that you wish to see in the world.”",
    category: "— category",
  },
  {
    text: "“No amount of regretting can change the past, and no amount of worrying can change the future.”",
    category: "— category",
  },
  {
    text: "“Take responsibility of your own happiness, never put it in other people’s hands.”",
    category: "— category",
  },
  {
    text: "“Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.”",
    category: "— category",
  },
  {
    text: "“A random act of kindness, no matter how small, can make a tremendous impact on someone else's life.”",
    category: "— category",
  },
  {
    text: "“Though nobody can go back and make a new beginning, Anyone can start over and make a new ending.”",
    category: "— category",
  },
  {
    text: "“You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?”",
    category: "— category",
  },
  {
    text: "“Happiness is only real when shared”",
    category: "— category",
  },
  {
    text: "“You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone.”",
    category: "— category",
  },
  {
    text: "“Stop comparing yourself to other people, just choose to be happy and live your own life.”",
    category: "— category",
  },
  {
    text: "“Wanting to be someone else is a waste of the person you are.”",
    category: "— category",
  },
  {
    text: "“Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.”",
    category: "— category",
  },
  {
    text: "“Courage isn't having the strength to go on - it is going on when you don't have strength.”",
    category: "— category",
  },
  {
    text: "“The unhappiest people in this world, are those who care the most about what other people think.”",
    category: "— category",
  },
  {
    text: "“I am a part of all that I have met.”",
    category: "— category",
  },
  {
    text: "“Earth provides enough to satisfy every man's needs, but not every man's greed.”",
    category: "— category",
  },
  {
    text: "“It’s your life; you don’t need someone’s permission to live the life you want. Be brave to live from your heart.”",
    category: "— category",
  },
  {
    text: "“My only advice is to stay aware, listen carefully, and yell for help if you need it.”",
    category: "— category",
  },
  {
    text: "“It's hard to beat a person who never gives up.”",
    category: "— category",
  },
  {
    text: "“Do what you love, love what you do, and with all your heart give yourself to it.”",
    category: "— category",
  },
  {
    text: "“Just because you can doesn't mean you should.”",
    category: "— category",
  },
  {
    text: "“When someone tells me 'no' it doesn't mean I can't do it, it simply means I can't do it with them.”",
    category: "— category",
  },
  {
    text: "“why trying so hard to fit in, when you're born to stand out?”",
    category: "— category",
  },
  {
    text: "“I must be willing to give up what I am in order to become what I will be.”",
    category: "— category",
  },
  {
    text: "“The only person who can pull me down is myself, and I'm not going to let myself pull me down anymore.”",
    category: "— category",
  },
  {
    text: "“You only live once, but if you do it right, once is enough.”",
    category: "— category",
  },
  {
    text: "“It is better to be hated for what you are than to be loved for what you are not.”",
    category: "— category",
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

//what the checker wants
//appendChild;textContent;"method", "POST", "headers", "application/json", "Content-Type"
populateCategories();
filterQuotes();

// Step 1: Fetch Quotes from Server
async function fetchQuotesFromServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const quotesFromServer = await response.json();
  return quotesFromServer.map((post) => ({
    text: post.title,
    category: "server",
  }));
}

// Step 2: Update Local Storage with Server Data
function updateLocalStorageWithServerData(serverQuotes) {
  let localQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
  const combinedQuotes = resolveConflicts(serverQuotes, localQuotes);
  localStorage.setItem("quotes", JSON.stringify(combinedQuotes));
  quotes = combinedQuotes;
  populateCategories();
  filterQuotes();
  notifyUser("Quotes updated from server");
}

// Conflict Resolution Strategy
function resolveConflicts(serverQuotes, localQuotes) {
  return serverQuotes.concat(
    localQuotes.filter(
      (localQuote) =>
        !serverQuotes.some(
          (serverQuote) => serverQuote.text === localQuote.text
        )
    )
  );
}

// Periodic Data Fetching
setInterval(async () => {
  const serverQuotes = await fetchQuotesFromServer();
  updateLocalStorageWithServerData(serverQuotes);
}, 60000); // Fetch every 60 seconds

// Notification System
function notifyUser(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.position = "fixed";
  notification.style.bottom = "10px";
  notification.style.right = "10px";
  notification.style.backgroundColor = "lightgreen";
  notification.style.padding = "10px";
  document.body.appendChild(notification);
  setTimeout(() => document.body.removeChild(notification), 5000);
}

// Manual Conflict Resolution
function manualConflictResolution(localQuote, serverQuote) {
  const userChoice = confirm(
    `Conflict detected for quote: "${localQuote.text}". Use server version?`
  );
  return userChoice ? serverQuote : localQuote;
}

// ... (rest of your existing code)
