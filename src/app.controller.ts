import { Controller, Delete, Get, Param, Post, Put, Query, Body , Patch} from '@nestjs/common';

@Controller('')
export class AppController {
    @Get() 
    home() {
        return "Welcom to my Movie API"
    }
}
