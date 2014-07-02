Could. This. Company. Get. Any. Bigger?

**YES!**

Introducing...

# Movie.r

#### A HAMCo Product

#### Objectives

* Practice building a single page application
* Practice making ajax requests
* Practice parsing API response data

Your lab for the day is to build an application that will solidify your newly acquired Backbone chops, as well as revisit our good friend AJAX. We are going to be utilizing the Open Movie Database's API to retrieve movie information to display to the user.

#### User Stories

* As a user, I want to be able to search for movies by title, so I can find my favorite movies easily.
* As a user, I want to be able to view a single result by clicking on it, so I can focus on the movie that I am interested in.

** Bonus **

* As a user, I want to be able to add movies to my 'Saved' list, so that I can revisit them after searching for something else.
  * (This list does not need to persist to a database. It is ok if the list is reset when the page is refreshed.)
* As a user, I want my saved movies to persist, so I can revisit them the next time I visit the website.
* As a user, I want to be able to see details of a search result by clicking on it, so that I can learn more about the movies I search for.

#### Phases of completion

**Phase 1**

You should start by creating a new Rails app `movier_app`.

* You do **not** need to set up any migrations or models. We are not going to persist any information to a database.
* Set up a `moviesController` with a single `index` action that will serve a single page for our Backbone application.

**Phase 2**

Your Backbone application should have the following features.

* A `movieItem` model with the following attributes
  * title
  * year
  * plot
  * poster (image link)
* A `searchFormView` where the user can enter text input to search movies by title. Hitting 'search' on this form should query the OMDB API for a list of movies and populate a Backbone collection of `movieItem`s
* A `resultsItemView` that will correspond to each `movieItem` object
* A `resultsListView` that will correspond to the collection of search results

**Phase 3**

* Clicking on the title of a search result should take the user to a "show page" for that search result, similar to what we did yesterday with TodoApp and Grumblr.

**Phase 4**

* Add a second collection (and its own view) to our app to keep track of "saved movies".
* Each `resultsItemView` should have a save button. Clicking this button should add the corresponding model to the saved movies collection, and this additions should be reflected in the saved movies view.

**Phase 5**

* Set up your back-end migrations and models to be able to persist movie information
* Make your Backbone application save "Saved movies" to your database when a user clicks "Save"
* Make your Backbone application pull saved movies from your database when the page is first loaded

**Phase 6**

* Refactor your app to use two distinct item views for movies
  * `resultsItemView`
    * for each search result in a list of search results
    * should contain only the title and year
  * `detailedItemView`
    * for the show page of each result
    * should contain title, year, plot, and poster image

#### Things to remember/ponder

* Tackle things one step at a time.
* Who should be responsible for owning the method that is going to query OMDB API?
* When you visit the show page, and then return back to the search results page, it is ok if your original search results are wiped.
