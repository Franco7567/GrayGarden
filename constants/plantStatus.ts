import { COLORS } from "./colors";

export const PLANT_STATUS = {
  seed: {
    label: "Semilla",
    emoji: "🌰",
    color: COLORS.warning,
  },

  germinating: {
    label: "Germinando",
    emoji: "🌱",
    color: COLORS.success,
  },

  growing: {
    label: "Creciendo",
    emoji: "🍃",
    color: COLORS.success,
  },

  developed: {
    label: "Desarrollada",
    emoji: "🌿",
    color: COLORS.success,
  },

  producing: {
    label: "Produciendo",
    emoji: "🍅",
    color: COLORS.cyan,
  },

  lost: {
    label: "Perdida",
    emoji: "☠",
    color: COLORS.danger,
  },
};