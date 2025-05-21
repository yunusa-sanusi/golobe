import { Account, Client } from 'appwrite';

const client = new Client().setProject('6828fda70035d70409bd');

const account = new Account(client);

export default account;
