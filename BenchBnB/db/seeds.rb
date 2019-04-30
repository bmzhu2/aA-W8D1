# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

benches = Bench.create([
    {description: "Clay & Mason", lat: 37.793703, lng: -122.411203}, 
    {description: "Vallejo & Kearny", lat: 37.798968, lng: -122.405651},
    {description: "AppAcademy on Battery Street", lat: 37.798951, lng: -122.401244}
  ])