class TrefleApiService
  require 'json'
  require 'open-uri'

  def initialize(keyword)
    @keyword = keyword
  end

  def call
    url = "https://trefle.io/api/v1/plants?token=#{trefle_key}&filter[common_name]=#{@keyword}"
    return JSON.parse(open(url).read)
  end

  private

  def trefle_key
    Rails.application.credentials.trefle_access_key
  end
end
