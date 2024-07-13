import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    
    @Get()
    getAll():string {
        return 'this will return all movies';
    }

    @Get('/search')
    search(@Query('year') searchingYear:string) {
        return `We are searching for a movie made after ${searchingYear}`
    }

    @Get('/:id')
    getOne(@Param('id') id:string ):string {
        return `this will return one movie id = ${id}`;
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }

    @Delete('/:id')
    remove(@Param('id') id:string) {
        return `This will delete a movie id = ${id}`;
    }

    @Patch('/:id')
    patch(@Param('id') id:string, @Body() updateData) {
        return {
            'updatedMovie': id,
            ...updateData,
        }
    }

    
}
