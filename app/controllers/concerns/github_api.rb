require 'graphql/client'
require 'graphql/client/http'

module GitHub_API  
  # スキーマ呼び出し
  HTTP = GraphQL::Client::HTTP.new("https://api.github.com/graphql") do
    def headers(context)
      {
        "Authorization": "Bearer #{ENV['GITHUB_API_TOKEN']}"
      }
    end
  end
  Schema = GraphQL::Client.load_schema(HTTP)
  Client = GraphQL::Client.new(schema: Schema, execute: HTTP)

  # サンプルクエリ(GraphQLのリポジトリ数)
  Get_repository_count = GitHub_API::Client.parse <<-'GraphQL'
    query { 
			search(query: "GraphQL", type: REPOSITORY) {
				 repositoryCount 
			}
		}
  GraphQL

  Get_repositories = GitHub_API::Client.parse <<-'GraphQL'
    query($name: String!, $owner: String!) {
      repository(name: $name, owner: $owner){
        nameWithOwner
        description
        url
      }
    }
  GraphQL
  
end