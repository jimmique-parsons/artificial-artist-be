exports.seed = function (knex, Promise) {
  return knex("videos")
    .del()
    .then(function () {
      return knex("videos").insert([
        {
          id: 1,
          video_title: "Testing",
          location: "https://www.youtube.com/watch?v=82Q6DRqf9H4",
          song_name: "Pushing Every Button",
          song_id: 1,
          user_id: 1,
        },
        {
          id: 2,
          video_title: "Trying",
          location: "https://www.youtube.com/watch?v=VVrf89SXvTM",
          song_name: "Endeavours",
          song_id: 2,
          user_id: 1,
        },
        {
          id: 3,
          video_title: "King Me",
          location: "https://www.youtube.com/watch?v=coLerbRvgsQ",
          song_name: "See Me In A Crown",
          song_id: 3,
          user_id: 2,
        },
        {
          id: 4,
          video_title: "Weird",
          location: "https://www.youtube.com/watch?v=-e7wiyNO2us",
          song_name: "ilomilo",
          song_id: 4,
          user_id: 2,
        },
        {
          id: 5,
          video_title: "Boom",
          location: "https://www.youtube.com/watch?v=h-f9Zgdo6I8&t",
          song_name: "Future Bass",
          song_id: 5,
          user_id: 3,
        },
        {
          id: 6,
          video_title: "Dubs",
          location: "https://www.youtube.com/watch?v=VqCm327iSwQ",
          song_name: "Action Dubstep",
          song_id: 6,
          user_id: 3,
        },
        {
          id: 7,
          video_title: "Bud",
          location: "https://www.youtube.com/watch?v=R2oxSIN6rdY",
          song_name: "Funky Reggae",
          song_id: 7,
          user_id: 1,
        },
      ]);
    });
};
