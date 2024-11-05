import express from 'express';
import userRoute from './routers/userRoute'
import emailRouter from './routers/emailRouter'
import passwordRouter from './routers/passwordRouter'
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
 // Ensure the path is correct
// import k from 
const PORT = process.env.PORT ||2002;
const app = express();
app.use(cors());
app.use(cors({ origin: "https://hanafi-marwan.onrender.com" }));
app.use(express.json());
app.post(process.env.TYPE_APP_SING_PATH || '/api.signup',userRoute );
app.post(process.env.TYPE_APP_LOG_PATH|| '/api.login',userRoute );
app.post(process.env.TYPE_APP_EMAIL_PATH|| '/api.login',emailRouter );
app.post('/api.password',passwordRouter );
app.post('/api.change.password',passwordRouter );

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
