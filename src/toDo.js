
//Cumbersome validation, a library would be useful here and can also 
function validateTodoInput({ title, description, dueDate, priority, notes }) {
  const stringFields = { title, description, notes };
  const maxLengths = { title: 50, description: 200, notes: Infinity }; // set max length for each

  for (const [field, value] of Object.entries(stringFields)) {
    if (typeof value !== 'string') {
      throw new Error(`Invalid ${field}: expected string but got ${typeof value}`);
    }
    if (value.length > maxLengths[field]) {
      throw new Error(`Invalid ${field}: length must be at most ${maxLengths[field]} characters (got ${value.length})`);
    }
  }

  if (!(dueDate instanceof Date)) {
    throw new Error(`Invalid dueDate: expected Date object but got ${Object.prototype.toString.call(dueDate)}`);
  }

  const allowedPriorities = ['High', 'Medium', 'Low'];
  if (typeof priority !== 'string') {
    throw new Error(`Invalid priority: expected string but got ${typeof priority}`);
  }
  if (!allowedPriorities.includes(priority)) {
    throw new Error(`Invalid priority: must be one of ${allowedPriorities.join(', ')} (got '${priority}')`);
  }
}


class ToDo {
  constructor({ title, description, dueDate, priority, notes }) {
    validateTodoInput({ title, description, dueDate, priority, notes });
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

export default ToDo