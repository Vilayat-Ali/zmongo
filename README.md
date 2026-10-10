# zmongo

zmongo is a lightweight, zero-fuss utility that automatically generates [Zod](https://zod.dev/) schemas directly from your [Mongoose](https://mongoosejs.com/) models.

## Installation

Install `zmongo` along with its peer dependencies:

```bash
npm install zmongo zod mongoose
```

## Usage

```typescript
import mongoose from "mongoose";
import { generateZodSchema } from "zmongo";

const schema = new mongoose.Schema({
  username: { type: String, required: true },
  age: { type: Number, default: 18 },
  friends: { type: Map, of: String },
  role: { type: mongoose.Types.ObjectId. ref: 'role' },
});

const User = mongoose.model('user', schema);

const userZodSchemas = generateZodSchema(User);

// for create
userZodSchemas.createSchema().safeParse(data);

// for read
userZodSchemas.readSchema().safeParse(data);

// for update
userZodSchemas.updateSchema().safeParse(data);
```

## LICENSE

This npm library is licensed under [MIT](https://opensource.org/license/mit) [LICENSE](./LICENSE)
