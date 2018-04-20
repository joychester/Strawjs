require 'sinatra'
require 'json'

set :bind, '0.0.0.0'

get '/' do 
    puts "hello world"
    "hello world, its #{Time.now} at the server"
end

get '/person/fast' do 
    person_str = %q({
          "fast_person": {
            "name": {
              "first": "Cheng",
              "last": "Chi"
            },
            "gender": "male",
            "age": "35"
          }  
        })
    p person_obj = JSON.parse(person_str)
    return person_obj.to_s
end

get '/person/slow' do 
    person_str = %q({
          "slow_person": {
            "name": {
              "first": "Cheng",
              "last": "Chi"
            },
            "gender": "male",
            "age": "35"
          }  
        })
    p person_obj = JSON.parse(person_str)
    sleep 3
    return person_obj.to_s
end

get '/person/speedy' do 
    person_str = %q({
          "speedy_person": {
            "name": {
              "first": "Cheng",
              "last": "Chi"
            },
            "gender": "male",
            "age": "35"
          }  
        })
    p person_obj = JSON.parse(person_str)
    sleep 3
    return person_obj.to_s
end

get '/exception' do 
    status 500
    body 'Bad request error'
end
