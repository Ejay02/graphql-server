let games = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Switch"],
  },
  {
    id: 2,
    title: "God of War",
    platform: ["PS5"],
  },
  {
    id: 3,
    title: "Halo Infinite",
    platform: ["Xbox", "PC"],
  },
  {
    id: 4,
    title: "Grand Theft Auto V",
    platform: ["PS5", "Xbox", "PC"],
  },
  {
    id: 5,
    title: "Super Mario Odyssey",
    platform: ["Switch"],
  },
  {
    id: 6,
    title: "Red Dead Redemption 2",
    platform: ["PS5", "Xbox", "PC"],
  },
  {
    id: 7,
    title: "The Witcher 3: Wild Hunt",
    platform: ["Switch", "PS5", "Xbox", "PC"],
  },
  {
    id: 8,
    title: "Animal Crossing: New Horizons",
    platform: ["Switch"],
  },
  {
    id: 9,
    title: "Assassin's Creed Valhalla",
    platform: ["PS5", "Xbox", "PC"],
  },
  {
    id: 10,
    title: "Call of Duty: Warzone",
    platform: ["PS5", "Xbox", "PC"],
  },
];

let authors = [
  {
    id: 1,
    name: "John Doe",
    verified: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    verified: true,
  },
  {
    id: 3,
    name: "Alex Johnson",
    verified: false,
  },
  {
    id: 4,
    name: "Sarah Thompson",
    verified: true,
  },
  {
    id: 5,
    name: "Michael Brown",
    verified: false,
  },
  {
    id: 6,
    name: "Emily Davis",
    verified: true,
  },
  {
    id: 7,
    name: "David Wilson",
    verified: false,
  },
  {
    id: 8,
    name: "Olivia Anderson",
    verified: true,
  },
  {
    id: 9,
    name: "James Lee",
    verified: false,
  },
  {
    id: 10,
    name: "Sophia Hernandez",
    verified: true,
  },
];

let reviews = [
  {
    id: 1,
    rating: 8,
    content: "Awesome game!",
    author_id: 2,
    game_id: 1,
  },
  {
    id: 2,
    rating: 9,
    content: "Impressive graphics.",
    author_id: 4,
    game_id: 6,
  },
  {
    id: 3,
    rating: 7,
    content: "Addictive gameplay.",
    author_id: 6,
    game_id: 4,
  },
  {
    id: 4,
    rating: 6,
    content: "Could be better.",
    author_id: 1,
    game_id: 9,
  },
  {
    id: 5,
    rating: 10,
    content: "Highly recommended!",
    author_id: 10,
    game_id: 3,
  },
  {
    id: 6,
    rating: 8,
    content: "Great storyline.",
    author_id: 3,
    game_id: 7,
  },
  {
    id: 7,
    rating: 5,
    content: "Lacks innovation.",
    author_id: 9,
    game_id: 2,
  },
  {
    id: 8,
    rating: 7,
    content: "Fun multiplayer mode.",
    author_id: 5,
    game_id: 10,
  },
  {
    id: 9,
    rating: 9,
    content: "Beautiful visuals.",
    author_id: 7,
    game_id: 5,
  },
  {
    id: 10,
    rating: 8,
    content: "Solid gameplay mechanics.",
    author_id: 8,
    game_id: 8,
  },
];

export default { games, authors, reviews };
