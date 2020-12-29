const resolver = {
	getFaculties: (args, context) => {
		return (args.Faculty) ? context.getFaculty(args, context) : context.getFaculties(args, context);
	}
}