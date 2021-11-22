json.statistics do
  json.orders @shopify.orders.count
  json.customer_lifetime_value @shopify.customer_lifetime_value
  json.most_popular @shopify.most_popular
end
