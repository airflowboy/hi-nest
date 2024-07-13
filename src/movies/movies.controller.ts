import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    
    @Get()
    getAll():string {
        return 'this will return all movies';
    }

    @Get('/:id')
    getOne(@Param('id') id:string ):string {
        return `this will return one movie id = ${id}`;
    }

    @Post()
    create() {
        return 'This will create a movie';
    }

    @Delete('/:id')
    remove(@Param('id') id:string) {
        return `This will delete a movie id = ${id}`;
    }

    @Patch('/:id')
    patch(@Param('id') id:string) {
        return `This will update movie id = ${id}`;
    }

}
