require 'graphql/client'
require 'graphql/client/http'
require 'uri'
require 'json'
require 'github_api'
require 'api_query'
include GitHub_API
include Api_Query

#GitHub GraphQL apiのサンプルリクエスト 
#TODO: スキーマの読み込みはダンプファイルとかを使ってパフォーマンス改善する
module Request_api
  extend ActiveSupport::Concern
  included do 
    Query = GitHub_API::Get_repository_count
    def request_sample
      res = GitHub_API::Client.query(Query)
      query_result = "repository_count: #{res.data.search.repository_count}"
    end
  end
end