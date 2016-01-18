require ::File.expand_path('../config/environment', __FILE__)
require 'rake'
require 'active_support'
require 'active_support/core_ext'
 
namespace :gen do
  desc "Create an empty post in /_posts, e.g., rake gen:post T='This is a Sample Title'"
  task :post do
    err_mes = "Must specificy post TITLE, e.g., rake gen:post T='This is a Sample Title'"
    raise err_mes unless ENV.has_key?('T')
    post_title = ENV['T'] # Title of the artilce. 
    date = ENV['D'] || Date.today.to_s # Now we can date the articles in the future!
    base_filename = ENV['FN'] || ENV['T'].downcase.gsub(/\s+/, "-")
    post_filename = date + "-" + base_filename + ".markdown" # Use dash, not underscore, in filename.
    post_path = APP_ROOT.join('../_posts', post_filename)
    file_exists_mes = "ERROR: post file '#{post_path}' already exists"
    tags = ENV['TAGS'] || "Business"
    tag_str = ""
    tags = tags.split(",").each { |tag| tag_str << '- ' + tag + "\n" }
    tag_str.chomp!
 
    raise file_exists_mes if File.exist?(post_path)
 
    puts "Created #{post_path}"
    File.open(post_path, 'w+') do |f|
      f.write(<<-EOF.strip_heredoc)
---
layout: post
title:  #{post_title}
date:   #{date}
comments: true
categories: 
published: false
---
 
Content for #{post_title} goes here.
 
EOF
    end
  end
end
