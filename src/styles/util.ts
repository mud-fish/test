export const mixin = {
  flexbox: ({ dir = "row", jc = "center", ai = "center" }) => `
    display: flex;
    flex-direction: ${dir};
    justify-content: ${jc};
    align-items: ${ai};
  `,
};
