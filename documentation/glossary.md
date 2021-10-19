# Documentation Document

## Entities

* user
* token
* group
* group_member
* group_roles
* invite
* resource
* whiteboard
* card
* question
* resource_permission
* permission

### user

This is where the user information for logging into the application will be stored. This will also be used to store information needed to contact the user or link them to any groups within the application.

#### user-Relationships

* A `user` may request more than one `token` 1(1) - M(0)
* A `user` can create an `invite` 1(1) - M(0)
* A `user` becomes a `group_member` 1(1) - M(0)

#### user-Dependency

* None

#### user-Attributes

- - -

##### Attribute Type: user_id

Data Type: VARCHAR(50)

Description: `user_id` is a unique UID used to identify the user through-out the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: user_username

Data Type: VARCHAR(25)

Description: `user_username` is a unique id used by a user an identity that is readable by other users.
This username is also used for the user to login to the application.
Characters in usernames are alphabetic, numeric or underscores. Example: `test_user`

##### Attribute Type: user_password

Data Type: CHAR(255)

Description: `user_password` is a hidden phrase that a user can use to access their account.
Characters in passwords are alphabetic, numeric or some special.
Passwords are stored on into the database encrypted.
Example: `Afh4$2gasGS!` stored as `ea76111f51585ebddf8382e6bc93e1661b1d52f6925643c91a3775ef8c6b53c3`

##### Attribute Type: user_email

Data Type: CHAR(255)

Description: `user_email` is a unique form of contact required to create an account used to send information to the user.
Characters in emails are character that make up a valid email. Example: `Jane.Smith@gmail.com`

##### Attribute Type: user_phone

Data Type: INT

Description: `user_phone` is a unique form of contact that can later be used to send user information over phone.
Characters in phone number are numeric. Example: `12345678901`

##### Attribute Type: user_creation_date

Data Type: DATE

Description: `user_creation_date` is used to store the date of creation of a user account.
Characters in creation date are numeric or /. Example: `01/01/0001`

##### Attribute Type: user_validated

Data Type: BOOLEAN

Description: `user_validated` this is used to flag if a user had validated their email.
Characters in validated are numeric. Example: `0` (This means false)

- - -

### token

The tokens are used for password requests as well as email vaildation.

#### token-Relationships

* A `user` may request more than one `token` 1(1) - M(0)

#### token-Dependency

* user
  * ON DELETE CASCADE
  * ON UPDATE CASCADE

#### token-Attributes

- - -

##### Attribute Type: token_token

Data Type: CHAR(255)

Description: `token_token` is a unique UID which is then encrypted used to identify a token through the application.
Characters in ids are alphabetic or numeric. Example: `35ae8aebfa03cfc0f35368044ce746d5a7e2a1fbb76ee981ff038f4629aae9de`

##### Attribute Type: user_id

Data Type: VARCHAR(50)

Description: `user_id` is a unique UID used to identify the user through-out the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: token_type

Data Type: INT

Description: `token_type` is a interger that is used to tell the application what type of token this is.
Example: `1`

##### Attribute Type: token_creation_date

Data Type: DATE

Description: `token_creation_date` is used to store the date of creation of a token.
Characters in creation date are numeric or /. Example: `01/01/0001`

- - -

### resource_group

This is used to store basic group information and to allow for the application to link both resources and users into different groups.

#### resource_group-Relationships

* A `resource_group` can contain more than one `resource` 1(1) - M(0)
* A `resource_group` is assigned to an invite `invite` 1(1) - M(0)
* A `resource_group` can be organized by one or more `group_role` 1(1) - M(1)

#### resource_group-Dependency

* None

#### resource_group-Attributes

- - -

##### Attribute Type: resource_group_id

Data Type: VARCHAR(50)

Description: `resource_group_id` is a unique UID used to identify a group through-out the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: resource_group_name

Data Type: VARCHAR(14)

Description: `resource_group_name` is used to be displayed on the application to identify a group there can be more than one of the same group name.
Characters in name are alphabetic, numeric or spaces. Example: `Test Group`

##### Attribute Type: resource_group_privacy_type

Data Type: INT

Description: `resource_group_privacy_type` is a interger that is used to tell the application what type of privacy a group has.
Example: `1` (This could mean private invite only)

##### Attribute Type: resource_group_password

Data Type: CHAR(255)

Description: `resource_group_password` is a hidden phrase that a group can use to have a password protected public group.
Characters in passwords are alphabetic, numeric or some special.
Passwords are stored on into the database encrypted.
Example: `Afh4$2gasGS!` stored as `ea76111f51585ebddf8382e6bc93e1661b1d52f6925643c91a3775ef8c6b53c3`

##### Attribute Type: resource_group_creation_date

Data Type: DATE

Description: `resource_group_creation_date` is used to store the date of creation of a group.
Characters in creation date are numeric or /. Example: `01/01/0001`

##### Attribute Type: resource_group_description

Data Type: CHAR(255)

Description: `resource_group_description` a short non-required description of what the group is.
Characters in passwords are alphabetic, numeric or some special.
Example: `This group is for learning the German language.`

- - -

### group_roles

This is used to give users a certain role within a given group.

#### group_roles-Relationships

* A `group` can be organized by one or more `group_role` 1(1) - M(1)
* A `group_member` is assigned a `group_role` M(0) - 1(1)

#### group_roles-Dependency

* resource_group
  * ON DELETE CASCADE
  * ON UPDATE CASCADE

#### group_roles-Attributes

- - -

##### Attribute Type: group_roles_id

Data Type: VARCHAR(50)

Description: `group_roles_id` is a unique UID used to identify a group role through-out the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: resource_group_id

Data Type: VARCHAR(50)

Description: `resource_group_id` is a unique UID used to identify a group through-out the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: group_roles_name

Data Type: VARCHAR(20)

Description: `group_roles_name` is a used to identify a group role through-out the any given group.
Characters in ids are alphabetic, numeric or space. Example: `Admin`

##### Attribute Type: group_roles_description

Data Type: CHAR(255)

Description: `group_roles_description` a short non-required description of what the group role is.
Characters in passwords are alphabetic, numeric or some special.
Example: `This role is given to users that will admins of this group.`

- - -

### group_member

This is used to link a users with a group as well as a role within the group.

#### group_member-Relationships

* A `user` becomes a `group_member` 1(1) - M(0)
* A `group_member` is assigned a `group_role` M(0) - 1(1)

#### group_member-Dependency

* group_roles
  * ON DELETE CASCADE
  * ON UPDATE CASCADE

#### group_member-Attributes

- - -

##### Attribute Type: group_member_id

Data Type: VARCHAR(50)

Description: `group_member_id` is a unique UID used to identify a group member through-out the any given group.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: user_id

Data Type: VARCHAR(50)

Description: `user_id` is a unique UID used to identify the user through the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: resource_group_id

Data Type: VARCHAR(50)

Description: `resource_group_id` is a unique UID used to identify a group role through-out the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

- - -

### invite

This is used to allow for users to send out invites into any given group from within the group.

#### invite-Relationships

* A `user` can create an `invite` 1(1) - M(0)
* A `group` is assigned to an invite `invite` 1(1) - M(0)

#### invite-Dependency

* resource_group
  * ON DELETE CASCADE
  * ON UPDATE CASCADE
* user
  * ON DELETE CASCADE
  * ON UPDATE CASCADE

#### invite-Attributes

- - -

##### Attribute Type: invite_token

Data Type: VARCHAR(50)

Description: `invite_token` is a unique UID used to identify a user invite through the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: invite_creation_date

Data Type: DATE

Description: `invite_creation_date` is used to store the date of creation of a invite.
Characters in creation date are numeric or /. Example: `01/01/0001`

##### Attribute Type: user_id

Data Type: VARCHAR(50)

Description: `user_id` is a unique UID used to identify the user through the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: resource_group_id

Data Type: VARCHAR(50)

Description: `resource_group_id` is a unique UID used to identify a group through-out the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: invite_used

Data Type: BOOLEAN

Description: `invite_used` this is used to flag if a invite has been used by an account.
Characters in validated are numeric. Example: `0` (This means false)

- - -

### resource

This is used to store information about the resource in any given group and is used to link said resource to a group. This can be three different types of resources, flash card deck, quiz, or whiteboard. Based on the resource type that the correct information is linked to the resource.

#### resource-Relationships

* A `group` can contain more than one `resource` 1(1) - M(0)
* A `resource` can possess more than one `whiteboard` if it is a whiteboard type 1(1) - M(0)
* A `resource` can hold more than one `card` if it is a flash card deck 1(1) - M(0)
* A `resource` can store more than one `question` if it is a quiz 1(1) - M(0)
* A `resource` can have more than one `resource_permission` 1(1) - M(0)

#### resource-Dependency

* resource_group
  * ON DELETE CASCADE
  * ON UPDATE CASCADE

#### resource-Attributes

- - -

##### Attribute Type: resource_id

Data Type: VARCHAR(50)

Description: `resource_id` is a unique UID used to identify a resource through-out the given group.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: resource_name

Data Type: VARCHAR(14)

Description: `resource_name` is a used to identify a resource through-out the any given group.
Characters in ids are alphabetic, numeric or space. Example: `Basic Welcome`

##### Attribute Type: resource_group_id

Data Type: VARCHAR(50)

Description: `resource_group_id` is a unique UID used to identify a group through-out the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: resource_type

Data Type: INT

Description: `resource_type` is a interger that is used to tell the application what type of resource this is.
Example: `1` (Could be a flash card deck)

##### Attribute Type: resource_creation_date

Data Type: DATE

Description: `resource_creation_date` is used to store the date of creation of a resource.
Characters in creation date are numeric or /. Example: `01/01/0001`

- - -

### whiteboard

This is used to store all of the current white board data after each edit and it is linked to a whiteboard resource that can be accessed by the group in which it is attached to.

#### whiteboard-Relationships

* A `resource` can possess more than one `whiteboard` if it is a whiteboard type 1(1) - M(0)

#### whiteboard-Dependency

* resource
  * ON DELETE CASCADE
  * ON UPDATE CASCADE

#### whiteboard-Attributes

- - -

##### Attribute Type: whiteboard_id

Data Type: VARCHAR(50)

Description: `whiteboard_id` is a unique UID used to identify a whiteboard resource through-out the given group.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: resource_id

Data Type: VARCHAR(50)

Description: `resource_id` is a unique UID used to identify a resource through-out the given group.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: whiteboard_data

Data Type: LONGTEXT

Description: `whiteboard_data` is used to store the data of a given whiteboard of a resource.
Characters in whiteboard data are numeric. Example: `0101010101000001111101010100011`

##### Attribute Type: whiteboard_creation_date

Data Type: DATE

Description: `whiteboard_creation_date` is used to store the date of whiteboard of a resource.
Characters in creation date are numeric or /. Example: `01/01/0001`

- - -

### card

This is used to store information about the front and back side of a given flash card and is connected with a flash card deck resource.

#### card-Relationships

* A `resource` can hold more than one `card` if it is a flash card deck 1(1) - M(0)

#### card-Dependency

* resource
  * ON DELETE CASCADE
  * ON UPDATE CASCADE

#### card-Attributes

- - -

##### Attribute Type: card_id

Data Type: VARCHAR(50)

Description: `card_id` is a unique UID used to identify a card within a flash card deck resource through-out the given group.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: resource_id

Data Type: VARCHAR(50)

Description: `resource_id` is a unique UID used to identify a resource through-out the given group.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: card_question

Data Type: CHAR(255)

Description: `card_question` a short question for a given flash card.
Characters in card question are alphabetic, numeric or some special.
Example: `Ich Bin Danie`

##### Attribute Type: card_answer

Data Type: CHAR(255)

Description: `card_answer` a short answer to the given card question.
Characters in card answer are alphabetic, numeric or some special.
Example: `I am Danie`

- - -

### question

This is used to store information about any given question and is linked with a quiz resoure. This has information on both the question and the answers to that question there is more than on type of question type, but the data is stored as a JSON string.

#### question-Relationships

* A `resource` can store more than one `question` if it is a quiz 1(1) - M(0)

#### question-Dependency

* resource
  * ON DELETE CASCADE
  * ON UPDATE CASCADE

#### question-Attributes

- - -

##### Attribute Type: question_id

Data Type: VARCHAR(50)

Description: `question_id` is a unique UID used to identify a question within a quiz resource through-out the given group.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: resource_id

Data Type: VARCHAR(50)

Description: `resource_id` is a unique UID used to identify a resource through-out the given group.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: question_question

Data Type: CHAR(255)

Description: `question_question` a short question to the given quiz question.
Characters in quiz questions are alphabetic, numeric or some special.
Example: `What is "Ich bin Danie" mean?`

##### Attribute Type: question_answer_data

Data Type: LONGTEXT

Description: `question_answer_data` is used to store the data of a given question of a resource.
Characters in question data are numeric. Example: `0101010101000001111101010100011`

- - -

### permission

This is used to store different options that are available of the website to be added into any given resource to better control groups through the site.

#### permission-Relationships

* A `resource_permission` derives from the websites `permission` options M(0) - 1(1)

#### permission-Attributes

- - -

##### Attribute Type: permission_id

Data Type: VARCHAR(50)

Description: `permission_id` is a unique UID used to identify a permission through-out the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: permission_name

Data Type: VARCHAR(50)

Description: `permission_name` is a unique name used to identify a give permission option through-out the application.
Characters in permission name are alphabetic or space. Example: `Add User`

##### Attribute Type: permission_data

Data Type: LONGTEXT

Description: `permission_data` is used to store the data of a given permission of the application.
Characters in question data are numeric. Example: `0101010101000001111101010100011`

- - -

### resource_permission

This is used to link different types of permissions that are offered on the site to any given resource in group.

#### resource_permission-Relationships

* A `resource_permission` derives from the websites `permission` options M(0) - 1(1)
* A `resource` can have more than one `resource_permission` 1(1) - M(0)

#### resource_permission-Dependency

* resource
  * ON DELETE CASCADE
  * ON UPDATE CASCADE
* permission
  * ON DELETE CASCADE
  * ON UPDATE CASCADE

#### resource_permission-Attributes

- - -

##### Attribute Type: resource_permission_id

Data Type: VARCHAR(50)

Description: `resource_permission_id` is a unique UID used to identify a permission through-out a given resource.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: resource_id

Data Type: VARCHAR(50)

Description: `resource_id` is a unique UID used to identify a resource through-out the given group.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

##### Attribute Type: permission_id

Data Type: VARCHAR(50)

Description: `permission_id` is a unique UID used to identify a permission through-out the application.
Characters in ids are alphabetic, numeric or dashes. Example: `0g46e17c-1abe-9edv-6n27-25943m75fq87`

- - -
