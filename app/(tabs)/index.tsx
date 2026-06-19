import { ScrollView, Text, TouchableOpacity } from "react-native";

 import PlantCard from "../../components/plantCard";

 import { FONT_SIZE, SPACING } from "../../constants/theme";
import { COLORS } from "..//../constants/colors";

 import { Plant } from "../../types/Plant";

export default function HomeScreen() {

  const plants: Plant[] = [
    {
      id: "1",
      name: "Tomate Cherry",
      plantedAt: "10/06/2026",
      status: "producing",
      notes: "",
    },

    {
      id: "2",
      name: "Albahaca",
      plantedAt: "15/06/2026",
      status: "growing",
      notes: "",
    },

    {
      id: "3",
      name: "Lechuga",
      plantedAt: "20/06/2026",
      status: "germinating",
      notes: "",
    },
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
      contentContainerStyle={{
        padding: SPACING.lg,
        paddingTop: 60,
      }}
    >
      <Text
        style={{
          color: COLORS.text,
          fontSize: FONT_SIZE.xl,
          fontWeight: "bold",
          marginBottom: SPACING.lg,
        }}
      >
        GrayGarden
      </Text>

      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
        />
      ))}
      <TouchableOpacity
  onPress={() => console.log("Agregar cultivo")}
  style={{
    position: "absolute",

    right: 24,
    bottom: 30,

    width: 65,
    height: 65,

    borderRadius: 999,

    backgroundColor: COLORS.purple,

    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Text
    style={{
      color: "white",
      fontSize: 34,
      fontWeight: "300",
    }}
  >
    +
  </Text>
</TouchableOpacity>
    </ScrollView>
  );
}