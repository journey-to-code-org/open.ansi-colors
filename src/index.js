const codes = {
  reset:[0,0], bold:[1,22], dim:[2,22], italic:[3,23], underline:[4,24],
  black:[30,39], red:[31,39], green:[32,39], yellow:[33,39],
  blue:[34,39], magenta:[35,39], cyan:[36,39], white:[37,39],
  gray:[90,39]
};

export const ansi = (open, close, value) => `\u001b[${open}m${value}\u001b[${close}m`;

export function color(name, value, options = {}) {
  if (typeof value !== "string") value = String(value);
  if (options.enabled === false) return value;
  const pair = codes[name];
  if (!pair) throw new RangeError(`Unknown ANSI style: ${name}`);
  return ansi(pair[0], pair[1], value);
}

export const red = (v,o) => color("red",v,o);
export const green = (v,o) => color("green",v,o);
export const yellow = (v,o) => color("yellow",v,o);
export const blue = (v,o) => color("blue",v,o);
export const cyan = (v,o) => color("cyan",v,o);
export const magenta = (v,o) => color("magenta",v,o);
export const gray = (v,o) => color("gray",v,o);
export const bold = (v,o) => color("bold",v,o);
export const underline = (v,o) => color("underline",v,o);

export const styles = Object.freeze(Object.keys(codes));
