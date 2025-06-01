import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const handleLogin = async () => {
    if (!email || !password) {
        return 
    }

    try {
        setIsLoading(true)

        console.log('login attempt with on:', { email })


    } catch (error) {
        console.error('log error', error)


    } finally {
        setIsLoading(false)
    }
  }

    return (
        <View
        className="flex-1 items-center justify-center 
        bg-neutral-700 px-6"
        >
            <View className="w-full max-w-sm">
                <Text
                className="text-3xl font-bold text-center mb-8
                text-yellow-50"
                >
                    Welcome Thead
                </Text>

                <View className="gap-4">
                    <View>
                        <Text className="text-sm font-medium text-neutral-300 mb-1">
                            Email
                        </Text>

                        <TextInput
                        className="w-full px-4 py-3 bg-neutral-700 border
                        border-slate-800"
                        placeholder="enter our email"
                        placeholderTextColor="#677280"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        />
                    </View>

                    <View>
                        <Text className="text-sm font-medium text-neutral-300 mb-1">
                            Password
                        </Text>

                        <TextInput
                        className="w-full px-4 py-3 bg-neutral-700 border
                         border-slate-800"
                         placeholder="enter our password"
                         placeholderTextColor="#677280"
                         secureTextEntry
                         value={password}
                         onChangeText={setPassword}
                        />
                    </View>

                    <TouchableOpacity
                    className="w-full bg-white py-3 rounded-lg
                    mt-6"
                    activeOpacity={0.8}
                    onPress={handleLogin}
                    disabled={isLoading}
                    >


                    <Text
                    className="text-black text-center font-semibold"
                    >
                        { isLoading ? 'loading in...' : 'sign in'}
                    </Text>
                </TouchableOpacity>


                    <View
                    className="flex-row justify-center mt-4"
                    >
                        <Text className="text-slate-400">
                            dont have an account?
                        </Text>
                        <Link href='/signup' asChild>
                         <Pressable>
                            <Text
                            className="text-blue-400 font-medium"
                            >
                                created one
                            </Text>
                         </Pressable>
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    )
}