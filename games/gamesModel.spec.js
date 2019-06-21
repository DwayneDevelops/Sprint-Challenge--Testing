const db = require('../data/dbConfig.js');

const{ insert, getAll, getById } = require('./gamesModel.js');

describe('games model', () => {
    beforeEach(async () => {
        await db('games').truncate();
    });

    // it('should set environment to testing', () => {
    //     expect(process.env.DB_ENV).toBe('testing');
    // });
    describe('getAll()', () => {
        it('should get all the games', async () => {
            const games = await getAll();

            expect(games.length).toBe(1);
        });
    });

    describe('getById()', () => {
        it('should get a game by it\'s ID', async () => {
            const id = await getById(1);

            expect(id.releaseYear).toBe( 1980 );
        })
    })

    describe('insert()', () => {
        it('should insert games', async () => {
            await insert({ title: 'Pacman', genre: 'Arcade', releaseYear: 1980 })

            const games = await db('games');

            expect(games).toHaveLength(1);
            expect(games[0].title).toBe('Pacman');
        });    
    
        it('should insert the provided game', async () => {
            let game = { title: 'Contra', genre: 'Run and gun', releaseYear: 1987 };
            let inserted = await insert(game);
            expect(inserted.title).toBe(game.title);
            expect(inserted.genre).toBe(game.genre);
            expect(inserted.releaseYear).toBe(game.releaseYear);
            
            game = { title: 'Tetris', genre: 'Arcade', releaseYear: 1984 };
            inserted = await insert(game);
            expect(inserted.title).toBe(game.title);
            expect(inserted.genre).toBe(game.genre);
            expect(inserted.releaseYear).toBe(game.releaseYear);
        });    
    });
});