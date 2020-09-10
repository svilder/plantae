class Api::V1::PlantsController < Api::V1::BaseController
  def index
    @plants = Plant.all
    trefleapiservice = TrefleApiService.new("sunflower")
    trefleapiservice.call
  end
end
