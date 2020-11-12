class RamensController < ApplicationController

  def index
    @ramen = Ramen.all
    render json: @ramen
  end

  def create
    @ramen = Ramen.create(taste: params[:taste])
    render json: @ramen
  end

end
