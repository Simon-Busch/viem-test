import { createPublicClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts'
import { sepolia } from "viem/chains";
import dotenv from 'dotenv';
dotenv.config();
const dummy_private_key = "0x651e502a4d2176dc0eb1009f443feaf5ef0a68fc811d5916cc2139342a45b3cb";
console.log('1-account.ts running ....');


const account = privateKeyToAccount(dummy_private_key);

console.log("account: ", account);

//IIEFI
(async () => {
  const client = createPublicClient({
    chain: sepolia,
    transport: http(process.env.API_URL),
  });

  const balance = await client.getBalance({address: account.address});
  console.log("balance: ", balance);
})();
