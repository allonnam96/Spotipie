require "open-uri"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Artist.destroy_all
  Album.destroy_all
  User.destroy_all
  Track.destroy_all

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

  album1 = Album.create!(
    title: "New Jeans", artist_id: 1, year: 2022, img_url: 'https://spotipie-seeds.s3.amazonaws.com/NewJeansAlbum1.jpg', genre: "K-pop", publisher: "© 2022 ADOR Co., Ltd."
  )
  Album.create!(
    title: "Get Up", artist_id: 1, year: 2023, img_url: 'https://spotipie-seeds.s3.amazonaws.com/getup.jpeg', genre: "K-pop", publisher: "© 2023 ADOR Co., Ltd."
  )
  Album.create!(
    title: "MY WORLD", artist_id: 2, year: 2023, img_url: 'https://spotipie-seeds.s3.amazonaws.com/Aespa_-_My_World.png', genre: "K-pop", publisher: "© 2023 SM Entertainment, under exclusive license to Warner Records Inc."
  )
  Album.create!(
    title: "Drama", artist_id: 2, year: 2023, img_url: 'https://spotipie-seeds.s3.amazonaws.com/aespa-Drama-GiantVersFinal1_1500x.webp', genre: "K-pop", publisher: "© 2023 ADOR Co., Ltd."
  )
  Album.create!(
    title: "UNFORGIVEN", artist_id: 3, year: 2023, img_url: 'https://spotipie-seeds.s3.amazonaws.com/UNFORGIVEN_digital_album_cover.webp', genre: "K-pop", publisher: "© 2023 SOURCE MUSIC"
  )
  Album.create!(
    title: "I'VE MINE", artist_id: 4, year: 2023, img_url: 'https://spotipie-seeds.s3.amazonaws.com/I%2527ve_Mine_digital_cover.webp', genre: "K-pop", publisher: "© 2023 Starship Entertainment co.,ltd"
  )
  Album.create!(
    title: "THE ALBUM", artist_id: 5, year: 2020, img_url: 'https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM.jpeg'
  )
  Album.create!(
    title: "BORN PINK", artist_id: 5, year: 2022, img_url: 'https://spotipie-seeds.s3.amazonaws.com/Born_Pink_Digital.jpeg', genre: "K-pop", publisher: "© 2020 YG Entertainment, distributed through Interscope Records"
  )

  Track.create!(title: "Attention", album_id: 1, duration: "3:00", track_url: "https://spotipie-seeds.s3.amazonaws.com/New+Jeans/Attention.mp3")
  Track.create!(title: "Hype Boy", album_id: 1, duration: "2:59", track_url: "https://spotipie-seeds.s3.amazonaws.com/New+Jeans/HypeBoy.mp3")
  Track.create!(title: "Cookie", album_id: 1, duration: "3:55", track_url: "https://spotipie-seeds.s3.amazonaws.com/New+Jeans/Cookie.mp3")
  Track.create!(title: "Hurt", album_id: 1, duration: "2:57", track_url: "https://spotipie-seeds.s3.amazonaws.com/New+Jeans/Hurt.mp3")

  Track.create!(title: "New Jeans", album_id: 2, duration: "1:48", track_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/NewJeans.mp3")
  Track.create!(title: "Super Shy", album_id: 2, duration: "2:34", track_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/Super+Shy.mp3")
  Track.create!(title: "ETA", album_id: 2, duration: "2:31", track_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/ETA.mp3")
  Track.create!(title: "Cool With You", album_id: 2, duration: "2:27", track_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/Cool+With+You.mp3")
  Track.create!(title: "Get Up", album_id: 2, duration: "0:36", track_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/Get+Up.mp3")
  Track.create!(title: "ASAP", album_id: 2, duration: "2:14", track_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/ASAP.mp3")

  Track.create!(title: "Welcome To MY World", album_id: 3, duration: "3:26", track_url:"https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/Welcome+To+MY+World.mp3")
  Track.create!(title: "Spicy", album_id: 3, duration: "3:17", track_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/Spicy.mp3")
  Track.create!(title: "Salty & Sweet", album_id: 3, duration: "3:21", track_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/Salty+%26+Sweet.mp3")
  Track.create!(title: "Thirsty", album_id: 3, duration: "3:13", track_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/Thirsty.mp3")
  Track.create!(title: "I'm Unhappy", album_id: 3, duration: "3:25", track_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/I'm+Unhappy.mp3")
  Track.create!(title: "'Til We Meet Again", album_id: 3, duration: "3:38", track_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/'Tiil+We+Meet+Again.mp3")

  Track.create!(title: "Drama", album_id: 4, duration: "3:34", track_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Drama.mp3")
  Track.create!(title: "Trick or Trick", album_id: 4, duration: "2:55", track_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Trick+or+Trick.mp3")
  Track.create!(title: "Don't Blink", album_id: 4, duration: "2:49", track_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Don't+Blink.mp3")
  Track.create!(title: "Hot Air Balloon", album_id: 4, duration: "3:18", track_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Hot+Air+Balloon.mp3")
  Track.create!(title: "YOLO", album_id: 4, duration: "3:09", track_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/YOLO.mp3")
  Track.create!(title: "You", album_id: 4, duration: "3:23", track_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/You.mp3")
  Track.create!(title: "Better Things", album_id: 4, duration: "3:23", track_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Better+Things.mp3")

  Track.create!(title: "ANTIFRAGILE", album_id: 5, duration: "3:04", track_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/ANTIFRAGILE.mp3")
  Track.create!(title: "Impurities", album_id: 5, duration: "3:16", track_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/Impurities.mp3")
  Track.create!(title: "UNFORGIVEN (feat. Nile Rodgers)", album_id: 5, duration: "3:02", track_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/UNFORGIVEN.mp3")
  Track.create!(title: "Eve, Psyche & The Bluebear's wife", album_id: 5, duration: "3:05", track_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/eve+psyche+and+bluebeard's+wife.mp3")
  Track.create!(title: "Fire in the belly", album_id: 5, duration: "3:18", track_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/Fire+in+the+belly.mp3")

  Track.create!(title: "Off the Record", album_id: 6, duration: "3:08", track_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/01.+IVE+-+Off+The+Record.mp3")
  Track.create!(title: "Baddie", album_id: 6, duration: "2:34", track_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/02.+IVE+-+Baddie.mp3")
  Track.create!(title: "Either Way", album_id: 6, duration: "2:46", track_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/03.+IVE+-+Either+Way.mp3")
  Track.create!(title: "Holy Moly", album_id: 6, duration: "2:56", track_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/04.+IVE+-+Holy+Moly.mp3")
  Track.create!(title: "OTT", album_id: 6, duration: "2:37", track_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/05.+IVE+-+OTT.mp3")
  Track.create!(title: "Payback", album_id: 6, duration: "3:08", track_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/06.+IVE+-+Payback.mp3")

  Track.create!(title: "How You Like That", album_id: 7, duration: "3:02", track_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/how+you+like+that.mp3")
  Track.create!(title: "Ice Cream (with Selena Gomez)", album_id: 7, duration: "2:57", track_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Ice+Cream.mp3")
  Track.create!(title: "Pretty Savage", album_id: 7, duration: "3:21", track_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Pretty+Savage.mp3")
  Track.create!(title: "Bet You Wanna (feat. Cardi B)", album_id: 7, duration: "2:41", track_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Bet+You+Wanna+ft.+Cardi+B.mp3")
  Track.create!(title: "Lovesick Girls", album_id: 7, duration: "3:14", track_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Lovesick+Girls.mp3")
  Track.create!(title: "Love To Hate Me", album_id: 7, duration: "2:51", track_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Love+To+Hate+Me.mp3")
  Track.create!(title: "You Never Know", album_id: 7, duration: "3:51", track_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/You+Never+Know.mp3")

  Track.create!(title: "Pink Venom", album_id: 8, duration: "3:06", track_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Pink+Venom.mp3")
  Track.create!(title: "Shut Down", album_id: 8, duration: "2:55", track_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Shut+down.mp3")
  Track.create!(title: "Typa Girl", album_id: 8, duration: "2:59", track_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Typa+Girl.mp3")
  Track.create!(title: "Yeah Yeah Yeah", album_id: 8, duration: "2:58", track_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Yeah+Yeah+Yeah.mp3")
  Track.create!(title: "Hard to Love", album_id: 8, duration: "2:42", track_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Hard+to+Love.mp3")
  Track.create!(title: "The Happiest Girl", album_id: 8, duration: "3:42", track_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/The+Happiest+Girl.mp3")
  Track.create!(title: "Tally", album_id: 8, duration: "3:04", track_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Tally.mp3")
  Track.create!(title: "Ready For Love", album_id: 8, duration: "3:04", track_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Ready+for+love.mp3")


  puts "Done!"
# end