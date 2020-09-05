class TrefleApiService
  require 'httparty'

  def initialize(params)
    @keyword = params[:keyword]
  end

  def call
    r = HTTParty.get(
      'https://trefle.io/api/v1/plants',
      query: {
        "token": TREFLE_TOKEN
      }
    )
    r.parsed_response
  end
end


