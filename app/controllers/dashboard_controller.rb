class DashboardController < ApplicationController
  def index
    @shopify = DashboardService.new
  end
end
