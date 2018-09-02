require 'graphql/client'
require 'graphql/client/http'
require 'uri'
require 'json'
require 'github_api'
# require 'api_query'
include GitHub_API
# include Api_Query

#GitHub GraphQL apiのサンプルリクエスト 
#TODO: スキーマの読み込みはダンプファイルとかを使ってパフォーマンス改善する
module Request_api
  extend ActiveSupport::Concern
  included do 
    def request_sample
      GitHub_API::Client.query(GitHub_API::Get_repository_count)
    end
    
    def get_repositories(name, owner)
      GitHub_API::Client.query(GitHub_API::Get_repositories,
                               variables: {name: name, owner: owner})
    end
  end
end