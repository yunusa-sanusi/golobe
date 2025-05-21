import { ID } from 'appwrite';

import account from '../appwriteConfig';

export const createEmailPasswordUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  const userId = ID.unique();
  try {
    await account.create(userId, email, password, `${firstName} ${lastName}`);
    await account.createEmailPasswordSession(email, password);
    await sendVerificationEmail();
    await account.deleteSession('current');
  } catch (error) {
    console.log(error);
  }
};

const sendVerificationEmail = async () => {
  try {
    const response = await account.createVerification(
      `http://localhost:5173/auth/email-verification`,
    );
    console.log('Email sent', response);
  } catch (error) {
    console.log(error);
  }
};

export const verifyEmail = async (userId: string, secret: string) => {
  try {
    await account.updateVerification(userId, secret);
    await account.deleteSession('current');
  } catch (error) {
    console.log(error);
  }
};
