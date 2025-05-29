// // Fetch multiple records.
// const users = await db.user.findMany({
//     where: { name: 'John' }, // optional
//     take: 5,                  // limit
//     skip: 2,                  // offset
//     orderBy: { id: 'asc' }    // sorting
// });

// // Fetch a single record by unique field (e.g., id, email, etc.).
// const user = await db.user.findUnique({
//     where: { email: 'john@example.com' }
// });

// // Fetch the first record that matches a condition.
// const user = await db.user.findFirst({
//     where: { name: 'John' }
// });

// // Insert a new record.
// const newUser = await db.user.create({
//     data: {
//         name: 'Alice',
//         email: 'alice@example.com'
//     }
// });

// // Insert multiple records at once.
// await db.user.createMany({
//     data: [
//         { name: 'Bob', email: 'bob@example.com' },
//         { name: 'Eve', email: 'eve@example.com' }
//     ]
// });

// // Update a single record by a unique field.
// const updated = await db.user.update({
//     where: { id: 1 },
//     data: { name: 'Updated Name' }
// });

// // Update multiple records based on a condition.
// await db.user.updateMany({
//     where: { name: 'John' },
//     data: { name: 'Johnny' }
// });

// // Delete a single record by unique field.
// await db.user.delete({
//     where: { id: 1 }
// });

// // Delete multiple records that match a condition.
// await db.user.deleteMany({
//     where: { name: 'Anonymous' }
// });

// // Count records.
// const count = await db.user.count({
//     where: { name: 'Alice' }
// });

// // Update if exists, otherwise create.
// const user = await db.user.upsert({
//     where: { email: 'john@example.com' },
//     update: { name: 'Updated John' },
//     create: { name: 'John', email: 'john@example.com' }
// });