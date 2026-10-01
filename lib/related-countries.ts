import { countries, type Country } from "./countries";

const groups=[
 ["germany","austria","switzerland","netherlands","belgium","luxembourg"],
 ["spain","portugal","france","italy","greece"],
 ["united-kingdom","ireland","united-states","canada"],
 ["denmark","sweden","norway","finland"],
 ["poland","czech-republic","hungary","romania","croatia","bulgaria"],
];
export function relatedCountries(country:Country){const group=groups.find(items=>items.includes(country.id))??countries.map(item=>item.id);return group.filter(id=>id!==country.id).slice(0,3).map(id=>countries.find(item=>item.id===id)!);}
