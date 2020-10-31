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
