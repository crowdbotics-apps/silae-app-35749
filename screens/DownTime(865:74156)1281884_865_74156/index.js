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
      <View style={styles.View_865_74157}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abb78579-de22-4f30-b029-2c559b440a53"
          }}
          style={styles.ImageBackground_865_74158}
        />
      </View>
      <View style={styles.View_865_74160}>
        <View style={styles.View_865_74161}>
          <View style={styles.View_865_74162} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6986cc93-ec73-4f98-a367-5187ddd38b6d"
            }}
            style={styles.ImageBackground_865_74163}
          />
          <View style={styles.View_865_74164} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c85e4715-79a8-4d91-bea8-73ed26c25e4d"
          }}
          style={styles.ImageBackground_865_74165}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/477390ec-a15e-42cd-822d-c382a743942a"
          }}
          style={styles.ImageBackground_865_74169}
        />
        <View style={styles.View_865_74174}>
          <Text style={styles.Text_865_74174}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_865_74175}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef7ce8ec-7b9b-46d1-820e-f2d22690059b"
          }}
          style={styles.ImageBackground_865_74176}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e49942c-828b-4106-8186-a7ae111f783f"
          }}
          style={styles.ImageBackground_865_74177}
        />
      </View>
      <View style={styles.View_865_74183}>
        <View style={styles.View_865_74184}>
          <View style={styles.View_I865_74184_750_24081}>
            <View style={styles.View_I865_74184_750_24082}>
              <Text style={styles.Text_I865_74184_750_24082}>Breakdown</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa542392-b411-4ee4-9a18-751a71a5fba2"
              }}
              style={styles.ImageBackground_I865_74184_750_24083}
            />
          </View>
        </View>
        <View style={styles.View_865_74185}>
          <View style={styles.View_I865_74185_750_24086}>
            <Text style={styles.Text_I865_74185_750_24086}>Lease Expiry</Text>
          </View>
        </View>
        <View style={styles.View_865_74186}>
          <View style={styles.View_I865_74186_750_24086}>
            <Text style={styles.Text_I865_74186_750_24086}>Better Model</Text>
          </View>
        </View>
        <View style={styles.View_865_74187}>
          <View style={styles.View_I865_74187_750_24086}>
            <Text style={styles.Text_I865_74187_750_24086}>Other</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_865_74188}>
        <View style={styles.View_865_74189}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67a8a1c1-be04-4686-aa8e-de4501610f13"
            }}
            style={styles.ImageBackground_865_74190}
          />
        </View>
      </View>
      <View style={styles.View_865_74191}>
        <View style={styles.View_865_74192}>
          <Text style={styles.Text_865_74192}>RE-F-142 Inspection</Text>
        </View>
        <View style={styles.View_865_74193}>
          <Text style={styles.Text_865_74193}>Issue ID</Text>
        </View>
      </View>
      <View style={styles.View_865_74194}>
        <View style={styles.View_865_74195}>
          <Text style={styles.Text_865_74195}>Floor B - B049</Text>
        </View>
        <View style={styles.View_865_74196}>
          <Text style={styles.Text_865_74196}>Location</Text>
        </View>
      </View>
      <View style={styles.View_865_74197}>
        <View style={styles.View_865_74198}>
          <Text style={styles.Text_865_74198}>21/07 I 1:32 PM</Text>
        </View>
        <View style={styles.View_865_74199}>
          <Text style={styles.Text_865_74199}>Intitiated at</Text>
        </View>
      </View>
      <View style={styles.View_865_74200}>
        <View style={styles.View_865_74201}>
          <View style={styles.View_865_74202}>
            <View style={styles.View_865_74203}>
              <View style={styles.View_865_74204}>
                <View style={styles.View_865_74205}>
                  <View style={styles.View_865_74206} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bb8884d-7b37-45e9-9eb3-2feadd217b4c"
                    }}
                    style={styles.ImageBackground_865_74207}
                  />
                </View>
              </View>
              <View style={styles.View_865_74208}>
                <View style={styles.View_865_74209}>
                  <View style={styles.View_865_74210}>
                    <Text style={styles.Text_865_74210}>Padmavathy V</Text>
                  </View>
                </View>
                <View style={styles.View_865_74211}>
                  <View style={styles.View_865_74212}>
                    <Text style={styles.Text_865_74212}>09:38 AM</Text>
                  </View>
                </View>
                <View style={styles.View_865_74213}>
                  <View style={styles.View_865_74214}>
                    <Text style={styles.Text_865_74214}>CH-1035</Text>
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6240bcd-93e6-4275-89b1-c9a2f210fd3b"
              }}
              style={styles.ImageBackground_865_74215}
            />
          </View>
          <View style={styles.View_865_74216}>
            <Text style={styles.Text_865_74216}>Raised By</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_865_74217}>
        <View style={styles.View_865_74218}>
          <Text style={styles.Text_865_74218}>RE/F/142</Text>
        </View>
        <View style={styles.View_865_74219}>
          <Text style={styles.Text_865_74219}>WO ID</Text>
        </View>
      </View>
      <View style={styles.View_865_74220}>
        <View style={styles.View_865_74221}>
          <Text style={styles.Text_865_74221}>21/07 I 2:32 PM</Text>
        </View>
        <View style={styles.View_865_74222}>
          <Text style={styles.Text_865_74222}>Resolved At</Text>
        </View>
      </View>
      <View style={styles.View_865_74223}>
        <View style={styles.View_865_74224}>
          <View style={styles.View_I865_74224_916_37790}>
            <View style={styles.View_I865_74224_916_37791}>
              <View style={styles.View_I865_74224_916_37792}>
                <Text style={styles.Text_I865_74224_916_37792}>
                  Type here to search
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I865_74224_916_37794}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12409d95-e21c-481a-ab01-c92b4912f376"
              }}
              style={styles.ImageBackground_I865_74224_916_37795}
            />
          </View>
        </View>
        <View style={styles.View_865_74225}>
          <Text style={styles.Text_865_74225}>Assign Technician</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6bce44b-8a51-4f32-95f3-2d323fcce5c6"
        }}
        style={styles.ImageBackground_865_74226}
      />
      <View style={styles.View_865_74251}>
        <View style={styles.View_865_74252}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3694a9e8-2ed7-43f8-acb8-73d4d6b48e8e"
            }}
            style={styles.ImageBackground_865_74253}
          />
        </View>
      </View>
      <View style={styles.View_865_74254}>
        <View style={styles.View_865_74255}>
          <View style={styles.View_865_74256}>
            <View style={styles.View_865_74257}>
              <Text style={styles.Text_865_74257}>Needle</Text>
            </View>
          </View>
          <View style={styles.View_865_74258}>
            <View style={styles.View_865_74259}>
              <Text style={styles.Text_865_74259}>03</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a22a56c3-be39-405f-b0aa-c9b98ddd5811"
          }}
          style={styles.ImageBackground_865_74260}
        />
      </View>
      <View style={styles.View_865_74261}>
        <View style={styles.View_865_74262}>
          <View style={styles.View_865_74263}>
            <View style={styles.View_865_74264}>
              <Text style={styles.Text_865_74264}>Pulley</Text>
            </View>
          </View>
          <View style={styles.View_865_74265}>
            <View style={styles.View_865_74266}>
              <Text style={styles.Text_865_74266}>03</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f105acf-5b43-4074-9f51-25fe06e3e1d2"
          }}
          style={styles.ImageBackground_865_74267}
        />
      </View>
      <View style={styles.View_865_74268}>
        <View style={styles.View_865_74269}>
          <View style={styles.View_865_74270}>
            <View style={styles.View_865_74271}>
              <Text style={styles.Text_865_74271}>Dog Feed</Text>
            </View>
          </View>
          <View style={styles.View_865_74272}>
            <View style={styles.View_865_74273}>
              <Text style={styles.Text_865_74273}>03</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab2d1bfe-d7fb-4f41-ba5d-494c74d0d520"
          }}
          style={styles.ImageBackground_865_74274}
        />
      </View>
      <View style={styles.View_865_74275}>
        <View style={styles.View_I865_74275_1005_34261}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/655fd845-8efd-4bc5-bb17-e04a2c239a8e"
            }}
            style={styles.ImageBackground_I865_74275_1005_34262}
          />
          <View style={styles.View_I865_74275_1005_34265}>
            <Text style={styles.Text_I865_74275_1005_34265}>+ Add Part</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_865_74276} />
      <View style={styles.View_865_74277}>
        <View style={styles.View_I865_74277_247_19205}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59cc956e-7b31-482d-8b7b-fbb598e77b79"
            }}
            style={styles.ImageBackground_I865_74277_247_19206}
          />
          <View style={styles.View_I865_74277_247_19207}>
            <Text style={styles.Text_I865_74277_247_19207}>
              Technician Assigned Successfully
            </Text>
          </View>
        </View>
        <View style={styles.View_I865_74277_247_19208}>
          <View style={styles.View_I865_74277_247_19209}>
            <View style={styles.View_I865_74277_247_19209_242_7191}>
              <Text style={styles.Text_I865_74277_247_19209_242_7191}>
                Close
              </Text>
            </View>
          </View>
          <View style={styles.View_I865_74277_247_19210}>
            <View style={styles.View_I865_74277_247_19210_242_7191}>
              <Text text="" style={styles.Text_I865_74277_247_19210_242_7191} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_865_74157: {
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
  ImageBackground_865_74158: {
    width: wp("91%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74160: {
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
  View_865_74161: {
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
  View_865_74162: {
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
  ImageBackground_865_74163: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_865_74164: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_865_74165: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_865_74169: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_865_74174: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74174: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_865_74175: {
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
  ImageBackground_865_74176: {
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
  ImageBackground_865_74177: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74183: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("75%")
  },
  View_865_74184: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 207, 243, 1)"
  },
  View_I865_74184_750_24081: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74184_750_24082: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I865_74184_750_24082: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_I865_74184_750_24083: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_865_74185: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74185_750_24086: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_74185_750_24086: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74186: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74186_750_24086: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_74186_750_24086: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74187: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74187_750_24086: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_74187_750_24086: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74188: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("69%")
  },
  View_865_74189: {
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
  ImageBackground_865_74190: {
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
  View_865_74191: {
    width: wp("32%"),
    height: hp("5%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_865_74192: {
    width: wp("32%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74193: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74193: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74194: {
    width: wp("22%"),
    height: hp("5%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_865_74195: {
    width: wp("22%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74195: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74196: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74196: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74197: {
    width: wp("25%"),
    height: hp("5%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_865_74198: {
    width: wp("25%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74198: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74199: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74199: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74200: {
    width: wp("87%"),
    height: hp("10%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_865_74201: {
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
  View_865_74202: {
    width: wp("87%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74203: {
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
  View_865_74204: {
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
  View_865_74205: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74206: {
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
  ImageBackground_865_74207: {
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
  View_865_74208: {
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
  View_865_74209: {
    width: wp("44%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74210: {
    width: wp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74210: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74211: {
    width: wp("35%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_865_74212: {
    width: wp("35%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74212: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74213: {
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
  View_865_74214: {
    width: wp("42%"),
    minWidth: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74214: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_74215: {
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
  View_865_74216: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74216: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74217: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  View_865_74218: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74218: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74219: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74219: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74220: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  View_865_74221: {
    width: wp("35%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74221: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74222: {
    width: wp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74222: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74223: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("53%")
  },
  View_865_74224: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74224_916_37790: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74224_916_37791: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74224_916_37792: {
    width: wp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I865_74224_916_37792: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I865_74224_916_37794: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I865_74224_916_37795: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_865_74225: {
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
  Text_865_74225: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_865_74226: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("64%")
  },
  View_865_74251: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("89%")
  },
  View_865_74252: {
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
  ImageBackground_865_74253: {
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
  View_865_74254: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("102%")
  },
  View_865_74255: {
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
  View_865_74256: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74257: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74257: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74258: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_865_74259: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74259: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_74260: {
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
  View_865_74261: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("110%")
  },
  View_865_74262: {
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
  View_865_74263: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74264: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74264: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74265: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_865_74266: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74266: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_74267: {
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
  View_865_74268: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("106%")
  },
  View_865_74269: {
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
  View_865_74270: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74271: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74272: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_865_74273: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74273: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_74274: {
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
  View_865_74275: {
    width: wp("91%"),
    height: hp("5%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74275_1005_34261: {
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
  ImageBackground_I865_74275_1005_34262: {
    width: wp("91%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74275_1005_34265: {
    width: wp("19%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_I865_74275_1005_34265: {
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "uppercase"
  },
  View_865_74276: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.4000000059604645
  },
  View_865_74277: {
    width: wp("78%"),
    height: hp("24%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_74277_247_19205: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I865_74277_247_19206: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_I865_74277_247_19207: {
    flexGrow: 1,
    width: wp("43%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I865_74277_247_19207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_I865_74277_247_19208: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74277_247_19209: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74277_247_19209_242_7191: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_74277_247_19209_242_7191: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I865_74277_247_19210: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74277_247_19210_242_7191: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_74277_247_19210_242_7191: {
    color: "rgba(98, 0, 238, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
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
