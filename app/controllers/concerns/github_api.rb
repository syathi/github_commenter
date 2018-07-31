require 'graphql/client'
require 'graphql/client/http'

module GitHub_API  
  HTTP = GraphQL::Client::HTTP.new("https://api.github.com/graphql") do
    def headers(context)
      {
        "Authorization": "Bearer #{ENV['GITHUB_API_TOKEN']}"
      }
    end
  Schema = GraphQL::Client.load_schema(HTTP)
  Client = GraphQL::Client.new(Schema: Schema, execute: HTTP)
end