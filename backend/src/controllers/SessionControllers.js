const connection = require('../database/connection');
/**
 * 
 * NAO CONCEGUI FAZER FUNCIONAR  O LOGUIN
 * 
 */
module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
         .where('id', id)
         .select('name')
         .first();

         if(!ong) {
             return response.status(400).json({ error: 'No ONG found this Id'});
         }
         return response.json(ong);
    }
}