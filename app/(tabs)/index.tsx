import { useEffect, useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import PlantCard from "../../components/plantCard";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from "../../constants/colors";
import { FONT_SIZE, SPACING } from "../../constants/theme";
import { Plant } from "../../types/Plant";




export default function HomeScreen() {
const [modalVisible, setModalVisible] = useState(false);
const [plantName, setPlantName]= useState("");
const [plantNotes, setPlantNotes]= useState("");

  const [plants, setPlants]= useState<Plant[]>([
    {
      id: "1",
      name: "Tomate Cherry",
      plantedAt: "2026-06-10",
        status: "producing",
      notes: "",
    },
    {
      id: "2",
      name: "Albahaca",
      plantedAt: "2026-06-15",
      status: "growing",
      notes: "",
    },
    {
      id: "3",
      name: "Lechuga",
      plantedAt: "2026-06-20",
      status: "germinating",
      notes: "",
    },
  ]);
  useEffect(() => {
  loadPlants();
}, []);

const addPlant = ()=>{

  if (!plantName.trim()) return;
  const newPlant: Plant ={
    id : Date.now().toString(),
    name: plantName,
    plantedAt: new Date().toISOString(),
    status: "seed",
    notes: plantNotes,
  };

const updatedPlants = [
  newPlant,
  ...plants,
];

setPlants(updatedPlants);

savePlants(updatedPlants);
setPlantName("");
setPlantNotes("");

setModalVisible(false);
}
const savePlants = async (plantsToSave: Plant[]) => {
  try {
    await AsyncStorage.setItem(
      "plants",
      JSON.stringify(plantsToSave)
    );
  } catch (error) {
    console.log(error);
  }
};
const loadPlants = async () => {
  try {
    const data = await AsyncStorage.getItem("plants");

    if (data) {
      setPlants(JSON.parse(data));
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <ScrollView
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
      </ScrollView>

      <TouchableOpacity
      onPress={()=>setModalVisible(true)}
        style={{
          position: "absolute",

          right: 20,
          bottom: 54,

          width: 58,
          height: 58,

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
          }}
        >
          +
        </Text>
      </TouchableOpacity>

      <Modal
  visible={modalVisible}
  transparent
  animationType="slide"
>
  <View
    style={{
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.7)",

      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        width: "90%",

        backgroundColor: COLORS.surface,

        borderRadius: 24,

        padding: 24,
      }}
    >
      <Text
        style={{
          color: COLORS.text,
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Agregar cultivo
      </Text>
<TextInput
  placeholder="Nombre del cultivo"
  placeholderTextColor={COLORS.textSecondary}
  value={plantName}
  onChangeText={setPlantName}
  style={{
    backgroundColor: COLORS.background,
    color: COLORS.text,

    borderWidth: 1,
    borderColor: COLORS.border,

    borderRadius: 12,

    padding: 12,

    marginBottom: 12,
  }}
/>

<TextInput
  placeholder="Notas"
  placeholderTextColor={COLORS.textSecondary}
  value={plantNotes}
  onChangeText={setPlantNotes}
  multiline
  style={{
    backgroundColor: COLORS.background,
    color: COLORS.text,

    borderWidth: 1,
    borderColor: COLORS.border,

    borderRadius: 12,

    padding: 12,

    minHeight: 100,

    textAlignVertical: "top",

    marginBottom: 16,
  }}
/>
<TouchableOpacity
  onPress={() => {
    addPlant();
    console.log({
      name: plantName,
      notes: plantNotes,
    });
  }}
  style={{
    backgroundColor: COLORS.success,

    padding: 14,

    borderRadius: 12,

    alignItems: "center",

    marginBottom: 10,
  }}
>
  <Text
    style={{
      color: "white",
      fontWeight: "bold",
    }}
  >
    Guardar
  </Text>
</TouchableOpacity>
      <TouchableOpacity
        onPress={() => setModalVisible(false)}
        style={{
          backgroundColor: COLORS.purple,

          padding: 14,

          borderRadius: 12,

          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Cerrar
        </Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
      

    </View>
  );
}