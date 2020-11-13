class RamensController < ApplicationController

  def index
    @ramen = Ramen.all
    render json: @ramen
  end

  def show
    @ramen = Ramen.find(params[:id])
    render json: @ramen
  end

  def create
    @ramen = Ramen.create(taste: params[:taste])
    render json: @ramen
  end

  def update
    @ramen = Ramen.find(params[:id])
    @ramen.update_attributes(taste: params[:taste])
    render json: @ramen
  end

  def destroy
    @ramen = Ramen.find(params[:id])
    if @ramen.destroy
      head :no_content, status: :ok
    else
      render json: @ramen.errors, status: :unprocessable_entity
    end
  end

end
