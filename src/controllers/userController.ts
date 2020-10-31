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
  update: async ({
    request,
    response,
    params,
  }: { request: any, response: any, params: any }) => {
    try {
      const { username } = params;

      if (!request.hasBody) {
        response.body = { message: 'No body provided' };

        return;
      }
      
      const body = request.body();

      const {
        name = '',
        password,
      } = await body.value;

      if (!name && !password) {
        response.body = { 
          message: 'No changes were made',
        };
        
        return;
      } 

      if (!username) {
        response.body = {
          message: 'No user found'
        };

        return;
      }

      const userFound = await User.findOne({ username })

      await User.updateOne(
        { username },
        { ...userFound, name, password },
      );

      const findUpdatedUser = await User.findOne({ username })
      
      response.body = findUpdatedUser;
    } catch (error) {
      response.body = { message: error.message };
  
      return;
    }
  },
  delete: async ({ response, params }: { response: any, params: any }) => {
    try {
      const { username } = params;

      await User.deleteOne({ username })

      response.body = { message: "User deleted" }
    } catch (error) {
      response.body = error;
    }
  },
};
