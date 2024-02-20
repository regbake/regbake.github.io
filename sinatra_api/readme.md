## Development
* bundle exec rackup - :9292

## Prod
* nohup ruby app.rb >> /log/file 2>&1 &
* RACK_ENV=production bundle exec rackup
* in Prod via CL: `nohup ./runProd.sh &`
* path on droplet /srv/sinatra_api/regbake.github.io/sinatra_api
* https://www.digitalocean.com/community/tutorials/nohup-command-in-linux
* root '/srv/sinatra_api/regbake.github.io/sinatra_api'

### Nginx
* https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04


## Setup/gems
gem install sinatra
gem install puma
...
see gemfile

create personal access token via https://github.com/settings/tokens/new?scopes=repo

Store auth token as GIT_AUTH_KEY inside bash_profile


