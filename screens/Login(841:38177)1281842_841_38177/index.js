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
      <View style={styles.View_841_38178}>
        <View style={styles.View_841_38179}>
          <View style={styles.View_841_38180} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78d17002-9889-4c97-92a0-ad747c39d061"
            }}
            style={styles.ImageBackground_841_38181}
          />
          <View style={styles.View_841_38182} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab338f19-40e7-4e8d-ac31-2dc8d1cb24a9"
          }}
          style={styles.ImageBackground_841_38183}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc088795-382d-42c9-b224-95739da21ade"
          }}
          style={styles.ImageBackground_841_38187}
        />
        <View style={styles.View_841_38192}>
          <Text style={styles.Text_841_38192}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_841_38193}>
        <View style={styles.View_I841_38193_2_255}>
          <View style={styles.View_I841_38193_2_256} />
          <View style={styles.View_I841_38193_2_271}>
            <View style={styles.View_I841_38193_2_257}>
              <Text style={styles.Text_I841_38193_2_257}>Login</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_841_38194}>
        <View style={styles.View_841_38195}>
          <Text style={styles.Text_841_38195}>
            Upgrade your factory to Industry 4.0
          </Text>
        </View>
        <View style={styles.View_841_38196}>
          <Text style={styles.Text_841_38196}>Welcome to Silaé</Text>
        </View>
      </View>
      <View style={styles.View_841_38197}>
        <View style={styles.View_841_38198}>
          <View style={styles.View_I841_38198_42_5842}>
            <View style={styles.View_I841_38198_42_5843}>
              <View style={styles.View_I841_38198_42_5844}>
                <View style={styles.View_I841_38198_42_5845}>
                  <View style={styles.View_I841_38198_42_5846}>
                    <View style={styles.View_I841_38198_42_5847}>
                      <Text style={styles.Text_I841_38198_42_5847}>
                        Brother{" "}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I841_38198_42_5850}>
                <Text style={styles.Text_I841_38198_42_5850}>Email ID</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_841_38199}>
          <View style={styles.View_I841_38199_56_6505} />
          <View style={styles.View_I841_38199_56_6506}>
            <Text style={styles.Text_I841_38199_56_6506}>**********</Text>
          </View>
          <View style={styles.View_I841_38199_56_6507}>
            <Text style={styles.Text_I841_38199_56_6507}>Password*</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54f5ae81-49d3-423c-9d9e-41e8899ba13b"
            }}
            style={styles.ImageBackground_I841_38199_56_6508}
          />
        </View>
        <View style={styles.View_841_38200}>
          <Text style={styles.Text_841_38200}>Forgot Password?</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_841_38178: {
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
  View_841_38179: {
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
  View_841_38180: {
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
  ImageBackground_841_38181: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_841_38182: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_841_38183: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_841_38187: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_841_38192: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_841_38192: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_841_38193: {
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
  View_I841_38193_2_255: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I841_38193_2_256: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I841_38193_2_271: {
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
  View_I841_38193_2_257: {
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
  Text_I841_38193_2_257: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_841_38194: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("44%")
  },
  View_841_38195: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_841_38195: {
    color: "rgba(73, 73, 73, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_841_38196: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_841_38196: {
    fontSize: 19.436626434326172,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_841_38197: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("59%")
  },
  View_841_38198: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I841_38198_42_5842: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I841_38198_42_5843: {
    width: wp("82%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I841_38198_42_5844: {
    width: wp("82%"),
    height: hp("8%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I841_38198_42_5845: {
    width: wp("82%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I841_38198_42_5846: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I841_38198_42_5847: {
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I841_38198_42_5847: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I841_38198_42_5850: {
    width: wp("81%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I841_38198_42_5850: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1706666797399521,
    textTransform: "none"
  },
  View_841_38199: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I841_38199_56_6505: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    borderColor: "rgba(134, 146, 166, 1)",
    borderWidth: 0.8145542144775391
  },
  View_I841_38199_56_6506: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I841_38199_56_6506: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.403759002685547,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I841_38199_56_6507: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I841_38199_56_6507: {
    color: "rgba(105, 111, 121, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I841_38199_56_6508: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("6%")
  },
  View_841_38200: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_841_38200: {
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
