export type ElementStyleProperty = {
  name: string,
  priority: string,
  value: string,
  sort: number,
};

export function inspectElement(e: HTMLElement): ElementStyleProperty[] {
  const rv = [];
  const style = e.style;
  for (let i = 0; i < style.length; i++) {
    const name = style.item(i);
    rv.push({
      name,
      priority: style.getPropertyPriority(name),
      value: style.getPropertyValue(name),
      sort: i,
    });
  }

  return rv;
}