class Api::V1::PlantsController < Api::V1::BaseController
  def index
    # render json: TrefleApiService.new((params[:query])).call
    query = "oak"
    render json: TrefleApiService.new(query).search_plants
  end
end
