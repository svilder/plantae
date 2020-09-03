class Api::V1::PlantsController < Api::V1::BaseController
  def index
    @plants = Plant.all
  end
end
