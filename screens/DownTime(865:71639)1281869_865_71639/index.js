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
      <View style={styles.View_865_71644}>
        <View style={styles.View_865_71645}>
          <View style={styles.View_865_71646}>
            <View style={styles.View_865_71647}>
              <View style={styles.View_I865_71647_364_8270}>
                <Text style={styles.Text_I865_71647_364_8270}>Live Status</Text>
              </View>
            </View>
            <View style={styles.View_865_71648}>
              <View style={styles.View_I865_71648_364_8270}>
                <Text style={styles.Text_I865_71648_364_8270}>Production</Text>
              </View>
            </View>
            <View style={styles.View_865_71649}>
              <View style={styles.View_I865_71649_364_8270}>
                <Text style={styles.Text_I865_71649_364_8270}>Punctuality</Text>
              </View>
            </View>
            <View style={styles.View_865_71650}>
              <View style={styles.View_I865_71650_364_8270}>
                <Text style={styles.Text_I865_71650_364_8270}>Short Stops</Text>
              </View>
            </View>
            <View style={styles.View_865_71651}>
              <View style={styles.View_I865_71651_364_8270}>
                <Text style={styles.Text_I865_71651_364_8270}>Down Time</Text>
              </View>
            </View>
            <View style={styles.View_865_71652}>
              <View style={styles.View_I865_71652_364_8270}>
                <Text style={styles.Text_I865_71652_364_8270}>Speed Loss</Text>
              </View>
            </View>
            <View style={styles.View_865_71653}>
              <View style={styles.View_I865_71653_364_8270}>
                <Text style={styles.Text_I865_71653_364_8270}>Line Cost</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_71654}>
        <View style={styles.View_I865_71654_249_19118}>
          <View style={styles.View_I865_71654_249_19119}>
            <View style={styles.View_I865_71654_249_19120}>
              <View style={styles.View_I865_71654_249_19121}>
                <View style={styles.View_I865_71654_249_19122} />
              </View>
              <View style={styles.View_I865_71654_249_19131}>
                <View style={styles.View_I865_71654_249_19132}>
                  <View style={styles.View_I865_71654_249_19133}>
                    <Text style={styles.Text_I865_71654_249_19133}>
                      Pieces: 40
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_71654_249_19141}>
          <View style={styles.View_I865_71654_249_19142} />
          <View style={styles.View_I865_71654_249_19143}>
            <View style={styles.View_I865_71654_249_19144}>
              <View style={styles.View_I865_71654_249_19145}>
                <Text style={styles.Text_I865_71654_249_19145}>Minutes</Text>
              </View>
              <View style={styles.View_I865_71654_249_19146}>
                <Text style={styles.Text_I865_71654_249_19146}>20</Text>
              </View>
            </View>
            <View style={styles.View_I865_71654_249_19147}>
              <View style={styles.View_I865_71654_249_19148}>
                <View style={styles.View_I865_71654_249_19149} />
              </View>
              <View style={styles.View_I865_71654_249_19151}>
                <View style={styles.View_I865_71654_249_19152}>
                  <View style={styles.View_I865_71654_249_19153}>
                    <View style={styles.View_I865_71654_249_19154}>
                      <Text style={styles.Text_I865_71654_249_19154}>
                        {" "}
                        1: Collar Attach
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b22be251-bdb1-461a-bd65-9914b68feccc"
          }}
          style={styles.ImageBackground_I865_71654_249_19155}
        />
      </View>
      <View style={styles.View_865_71655}>
        <View style={styles.View_I865_71655_249_19118}>
          <View style={styles.View_I865_71655_249_19119}>
            <View style={styles.View_I865_71655_249_19120}>
              <View style={styles.View_I865_71655_249_19121}>
                <View style={styles.View_I865_71655_249_19122} />
              </View>
              <View style={styles.View_I865_71655_249_19131}>
                <View style={styles.View_I865_71655_249_19132}>
                  <View style={styles.View_I865_71655_249_19133}>
                    <Text style={styles.Text_I865_71655_249_19133}>
                      Pieces: 40
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_71655_249_19141}>
          <View style={styles.View_I865_71655_249_19142} />
          <View style={styles.View_I865_71655_249_19143}>
            <View style={styles.View_I865_71655_249_19144}>
              <View style={styles.View_I865_71655_249_19145}>
                <Text style={styles.Text_I865_71655_249_19145}>Minutes</Text>
              </View>
              <View style={styles.View_I865_71655_249_19146}>
                <Text style={styles.Text_I865_71655_249_19146}>20</Text>
              </View>
            </View>
            <View style={styles.View_I865_71655_249_19147}>
              <View style={styles.View_I865_71655_249_19148}>
                <View style={styles.View_I865_71655_249_19149} />
              </View>
              <View style={styles.View_I865_71655_249_19151}>
                <View style={styles.View_I865_71655_249_19152}>
                  <View style={styles.View_I865_71655_249_19153}>
                    <View style={styles.View_I865_71655_249_19154}>
                      <Text style={styles.Text_I865_71655_249_19154}>
                        {" "}
                        4: Collar Attach
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52c8d00e-b634-4196-91e2-a6561f267b8d"
          }}
          style={styles.ImageBackground_I865_71655_249_19155}
        />
      </View>
      <View style={styles.View_865_71656}>
        <View style={styles.View_I865_71656_249_19118}>
          <View style={styles.View_I865_71656_249_19119}>
            <View style={styles.View_I865_71656_249_19120}>
              <View style={styles.View_I865_71656_249_19121}>
                <View style={styles.View_I865_71656_249_19122} />
              </View>
              <View style={styles.View_I865_71656_249_19131}>
                <View style={styles.View_I865_71656_249_19132}>
                  <View style={styles.View_I865_71656_249_19133}>
                    <Text style={styles.Text_I865_71656_249_19133}>
                      Pieces: 40
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_71656_249_19141}>
          <View style={styles.View_I865_71656_249_19142} />
          <View style={styles.View_I865_71656_249_19143}>
            <View style={styles.View_I865_71656_249_19144}>
              <View style={styles.View_I865_71656_249_19145}>
                <Text style={styles.Text_I865_71656_249_19145}>Minutes</Text>
              </View>
              <View style={styles.View_I865_71656_249_19146}>
                <Text style={styles.Text_I865_71656_249_19146}>20</Text>
              </View>
            </View>
            <View style={styles.View_I865_71656_249_19147}>
              <View style={styles.View_I865_71656_249_19148}>
                <View style={styles.View_I865_71656_249_19149} />
              </View>
              <View style={styles.View_I865_71656_249_19151}>
                <View style={styles.View_I865_71656_249_19152}>
                  <View style={styles.View_I865_71656_249_19153}>
                    <View style={styles.View_I865_71656_249_19154}>
                      <Text style={styles.Text_I865_71656_249_19154}>
                        {" "}
                        2: Collar Attach
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8095097b-2783-4a33-91f4-22c3d2b1d161"
          }}
          style={styles.ImageBackground_I865_71656_249_19155}
        />
      </View>
      <View style={styles.View_865_71657}>
        <View style={styles.View_I865_71657_249_19158}>
          <View style={styles.View_I865_71657_249_19159}>
            <View style={styles.View_I865_71657_249_19160}>
              <View style={styles.View_I865_71657_249_19161}>
                <View style={styles.View_I865_71657_249_19162} />
              </View>
              <View style={styles.View_I865_71657_249_19171}>
                <View style={styles.View_I865_71657_249_19172}>
                  <View style={styles.View_I865_71657_249_19173}>
                    <Text style={styles.Text_I865_71657_249_19173}>
                      Pieces: 10
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_71657_249_19181}>
          <View style={styles.View_I865_71657_249_19182} />
          <View style={styles.View_I865_71657_249_19183}>
            <View style={styles.View_I865_71657_249_19184}>
              <View style={styles.View_I865_71657_249_19185}>
                <Text style={styles.Text_I865_71657_249_19185}>Minutes</Text>
              </View>
              <View style={styles.View_I865_71657_249_19186}>
                <Text style={styles.Text_I865_71657_249_19186}>35</Text>
              </View>
            </View>
            <View style={styles.View_I865_71657_249_19187}>
              <View style={styles.View_I865_71657_249_19188}>
                <View style={styles.View_I865_71657_249_19189} />
              </View>
              <View style={styles.View_I865_71657_249_19191}>
                <View style={styles.View_I865_71657_249_19192}>
                  <View style={styles.View_I865_71657_249_19193}>
                    <View style={styles.View_I865_71657_249_19194}>
                      <Text style={styles.Text_I865_71657_249_19194}>
                        {" "}
                        6: Collar Attach
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25c1dbe0-8836-4591-beac-b4b41ad0e304"
          }}
          style={styles.ImageBackground_I865_71657_249_19195}
        />
      </View>
      <View style={styles.View_865_71658}>
        <View style={styles.View_I865_71658_249_19158}>
          <View style={styles.View_I865_71658_249_19159}>
            <View style={styles.View_I865_71658_249_19160}>
              <View style={styles.View_I865_71658_249_19161}>
                <View style={styles.View_I865_71658_249_19162} />
              </View>
              <View style={styles.View_I865_71658_249_19171}>
                <View style={styles.View_I865_71658_249_19172}>
                  <View style={styles.View_I865_71658_249_19173}>
                    <Text style={styles.Text_I865_71658_249_19173}>
                      Pieces: 10
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_71658_249_19181}>
          <View style={styles.View_I865_71658_249_19182} />
          <View style={styles.View_I865_71658_249_19183}>
            <View style={styles.View_I865_71658_249_19184}>
              <View style={styles.View_I865_71658_249_19185}>
                <Text style={styles.Text_I865_71658_249_19185}>Minutes</Text>
              </View>
              <View style={styles.View_I865_71658_249_19186}>
                <Text style={styles.Text_I865_71658_249_19186}>35</Text>
              </View>
            </View>
            <View style={styles.View_I865_71658_249_19187}>
              <View style={styles.View_I865_71658_249_19188}>
                <View style={styles.View_I865_71658_249_19189} />
              </View>
              <View style={styles.View_I865_71658_249_19191}>
                <View style={styles.View_I865_71658_249_19192}>
                  <View style={styles.View_I865_71658_249_19193}>
                    <View style={styles.View_I865_71658_249_19194}>
                      <Text style={styles.Text_I865_71658_249_19194}>
                        {" "}
                        3: Collar Attach
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/404faceb-5259-4e38-ba86-28487562c387"
          }}
          style={styles.ImageBackground_I865_71658_249_19195}
        />
      </View>
      <View style={styles.View_865_71659}>
        <View style={styles.View_I865_71659_249_19198}>
          <View style={styles.View_I865_71659_249_19199}>
            <View style={styles.View_I865_71659_249_19200}>
              <View style={styles.View_I865_71659_249_19201}>
                <View style={styles.View_I865_71659_249_19202} />
              </View>
              <View style={styles.View_I865_71659_249_19211}>
                <View style={styles.View_I865_71659_249_19212}>
                  <View style={styles.View_I865_71659_249_19213}>
                    <Text style={styles.Text_I865_71659_249_19213}>
                      Pieces: 4
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_71659_249_19221}>
          <View style={styles.View_I865_71659_249_19222} />
          <View style={styles.View_I865_71659_249_19223}>
            <View style={styles.View_I865_71659_249_19224}>
              <View style={styles.View_I865_71659_249_19225}>
                <Text style={styles.Text_I865_71659_249_19225}>Minutes</Text>
              </View>
              <View style={styles.View_I865_71659_249_19226}>
                <Text style={styles.Text_I865_71659_249_19226}>80</Text>
              </View>
            </View>
            <View style={styles.View_I865_71659_249_19227}>
              <View style={styles.View_I865_71659_249_19228}>
                <View style={styles.View_I865_71659_249_19229} />
              </View>
              <View style={styles.View_I865_71659_249_19231}>
                <View style={styles.View_I865_71659_249_19232}>
                  <View style={styles.View_I865_71659_249_19233}>
                    <View style={styles.View_I865_71659_249_19234}>
                      <Text style={styles.Text_I865_71659_249_19234}>
                        {" "}
                        5: Collar Attach
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3df79f7e-983e-44b3-a74b-23ca7dd6616d"
          }}
          style={styles.ImageBackground_I865_71659_249_19235}
        />
      </View>
      <View style={styles.View_865_71660}>
        <View style={styles.View_865_71661}>
          <Text style={styles.Text_865_71661}>Apply Filters</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c3af2f9-cf81-481e-b4cc-837bd268cc12"
          }}
          style={styles.ImageBackground_865_71662}
        />
      </View>
      <View style={styles.View_865_71663}>
        <Text style={styles.Text_865_71663}>Last Upated Today at 5:17PM</Text>
      </View>
      <View style={styles.View_865_71664}>
        <View style={styles.View_I865_71664_269_27952} />
        <View style={styles.View_I865_71664_269_27953}>
          <View style={styles.View_I865_71664_269_27954}>
            <View style={styles.View_I865_71664_269_27955} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69d641bf-831e-4a95-b4cb-7d529b9e8e9d"
              }}
              style={styles.ImageBackground_I865_71664_269_27956}
            />
            <View style={styles.View_I865_71664_269_27957} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9416cf13-0316-4955-97bd-117cd6785e6e"
            }}
            style={styles.ImageBackground_I865_71664_269_27958}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d33143c-0228-4adf-811f-8e932afed6cf"
            }}
            style={styles.ImageBackground_I865_71664_269_27962}
          />
          <View style={styles.View_I865_71664_269_27967}>
            <Text style={styles.Text_I865_71664_269_27967}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I865_71664_269_27968}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31d96e28-ed8a-4669-b7f7-653e17df6d20"
            }}
            style={styles.ImageBackground_I865_71664_269_27969}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/185f26bd-92c4-417b-aa52-c9c345f21170"
            }}
            style={styles.ImageBackground_I865_71664_269_27970}
          />
        </View>
      </View>
      <View style={styles.View_865_71665}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fafa9c1d-484b-4d9b-8ffb-2229aa229334"
          }}
          style={styles.ImageBackground_I865_71665_752_28469}
        />
        <View style={styles.View_I865_71665_752_28471}>
          <View style={styles.View_I865_71665_752_28472}>
            <Text style={styles.Text_I865_71665_752_28472}>
              Hiking Track Pants - HTP324
            </Text>
          </View>
          <View style={styles.View_I865_71665_752_28473}>
            <Text style={styles.Text_I865_71665_752_28473}>Style</Text>
          </View>
        </View>
        <View style={styles.View_I865_71665_752_28474}>
          <View style={styles.View_I865_71665_752_28475}>
            <Text style={styles.Text_I865_71665_752_28475}>12345</Text>
          </View>
          <View style={styles.View_I865_71665_752_28476}>
            <Text style={styles.Text_I865_71665_752_28476}>Job Order</Text>
          </View>
        </View>
        <View style={styles.View_I865_71665_752_28483}>
          <View style={styles.View_I865_71665_752_28484}>
            <Text style={styles.Text_I865_71665_752_28484}>Line 01</Text>
          </View>
          <View style={styles.View_I865_71665_752_28485}>
            <Text style={styles.Text_I865_71665_752_28485}>Line Name</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35a73665-80c2-4efd-93c6-18c92e5c4a9b"
          }}
          style={styles.ImageBackground_I865_71665_752_28482}
        />
        <View style={styles.View_I865_71665_752_28492}>
          <View style={styles.View_I865_71665_752_28486} />
          <View style={styles.View_I865_71665_752_28477}>
            <View style={styles.View_I865_71665_752_28478}>
              <View style={styles.View_I865_71665_752_28479}>
                <Text style={styles.Text_I865_71665_752_28479}>Live</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3e14936-5c47-4124-a820-cca15198559c"
              }}
              style={styles.ImageBackground_I865_71665_752_28480}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_865_71644: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_71645: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-54%"),
    top: hp("0%")
  },
  View_865_71646: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_71647: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71647_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_71647_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_71648: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71648_364_8270: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_71648_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_71649: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71649_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_71649_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_71650: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71650_364_8270: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_71650_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_71651: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("122%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71651_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_71651_364_8270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_71652: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("153%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71652_364_8270: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_71652_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_71653: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("184%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71653_364_8270: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_71653_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_71654: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71654_249_19118: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71654_249_19119: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71654_249_19120: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71654_249_19121: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71654_249_19122: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(95, 182, 51, 1)",
    opacity: 0.15000000596046448
  },
  View_I865_71654_249_19131: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_71654_249_19132: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71654_249_19133: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71654_249_19133: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71654_249_19141: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_71654_249_19142: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_71654_249_19143: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_71654_249_19144: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71654_249_19145: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71654_249_19145: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71654_249_19146: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71654_249_19146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71654_249_19147: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71654_249_19148: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71654_249_19149: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(95, 182, 51, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I865_71654_249_19151: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_71654_249_19152: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71654_249_19153: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71654_249_19154: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71654_249_19154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_I865_71654_249_19155: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_865_71655: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71655_249_19118: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71655_249_19119: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71655_249_19120: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71655_249_19121: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71655_249_19122: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(95, 182, 51, 1)",
    opacity: 0.15000000596046448
  },
  View_I865_71655_249_19131: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_71655_249_19132: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71655_249_19133: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71655_249_19133: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71655_249_19141: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_71655_249_19142: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_71655_249_19143: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_71655_249_19144: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71655_249_19145: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71655_249_19145: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71655_249_19146: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71655_249_19146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71655_249_19147: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71655_249_19148: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71655_249_19149: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(95, 182, 51, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I865_71655_249_19151: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_71655_249_19152: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71655_249_19153: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71655_249_19154: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71655_249_19154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_I865_71655_249_19155: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_865_71656: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71656_249_19118: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71656_249_19119: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71656_249_19120: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71656_249_19121: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71656_249_19122: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(95, 182, 51, 1)",
    opacity: 0.15000000596046448
  },
  View_I865_71656_249_19131: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_71656_249_19132: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71656_249_19133: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71656_249_19133: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71656_249_19141: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_71656_249_19142: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_71656_249_19143: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_71656_249_19144: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71656_249_19145: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71656_249_19145: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71656_249_19146: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71656_249_19146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71656_249_19147: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71656_249_19148: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71656_249_19149: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(95, 182, 51, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I865_71656_249_19151: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_71656_249_19152: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71656_249_19153: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71656_249_19154: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71656_249_19154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_I865_71656_249_19155: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_865_71657: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("77%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71657_249_19158: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71657_249_19159: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71657_249_19160: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71657_249_19161: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71657_249_19162: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)",
    opacity: 0.15000000596046448
  },
  View_I865_71657_249_19171: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_71657_249_19172: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71657_249_19173: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71657_249_19173: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71657_249_19181: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_71657_249_19182: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_71657_249_19183: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_71657_249_19184: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71657_249_19185: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71657_249_19185: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71657_249_19186: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71657_249_19186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71657_249_19187: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71657_249_19188: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71657_249_19189: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I865_71657_249_19191: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_71657_249_19192: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71657_249_19193: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71657_249_19194: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71657_249_19194: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_I865_71657_249_19195: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_865_71658: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71658_249_19158: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71658_249_19159: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71658_249_19160: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71658_249_19161: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71658_249_19162: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)",
    opacity: 0.15000000596046448
  },
  View_I865_71658_249_19171: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_71658_249_19172: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71658_249_19173: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71658_249_19173: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71658_249_19181: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_71658_249_19182: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_71658_249_19183: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_71658_249_19184: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71658_249_19185: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71658_249_19185: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71658_249_19186: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71658_249_19186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71658_249_19187: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71658_249_19188: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71658_249_19189: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I865_71658_249_19191: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_71658_249_19192: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71658_249_19193: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71658_249_19194: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71658_249_19194: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_I865_71658_249_19195: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_865_71659: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("77%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71659_249_19198: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71659_249_19199: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71659_249_19200: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71659_249_19201: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71659_249_19202: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(219, 22, 22, 1)",
    opacity: 0.15000000596046448
  },
  View_I865_71659_249_19211: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_71659_249_19212: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71659_249_19213: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71659_249_19213: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71659_249_19221: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_71659_249_19222: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_71659_249_19223: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_71659_249_19224: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71659_249_19225: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71659_249_19225: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71659_249_19226: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71659_249_19226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_71659_249_19227: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71659_249_19228: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71659_249_19229: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(219, 22, 22, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I865_71659_249_19231: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_71659_249_19232: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71659_249_19233: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_71659_249_19234: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71659_249_19234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_I865_71659_249_19235: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_865_71660: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("37%")
  },
  View_865_71661: {
    width: wp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_71661: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_865_71662: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_865_71663: {
    width: wp("37%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_865_71663: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_71664: {
    width: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_71664_269_27952: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_71664_269_27953: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_71664_269_27954: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_I865_71664_269_27955: {
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
  ImageBackground_I865_71664_269_27956: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I865_71664_269_27957: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_I865_71664_269_27958: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_I865_71664_269_27962: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_I865_71664_269_27967: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71664_269_27967: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I865_71664_269_27968: {
    flexGrow: 1,
    width: wp("66%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%")
  },
  ImageBackground_I865_71664_269_27969: {
    width: wp("41%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_I865_71664_269_27970: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_71665: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I865_71665_752_28469: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_71665_752_28471: {
    flexGrow: 1,
    width: wp("63%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%")
  },
  View_I865_71665_752_28472: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I865_71665_752_28472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_71665_752_28473: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71665_752_28473: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_71665_752_28474: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%")
  },
  View_I865_71665_752_28475: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I865_71665_752_28475: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_71665_752_28476: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71665_752_28476: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_71665_752_28483: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("9%")
  },
  View_I865_71665_752_28484: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I865_71665_752_28484: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_71665_752_28485: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_71665_752_28485: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  ImageBackground_I865_71665_752_28482: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I865_71665_752_28492: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("1%")
  },
  View_I865_71665_752_28486: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_71665_752_28477: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I865_71665_752_28478: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_I865_71665_752_28479: {
    flexGrow: 1,
    width: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I865_71665_752_28479: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_I865_71665_752_28480: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
