

import { StyleSheet,  View} from "react-native";
import colors from "./constants/colors";
import EntryScreen from "./screens/EntryScreen";


export default function App() {
  
  // let content = <LoginPWScreen onSavePin={selectedNumber} />;
  return (
    <View style={styles.container}>
      <EntryScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainLG,
    height: "100%",
  },
});

