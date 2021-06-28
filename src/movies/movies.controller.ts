import { Controller, Delete, Get, Param, Post, Put, Query, Body , Patch} from '@nestjs/common';
import { get } from 'http';
import {MoviesService} from './movies.service';
import {Movie} from './entities/Moive.entity'
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(readonly moivesService: MoviesService) {}

    @Get()
    getAll() :Movie[] {
        return this.moivesService.getAll();
    }
    
    @Get("/:id")
    getOne(@Param("id") movieId : string) : Movie {
        return this.moivesService.getOne(movieId);
    }

    @Post() 
    create(@Body() movieData : CreateMovieDto) {
        return this.moivesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string) {
        return this.moivesService.deleteOne( movieId );
    }

    @Patch("/:id")
    patch(@Param('id') movieId: string, @Body() updateData) {
       return this.moivesService.update(movieId, updateData)
    }

    
}
