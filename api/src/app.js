import 'dotenv/config';
import { json, static as urlencoded } from 'express';
import cors from 'cors';
import ejs from 'ejs';
import { app, startServer } from './config';
import { errorHandler, notFound } from './middleware';
import {
  CarRoutes,
} from './routes';

export const init = () => {
  //global middlewares

  app.engine('ejs', ejs.renderFile);
  app.set('view engine', 'ejs');

 
  app.use(cors({origin : '*'}));
  // app.use(morgan('tiny'));
  app.use(json());
  app.use(urlencoded({ extended: true }));

  app.get('/page', (req, res) => {
    res.render('index');
  });

  //routes
  app.use('/car', CarRoutes);
  app.get('/',(req, res)=>{
    console.log('health check')
    res.json({
      healthCheck:'system is ready'
    })
  })

  // 404
  app.use(notFound);

  // Error handler
  app.use(errorHandler);

  //init db with server
  startServer();
};

//initialize server
init();
