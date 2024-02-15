require 'net/http'
require 'uri'
require 'json'
require 'yaml'
require 'pry'

class Gists
  def get_all_gists
    # https://urgetopunt.com/2009/09/12/yaml-config-with-erb.html
    config = YAML.load(ERB.new(File.read('./config.yml')).result)

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

  def fake_get_gists
    return 'error' unless get_mock_response

    get_mock_response
  end

  def most_recent_10_gists
    html_urls = JSON.parse(get_all_gists).map do |item|
      files = item["files"]
      gist_name = files.keys[0]
      item["files"][gist_name]["raw_url"]
    end

    html_urls.take 10
  end

  def md_link_to_html list
    # Initialize md parser
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, extensions = {})
    list.map do |item|
      raw_md = request_url_content item
      markdown.render raw_md
    end
  end

  def request_url_content raw_url
    Net::HTTP.get(URI.parse(raw_url))
  end

  def build_response
    md_link_to_html most_recent_10_gists
  end
end


