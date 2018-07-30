require 'net/http'
require 'uri'
require 'json'
#GitHub GraphQL apiのサンプルリクエスト 
module Request_api
	extend ActiveSupport::Concern
	included do 
		def request_sample
			user = "xxx"
			pass = "xxx"
			url = URI.parse("https://api.github.com/graphql")
			req = Net::HTTP::Post.new(url.path)
			req.basic_auth user, pass
			query = JSON.generate({"query": "query { search(query: \"GraphQL\", type: REPOSITORY) { repositoryCount } }"})
			req.set_form_data({"query": JSON.generate({"query": "query { search(query: \"GraphQL\", type: REPOSITORY) { repositoryCount } }"})}, ";")
			http = Net::HTTP.new(url.host, url.port)
			http.use_ssl = true
			res = http.start {|http| http.request(req)} 
			res.body
		end
	end
end