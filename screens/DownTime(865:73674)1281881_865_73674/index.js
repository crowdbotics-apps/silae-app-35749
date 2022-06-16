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
      <View style={styles.View_865_73675}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6e951cb-a0a7-4e8a-afe6-6da21d684b61"
          }}
          style={styles.ImageBackground_865_73676}
        />
      </View>
      <View style={styles.View_865_73678}>
        <View style={styles.View_865_73679}>
          <View style={styles.View_865_73680} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/442fd51e-7625-405b-9e5d-91235d50dc6a"
            }}
            style={styles.ImageBackground_865_73681}
          />
          <View style={styles.View_865_73682} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8cd2fc1-a2bd-4158-979a-8388afa4a6ae"
          }}
          style={styles.ImageBackground_865_73683}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92299a30-d83d-42cf-ac60-7262d2329710"
          }}
          style={styles.ImageBackground_865_73687}
        />
        <View style={styles.View_865_73692}>
          <Text style={styles.Text_865_73692}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_865_73693}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a1463ab-90cb-4951-995b-7375a32c96cc"
          }}
          style={styles.ImageBackground_865_73694}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/867bb4ba-f914-480f-bab9-d3f48b7e6dfd"
          }}
          style={styles.ImageBackground_865_73695}
        />
      </View>
      <View style={styles.View_865_73701}>
        <View style={styles.View_865_73702}>
          <View style={styles.View_865_73703}>
            <Text style={styles.Text_865_73703}>Breakdown</Text>
          </View>
        </View>
        <View style={styles.View_865_73704}>
          <View style={styles.View_865_73705}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d912f82-935e-44c7-8f4c-ef0f41a03e7b"
              }}
              style={styles.ImageBackground_865_73706}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_865_73707}>
        <View style={styles.View_865_73708}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2780c16f-9a52-402a-bd81-3888fdfeb2c4"
            }}
            style={styles.ImageBackground_865_73709}
          />
        </View>
      </View>
      <View style={styles.View_865_73710}>
        <View style={styles.View_865_73711}>
          <Text style={styles.Text_865_73711}>RE-F-142 Inspection</Text>
        </View>
        <View style={styles.View_865_73712}>
          <Text style={styles.Text_865_73712}>Issue ID</Text>
        </View>
      </View>
      <View style={styles.View_865_73713}>
        <View style={styles.View_865_73714}>
          <Text style={styles.Text_865_73714}>Floor B - B049</Text>
        </View>
        <View style={styles.View_865_73715}>
          <Text style={styles.Text_865_73715}>Location</Text>
        </View>
      </View>
      <View style={styles.View_865_73716}>
        <View style={styles.View_865_73717}>
          <Text style={styles.Text_865_73717}>21/07 I 1:32 PM</Text>
        </View>
        <View style={styles.View_865_73718}>
          <Text style={styles.Text_865_73718}>Intitiated at</Text>
        </View>
      </View>
      <View style={styles.View_865_73719}>
        <View style={styles.View_865_73720}>
          <View style={styles.View_865_73721}>
            <View style={styles.View_865_73722}>
              <View style={styles.View_865_73723}>
                <View style={styles.View_865_73724}>
                  <View style={styles.View_865_73725} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e26cd57-17c0-43da-b80e-8a9811b70ae6"
                    }}
                    style={styles.ImageBackground_865_73726}
                  />
                </View>
              </View>
              <View style={styles.View_865_73727}>
                <View style={styles.View_865_73728}>
                  <View style={styles.View_865_73729}>
                    <Text style={styles.Text_865_73729}>Padmavathy V</Text>
                  </View>
                </View>
                <View style={styles.View_865_73730}>
                  <View style={styles.View_865_73731}>
                    <Text style={styles.Text_865_73731}>09:38 AM</Text>
                  </View>
                </View>
                <View style={styles.View_865_73732}>
                  <View style={styles.View_865_73733}>
                    <Text style={styles.Text_865_73733}>CH-1035</Text>
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1fc52145-5f50-4c83-8919-6cd5b83a9474"
              }}
              style={styles.ImageBackground_865_73734}
            />
          </View>
          <View style={styles.View_865_73735}>
            <Text style={styles.Text_865_73735}>Raised By</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_865_73736}>
        <View style={styles.View_865_73737}>
          <Text style={styles.Text_865_73737}>RE/F/142</Text>
        </View>
        <View style={styles.View_865_73738}>
          <Text style={styles.Text_865_73738}>WO ID</Text>
        </View>
      </View>
      <View style={styles.View_865_73739}>
        <View style={styles.View_865_73740}>
          <Text style={styles.Text_865_73740}>21/07 I 2:32 PM</Text>
        </View>
        <View style={styles.View_865_73741}>
          <Text style={styles.Text_865_73741}>Resolved At</Text>
        </View>
      </View>
      <View style={styles.View_865_73742}>
        <View style={styles.View_865_73743}>
          <View style={styles.View_865_73744}>
            <View style={styles.View_865_73745}>
              <Text style={styles.Text_865_73745}>Needle</Text>
            </View>
          </View>
          <View style={styles.View_865_73746}>
            <View style={styles.View_865_73747}>
              <Text style={styles.Text_865_73747}>03</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aeba92fd-7934-4911-b52c-22d66843aaa7"
          }}
          style={styles.ImageBackground_865_73748}
        />
      </View>
      <View style={styles.View_865_73749}>
        <View style={styles.View_865_73750}>
          <View style={styles.View_865_73751}>
            <View style={styles.View_865_73752}>
              <Text style={styles.Text_865_73752}>Pulley</Text>
            </View>
          </View>
          <View style={styles.View_865_73753}>
            <View style={styles.View_865_73754}>
              <Text style={styles.Text_865_73754}>03</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9505baa3-6406-406c-94e0-dde135f10acd"
          }}
          style={styles.ImageBackground_865_73755}
        />
      </View>
      <View style={styles.View_865_73756}>
        <View style={styles.View_865_73757}>
          <View style={styles.View_865_73758}>
            <View style={styles.View_865_73759}>
              <Text style={styles.Text_865_73759}>Dog Feed</Text>
            </View>
          </View>
          <View style={styles.View_865_73760}>
            <View style={styles.View_865_73761}>
              <Text style={styles.Text_865_73761}>03</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b2aa8f2-8b3e-4709-a893-df56e23b7b71"
          }}
          style={styles.ImageBackground_865_73762}
        />
      </View>
      <View style={styles.View_865_73763}>
        <View style={styles.View_865_73764}>
          <View style={styles.View_865_73765}>
            <View style={styles.View_865_73766}>
              <View style={styles.View_865_73767} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0956f5b9-1496-445c-b365-a47086d2e836"
                }}
                style={styles.ImageBackground_865_73768}
              />
            </View>
            <View style={styles.View_865_73769}>
              <Text style={styles.Text_865_73769}>Padmavathy V</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_865_73770}>
          <Text style={styles.Text_865_73770}>Assign Technician</Text>
        </View>
      </View>
      <View style={styles.View_865_73771}>
        <View style={styles.View_I865_73771_1005_34261}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b136ae1-d3a2-4e12-ac9d-3741c7473b3c"
            }}
            style={styles.ImageBackground_I865_73771_1005_34262}
          />
          <View style={styles.View_I865_73771_1005_34265}>
            <Text style={styles.Text_I865_73771_1005_34265}>+ Add Part</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_865_73675: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_865_73676: {
    width: wp("91%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_73678: {
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
  View_865_73679: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("0%")
  },
  View_865_73680: {
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
  ImageBackground_865_73681: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_865_73682: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_865_73683: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_865_73687: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_865_73692: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73692: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_865_73693: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  ImageBackground_865_73694: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%")
  },
  ImageBackground_865_73695: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_73701: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("64%")
  },
  View_865_73702: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_865_73703: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_865_73703: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_73704: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_73705: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_865_73706: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_73707: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("76%")
  },
  View_865_73708: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_865_73709: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_73710: {
    width: wp("32%"),
    height: hp("5%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_865_73711: {
    width: wp("32%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73711: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_73712: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73712: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_73713: {
    width: wp("22%"),
    height: hp("5%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_865_73714: {
    width: wp("22%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73714: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_73715: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73715: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_73716: {
    width: wp("25%"),
    height: hp("5%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_865_73717: {
    width: wp("25%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73717: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_73718: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73718: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_73719: {
    width: wp("87%"),
    height: hp("10%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_865_73720: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_73721: {
    width: wp("87%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_73722: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_865_73723: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_73724: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_73725: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_865_73726: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_865_73727: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_865_73728: {
    width: wp("44%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_73729: {
    width: wp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73729: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_73730: {
    width: wp("35%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_865_73731: {
    width: wp("35%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73731: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_73732: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_865_73733: {
    width: wp("42%"),
    minWidth: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73733: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_73734: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_865_73735: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73735: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_73736: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  View_865_73737: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73737: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_73738: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73738: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_73739: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  View_865_73740: {
    width: wp("35%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73740: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_73741: {
    width: wp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73741: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_73742: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("88%")
  },
  View_865_73743: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_73744: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_73745: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73745: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_73746: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_865_73747: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73747: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_73748: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_865_73749: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("97%")
  },
  View_865_73750: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_73751: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_73752: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73752: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_73753: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_865_73754: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73754: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_73755: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_865_73756: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("92%")
  },
  View_865_73757: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_73758: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_73759: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73759: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_73760: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_865_73761: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73761: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_73762: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_865_73763: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("53%")
  },
  View_865_73764: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_865_73765: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_73766: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_73767: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_865_73768: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_865_73769: {
    width: wp("26%"),
    minWidth: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73769: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_73770: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_73770: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_73771: {
    width: wp("91%"),
    height: hp("5%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_73771_1005_34261: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I865_73771_1005_34262: {
    width: wp("91%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_73771_1005_34265: {
    width: wp("19%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_I865_73771_1005_34265: {
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "uppercase"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
