function bemBuilder(baseClassName: string) {
  return {
    block: () => {
      return baseClassName;
    },
    element: (cn: string, modifier?: string) => {
      const elementCn = `${baseClassName}__${cn}`;
      return modifier ? `${elementCn}--${modifier}` : elementCn;
    },
    modifier: (cn: string) => {
      return `${baseClassName}--${cn}`;
    }
  };
}

export default bemBuilder;
