import { Input } from "@/components/Input";
import { Preferences } from "@/components/Preferences";
import { Skills } from "@/components/Skills";
import { useToast } from "@/components/Toast";
import { User } from "@/components/User";
import { View, Image} from "react-native";
import { Button } from "@/components/Button";


export function Profile (){
    const { toast } = useToast();
    const handleSave = () => {
        toast("Profile updated sucessfully!","success", 2000, "top" );
    }
    return(
        <View className="flex-1 px-4 pb-4 bg-gray-700">
            <Image
                source={require("@/assets/banner.png")}
                className="w-full h-52 -mb-16"/>
                <View className="flex-1 px-4 pb-4">
                <User />
                <Skills />
                <Preferences />
                <View>
                    <Input placeholder="Company" label="Company" inputClasses="mb-6"/>
                    <Button label="Save" onPress={handleSave}/>
                </View>
            </View>    
        </View>
    )
}