require 'rubygems'
require 'pry'
require 'sinatra'
require 'sinatra/base'
require 'sinatra/reloader'

require_relative 'get_gists'
require_relative 'mock_gist_response'

class App < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5678' if settings.development?
    response.headers['Access-Control-Allow-Origin'] = 'http://www.lifeonthereg.com' if settings.production?
  end

  get '/' do
    foo = 'haha'
    foo
  end

  get '/gists' do
    gists = Gists.new
    response = gists.build_response
    response
  end

  get '/test-gists' do
    gists = Gists.new
    gists.fake_get_gists
  end
end