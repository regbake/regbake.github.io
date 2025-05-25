require 'net/http'
require 'uri'
require 'json'
require 'yaml'
require 'pry-byebug'

class Gists
  def get_all_gists
    # see https://jhawthorn.github.io/curl-to-ruby/
    uri = URI.parse("https://api.github.com/gists")
    request = Net::HTTP::Get.new(uri)
    request["Accept"] = "application/vnd.github+json"
    # https://notepad.onghu.com/2020/ruby-tricks-001-environment_variables/
    request["Authorization"] = "Bearer #{config['GIT_AUTH_KEY']}"
    request["X-Github-Api-Version"] = "2022-11-28"

    req_options = {
      use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    return "Error with response" unless response
    return response.code unless response.code == "200"

    response.body
  end

  def get_all_starred_gists
    # see https://jhawthorn.github.io/curl-to-ruby/
    uri = URI.parse("https://api.github.com/gists/starred")
    request = Net::HTTP::Get.new(uri)
    request["Accept"] = "application/vnd.github+json"
    # https://notepad.onghu.com/2020/ruby-tricks-001-environment_variables/
    request["Authorization"] = "Bearer #{config['GIT_AUTH_KEY']}"
    request["X-Github-Api-Version"] = "2022-11-28"

    req_options = {
      use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    return "Error with response" unless response
    return response.code unless response.code == "200"

    response.body
  end

  def fake_get_gists
    return 'error' unless get_mock_response

    get_mock_response
  end

  def build_response starred=false
    if starred
      response = md_link_to_html most_recent_starred_gists
    else
      response = md_link_to_html most_recent_gists
    end
    response.to_json
  end

  private

  def config
    # https://urgetopunt.com/2009/09/12/yaml-config-with-erb.html
    @config ||= YAML.load(ERB.new(File.read('./config.yml')).result)
  end

  def most_recent_gists
    html_urls = JSON.parse(get_all_gists).map do |item|
    # html_urls = JSON.parse(fake_get_gists).map do |item|
      files = item["files"]
      gist_name = files.keys[0]
      item["files"][gist_name]["raw_url"]
    end

    html_urls.take 5
  end

  # TODO: Paginate results!!!
  def most_recent_starred_gists
    # currently returns a touple with updated_at time

    html_urls = JSON.parse(get_all_starred_gists).map do |item|
      updated_at = item["updated_at"]
      files = item["files"]
      gist_name = files.keys[0]
      [updated_at, item["files"][gist_name]["raw_url"]]
    end

    html_urls.take 5
  end

  def md_link_to_html arr
    # Initialize md parser
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, extensions = {})
    arr.map do |item|
      # find link to raw gist md, request it and convert
      raw_md = request_url_content item[1]
      [item[0], markdown.render(raw_md)]
    end
  end

  def request_url_content raw_url
    Net::HTTP.get(URI.parse(raw_url))
  end
end


