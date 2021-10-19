CREATE TABLE user(
user_id char(255) PRIMARY KEY,
user_username char(50) NOT NULL,
user_password char(255) NOT NULL,
user_email char(50) NOT NULL UNIQUE,
user_phone char(16),
user_creation_date DATE NOT NULL,
user_type int NOT NULL DEFAULT 0,
user_validated BOOLEAN NOT NULL DEFAULT False
);

CREATE TABLE token(
token_token char(255) PRIMARY KEY,
user_id char(255) NOT NULL,
token_type int NOT NULL,
token_creation_date DATE NOT NULL
);

CREATE TABLE resource_group(
resource_group_id char(255) PRIMARY KEY,
resource_group_name char(14) NOT NULL,
resource_group_privacy_type int NOT NULL,
resource_group_password char(255),
resource_group_creation_date DATE NOT NULL,
resource_group_description char(255)
);

CREATE TABLE group_role(
group_role_id char(255) PRIMARY KEY,
resource_group_id char(255) NOT NULL,
group_role_name char(25) NOT NULL,
group_role_description char(255)
);

CREATE TABLE group_member(
group_member_id char(255) PRIMARY KEY,
user_id char(255) NOT NULL,
resource_group_id char(255) NOT NULL,
group_role_id char(255) NOT NULL
);