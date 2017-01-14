var quotes = [
  ['I wish they would only take me as I am.','Vincent Van Gogh'],
  ['A lie never lives to be old.','Sophocles'],
  ['Kindness is the beginning of cruelty.','Frank Herbert'],
  ['Music is the soundtrack of your life.','Dick Clark'],
  ['Be happy. It\'s one way of being wise.','Sidonie Gabrielle Colette'],
  ['Everything popular is wrong.','Oscar Wilde'],
  ['In fair weather prepare for foul.','Thomas Fuller'],
  ['The truth needs so little rehearsal.','Barbara Kingsolver'],
];

function setRandomQuote() {
  var index = Math.floor(Math.random() * quotes.length);
  $("#quote").text(quotes[index][0]);
  $("#author").text(quotes[index][1]);
  $("#twitter-link").attr("href", "http://twitter.com/home?status=\""+quotes[index][0]+"\", by "+quotes[index][1]);
}

$(document).ready(function() {
  setRandomQuote();
  
  $('#get-quote-btn').on('click', function() {
    setRandomQuote();
  });
     
});