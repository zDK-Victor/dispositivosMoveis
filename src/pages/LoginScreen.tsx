import { SafeAreaView, View, Image, Text, TextInput } from "react-native";


export default function LoginScreen() {
    return  (
        <SafeAreaView>
            <View>
                <Image source={require('../../assets/favicon.png')} />
                <Text>PROEJA</Text>
            </View>
            <View>
                <View>
                    <Text>Email</Text>
                </View>
                    <TextInput placeholder="Insira seu email"/>
            </View>
        </SafeAreaView>    

    );
}