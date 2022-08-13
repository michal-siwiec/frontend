import { variants } from './data.js';

export const findVariantArrtibutes = (variantName) => variants.find(({ name }) => name === variantName).attributes;
