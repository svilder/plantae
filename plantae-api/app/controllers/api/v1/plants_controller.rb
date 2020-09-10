class Api::V1::PlantsController < Api::V1::BaseController
  def index
    # render json: TrefleApiService.new((params[:query])).call
    render json: TrefleApiService.new("sunflower").call
  end
end
