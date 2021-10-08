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

#### user-Attributes

* user_id 1(1)
* user_username 1(1)
* user_password M(1)
* user_email 1(1)
* user_phone 1(1)
* user_creation_date 1(1)

### token

The tokens are used for password requests as well as email vaildation.

#### token-Relationships

* A `user` may request more than one `token` 1(1) - M(0)

#### token-Attributes

* token_token 1(1)
* user_id M(1)
* token_type M(1)
* token_creation_date 1(1)

### group

This is used to store basic group information and to allow for the application to link both resources and users into different groups.

#### group-Relationships

* A `group` is made up of `group_member` 1(1) - M(1)
* A `group` can contain more than one `resource` 1(1) - M(0)
* A `group` is assigned to an invite `invite` 1(1) - M(0)
* A `group` can be organized by one or more `group_role` 1(1) - M(1)

#### group-Attributes

* group_id 1(1)
* group_name 1(1)
* group_privacy_type M(1)
* group_password 1(1)
* group_creation_date 1(1)
* group_description 1(1)

### group_member

This is used to link a users with a group as well as a role within the group.

#### group_member-Relationships

* A `group` is made up of `group_member` 1(1) - M(1)
* A `user` becomes a `group_member` 1(1) - M(0)
* A `group_member` is assigned a `group_role` M(0) - 1(1)

#### group_member-Attributes

* group_member_id 1(1)
* user_id M(1)
* group_id M(1)
* group_role_id 1(1)

### group_roles

This is used to give users a certain role within a given group.

#### group_roles-Relationships

* A `group` can be organized by one or more `group_role` 1(1) - M(1)
* A `group_member` is assigned a `group_role` M(0) - 1(1)

#### group_roles-Attributes

* group_roles_id 1(1)
* group_id M(1)
* group_roles_name M(1)
* group_roles_description 1(1)

### invite

This is used to allow for users to send out invites into any given group from within the group.

#### invite-Relationships

* A `user` can create an `invite` 1(1) - M(0)
* A `group` is assigned to an invite `invite` 1(1) - M(0)

#### invite-Attributes

* invite_id 1(1)
* invite_token 1(1)
* invite_creation_date 1(1)
* user_id M(1)
* group_id M(1)
* invite_used M(1)

### resource

This is used to store information about the resource in any given group and is used to link said resource to a group. This can be three different types of resources, flash card deck, quiz, or whiteboard. Based on the resource type that the correct information is linked to the resource.

#### resource-Relationships

* A `group` can contain more than one `resource` 1(1) - M(0)
* A `resource` can possess more than one `whiteboard` if it is a whiteboard type 1(1) - M(0)
* A `resource` can hold more than one `card` if it is a flash card deck 1(1) - M(0)
* A `resource` can store more than one `question` if it is a quiz 1(1) - M(0)
* A `resource` can have more than one `resource_permission` 1(1) - M(0)

#### resource-Attributes

* resource_id 1(1)
* resource_name M(1)
* group_id M(1)
* resource_type M(1)
* resource_creation_date 1(1)

### whiteboard

This is used to store all of the current white board data after each edit and it is linked to a whiteboard resource that can be accessed by the group in which it is attached to.

#### whiteboard-Relationships

* A `resource` can possess more than one `whiteboard` if it is a whiteboard type 1(1) - M(0)

#### whiteboard-Attributes

* whiteboard_id 1(1)
* resource_id M(1)
* whiteboard_data 1(1)
* whiteboard_creation_date 1(1)

### card

This is used to store information about the front and back side of a given flash card and is connected with a flash card deck resource.

#### card-Relationships

* A `resource` can hold more than one `card` if it is a flash card deck 1(1) - M(0)

#### card-Attributes

* card_id 1(1)
* resource_id M(1)
* card_question M(1)
* card_answer M(1)

### question

This is used to store information about any given question and is linked with a quiz resoure. This has information on both the question and the answers to that question there is more than on type of question type, but the data is stored as a JSON string.

#### question-Relationships

* A `resource` can store more than one `question` if it is a quiz 1(1) - M(0)

#### question-Attributes

* question_id 1(1)
* resource_id M(1)
* question_question 1(1)
* question_answer_data 1(1)

### resource_permission

This is used to link different types of permissions that are offered on the site to any given resource in group.

#### resource_permission-Relationships

* A `resource_permission` derives from the websites `permission` options M(0) - 1(1)
* A `resource` can have more than one `resource_permission` 1(1) - M(0)

#### resource_permission-Attributes

* resource_permission_id 1(1)
* resource_id M(1)
* permission_id 1(1)

### permission

This is used to store different options that are available of the website to be added into any given resource to better control groups through the site.

#### permission-Relationships

* A `resource_permission` derives from the websites `permission` options M(0) - 1(1)

#### permission-Attributes

* permission_id 1(1)
* permission_name 1(1)
* permission_data 1(1)
