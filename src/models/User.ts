import database from '../config/database.ts';

interface UserSchema {
  _id: { $oid: string };
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
};

export default database.collection<UserSchema>('Users');
