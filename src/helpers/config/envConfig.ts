import dotenv from 'dotenv';
import path from 'path';
// cwd = current working directory (অর্থাৎ আমরা এখন যে পাইলে আছি এটা)
dotenv.config({ path: path.join(process.cwd(), '.env') }); // এখানে ২ টা জয়েন করে দিয়েছে
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  env: process.env.NODE_ENV || "development",
  base_url: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3030/api/v1",
};
