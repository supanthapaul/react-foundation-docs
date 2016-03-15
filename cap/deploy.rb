lock '3.4.0'

# general setup
set :application, 'react-foundation-docs'
set :repo_url, 'git@github.com:nordsoftware/react-foundation-docs.git'
set :deploy_to, '/home/react-foundation-docs/react-foundation-docs'
set :branch, ENV["REVISION"] || ENV["BRANCH"] || "master"

set :log_level, :info
set :keep_releases, 5

namespace :ui do

	desc "Install dependencies"
	task :install do
		on roles(:ui) do
			within release_path do
				execute :npm3, "install --silent"
			end
		end
	end

	desc "Build client"
	task :build do
		on roles(:ui) do
			within release_path do
				execute :npm3, "run dist"
			end
		end
	end

end

namespace :deploy do

	after :updated, "ui:install"
	after :updated, "ui:build"

end
