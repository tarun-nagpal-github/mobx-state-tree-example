import { types } from "mobx-state-tree";

const User = types.model({
  name: types.optional(types.string, "")
});

export default User;
