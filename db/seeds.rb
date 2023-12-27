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
  Song.destroy_all

  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('artists')
  ApplicationRecord.connection.reset_pk_sequence!('albums')
  ApplicationRecord.connection.reset_pk_sequence!('songs')

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

# Song.create!(title: "Attention", artist_id: 1, album_id: 1, duration: "3:00", song_url: "https://spotipie-seeds.s3.amazonaws.com/New+Jeans/Attention.mp3")
# Song.create!(title: "Hype Boy", artist_id: 1, album_id: 1, duration: "2:59", song_url: "https://spotipie-seeds.s3.amazonaws.com/New+Jeans/HypeBoy.mp3")
# Song.create!(title: "Cookie", artist_id: 1, album_id: 1, duration: "3:55", song_url: "https://spotipie-seeds.s3.amazonaws.com/New+Jeans/Cookie.mp3")
# Song.create!(title: "Hurt", artist_id: 1, album_id: 1, duration: "2:57", song_url: "https://spotipie-seeds.s3.amazonaws.com/New+Jeans/Hurt.mp3")

# Song.create!(title: "New Jeans", artist_id: 1, album_id: 2, duration: "1:48", song_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/NewJeans.mp3")
# Song.create!(title: "Super Shy", artist_id: 1, album_id: 2, duration: "2:34", song_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/Super+Shy.mp3")
# Song.create!(title: "ETA", artist_id: 1, album_id: 2, duration: "2:31", song_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/ETA.mp3")
# Song.create!(title: "Cool With You", artist_id: 1, album_id: 2, duration: "2:27", song_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/Cool+With+You.mp3")
# Song.create!(title: "Get Up", artist_id: 1, album_id: 2, duration: "0:36", song_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/Get+Up.mp3")
# Song.create!(title: "ASAP", artist_id: 1, album_id: 2, duration: "2:14", song_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/ASAP.mp3")

# Song.create!(title: "Welcome To MY World", artist_id: 2, album_id: 3, duration: "3:26", song_url:"https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/Welcome+To+MY+World.mp3")
# Song.create!(title: "Spicy", artist_id: 2, album_id: 3, duration: "3:17", song_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/Spicy.mp3")
# Song.create!(title: "Salty & Sweet", artist_id: 2, album_id: 3, duration: "3:21", song_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/Salty+%26+Sweet.mp3")
# Song.create!(title: "Thirsty", artist_id: 2, album_id: 3, duration: "3:13", song_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/Thirsty.mp3")
# Song.create!(title: "I'm Unhappy", artist_id: 2, album_id: 3, duration: "3:25", song_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/I'm+Unhappy.mp3")
# Song.create!(title: "'Til We Meet Again", artist_id: 2, album_id: 3, duration: "3:38", song_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/'Tiil+We+Meet+Again.mp3")

# Song.create!(title: "Drama", artist_id: 2, album_id: 4, duration: "3:34", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Drama.mp3")
# Song.create!(title: "Trick or Trick", artist_id: 2, album_id: 4, duration: "2:55", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Trick+or+Trick.mp3")
# Song.create!(title: "Don't Blink", artist_id: 2, album_id: 4, duration: "2:49", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Don't+Blink.mp3")
# Song.create!(title: "Hot Air Balloon", artist_id: 2, album_id: 4, duration: "3:18", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Hot+Air+Balloon.mp3")
# Song.create!(title: "YOLO", artist_id: 2, album_id: 4, duration: "3:09", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/YOLO.mp3")
# Song.create!(title: "You", artist_id: 2, album_id: 4, duration: "3:23", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/You.mp3")
# Song.create!(title: "Better Things", artist_id: 2, album_id: 4, duration: "3:23", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Better+Things.mp3")

# Song.create!(title: "ANTIFRAGILE", artist_id: 3, album_id: 5, duration: "3:04", song_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/ANTIFRAGILE.mp3")
# Song.create!(title: "Impurities", artist_id: 3, album_id: 5, duration: "3:16", song_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/Impurities.mp3")
# Song.create!(title: "UNFORGIVEN (feat. Nile Rodgers)", artist_id: 3, album_id: 5, duration: "3:02", song_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/UNFORGIVEN.mp3")
# Song.create!(title: "Eve, Psyche & The Bluebear's wife", artist_id: 3, album_id: 5, duration: "3:05", song_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/eve+psyche+and+bluebeard's+wife.mp3")
# Song.create!(title: "Fire in the belly", artist_id: 3, album_id: 5, duration: "3:18", song_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/Fire+in+the+belly.mp3")

# Song.create!(title: "Off the Record", artist_id: 4, album_id: 6, duration: "3:08", song_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/01.+IVE+-+Off+The+Record.mp3")
# Song.create!(title: "Baddie", artist_id: 4, album_id: 6, duration: "2:34", song_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/02.+IVE+-+Baddie.mp3")
# Song.create!(title: "Either Way", artist_id: 4, album_id: 6, duration: "2:46", song_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/03.+IVE+-+Either+Way.mp3")
# Song.create!(title: "Holy Moly", artist_id: 4, album_id: 6, duration: "2:56", song_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/04.+IVE+-+Holy+Moly.mp3")
# Song.create!(title: "OTT", artist_id: 4, album_id: 6, duration: "2:37", song_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/05.+IVE+-+OTT.mp3")
# Song.create!(title: "Payback", artist_id: 4, album_id: 6, duration: "3:08", song_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/06.+IVE+-+Payback.mp3")

# Song.create!(title: "How You Like That", artist_id: 5, album_id: 7, duration: "3:02", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/how+you+like+that.mp3")
# Song.create!(title: "Ice Cream (with Selena Gomez)", artist_id: 5, album_id: 7, duration: "2:57", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Ice+Cream.mp3")
# Song.create!(title: "Pretty Savage", artist_id: 5, album_id: 7, duration: "3:21", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Pretty+Savage.mp3")
# Song.create!(title: "Bet You Wanna (feat. Cardi B)", artist_id: 5, album_id: 7, duration: "2:41", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Bet+You+Wanna+ft.+Cardi+B.mp3")
# Song.create!(title: "Lovesick Girls", artist_id: 5, album_id: 7, duration: "3:14", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Lovesick+Girls.mp3")
# Song.create!(title: "Love To Hate Me", artist_id: 5, album_id: 7, duration: "2:51", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Love+To+Hate+Me.mp3")
# Song.create!(title: "You Never Know", artist_id: 5, album_id: 7, duration: "3:51", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/You+Never+Know.mp3")

# Song.create!(title: "Pink Venom", artist_id: 5, album_id: 8, duration: "3:06", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Pink+Venom.mp3")
# Song.create!(title: "Shut Down", artist_id: 5, album_id: 8, duration: "2:55", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Shut+down.mp3")
# Song.create!(title: "Typa Girl", artist_id: 5, album_id: 8, duration: "2:59", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Typa+Girl.mp3")
# Song.create!(title: "Yeah Yeah Yeah", artist_id: 5, album_id: 8, duration: "2:58", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Yeah+Yeah+Yeah.mp3")
# Song.create!(title: "Hard to Love", artist_id: 5, album_id: 8, duration: "2:42", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Hard+to+Love.mp3")
# Song.create!(title: "The Happiest Girl", artist_id: 5, album_id: 8, duration: "3:42", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/The+Happiest+Girl.mp3")
# Song.create!(title: "Tally", artist_id: 5, album_id: 8, duration: "3:04", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Tally.mp3")
# Song.create!(title: "Ready For Love", artist_id: 5, album_id: 8, duration: "3:04", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Ready+for+love.mp3")

songs_info = [
  {title: "Attention", artist_id: 1, album_id: 1, explicit: false, duration: "3:00", song_url: "https://spotipie-seeds.s3.amazonaws.com/New+Jeans/Attention.mp3", filename: "New+Jeans/Attention.mp3"},
  {title: "Hype Boy", artist_id: 1, album_id: 1, explicit: false, duration: "2:59", song_url: "https://spotipie-seeds.s3.amazonaws.com/New+Jeans/HypeBoy.mp3", filename:"New+Jeans/HypeBoy.mp3"},
  {title: "Cookie", artist_id: 1, album_id: 1, explicit: false, duration: "3:55", song_url: "https://spotipie-seeds.s3.amazonaws.com/New+Jeans/Cookie.mp3", filename:"New+Jeans/Cookie.mp3"},
  {title: "Hurt", artist_id: 1, album_id: 1, explicit: false, duration: "2:57", song_url: "https://spotipie-seeds.s3.amazonaws.com/New+Jeans/Hurt.mp3", filename:"New+Jeans/Hurt.mp3"},
  
  {title: "New Jeans", artist_id: 1, album_id: 2, explicit: false, duration: "1:48", song_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/NewJeans.mp3", filename:"Get+Up/NewJeans.mp3"},
  {title: "Super Shy", artist_id: 1, album_id: 2, explicit: false, duration: "2:34", song_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/Super+Shy.mp3", filename:"Get+Up/Super+Shy.mp3"},
  {title: "ETA", artist_id: 1, album_id: 2, explicit: false, duration: "2:31", song_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/ETA.mp3", filename:"Get+Up/ETA.mp3"},
  {title: "Cool With You", artist_id: 1, album_id: 2, explicit: false, duration: "2:27", song_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/Cool+With+You.mp3", filename:"Get+Up/Cool+With+You.mp3"},
  {title: "Get Up", artist_id: 1, album_id: 2, explicit: false, duration: "0:36", song_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/Get+Up.mp3", filename:"Get+Up/Get+Up.mp3"},
  {title: "ASAP", artist_id: 1, album_id: 2, explicit: false, duration: "2:14", song_url: "https://spotipie-seeds.s3.amazonaws.com/Get+Up/ASAP.mp3", filename:"Get+Up/ASAP.mp3"},
  
  {title: "Welcome To MY World", artist_id: 2, album_id: 3, explicit: false, duration: "3:26", song_url:"https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/Welcome+To+MY+World.mp3", filename:"Welcome+To+My+World/Welcome+To+MY+World.mp3"},
  {title: "Spicy", artist_id: 2, album_id: 3, explicit: false, duration: "3:17", song_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/Spicy.mp3", filename:"Welcome+To+My+World/Spicy.mp3"},
  {title: "Salty & Sweet", artist_id: 2, album_id: 3, explicit: false, duration: "3:21", song_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/Salty+%26+Sweet.mp3", filename:"Welcome+To+My+World/Salty+%26+Sweet.mp3"},
  {title: "Thirsty", artist_id: 2, album_id: 3, explicit: false, duration: "3:13", song_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/Thirsty.mp3", filename:"Welcome+To+My+World/Thirsty.mp3"},
  {title: "I'm Unhappy", artist_id: 2, album_id: 3, explicit: false, duration: "3:25", song_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/I'm+Unhappy.mp3", filename:"Welcome+To+My+World/I'm+Unhappy.mp3"},
  {title: "'Til We Meet Again", artist_id: 2, album_id: 3, explicit: false, duration: "3:38", song_url: "https://spotipie-seeds.s3.amazonaws.com/Welcome+To+My+World/'Tiil+We+Meet+Again.mp3", filename:"Welcome+To+My+World/'Tiil+We+Meet+Again.mp3"},
  
  {title: "Drama", artist_id: 2, album_id: 4, explicit: false, duration: "3:34", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Drama.mp3", filename:"Drama/Drama.mp3"},
  {title: "Trick or Trick", artist_id: 2, album_id: 4, explicit: false, duration: "2:55", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Trick+or+Trick.mp3", filename:"Drama/Trick+or+Trick.mp3"},
  {title: "Don't Blink", artist_id: 2, album_id: 4, explicit: false, duration: "2:49", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Don't+Blink.mp3", filename:"Drama/Don't+Blink.mp3"},
  {title: "Hot Air Balloon", artist_id: 2, album_id: 4, explicit: false, duration: "3:18", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Hot+Air+Balloon.mp3", filename:"Drama/Hot+Air+Balloon.mp3"},
  {title: "YOLO", artist_id: 2, album_id: 4, explicit: false, duration: "3:09", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/YOLO.mp3", filename:"Drama/YOLO.mp3"},
  {title: "You", artist_id: 2, album_id: 4, explicit: false, duration: "3:23", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/You.mp3", filename:"Drama/You.mp3"},
  {title: "Better Things", artist_id: 2, album_id: 4, explicit: false, duration: "3:23", song_url:"https://spotipie-seeds.s3.amazonaws.com/Drama/Better+Things.mp3", filename:"Drama/Better+Things.mp3"},
  
  {title: "ANTIFRAGILE", artist_id: 3, album_id: 5, explicit: false, duration: "3:04", song_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/ANTIFRAGILE.mp3", filename:"Unforgiven/ANTIFRAGILE.mp3"},
  {title: "Impurities", artist_id: 3, album_id: 5, explicit: false, duration: "3:16", song_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/Impurities.mp3", filename:"Unforgiven/Impurities.mp3"},
  {title: "UNFORGIVEN (feat. Nile Rodgers}", artist_id: 3, album_id: 5, explicit: false, duration: "3:02", song_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/UNFORGIVEN.mp3", filename:"Unforgiven/UNFORGIVEN.mp3"},
  {title: "Eve, Psyche & The Bluebear's wife", artist_id: 3, album_id: 5, explicit: false, duration: "3:05", song_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/eve+psyche+and+bluebeard's+wife.mp3", filename:"Unforgiven/eve+psyche+and+bluebeard's+wife.mp3"},
  {title: "Fire in the belly", artist_id: 3, album_id: 5, explicit: false, duration: "3:18", song_url: "https://spotipie-seeds.s3.amazonaws.com/Unforgiven/Fire+in+the+belly.mp3", filename:"Unforgiven/Fire+in+the+belly.mp3"},
  
  {title: "Off the Record", artist_id: 4, album_id: 6, explicit: false, duration: "3:08", song_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/01.+IVE+-+Off+The+Record.mp3", filename:"I'VE+MINE/01.+IVE+-+Off+The+Record.mp3"},
  {title: "Baddie", artist_id: 4, album_id: 6, explicit: false, duration: "2:34", song_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/02.+IVE+-+Baddie.mp3", filename:"I'VE+MINE/02.+IVE+-+Baddie.mp3"},
  {title: "Either Way", artist_id: 4, album_id: 6, explicit: false, duration: "2:46", song_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/03.+IVE+-+Either+Way.mp3", filename:"I'VE+MINE/03.+IVE+-+Either+Way.mp3"},
  {title: "Holy Moly", artist_id: 4, album_id: 6, explicit: false, duration: "2:56", song_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/04.+IVE+-+Holy+Moly.mp3", filename:"I'VE+MINE/04.+IVE+-+Holy+Moly.mp3"},
  {title: "OTT", artist_id: 4, album_id: 6, explicit: false, duration: "2:37", song_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/05.+IVE+-+OTT.mp3", filename:"I'VE+MINE/05.+IVE+-+OTT.mp3"},
  {title: "Payback", artist_id: 4, album_id: 6, explicit: false, duration: "3:08", song_url:"https://spotipie-seeds.s3.amazonaws.com/I'VE+MINE/06.+IVE+-+Payback.mp3", filename:"I'VE+MINE/06.+IVE+-+Payback.mp3"},
  
  {title: "How You Like That", artist_id: 5, album_id: 7, explicit: false, duration: "3:02", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/how+you+like+that.mp3", filename:"THE+ALBUM/how+you+like+that.mp3"},
  {title: "Ice Cream (with Selena Gomez}", artist_id: 5, album_id: 7, explicit: false, duration: "2:57", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Ice+Cream.mp3", filename:"THE+ALBUM/Ice+Cream.mp3"},
  {title: "Pretty Savage", artist_id: 5, album_id: 7, explicit: false, duration: "3:21", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Pretty+Savage.mp3", filename:"THE+ALBUM/Pretty+Savage.mp3"},
  {title: "Bet You Wanna (feat. Cardi B}", artist_id: 5, album_id: 7, explicit: false, duration: "2:41", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Bet+You+Wanna+ft.+Cardi+B.mp3", filename:"THE+ALBUM/Bet+You+Wanna+ft.+Cardi+B.mp3"},
  {title: "Lovesick Girls", artist_id: 5, album_id: 7, explicit: false, duration: "3:14", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Lovesick+Girls.mp3", filename:"THE+ALBUM/Lovesick+Girls.mp3"},
  {title: "Love To Hate Me", artist_id: 5, album_id: 7, explicit: false, duration: "2:51", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/Love+To+Hate+Me.mp3", filename:"THE+ALBUM/Love+To+Hate+Me.mp3"},
  {title: "You Never Know", artist_id: 5, album_id: 7, explicit: false, duration: "3:51", song_url:"https://spotipie-seeds.s3.amazonaws.com/THE+ALBUM/You+Never+Know.mp3", filename:"THE+ALBUM/You+Never+Know.mp3"},
  
  {title: "Pink Venom", artist_id: 5, album_id: 8, explicit: false, duration: "3:06", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Pink+Venom.mp3", filename:"Born+Pink/Pink+Venom.mp3"},
  {title: "Shut Down", artist_id: 5, album_id: 8, explicit: false, duration: "2:55", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Shut+down.mp3", filename:"Born+Pink/Shut+down.mp3"},
  {title: "Typa Girl", artist_id: 5, album_id: 8, explicit: true, duration: "2:59", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Typa+Girl.mp3", filename:"Born+Pink/Typa+Girl.mp3"},
  {title: "Yeah Yeah Yeah", artist_id: 5, album_id: 8, explicit: false, duration: "2:58", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Yeah+Yeah+Yeah.mp3", filename:"Born+Pink/Yeah+Yeah+Yeah.mp3"},
  {title: "Hard to Love", artist_id: 5, album_id: 8, explicit: true, duration: "2:42", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Hard+to+Love.mp3", filename:"Born+Pink/Hard+to+Love.mp3"},
  {title: "The Happiest Girl", artist_id: 5, album_id: 8, explicit: false, duration: "3:42", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/The+Happiest+Girl.mp3", filename:"Born+Pink/The+Happiest+Girl.mp3"},
  {title: "Tally", artist_id: 5, album_id: 8, explicit: true, duration: "3:04", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Tally.mp3", filename:"Born+Pink/Tally.mp3"},
  {title: "Ready For Love", artist_id: 5, album_id: 8, explicit: false, duration: "3:04", song_url:"https://spotipie-seeds.s3.amazonaws.com/Born+Pink/Ready+for+love.mp3", filename:"Born+Pink/Ready+for+love.mp3"}

]

songs_info.each do |song_info|
  ApplicationRecord.transaction do
    begin
      song = Song.new(
        title: song_info[:title],
        artist_id: song_info[:artist_id],
        album_id: song_info[:album_id],
        explicit: song_info[:explicit],
        duration: song_info[:duration],
        song_url: song_info[:song_url]
      )

      file = URI.open(song_info[:song_url])
      song.song_file.attach(io: file, filename: song_info[:filename])

      song.save!
      puts "Saved song: #{song.title}"
    rescue => e
      puts "Failed to save song: #{song_info[:title]}"
      puts "Error: #{e.message}"
    end
  end
end
puts "Done!"