include Request_api
class TopPageController < ApplicationController
  def index
    @sample = Request_api::request_sample
  end
end
