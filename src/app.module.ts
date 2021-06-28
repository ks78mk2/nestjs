import {  Module  } from '@nestjs/common';
import { Request, Response } from 'express';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';



@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
