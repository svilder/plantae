class Api::V1::PlantsController < Api::V1::BaseController
  def index
    # render json: TrefleApiService.new((params[:query])).call
    query = "avocado"
    render json: TrefleApiService.new(query).call
  end
end
