import { View, Text } from "react-native"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"

export function User(){
    return(
        <View className="items-center">
            <Avatar className="w-32 h-32 border-4 border-gray-300">
                <AvatarImage source={require("@/assets/robo.png")} />
                <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <Text className="text-white font-bold text-2xl mt-4">
                roger.william
            </Text>
            <Text className="text-gray-400 text-lg">
                @Rogerwilliam
            </Text>

        </View>
    )
}