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

const getDaysSincePlanting = () => {
  const plantedDate = new Date(plant.plantedAt);

  if (isNaN(plantedDate.getTime())) {
    return 0;
  }

  const today = new Date();

  const diffTime = today.getTime() - plantedDate.getTime();

  return Math.floor(
    diffTime / (1000 * 60 * 60 * 24)
  );
};

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
        Hace {getDaysSincePlanting()} días
      </Text>
    </View>
  );
}