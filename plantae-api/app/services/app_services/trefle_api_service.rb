class TrefleApiService
  require 'httparty'

  def initialize(keyword)
    @keyword = keyword
  end

  def call
    response = HTTParty.get(
      'https://trefle.io/api/v1/plants',
      query: {
        "token": ,
        "filter[common_name]": @keyword
      }
    )
    # puts response.body
    puts response.to_h.first(5)
    # puts response.parsed_response
  end
end

trefleapiservice = TrefleApiService.new("sunflower")
trefleapiservice.call
