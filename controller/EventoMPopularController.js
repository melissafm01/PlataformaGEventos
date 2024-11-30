
const conn = require('../config/dataBase');

/* consulta para obtener el evento mas popular*/

exports. EventomasPopular= async (req, res) => {
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
    numero_de_inscripciones DESC
    LIMIT 5;  
        `);

        res.json(resultado); 
    } catch (error) {
        res.json({ error: 'Error al obtener el evento mas popular ' + error });
    }
};
