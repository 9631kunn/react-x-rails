Rails.application.routes.draw do

  resources :ramens, only: [:index, :create]

end
