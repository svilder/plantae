json.array! @plants do |plant|
  json.extract! plant, :id, :name, :description, :image
end
