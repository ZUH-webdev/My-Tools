const COUNTRY_RULES = {
  GB: { length: 22, bban: "AAAA##########" },
  ES: { length: 24, bban: "####BBBB##########" },
  DE: { length: 22, bban: "########BBBBBBBB" },
  FR: { length: 27, bban: "#####BBBBB#############" },
  CH: { length: 21, bban: "#####AAAAAAAAAAAA" },
  TR: { length: 26, bban: "#####AAAAAAAAAAAA###" },
  AE: { length: 23, bban: "###AAAAAAAAAAAAAAA" },
  SE: { length: 24, bban: "###AAAAAAAAAAAAAAA##" },
  PK: { length: 24, bban: "AA##############" },
  IND: { length: 22, bban: "AA############" },
};

const randomChar = (type) => {
  if (type === "A") return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  if (type === "#") return Math.floor(Math.random() * 10);
  return "";
};

const generateBBAN = (pattern) =>
  pattern
    .split("")
    .map((c) => randomChar(c))
    .join("");

const mod97 = (input) => {
  let remainder = input;
  while (remainder.length > 2) {
    const block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }
  return parseInt(remainder, 10) % 97;
};

export const generateIBAN = (countryCode) => {
  const rule = COUNTRY_RULES[countryCode];
  if (!rule) return "";

  const bban = generateBBAN(rule.bban);
  const rearranged = `${bban}${countryCode}00`
    .replace(/[A-Z]/g, (c) => c.charCodeAt(0) - 55);

  const checksum = 98 - mod97(rearranged);
  return `${countryCode}${checksum.toString().padStart(2, "0")}${bban}`;
};

export const COUNTRIES = {
  GB: "United Kingdom",
  ES: "Spain",
  DE: "Germany",
  FR: "France",
  CH: "Switzerland",
  TR: "Turkey",
  AE: "United Arab Emirates",
  SE: "Sweden",
  PK : "Pakistan",
  IND : "India",

};
