CREATE DATABASE schooled_web_application;
USE schooled_web_application;

CREATE TABLE user(
user_id VARCHAR(50),
user_username VARCHAR(25) UNIQUE NOT NULL,
user_password CHAR(255) NOT NULL,
user_email CHAR(255) UNIQUE NOT NULL,
user_phone INT UNIQUE,
user_creation_date DATE NOT NULL,
user_validated BOOLEAN NOT NULL,
user_type INT NOT NULL DEFAULT 0,
PRIMARY KEY (user_id)
);

CREATE TABLE resource_group(
resource_group_id VARCHAR(50),
resource_group_name VARCHAR(14) NOT NULL,
resource_group_privacy_type INT NOT NULL,
resource_group_password CHAR(255),
resource_group_creation_date DATE NOT NULL,
resource_group_description CHAR(255),
PRIMARY KEY(resource_group_id)
);

CREATE TABLE permission(
permission_id VARCHAR(50),
permission_name VARCHAR(50) NOT NULL,
permission_data BLOB(65535) NOT NULL,
PRIMARY KEY(permission_id)
);

CREATE TABLE token(
token_token CHAR(255),
user_id VARCHAR(50) NOT NULL,
token_type INT NOT NULL,
token_creation_date DATE NOT NULL,
PRIMARY KEY(token_token),
FOREIGN KEY(user_id) REFERENCES user(user_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE invite(
invite_token VARCHAR(50),
invite_creation_date DATE NOT NULL,
user_id VARCHAR(50) NOT NULL,
resource_group_id VARCHAR(50) NOT NULL,
invite_used BOOLEAN NOT NULL,
PRIMARY KEY(invite_token),
FOREIGN KEY(user_id) REFERENCES user(user_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
,FOREIGN KEY(resource_group_id) REFERENCES resource_group(resource_group_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE group_role(
group_role_id VARCHAR(50),
resource_group_id VARCHAR(50) NOT NULL,
group_role_name VARCHAR(20) NOT NULL,
group_role_description CHAR(255),
PRIMARY KEY(group_role_id),
FOREIGN KEY(resource_group_id) REFERENCES resource_group(resource_group_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE group_member(
group_member_id VARCHAR(50),
user_id VARCHAR(50) NOT NULL,
group_role_id VARCHAR(50) NOT NULL,
PRIMARY KEY(group_member_id),
FOREIGN KEY(user_id) REFERENCES user(user_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
,FOREIGN KEY(group_role_id) REFERENCES group_role(group_role_id)
	ON DELETE SET DEFAULT
	ON UPDATE CASCADE
);

CREATE TABLE resource(
resource_id VARCHAR(50),
resource_name VARCHAR(14) NOT NULL,
resource_group_id VARCHAR(50)NOT NULL,
resource_type INT NOT NULL,
resource_creation_date DATE NOT NULL,
PRIMARY KEY(resource_id),
FOREIGN KEY(resource_group_id) REFERENCES resource_group(resource_group_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE whiteboard(
whiteboard_id VARCHAR(50),
resource_id VARCHAR(50) NOT NULL,
whiteboard_data BLOB(65535) NOT NULL,
whiteboard_creation_date DATE NOT NULL,
PRIMARY KEY(whiteboard_id),
FOREIGN KEY(resource_id) REFERENCES resource(resource_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE card(
card_id VARCHAR(50),
resource_id VARCHAR(50) NOT NULL,
card_question CHAR(255) NOT NULL,
card_answer CHAR(255) NOT NULL,
PRIMARY KEY(card_id),
FOREIGN KEY(resource_id) REFERENCES resource(resource_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE question(
question_id VARCHAR(50),
resource_id VARCHAR(50) NOT NULL,
question_question CHAR(255) NOT NULL,
question_answer_data LONGTEXT NOT NULL,
PRIMARY KEY(question_id),
FOREIGN KEY(resource_id) REFERENCES resource(resource_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE resource_permission(
resource_permission_id VARCHAR(50),
resource_id VARCHAR(50) NOT NULL,
permission_id VARCHAR(50) NOT NULL,
PRIMARY KEY(resource_permission_id),
FOREIGN KEY(resource_id) REFERENCES resource(resource_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
,FOREIGN KEY(permission_id) REFERENCES permission(permission_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);