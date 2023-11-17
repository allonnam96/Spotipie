# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Artist.destroy_all
  Album.destroy_all
  User.destroy_all
  # Track.destroy_all

  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  User.create!(
    username: 'Demo', 
    email: 'demo@user.io', 
    password: 'password'
  )

  Artist.create!(name: "New Jeans")
  Artist.create!(name: "aespa")
  Artist.create!(name: "LE SSERAFIM")
  Artist.create!(name: "IVE")
  Artist.create!(name: "BLACKPINK")

  Album.create!(
    title: "NewJeans 1st EP 'New Jeans'", artist_id: 1, year: 2022, img_url: '../frontend/src/_imgs/albumImg/NewJeans/GODS_Cover.webp', genre: "K-pop", publisher: "© 2022 ADOR Co., Ltd."
  )
  Album.create!(
    title: "NewJeans 2nd EP 'Get Up' Digital EP", artist_id: 1, year: 2023, img_url: '../frontend/src/_imgs/albumImg/NewJeans/GODS_Cover.webp', genre: "K-pop", publisher: "© 2023 ADOR Co., Ltd."
  )
  Album.create!(
    title: "MY WORLD - The 3rd Mini Album", artist_id: 2, year: 2023, img_url: '../frontend/src/_imgs/albumImg/NewJeans/GODS_Cover.webp', genre: "K-pop", publisher: "© 2023 SM Entertainment, under exclusive license to Warner Records Inc."
  )
  Album.create!(
    title: "Drama - The 4th Mini Album", artist_id: 2, year: 2023, img_url: '../frontend/src/_imgs/albumImg/NewJeans/GODS_Cover.webp', genre: "K-pop", publisher: "© 2023 ADOR Co., Ltd."
  )
  Album.create!(
    title: "UNFORGIVEN", artist_id: 3, year: 2023, img_url: '../frontend/src/_imgs/albumImg/NewJeans/GODS_Cover.webp', genre: "K-pop", publisher: "© 2023 SOURCE MUSIC"
  )
  Album.create!(
    title: "I've IVE", artist_id: 4, year: 2023, img_url: '../frontend/src/_imgs/albumImg/NewJeans/GODS_Cover.webp', genre: "K-pop", publisher: "© 2023 Starship Entertainment co.,ltd"
  )
  Album.create!(
    title: "THE ALBUM", artist_id: 5, year: 2020, img_url: '../frontend/src/_imgs/albumImg/NewJeans/GODS_Cover.webp', genre: "K-pop", publisher: "© 2020 YG Entertainment, distributed through Interscope Records"
  )
  Album.create!(
    title: "BORN PINK", artist_id: 5, year: 2022, img_url: '../frontend/src/_imgs/albumImg/NewJeans/GODS_Cover.webp', genre: "K-pop", publisher: "© 2020 YG Entertainment, distributed through Interscope Records"
  )
  


  # More users


  puts "Done!"
end