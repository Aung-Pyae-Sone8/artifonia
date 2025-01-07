import { 
    StatusBar, 
    StyleSheet, 
    Image, 
    View, 
    TouchableOpacity, 
    Text 
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { scale, verticalScale } from 'react-native-size-matters'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function HomeScreen() {
  return (
    <LinearGradient
        colors={["#250152", "#000"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}
    >
      <StatusBar barStyle={"light-content"} />

      {/* back shadows  */}
      <Image 
        source={require("@/assets/main/blur.png")}
        style={{
            position: "absolute",
            right: scale(-15),
            top: 0,
            width: scale(240)
        }}
      />
      <Image 
        source={require("@/assets/main/purple-blur.png")}
        style={{
            position: "absolute",
            left: scale(-15),
            bottom: verticalScale(100),
            width: scale(210)
        }}
      />

      <View style={{marginTop: verticalScale(-40)}}>
        <TouchableOpacity
            style={{
                width: scale(110),
                height: scale(110),
                backgroundColor: "white",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: scale(100)
            }}
        >
            <FontAwesome name="microphone" size={scale(50)} color="#2b3356" />
        </TouchableOpacity>
      </View>
      <View 
        style={{
            alignItems: 'center',
            width: scale(350),
            position: 'absolute',
            bottom: verticalScale(90),
        }}
      >
        <Text
            style={{
                color: '#fff',
                fontSize: scale(16),
                width: scale(260),
                textAlign: 'center',
                lineHeight: 25,
            }}
        >
            Press the microphone to start recording!
        </Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#131313"
    }
})