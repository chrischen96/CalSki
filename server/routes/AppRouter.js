import express from 'express';
import planRouter from './planRouter';
import resortRouter from './resortRouter';
import userRouter from './userRouter';

const Router = express.Router();

Router.use('/plan', planRouter);
Router.use('/resort', resortRouter);
Router.use('/user', userRouter);

export default Router;

// import Router from ('express').Router()

// import planRouter from './plan/Router'
// import resortRouter from './resortRouter'
// import userRouter from './userRouter'

// Router.use('/plan', planRouter)
// Router.use('/resort', resortRouter)
// Router.use('/user', userRouter)

// export default Router