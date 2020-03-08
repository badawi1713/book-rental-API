# book-rental-API

Sixth assignment from Arkademy Bootcamp, to build book-rental API.

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

## Install

    $ git clone https://github.com/badawi1713/book-rental-API
    $ cd book-rental-API
    $ npm install

## Running the project

    $ npm start

## Book's endpoint

| No  | HTTP Method | URI                                 | Operation                                  |
| --- | ----------- | ----------------------------------- | ------------------------------------------ |
| 1   | GET         | /api/v1/books/                      | Get all books data                         |
| 2   | GET         | /api/v1/books/:book_id              | Get book’s data by it’s ID                 |
| 3   | GET         | /api/v1/books/?page=1               | Get book’s data on the 1st page            |
| 4   | GET         | /api/v1/books/?search=book_title    | Search books data by title keyword         |
| 5   | GET         | /api/v1/books/?sortBy=book_title    | Sort books data by the title               |
| 6   | GET         | /api/v1/books/?sortBy=released_date | Sort books data by the released date       |
| 7   | GET         | /api/v1/books/?sortBy=genre         | Sort books data by the genre               |
| 8   | GET         | /api/v1/books/?sortBy=available     | Sort books data by the available           |
| 9   | POST        | /api/v1/books/add                   | Insert new book data                       |
| 10  | PATCH       | /api/v1/books/update/:book_id       | Edit or update the book’s data by it’s ID  |
| 11  | PATCH       | /api/v1/books/rent/:book_id         | Rent the book by it’s ID                   |
| 12  | PATCH       | /api/v1/books/return/:book_id       | Return the book by it’s ID                 |
| 13  | DELETE      | /api/v1/books/delete/:book_id       | Delete the book’s data from database by ID |

## Genre's endpoint

| No  | HTTP Method | URI                             | Operation                                  |
| --- | ----------- | ------------------------------- | ------------------------------------------ |
| 1   | GET         | /api/v1/genres/                 | Get all genres data                        |
| 2   | POST        | /api/v1/genres/add              | Insert new genre data                      |
| 3   | PATCH       | /api/v1/genres/update/:genre_id | Edit or update the genre’s data by it’s ID |
| 4   | DELETE      | /api/v1/genres/delete/:genre_id | Delete genre’s data by it’s ID             |

## User's endpoint

| No  | HTTP Method | URI                    | Operation                                                             |
| --- | ----------- | ---------------------- | --------------------------------------------------------------------- |
| 1   | POST        | /api/v1/users/register | Insert new user data                                                  |
| 2   | POST        | /api/v1/users/login    | User’s login to get JWT token’s for full access on the backend system |

##### Thank You~
