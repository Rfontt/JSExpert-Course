const { readFile } = require('fs/promises');

class BaseRepository {
    constructor({ file }) {
        this.file = file;
    }

    async find(itemid) {
        const content = JSON.parse(await readFile(this.file));

        if (!itemid) return content;

        return content.find(({ id }) => id === itemid);
    }
}

module.exports = BaseRepository;