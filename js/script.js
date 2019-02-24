
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
    console.log(quote);
    return quote;
}

function createColor () {
    function colorComponent() {
        return Math.floor(Math.random()*255 + 1);
    }
    // example: green is rgb(51,170,51)
    let color = "rgb(" + colorComponent()+ ","+ colorComponent()+ ","+ colorComponent()+ ")";
    return color;
}

function printQuote () {
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

    print += '</p>';
    console.log(print);

    //changing body background
    let color = createColor();
    document.querySelector('body').style.backgroundColor = color;

    // loading quote to page
    document.getElementById('quote-box').innerHTML = print;
}

// show quote with button click
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


