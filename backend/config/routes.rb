Rails.application.routes.draw do

  resources :ramens, only: [:index]

end
