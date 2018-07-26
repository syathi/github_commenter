include Request_api
class TopPageController < ApplicationController
  def index
    Request_api::request_sample
  end
end
