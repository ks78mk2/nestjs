import { Controller, Delete, Get, Param, Post, Put , Patch} from '@nestjs/common';
import { get } from 'http';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get("/:id")
    getOne(@Param("id") movieId : string) {
        return `This will return one movie with the movieId : ${movieId}`;
    }

    @Post() 
    create() {
        return 'This will create a movie'
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string) {
        return `This will delete a movie wite the id : ${movieId}`
    }

    @Patch("/:id")
    patch(@Param('id') movieId: string) {
        return `This will patch a movie with the id : ${movieId}`
    }

}
