class DashboardService
  attr_accessor :orders, :customers, :products

  CUSTOMER_LIFESPAN = 1.freeze
  
  def initialize
    reload_orders
  end

  def reload_orders
    @orders = ShopifyAPI::Order.find(:all, :params=>{limit: 250})
    @customers = ShopifyAPI::Customer.find(:all, :params=>{limit: 250})
  end
  
  def total_number_of_orders
    @orders.count
  end

  def average_purchase_frequency
    @orders.count*1.0 / @customers.count
  end

  def average_customer_value
   ( average_order_value * average_purchase_frequency )||0
  end

  def average_order_value
    total_sales / @orders.count
  end

  def total_sales
    @orders.map{|o| o.current_total_price.to_f}.inject(0,&:+)
  end

  def customer_lifetime_value
    average_customer_value * (CUSTOMER_LIFESPAN*1.0/@customers.count)
  end
  
  def most_popular
    product_title = "-"
    variant_title= "-"
    product_sales = orders.map { |o| o.line_items }.flatten.inject({}) do |product_sales, line_item|
      product_sales.merge(
        Hash[line_item.variant_id,  (line_item.quantity*line_item.price.to_f)]
      ) { |_, current, additional| current + additional }
    end
    product_sales = Hash[product_sales.sort_by{ |k, v| v }.reverse]
    variant = ShopifyAPI::Variant.find(product_sales.keys.take(1)[0])

    unless variant.nil?
      product = ShopifyAPI::Product.find(variant.product_id) unless variant.nil?
      variant_title = variant.title
      product_title = product.title
    end

    "#{product_title}-#{variant_title}"
  end
  
end
