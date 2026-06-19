import { Text, View } from "react-native";

import { Plant } from "../types/Plant";

import { COLORS } from "../constants/colors";
import { FONT_SIZE, RADIUS, SPACING } from "../constants/theme";

import { PLANT_STATUS } from "../constants/plantStatus";

type Props = {
  plant: Plant;
};

export default function PlantCard({ plant }: Props) {

  const status = PLANT_STATUS[plant.status];

  return (
    <View
      style={{
        backgroundColor: COLORS.surface,

        borderWidth: 1,
        borderColor: COLORS.border,

        borderRadius: RADIUS.md,

        padding: SPACING.md,

        marginBottom: SPACING.md,
      }}
    >
      <Text
        style={{
          color: COLORS.text,
          fontSize: FONT_SIZE.lg,
          fontWeight: "600",
        }}
      >
        {status.emoji} {plant.name}
      </Text>

      <Text
        style={{
          color: status.color,
          marginTop: 4,
        }}
      >
        {status.label}
      </Text>

      <Text
        style={{
          color: COLORS.textSecondary,
          marginTop: 8,
        }}
      >
        Sembrada el {plant.plantedAt}
      </Text>
    </View>
  );
}