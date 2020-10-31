import User from '../models/User.ts';

export default {
  list: async ({ response }: { response: any }) => {
    try {
      const users = await User.find({});

      response.body = users;
    } catch (error) {
      response.body = error;
    }
    
  },
  create: async ({
    request,
    response,
  }: { request: any, response: any }) => {
    try {
      if (!request.hasBody) {
        response.body = { message: 'No body provided' };
  
        return;
      }
  
      const body = await request.body();

      const {
        name = '',
        username: usernameBody,
        email: emailBody,
        password,
      } = await body.value;
  
      if (!usernameBody || !emailBody || !password) {
        response.body = { 
          message: 'username, email and password fields are required',
        };
        
        return;
      }

      const username = usernameBody.toLowerCase();
      const email = emailBody.toLowerCase();
            
      const findExistentUser = await User.findOne({
        $or: [
          { username },
          { email },
        ],
      });
  
      if (findExistentUser) {
        response.body = { 
          message: 'username or email already in use',
        };

        return;
      }
  
      const newUser = {
        name,
        username,
        email,
        password,
      };
  
      const newUserId = await User.insertOne(newUser);
  
      response.body = {
        ...newUser,
        newUserId,
      };
    } catch (error) {
      response.body = { message: error.message };
  
      return;
    }
  },
};
