Rails.application.routes.draw do

  namespace :api do
    get 'products/index'
  end

  namespace :api do
    get 'products/show'
  end

  namespace :api do
    get 'products/create'
  end

  namespace :api do
    get 'products/update'
  end

  namespace :api do
    get 'products/destroy'
  end

  namespace :api do
    resources :products
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
