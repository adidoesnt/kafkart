export const usernameToInitials = (username: string) => {
	const initials =
		username.charAt(0).toUpperCase() + username.charAt(1).toUpperCase();

	return initials;
};
