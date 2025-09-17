import { error } from 'node:console';
import { readFile } from 'node:fs';
import { writeFile } from 'node:fs';

readFile('files/example.txt', 'utf8', (error, data) => {
    if(error) throw error;

    console.log(data)
})

const content = 'hi i am Junior Programmer'
writeFile('files/mge.txt', content, 'utf8', (error) => {
    if(error) throw error;
    console.log('succassfully Done !')
})