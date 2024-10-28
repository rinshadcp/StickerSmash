import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
  imageSource: string;
};

const ImageViewer = ({ imageSource }: Props) => {
  return (
    <View>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
