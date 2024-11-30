
const conn = require('../config/dataBase');


/*Consulta de numero de inscripciones en cada evento*/ 

exports. NumInscripcionesE = async (req, res) => {
    try {
        const [resultado] = await conn.query(`
         SELECT 
         e.id AS evento_id,
         e.nombre AS nombre_evento,
         COUNT(i.id) AS numero_de_inscripciones
         FROM 
         Eventos e
         LEFT JOIN 
         Inscripciones i ON e.id = i.evento_id
         GROUP BY 
         e.id
         ORDER BY 
         numero_de_inscripciones DESC;

        `);
        res.json(resultado); 
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el numero de inscripciones en cada evento ' + error });
    }
};
