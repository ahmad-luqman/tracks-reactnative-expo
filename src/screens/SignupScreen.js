import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
      <Spacer>
        <Button
          title="Already have an account? Sign in instead"
          onPress={() => navigation.navigate("Signin")}
        />
      </Spacer>
    </View>
  );
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  inputContainer: {
    marginTop: 10,
  },
  link: {
    marginTop: 10,
  },
});

export default SignupScreen;
