require 'graphql/client'
require 'graphql/client/http'
require 'uri'
require 'json'
#GitHub GraphQL apiのサンプルリクエスト 
module GitHub_API  
		HTTP = GraphQL::Client::HTTP.new("https://api.github.com/graphql") do
			def headers(context)
				{
					"Authorization" => "bearer #{ENV['GITHUB_API_TOKEN']}"
				}
			end
		end
    Schema = GraphQL::Client.load_schema(HTTP)
    Client = GraphQL::Client.new(schema: Schema, execute: HTTP)
end

module Request_api
	extend ActiveSupport::Concern
	include GitHub_API
	included do 
		Query = GitHub_API::Client.parse <<-'GraphQL'
			query { 
				search(query: "GraphQL", type: REPOSITORY) {
					 repositoryCount 
			  }
			}
		GraphQL
		def request_sample
			res = GitHub_API::Client.query(Query)
			query_result = "repository_count: #{res.data.search.repository_count}"
		end
	end
end