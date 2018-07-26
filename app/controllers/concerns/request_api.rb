require 'net/http'
require 'json'
#とりあえずサンプルで適当にgetしてみる
module Request_api
	extend ActiveSupport::Concern
	included do 
		def request_sample
			res = Net::HTTP.get_print("example.com", "/")
		end
	end
end