export const types = {
   change: 'HELLO_WORLD_CHANGE',
};

export const change = (value) => {
   return {
      type: types.change,
      value: value,
   };
};
