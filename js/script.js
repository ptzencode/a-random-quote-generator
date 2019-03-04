
function init () {

    // quotes array

    let quotes = [
        {
            quote: "Faith is taking the first step even when you don't see the whole staircase.",
            source: "Martin Luther King, Jr.",
            tags: ['inspirational', 'faith']
        },

        {
            quote: "You must be the change you wish to see in the world.",
            source: "Mahatma Gandhi",
            tags: ['inspirational', 'philosophy', 'change']
        },

        {
            quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
            source: "J.K. Rowling",
            citation: "Harry Potter and the Chamber of Secrets ",
            year: 1998,
            tags: ['abilities', 'choices']
        },

        {
            quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
            source: "William Shakespeare",
            citation: "As You Like It",
            year: 1599,
            tags: ['wisdom']
        },

        {
            quote: "Never put off till tomorrow what may be done day after tomorrow just as well.",
            source: "Mark Twain",
            tags: ['humor', 'procrastination']
        },

        {
            quote: "It is never too late to be what you might have been.",
            source: "George Eliot",
            tags: ['inspirational']
        },

        {
            quote: "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
            source: "Paulo Coelho",
            citation: "The Alchemist",
            year: 1988,
            tags: ['achievement']
        },

        {
            quote: "Education is the most powerful weapon which you can use to change the world.",
            source: "Nelson Mandela",
            tags: ['change', 'education']
        },

        {
            quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
            source: "Ralph Waldo Emerson",
            tags: ['inspirational', 'life']
        },

        {
            quote: "Learned we may be with another man's learning: we can only be wise with wisdom of our own.",
            source: "Michel de Montaigne",
            citation: "The Complete Essays",
            year: 1572,
            tags: ['philosophy', 'wisdom']
        }

    ];

    function getRandomQuote (quoteArray) {
        let max = quoteArray.length;
        let index = Math.floor(Math.random() * max);
        let quote = quoteArray[index];
        return quote;
    }

    // create random color as hsl
    function createColor() {
      function colorComponent(min,max) {
        return Math.floor(Math.random()*(max-min + 1)) + min;
      }

      let h = colorComponent(0,360)+'deg';
      //custom saturation & lightness range for good contrast background color
      //avoid very saturated >90% & very de-saturated <40% (like gray)
      let s = colorComponent(40,90)+'%';
      //avoid very dark <20% (near black) & very light >50% (near white)
      let l = colorComponent(20,50)+'%';
      //example blue is hsl(240, 100%, 50%)
      let color = "hsl(" + h + ","+ s + ","+ l + ")";
      return color;
    }

    function printQuote () {
        // clear any previous timeout
        // enables smooth behaviour, especially when button is clicked to show quote
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        let quoteObj = getRandomQuote(quotes);
        let print = "";

        print += '<p class="quote">' + quoteObj.quote + '</p>';
        print += '<p class="source">' + quoteObj.source;

        if(quoteObj.citation) {
            print += '<span class="citation">' + quoteObj.citation + '</span>';
        }

        if (quoteObj.year) {
            print += '<span class="year">' + quoteObj.year + '</span>';
        }

        if (quoteObj.tags) {
            //adding tags to quote
            print += '<p class="tags">tags<span class="tag-list">';
            print += quoteObj.tags.join(', ');
            print += '</span></p>';
        }

        print += '</p>';

        //changing body background
        let color = createColor();
        document.querySelector('body').style.backgroundColor = color;

        // loading quote to page
        document.getElementById('quote-box').innerHTML = print;

        //reset timeout
        //continue to show quote after 5s, even when button is not clicked
        timeoutID = setTimeout(printQuote, 5000);
    }

    // show quote immediately - with button click
    document.getElementById('loadQuote').addEventListener("click", printQuote, false);

    //show quote after 5s - without button click
    var timeoutID = setTimeout(printQuote, 5000);
}

//The load event fires when the document has finished loading
window.onload = init;

