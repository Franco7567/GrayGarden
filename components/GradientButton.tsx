import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function GradientButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#8B5CF6", "#22D3EE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          padding: 16,
          borderRadius: 16,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}