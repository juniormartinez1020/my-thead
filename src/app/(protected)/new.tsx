import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewPostScreen() {

    const [txt, setTxt] = useState('');

    return (
        <SafeAreaView 
        edges={['bottom']}
        className="p-4 flex-1"
        >
            <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === 'ios' 
                ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' 
                    ? 140 : 0 }
            >
                <Text className="text-slate-50 text-lg font-bold">
                    username
                </Text>


                <TextInput
                    value={txt}
                    onChangeText={setTxt}
                    placeholder="what is your post thead?"
                    placeholderTextColor='gray'
                    className="text-slate-50 text-lg"
                    multiline
                    numberOfLines={4}
                />

                <View
                    className="mt-auto"
                >
                    <Pressable
                        onPress={() => console.log('posted:', txt)}
                        className="bg-slate-50 p-3 px-4 self-end rounded-full"
                    >
                        <Text
                            className="text-slate-800 font-bold"
                        >
                            Posted
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}