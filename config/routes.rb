Rails.application.routes.draw do
  resources :developers
  root 'developers#index'
end
