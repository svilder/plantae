class TrefleApiService
  require 'httparty'

  def initialize(keyword)
    @keyword = keyword
  end

  def call
    response = HTTParty.get(
      'https://trefle.io/api/v1/plants',
      query: {
        "token": Rails.application.credentials.trefle_access_key,
        "filter[common_name]": @keyword
      }
    )
    # puts response.body
    response.to_h.first(5)
    # puts response.parsed_response
  end

  # private

  # def trefle_key
  #   Rails.application.credentials.trefle_access_key
  # end

end


# trefleapiservice = TrefleApiService.new("sunflower")
# trefleapiservice.call
