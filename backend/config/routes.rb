Rails.application.routes.draw do

  resources :ramens, only: [:index, :show, :create, :update]

end
