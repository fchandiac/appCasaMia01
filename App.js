import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, BackHandler } from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

export default function App() {
  const LogoutButton = () => {
    const {clearSession} = useAuth0();

    const onPress = async () => {
        try {
            await clearSession();
        } catch (e) {
            console.log(e);
        }
    };

    return <Button onPress={onPress} title="Log out" />
}

  return (
    <Auth0Provider domain={"dev-rk0fl88jinxofajt.us.auth0.com"} clientId={"FylS8wC7JHGPyfeCYaSeXhEp5q1HRzaI"}>
      <View style={styles.container}>
      <LogoutButton />
      <Text>this is the One</Text>
      <StatusBar style="auto" />
    </View>
  </Auth0Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
