# Q1 - Reading file (Challenge level: basic)

Write the code such that when the `Load` button is clicked, the content of the file
`contact.txt` is added into `div#content`

# Q2 - Reading and parsing file (challenge level: Intermediate)

Create your own `index.html` and `script.js` for this hands-on. Include in `axios.min.js` 
yourself manually (google for 'axios cdn' to find the site to get axios from).

Your goal: when the user clicks on a button, perform the following

1. Read the content of `items.txt` and print it to the console,
2. Add each fruit inside the file into an unordered list inside your `index.html` (that is, display each fruit
as its own bullet point)

Hint: Research the JavaScript 'string split' feature to help you.

# Q3 - Combine Multiple Files (challenge level: hard)
There are two files in `file1.txt` and `file2.txt`.

Set up the `index.html` so that it can use axios.

Then add in the code such that when the user clicks on the button, find a way to
read in the content of both `file1.txt` and `file2.txt` and put their content
inside the textbox, one after the other.

There can only be one button. Both files should be loaded when the button is clicked.
The content of both files should appear inside the textbox at the same time.

# Q4 - Simple JSON example

Read in the example JSON file `artwork.json`
Display the `title` in a `<h1>`. and display the image using the given image URL in an `<img>` tag.

# Q5 - Array of JSON Objects

Inside `users.json`, you will find an array of user objects.

Your task: 

1. Create your own `index.html` and `script.js`
2. When a button is pressed, load in all the users from `users.json` and display their `firstrName`, `lastName` and `email` in a list (of your own format)
3. Create a text box, with a button labeled 'Search' next to it
4. When the user has entered a **userId** in the text box and clicks on the 'Search' button, display the `firstName` and `lastName` of the user with that userId in any way you deem fit.

# Q6 - Random Quote
The URL `https://programming-quotes-api.herokuapp.com/quotes/random` will return a random quote each time it is called. 

Change `index.html` and `script.js` such that whenever you click on the button, a new quote will be display. If the button is clicked multiple times, the new quote
should replace the original quote.

# Q7 - Simple list
The URL `https://anapioficeandfire.com/api/books/` will return a list of books as JSON objects. Write code such that when a button is pressed,  axios will load from
the url `https://anapioficeandfire.com/api/books/` and present the name and number of pages for each book.

## Challenges ##
* For **each** book,  get the name of all the pov characters in the book and display them in an unordered list.

# Q8 - Random users
The URL `https://randomuser.me/api/?results=10` will return a list of 10 random users. Your tasks are:

1. Copy and paste `https://randomuser.me/api/?results=10` into the address bar of your browser. You will see the raw unformated JSON document. Copy all of this.

2. Go to `http://www.jsonpathfinder.com` and paste in the copied JSON to the left hand side. On the right hand side, you will be able to expand the various keys to see what they contain

3. Write code such that when a button is pressed, the code will fetch 10 random users from `https://randomuser.me/api/?results=10` and display all the ten users. For each user, display
  
   * First name and last name together
   * The city which the user is from
   * The medium-sized image of the user


# Q9 - Search
Consult: https://openlibrary.org/dev/docs/api/search 
Implement a form that asks the user to enter the title of a book
Use the API to search for the title, and then display
title, author and page count of the book.
