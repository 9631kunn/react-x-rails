class RamensController < ApplicationController

  def index
    @ramen = Ramen.all
    render json: @ramen
  end

end
