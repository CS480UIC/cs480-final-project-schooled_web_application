CREATE PROCEDURE MemberCount (IN group_id VARCHAR(50), OUT quantity INT)
	SELECT COUNT(*)
    INTO quantity
    FROM user
    JOIN group_member
    JOIN group_role
    JOIN resource_group
    WHERE user_id = group_member.user_id 
		AND group_member.group_role_id = group_role.group_role_id
        AND resource_group.resource_group_id = group_role.resource_group_id
        AND resource_group.resource_group_id = group_id