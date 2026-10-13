CREATE DATABASE IF NOT EXISTS controle_gastos;

USE controle_gastos;

-- 1. Tabela de usuários
CREATE TABLE usuarios (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(180) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    atualizado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Tabela de grupos familiares
CREATE TABLE grupos_familiares (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    criado_por BIGINT UNSIGNED NOT NULL,
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    atualizado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (criado_por)
        REFERENCES usuarios(id)
);

-- 3. Tabela de membros dos grupos familiares
CREATE TABLE membros_grupos_familiares (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    grupo_familiar_id BIGINT UNSIGNED NOT NULL,
    usuario_id BIGINT UNSIGNED NOT NULL,
    funcao ENUM('ADMIN', 'MEMBRO') NOT NULL DEFAULT 'MEMBRO',
    entrou_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (grupo_familiar_id)
        REFERENCES grupos_familiares(id),

    FOREIGN KEY (usuario_id)
        REFERENCES usuarios(id)
);

-- 4. Tabela de categorias
CREATE TABLE categorias (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 5. Tabela de despesas
CREATE TABLE despesas (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(200) NOT NULL,
    valor DECIMAL(12,2) NOT NULL,
    data_despesa DATE NOT NULL,
    usuario_id BIGINT UNSIGNED NOT NULL,
    grupo_familiar_id BIGINT UNSIGNED NULL,
    categoria_id BIGINT UNSIGNED NULL,
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    atualizado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (usuario_id)
        REFERENCES usuarios(id),

    FOREIGN KEY (grupo_familiar_id)
        REFERENCES grupos_familiares(id),

    FOREIGN KEY (categoria_id)
        REFERENCES categorias(id)
);