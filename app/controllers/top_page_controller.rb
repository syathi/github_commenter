include Request_api
class TopPageController < ApplicationController
  def index
    res = Request_api::request_sample
    #@sample = "repository_count: #{res.data.search.repository_count}"
  end

  #api sample. そのうちGraphQLで返すようにする
  def repository_count
    res =  Request_api::request_sample.data
    render :json => res 
  end

  def get_repositories
    res = Request_api::get_repositories("secureParrot", "syathi").data
    render :json => res 
  end

end
