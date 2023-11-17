require "open-uri"

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
  ApplicationRecord.connection.reset_pk_sequence!('artists')
  ApplicationRecord.connection.reset_pk_sequence!('albums')
  ApplicationRecord.connection.reset_pk_sequence!('tracks')

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
    title: "I'VE MINE", artist_id: 4, year: 2023, img_url: '../frontend/src/_imgs/albumImg/NewJeans/GODS_Cover.webp', genre: "K-pop", publisher: "© 2023 Starship Entertainment co.,ltd"
  )
  Album.create!(
    title: "THE ALBUM", artist_id: 5, year: 2020, img_url: '../frontend/src/_imgs/albumImg/NewJeans/GODS_Cover.webp', genre: "K-pop", publisher: "© 2020 YG Entertainment, distributed through Interscope Records"
  )
  Album.create!(
    title: "BORN PINK", artist_id: 5, year: 2022, img_url: '../frontend/src/_imgs/albumImg/NewJeans/GODS_Cover.webp', genre: "K-pop", publisher: "© 2020 YG Entertainment, distributed through Interscope Records"
  )

  Track.create!(title: "Attention", album_id: 1, duration: "3:00")
  Track.create!(title: "Hype Boy", album_id: 1, duration: "2:59")
  Track.create!(title: "Cookie", album_id: 1, duration: "3:55")
  Track.create!(title: "Hurt", album_id: 1, duration: "2:57")

  Track.create!(title: "New Jeans", album_id: 2, duration: "1:48")
  Track.create!(title: "Super Shy", album_id: 2, duration: "2:34")
  Track.create!(title: "ETA", album_id: 2, duration: "2:31")
  Track.create!(title: "Cool With You", album_id: 2, duration: "2:27")
  Track.create!(title: "Get Up", album_id: 2, duration: "0:36")
  Track.create!(title: "ASAP", album_id: 2, duration: "2:14")

  Track.create!(title: "Welcome To MY World", album_id: 3, duration: "3:26")
  Track.create!(title: "Spicy", album_id: 3, duration: "3:17")
  Track.create!(title: "Salty & Sweet", album_id: 3, duration: "3:21")
  Track.create!(title: "Thirst", album_id: 3, duration: "3:13")
  Track.create!(title: "I'm Unhappy", album_id: 3, duration: "3:25")
  Track.create!(title: "'Til We Meet Again", album_id: 3, duration: "3:38")

  Track.create!(title: "Drama", album_id: 4, duration: "3:34")
  Track.create!(title: "Trick or Trick", album_id: 4, duration: "2:55")
  Track.create!(title: "Don't Blink", album_id: 4, duration: "2:49")
  Track.create!(title: "Hot Air Balloon", album_id: 4, duration: "3:18")
  Track.create!(title: "YOLO", album_id: 4, duration: "3:09")
  Track.create!(title: "You", album_id: 4, duration: "3:23")
  Track.create!(title: "Better Things", album_id: 4, duration: "3:23")

  Track.create!(title: "ANTIFRAGILE", album_id: 5, duration: "3:04")
  Track.create!(title: "Impurities", album_id: 5, duration: "3:16")
  Track.create!(title: "UNFORGIVEN (feat. Nile Rodgers)", album_id: 5, duration: "3:02")
  Track.create!(title: "Eve, Psyche & The Bluebear's wife", album_id: 5, duration: "3:05")
  Track.create!(title: "Fire in the belly", album_id: 5, duration: "3:18")

  Track.create!(title: "Off the Record", album_id: 6, duration: "3:08")
  Track.create!(title: "Baddie", album_id: 6, duration: "2:34")
  Track.create!(title: "Either Way", album_id: 6, duration: "2:46")
  Track.create!(title: "Holy Moly", album_id: 6, duration: "2:56")
  Track.create!(title: "OTT", album_id: 6, duration: "2:37")
  Track.create!(title: "Payback", album_id: 6, duration: "3:08")

  Track.create!(title: "How You Like That", album_id: 7, duration: "3:02")
  Track.create!(title: "Ice Cream (with Selena Gomez)", album_id: 7, duration: "2:57")
  Track.create!(title: "Pretty Savage", album_id: 7, duration: "3:21")
  Track.create!(title: "Bet You Wanna (feat. Cardi B)", album_id: 7, duration: "2:41")
  Track.create!(title: "Lovesick Girls", album_id: 7, duration: "3:14")
  Track.create!(title: "Crazy Over You", album_id: 7, duration: "2:43")
  Track.create!(title: "Love To Hate Me", album_id: 7, duration: "2:51")
  Track.create!(title: "You Never Know", album_id: 7, duration: "3:51")

  Track.create!(title: "Pink Venom", album_id: 8, duration: "3:06")
  Track.create!(title: "Shut Down", album_id: 8, duration: "2:55")
  Track.create!(title: "Typa Girl", album_id: 8, duration: "2:59")
  Track.create!(title: "Yeah Yeah Yeah", album_id: 8, duration: "2:58")
  Track.create!(title: "Hard to Love", album_id: 8, duration: "2:42")
  Track.create!(title: "The Happiest Girl", album_id: 8, duration: "3:42")
  Track.create!(title: "Tally", album_id: 8, duration: "3:04")
  Track.create!(title: "Ready For Love", album_id: 8, duration: "3:04")



  puts "Done!"
end