# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

100.times do
  OfflineWorker.create!(name: Faker::Name.name)
end
puts 'made 100 of dese'

10.times do
  User.create(roles: 'organizer', name: Faker::Name.name)
end
puts 'made 10 organizers'

User.create(roles: 'admin', name: Faker::Name.name)

300.times do
  Conversation.create(
    user_id: rand(1..10),
    offline_worker_id: rand(1..100),
    engagement_level: rand(1..5),
    body: Faker::TvShows::GameOfThrones.quote
  )
end
puts 'made 300 convos'
