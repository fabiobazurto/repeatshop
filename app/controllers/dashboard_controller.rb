class DashboardController < ApplicationController
  def index

  end

  def statistics
    @shopify = DashboardService.new    
  end
end
