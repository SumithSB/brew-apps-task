# Node Server

## Server and project setup

1. Clone the repo in your system or virtual machine using the following url - https://github.com/SumithSB/brew-apps-task

2. Make sure you have latest version of MongoDB and Node.js installed in your system.

3. Run "npm install" in the root folder, this will install the necessary packages which project requires.

4. Add a .env file which consists "PORT" and "MONGO_URL"

5. Run "npm run dev" to run the server in debug mode and test it.

6. Install project manager to run the server all the time in background using pm2 package which can be installed using "npm i pm2".

7. Run "pm2 start index.js" from your root folder, this will run the server in prod mode in the background.

8. Currently the Node.js server is deployed on AWS Linux EC2 instance and apis can be accessed using the public url/ip address of the server.

## API Docs

### Add new book

```json
route : 'api/v1/book'
request: POST

body: {
    "title": "Rich Dad Poor Dad",
    "author": " Robert T. Kiyosaki",
    "summary": "April of 2022 marks a 25-year milestone for the personal finance classic Rich Dad Poor Dad that still ranks as the #1 Personal Finance book of all time. And although 25 years have passed since Rich Dad Poor Dad was first published,readers will find that very little in the book itself has changed ― and for good reason. While so much in our world is changing a high speed, the lessons about money and the principles of Rich Dad Poor Dad haven’t changed. Today, as money continues to play a key role in our daily lives, the messages in Robert Kiyosaki’s international bestseller are more timely and more important than ever."
}

response:
{
    "result": {
        "bookId": "653fa755697e9f0a2e74d1de",
        "message": "Book added successfully!"
    },
    "status": "SUCCESS"
}
```

### Get list of books

```json
route : '/api/v1/book'
request: Get

response:
{
    "result": [
        {
            "_id": "653fa5cd2ee0c05683c250d6",
            "title": "Founder's Office",
            "author": "Sarthak Ahuja",
            "summary": "This book is a collection of 150 impactful lessons I’ve collated over the 11 years of working with organizations of different sizes and through an extensive study on business in general.Treat it like a deck of cards with each containing a useful note, rather than one long book you need to read in order.",
            "createdAt": "2023-10-30T12:47:09.164Z",
            "updatedAt": "2023-10-30T12:48:27.376Z",
            "__v": 0
        },
        {
            "_id": "653fa6682ee0c05683c250dd",
            "title": "The 5 Am Club",
            "author": "Robin Sharma",
            "summary": "Part manifesto for mastery, part playbook for genius-grade productivity and part companion for a life lived beautifully, the 5 am club is a work that will transform your life. Forever.Legendary leadership and elite performance expert Robin Sharma introduced The 5 AM Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity.Now, in this life-changing book, handcrafted by the author over a rigorous four year period, you will discover the early-rising habit that has helped so many accomplish epic results while upgrading their happiness, helpfulness and feelings of aliveness.Through an enchanting?and often amusing?story about two struggling strangers who meet an eccentric tycoon who becomes their secret mentor, The 5 AM Club will walk you through:? How great geniuses, business titans and the world?s wisest people start their mornings to produce astonishing achievements? A little-known formula you can use instantly to wake up early feeling inspired, focused and flooded with a fiery drive to get the most out of each day ? A step-by-step method to protect the quietest hours of daybreak so you have time for exercise, self-renewal and personal growth? A neuroscience-based practice proven to help make it easy to rise while most people are sleeping, giving you precious time for yourself to think, express your creativity and begin the day peacefully instead of being rushed? ?Insider-only? tactics to defend your gifts, talents and dreams against digital distraction and trivial diversions so you enjoy fortune, influence and a magnificent impact on the world",
            "createdAt": "2023-10-30T12:49:44.574Z",
            "updatedAt": "2023-10-30T12:49:44.574Z",
            "__v": 0
        },
        {
            "_id": "653fa755697e9f0a2e74d1de",
            "title": "Rich Dad Poor Dad",
            "author": " Robert T. Kiyosaki",
            "summary": "April of 2022 marks a 25-year milestone for the personal finance classic Rich Dad Poor Dad that still ranks as the #1 Personal Finance book of all time. And although 25 years have passed since Rich Dad Poor Dad was first published,readers will find that very little in the book itself has changed ― and for good reason. While so much in our world is changing a high speed, the lessons about money and the principles of Rich Dad Poor Dad haven’t changed. Today, as money continues to play a key role in our daily lives, the messages in Robert Kiyosaki’s international bestseller are more timely and more important than ever.",
            "createdAt": "2023-10-30T12:53:41.932Z",
            "updatedAt": "2023-10-30T12:53:41.932Z",
            "__v": 0
        }
    ],
    "status": "SUCCESS"
}
```

### Get single book details

```json
route : '/api/v1/book/:bookId'
request: Get

response:
{
    "result": {
        "_id": "653fa5cd2ee0c05683c250d6",
        "title": "Founder's Office",
        "author": "Sarthak Ahuja",
        "summary": "This book is a collection of 150 impactful lessons I’ve collated over the 11 years of working with organizations of different sizes and through an extensive study on business in general.Treat it like a deck of cards with each containing a useful note, rather than one long book you need to read in order.",
        "createdAt": "2023-10-30T12:47:09.164Z",
        "updatedAt": "2023-10-30T12:48:27.376Z",
        "__v": 0
    },
    "status": "SUCCESS"
}

or

{
    "result": "Book with id:653fa5cd2ee0c05683c250d7 not found",
    "status": "SUCCESS"
}

```

### Update book details

```json
route : '/api/v1/book/:bookId'
request: PUT


body:
{
    "summary":"This book is a collection of 150 impactful lessons I’ve collated over the 11 years of working with organizations of different sizes and through an extensive study on business in general.Treat it like a deck of cards with each containing a useful note, rather than one long book you need to read in order."
}

response:
{
    "result": {
        "_id": "653fa5cd2ee0c05683c250d6",
        "title": "Founder's Office",
        "author": "Sarthak Ahuja",
        "summary": "This book is a collection of 150 impactful lessons I’ve collated over the 11 years of working with organizations of different sizes and through an extensive study on business in general.Treat it like a deck of cards with each containing a useful note, rather than one long book you need to read in order.",
        "createdAt": "2023-10-30T12:47:09.164Z",
        "updatedAt": "2023-10-30T12:48:27.376Z",
        "__v": 0
    },
    "status": "SUCCESS"
}

or

{
    "result": "Book with id:653fa5cd2ee0c05683c250d7 not found",
    "status": "SUCCESS"
}

```

### DELETE book

```json
route : '/api/v1/book/:bookId'
request: DELETE

response:

{
    "result": "Book with id:653fa5cd2ee0c05683c250d6 has been deleted successfully!",
    "status": "SUCCESS"
}

or


{
    "result": "Book with id:653fa6ad2ee0c05683c250e0 not found",
    "status": "SUCCESS"
}

```
