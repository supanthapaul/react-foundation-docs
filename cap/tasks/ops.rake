#
# https://stackoverflow.com/questions/21977225/capistrano-log-level
#
def with_verbosity(verbosity_level)
    old_verbosity = SSHKit.config.output_verbosity
    
    begin
        SSHKit.config.output_verbosity = verbosity_level
        yield
    ensure
        SSHKit.config.output_verbosity = old_verbosity
    end
end

namespace :ops do

    namespace :aptget do
        desc "Run apt-get update"
        task :update do
            on roles(:all), in: :sequence do
                with_verbosity(Logger::DEBUG) do
                    execute :sudo, "apt-get update"
                end
            end
        end
        
        desc "Perform an apt-get upgrade (followed by an apt-get clean)"
        task :upgrade do
            on roles(:all), in: :sequence do
                with_verbosity(Logger::DEBUG) do
                    execute :sudo, "apt-get upgrade -y -o Dpkg::Options::=\"--force-confdef\" -o Dpkg::Options::=\"--force-confold\""
                    execute :sudo, "apt-get clean -y"
                end
            end
        end
        
        namespace :upgrade do
            
            desc "Perform an apt-get upgrade dry run"
            task :dryrun do
                on roles(:all), in: :sequence do
                    with_verbosity(Logger::DEBUG) do
                        execute :sudo, "apt-get upgrade --dry-run"
                    end
                end
            end
        end
        
        desc "Perform an apt-get autoremove"
        task :autoremove do
            on roles(:all), in: :sequence do
                with_verbosity(Logger::DEBUG) do
                    execute :sudo, "apt-get autoremove -y"
                end
            end
        end
    end

end
