import database from '../config/database.ts';

interface UserSchema {
  _id: { $oid: string };
  username: {
    type: string,
    unique: true,
  };
  email: {
    type: string,
    unique: true,
  };
  password: {
    type: string,
    select: false,
  };
  avatar: string;
};

export default database.collection<UserSchema>('Users');
