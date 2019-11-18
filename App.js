import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Button } from "native-base";
import { Audio } from "expo-av";

const bgcolors = {
  1: "#3498DB",
  2: "#E8290B",
  3: "#AE1438",
  4: "#2475B0",
  5: "#30336B",
  6: "#0A3D62",
  7: "#26ae60",
  8: "#10A881",
  9: "#218F76",
  10: "#DFAF2B"
};

const sounds = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require("./assets/five.wav"),
  six: require("./assets/six.wav"),
  seven: require("./assets/seven.wav"),
  eight: require("./assets/eight.wav"),
  nine: require("./assets/nine.wav"),
  ten: require("./assets/ten.wav")
};

export default class App extends React.Component {
  playSound = async num => {
    const soundObject = new Audio.Sound();
    try {
      let path = sounds[num];
      await soundObject.loadAsync(path);
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#000" }}>
        <View style={styles.container}>
          <View style={styles.gridcontainer}>
            <Image
              style={[
                { height: 125, width: 250, marginBottom: 25 },
                styles.logo
              ]}
              source={require("./assets/num2.png")}
            />
            <Button
              block
              full
              success
              onPress={() => {
                this.playSound("one");
              }}
              style={[
                { backgroundColor: bgcolors[1] },
                styles.rowcontainer,
                styles.item
              ]}
            >
              <Text style={styles.itemText}>One</Text>
            </Button>
            <Button
              block
              success
              onPress={() => {
                this.playSound("two");
              }}
              style={[
                { backgroundColor: bgcolors[2] },
                styles.rowcontainer,
                styles.item
              ]}
            >
              <Text style={styles.itemText}>Two</Text>
            </Button>
            <Button
              block
              full
              success
              onPress={() => {
                this.playSound("three");
              }}
              style={[
                { backgroundColor: bgcolors[3] },
                styles.rowcontainer,
                styles.item
              ]}
            >
              <Text style={styles.itemText}>Three</Text>
            </Button>
            <Button
              block
              full
              success
              onPress={() => {
                this.playSound("four");
              }}
              style={[
                { backgroundColor: bgcolors[4] },
                styles.rowcontainer,
                styles.item
              ]}
            >
              <Text style={styles.itemText}>Four</Text>
            </Button>
            <Button
              block
              full
              success
              onPress={() => {
                this.playSound("five");
              }}
              style={[
                { backgroundColor: bgcolors[5] },
                styles.rowcontainer,
                styles.item
              ]}
            >
              <Text style={styles.itemText}>Five</Text>
            </Button>

            <Button
              block
              full
              success
              onPress={() => {
                this.playSound("six");
              }}
              style={[
                { backgroundColor: bgcolors[6] },
                styles.rowcontainer,
                styles.item
              ]}
            >
              <Text style={styles.itemText}>Six</Text>
            </Button>
            <Button
              block
              success
              onPress={() => {
                this.playSound("seven");
              }}
              style={[
                { backgroundColor: bgcolors[7] },
                styles.rowcontainer,
                styles.item
              ]}
            >
              <Text style={styles.itemText}>Seven</Text>
            </Button>
            <Button
              block
              full
              success
              onPress={() => {
                this.playSound("eight");
              }}
              style={[
                { backgroundColor: bgcolors[8] },
                styles.rowcontainer,
                styles.item
              ]}
            >
              <Text style={styles.itemText}>Eight</Text>
            </Button>
            <Button
              block
              full
              success
              onPress={() => {
                this.playSound("nine");
              }}
              style={[
                { backgroundColor: bgcolors[9] },
                styles.rowcontainer,
                styles.item
              ]}
            >
              <Text style={styles.itemText}>Nine</Text>
            </Button>
            <Button
              block
              full
              success
              onPress={() => {
                this.playSound("ten");
              }}
              style={[
                { backgroundColor: bgcolors[10] },
                styles.rowcontainer,
                styles.item
              ]}
            >
              <Text style={styles.itemText}>Ten</Text>
            </Button>

            <Image style={styles.logo} source={require("./assets/logo.png")} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  gridcontainer: {
    flex: 1,
    margin: 15,
    marginTop: 20
  },
  logo: {
    alignSelf: "center",
    marginTop: 10
  },
  rowcontainer: {
    flexDirection: "row",
    marginTop: 7,
    marginBottom: 3,
    borderRadius: 5
  },
  itemText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },
  item: {
    flex: 1,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  }
});
