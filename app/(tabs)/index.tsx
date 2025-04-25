import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontFamily: "serif", color: "black" }}>
        hello welcomdjjdjde
      </Text>
      <Link href="/(tabs)/about/index">go gsygdhs about</Link>

    </View>
  );
};

export default Index;
