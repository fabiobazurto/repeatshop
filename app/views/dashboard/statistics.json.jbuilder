json.statistics do
  json.orders @shopify.orders.count
  json.customer_lifetime_value to_percentage(@shopify.customer_lifetime_value.round(2))
  json.most_popular @shopify.most_popular
end
