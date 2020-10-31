import database from '../config/database.ts';

interface TweetScheema {
  _id: { $oid: string };
  user: {
    $oid: string,
  };
  content: string;
  likes: [
    {
      $oid: string,
    }
  ];
  createdAt: number;
};

export default database.collection<TweetScheema>('Tweets');


// Tweet
//   userId: {
//     type: ObjectId(User),
//     required: true,
//   },
//   content: {
//     type: string,
//     required: true,
//   },
//   likes: [ObjectId(User)]
//   createdAt: {
//     type: number,
//     required: true,
//   },