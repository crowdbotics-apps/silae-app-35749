import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_841_38229}>
        <View style={styles.View_841_38230}>
          <View style={styles.View_841_38231} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eacbc9d5-b09b-484a-8f27-cc7117e75032"
            }}
            style={styles.ImageBackground_841_38232}
          />
          <View style={styles.View_841_38233} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de69e2a2-35e3-472d-a92b-db7e3a526629"
          }}
          style={styles.ImageBackground_841_38234}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ded3edd6-5557-41bd-a8a7-9eb611870d60"
          }}
          style={styles.ImageBackground_841_38238}
        />
        <View style={styles.View_841_38243}>
          <Text style={styles.Text_841_38243}>9:41</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_841_38244}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("841_38255"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26b91be6-5c9a-4624-a3c4-517fde4f4e13"
          }}
          style={styles.ImageBackground_841_38245}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd4e580c-8399-4b24-8a16-e9d128b7f5b5"
        }}
        style={styles.ImageBackground_841_38247}
      />
      <View style={styles.View_841_38248}>
        <View style={styles.View_I841_38248_2_289}>
          <View style={styles.View_I841_38248_2_290} />
          <View style={styles.View_I841_38248_2_291}>
            <View style={styles.View_I841_38248_2_292}>
              <Text style={styles.Text_I841_38248_2_292}>Continue</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_841_38249}>
        <Text style={styles.Text_841_38249}>Last Updated: 24 Jan 2022</Text>
      </View>
      <View style={styles.View_841_38250}>
        <TouchableOpacity
          style={styles.TouchableOpacity_841_38251}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("841_38285"))
          }
        />
        <View style={styles.View_841_38252}>
          <Text style={styles.Text_841_38252}>I accept</Text>
        </View>
      </View>
      <View style={styles.View_841_38253}>
        <View style={styles.View_841_38254}>
          <Text style={styles.Text_841_38254}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laboru Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laboru.{" "}
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_841_38229: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_841_38230: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("0%")
  },
  View_841_38231: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(68, 68, 68, 1)",
    borderWidth: 1
  },
  ImageBackground_841_38232: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_841_38233: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_841_38234: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_841_38238: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_841_38243: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_841_38243: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  TouchableOpacity_841_38244: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  ImageBackground_841_38245: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_841_38247: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("6%")
  },
  View_841_38248: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("100%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I841_38248_2_289: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I841_38248_2_290: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(225, 225, 225, 1)"
  },
  View_I841_38248_2_291: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I841_38248_2_292: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I841_38248_2_292: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_841_38249: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("86%"),
    justifyContent: "center"
  },
  Text_841_38249: {
    color: "rgba(134, 146, 166, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_841_38250: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("92%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_841_38251: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_841_38252: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_841_38252: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_841_38253: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("11%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_841_38254: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_841_38254: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
