CREATE TABLE category (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    categoria VARCHAR(50) NOT NULL
);

CREATE TABLE products (
    id_producto INT PRIMARY KEY AUTO_INCREMENT,
    
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT,
    imagen VARCHAR(255),
    talle VARCHAR(10) NOT NULL,
    color VARCHAR(50) NOT NULL,
    precio DECIMAL NOT NULL,
    
    id_categoria INT NOT NULL,
    
    FOREIGN KEY (id_categoria) REFERENCES category(id_categoria)
);

CREATE TABLE carrito_detalle (
    id_detalle INT PRIMARY KEY AUTO_INCREMENT,
    
    id_carrito INT NOT NULL,
    id_producto INT NOT NULL,
    
    color VARCHAR(50),
    talle VARCHAR(10),
    cantidad INT DEFAULT 1,
    precio DECIMAL,
    
    FOREIGN KEY (id_carrito) REFERENCES carrito(id_carrito),
    FOREIGN KEY (id_producto) REFERENCES products(id_producto)
);

CREATE TABLE orders (
    id_orden INT PRIMARY KEY AUTO_INCREMENT,
    
    email VARCHAR(50) NOT NULL,
    
    fecha_orden DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('pendiente', 'cancelado', 'enviado', 'entregado') DEFAULT 'pendiente',
    total DECIMAL,
    envio_direccion VARCHAR(100),
    
    FOREIGN KEY (email) REFERENCES users(email)
);

CREATE TABLE order_detalle (
    id_detalle INT PRIMARY KEY AUTO_INCREMENT,
    
    id_orden INT NOT NULL,
    id_producto INT NOT NULL,
    
    color VARCHAR(50),
    talle VARCHAR(10),
    cantidad INT DEFAULT 1,
    precio DECIMAL,
    
    FOREIGN KEY (id_orden) REFERENCES orders(id_orden),
    FOREIGN KEY (id_producto) REFERENCES products(id_producto)
);