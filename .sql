
use dbeventos;

CREATE TABLE Eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    fecha_hora DATETIME NOT NULL,
    lugar VARCHAR(200) NOT NULL,
    capacidad_maxima INT NOT NULL,
      createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp
);

CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    rol ENUM('usuario', 'admin') DEFAULT 'usuario',
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp);


CREATE TABLE Inscripciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    evento_id INT NOT NULL,
    inscrito_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       estado ENUM('activo', 'cancelado') DEFAULT 'activo',
    UNIQUE(usuario_id, evento_id), -- Un usuario no puede inscribirse dos veces al mismo evento
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (evento_id) REFERENCES Eventos(id) ON DELETE CASCADE
);



/*Informe con el número de inscripciones en cada evento*/

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



/* Eventos más populares*/

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
LIMIT 5;  -- O el número de eventos populares se deseen 

