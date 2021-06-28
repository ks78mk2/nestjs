import { Controller, Delete, Get, Param, Post, Put, Query, Body , Patch} from '@nestjs/common';
import { get } from 'http';
import { MoviesService } from './movies.service';
import { Movie } from './entities/Moive.entity'
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moivesService: MoviesService) {}

    @Get()
    getAll() :Movie[] {
        return this.moivesService.getAll();
    }
    
    @Get("/:id")
    getOne(@Param("id") movieId : number) : Movie {
        return this.moivesService.getOne(movieId);
    }

    @Post() 
    create(@Body() movieData : CreateMovieDto) {
        return this.moivesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId: number) {
        return this.moivesService.deleteOne( movieId );
    }

    @Patch("/:id")
    patch(@Param('id') movieId: number, @Body() updateData : UpdateMovieDto) {
       return this.moivesService.update(movieId, updateData)
    }

    
}
