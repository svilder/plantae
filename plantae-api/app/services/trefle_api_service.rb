class TrefleApiService
  require 'json'
  require 'open-uri'

  def initialize(keyword)
    @keyword = keyword
  end

  def search_plants
    url = "https://trefle.io/api/v1/plants/search?token=#{trefle_key}&q=#{@keyword}"

    results = JSON.parse(open(url).read)["data"].first(5)
    results.map do |result|
      {
        id: result["id"],
        common_name: result["common_name"],
        scientific_name: result["scientific_name"],
        family: result["family"],
        family_common_name: result["family_common_name"],
        synonyms: result["synonyms"].first(3),
        image_url: result["image_url"]
      }
    end
  end

  private

  def trefle_key
    Rails.application.credentials.trefle_access_key
  end
end
