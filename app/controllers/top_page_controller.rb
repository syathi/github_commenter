include Request_api

class TopPageController < ApplicationController
  before_action :search, only: [:get_repositories]
  before_action :get_repository_files, only: [:get_repository_files]

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
    if (@repository_query[0].nil? && @repository_query[1].nil?) then
      @repository_query = ["rails", "rails"]
    end
    res = Request_api::get_repositories(@repository_query[0], @repository_query[1]).data
    render :json => res 
  end

  def get_repository_files #ダミーを返す
    # エラー処理
    if (@files.nil?) then
      render :json => { :error => "input files"}
      return
    end
    res = {
      :directory => ["hoge", "huga", "piyo", "puyo"]
    }
    puts res
    render :json => res
  end
  
  private
    def search
      @repository_query = [params[:name], params[:owner]]
    end 

    def ripository_files
      @files = [params[:directory]]
    end
end
