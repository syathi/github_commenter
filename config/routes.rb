Rails.application.routes.draw do
  get 'top_page/index'
  get 'top_page/repository_count'
  get 'top_page/get_repositories'
  get 'top_page/get_repository_files'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
