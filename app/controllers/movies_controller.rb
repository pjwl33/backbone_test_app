class MoviesController < ApplicationController

  def index
    @movies = Movie.all
    respond_to do |format|
      format.html { '/movies' }
      format.json { render json: @movies}
    end
  end

  def create
    @movie = Movie.create(movie_params)
    respond_to do |format|
      format.json { render json: @movie }
    end
  end

  private
  def movie_params
    params.require(:movie).permit(:title, :year, :poster, :plot, :imdbID, :created_at, :updated_at)
  end

end