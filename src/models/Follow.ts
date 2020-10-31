import database from '../config/database.ts';

interface FollowSchema {
  _id: { $oid: string };
  followerId: {
    $oid: string,
  },
  followedId: {
    $oid: string,
  },
};

export default database.collection<FollowSchema>('Follows');
