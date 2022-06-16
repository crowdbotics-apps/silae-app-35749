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
      <View style={styles.View_1006_29103}>
        <View style={styles.View_I1006_29103_624_14690}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34f7e1fc-d061-4f80-a542-0feb226950b8"
            }}
            style={styles.ImageBackground_I1006_29103_624_14691}
          />
          <View style={styles.View_I1006_29103_624_14692}>
            <View style={styles.View_I1006_29103_624_14693}>
              <View style={styles.View_I1006_29103_624_14694}>
                <Text style={styles.Text_I1006_29103_624_14694}>H&amp;M</Text>
              </View>
              <View style={styles.View_I1006_29103_624_14695}>
                <Text style={styles.Text_I1006_29103_624_14695}>Buyer </Text>
              </View>
            </View>
            <View style={styles.View_I1006_29103_624_14696}>
              <View style={styles.View_I1006_29103_624_14697}>
                <Text style={styles.Text_I1006_29103_624_14697}>
                  Hiking Track Pants - HTP324
                </Text>
              </View>
              <View style={styles.View_I1006_29103_624_14698}>
                <Text style={styles.Text_I1006_29103_624_14698}>Style</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1006_29103_624_14699}>
            <View style={styles.View_I1006_29103_624_14703}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/912e0e09-020a-4154-a3ae-bc5992afd9e9"
                }}
                style={styles.ImageBackground_I1006_29103_624_14700}
              />
              <View style={styles.View_I1006_29103_624_14702}>
                <Text style={styles.Text_I1006_29103_624_14702}>Tech Pack</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1006_29104}>
        <View style={styles.View_1006_29105}>
          <View style={styles.View_1006_29106}>
            <View style={styles.View_1006_29107}>
              <View style={styles.View_I1006_29107_364_8270}>
                <Text style={styles.Text_I1006_29107_364_8270}>
                  Live Status
                </Text>
              </View>
            </View>
            <View style={styles.View_1006_29108}>
              <View style={styles.View_I1006_29108_364_8270}>
                <Text style={styles.Text_I1006_29108_364_8270}>Production</Text>
              </View>
            </View>
            <View style={styles.View_1006_29109}>
              <View style={styles.View_I1006_29109_364_8270}>
                <Text style={styles.Text_I1006_29109_364_8270}>
                  Punctuality
                </Text>
              </View>
            </View>
            <View style={styles.View_1006_29110}>
              <View style={styles.View_I1006_29110_364_8270}>
                <Text style={styles.Text_I1006_29110_364_8270}>
                  Short Stops
                </Text>
              </View>
            </View>
            <View style={styles.View_1006_29111}>
              <View style={styles.View_I1006_29111_364_8270}>
                <Text style={styles.Text_I1006_29111_364_8270}>Down Time</Text>
              </View>
            </View>
            <View style={styles.View_1006_29112}>
              <View style={styles.View_I1006_29112_364_8270}>
                <Text style={styles.Text_I1006_29112_364_8270}>Speed Loss</Text>
              </View>
            </View>
            <View style={styles.View_1006_29113}>
              <View style={styles.View_I1006_29113_364_8270}>
                <Text style={styles.Text_I1006_29113_364_8270}>Line Cost</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1006_29114}>
        <View style={styles.View_I1006_29114_55_6101}>
          <View style={styles.View_I1006_29114_55_6102}>
            <View style={styles.View_I1006_29114_55_6103}>
              <View style={styles.View_I1006_29114_55_6104}>
                <View style={styles.View_I1006_29114_55_6105} />
              </View>
              <View style={styles.View_I1006_29114_55_6114}>
                <View style={styles.View_I1006_29114_55_6115}>
                  <View style={styles.View_I1006_29114_55_6116}>
                    <Text style={styles.Text_I1006_29114_55_6116}>
                      Pieces: 4
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I1006_29114_55_6124}>
          <View style={styles.View_I1006_29114_55_6125} />
          <View style={styles.View_I1006_29114_55_6126}>
            <View style={styles.View_I1006_29114_55_6127}>
              <View style={styles.View_I1006_29114_55_6128}>
                <Text style={styles.Text_I1006_29114_55_6128}>Minutes</Text>
              </View>
              <View style={styles.View_I1006_29114_55_6129}>
                <Text style={styles.Text_I1006_29114_55_6129}>15</Text>
              </View>
            </View>
            <View style={styles.View_I1006_29114_55_6130}>
              <View style={styles.View_I1006_29114_55_6131}>
                <View style={styles.View_I1006_29114_55_6132} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f21a785-6d08-4fcb-82d9-9d97fc14fe8d"
                  }}
                  style={styles.ImageBackground_I1006_29114_55_6138}
                />
              </View>
              <View style={styles.View_I1006_29114_55_6134}>
                <View style={styles.View_I1006_29114_55_6135}>
                  <View style={styles.View_I1006_29114_55_6136}>
                    <View style={styles.View_I1006_29114_55_6137}>
                      <Text style={styles.Text_I1006_29114_55_6137}>
                        Step 1
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1006_29115}>
        <View style={styles.View_I1006_29115_55_6101}>
          <View style={styles.View_I1006_29115_55_6102}>
            <View style={styles.View_I1006_29115_55_6103}>
              <View style={styles.View_I1006_29115_55_6104}>
                <View style={styles.View_I1006_29115_55_6105} />
              </View>
              <View style={styles.View_I1006_29115_55_6114}>
                <View style={styles.View_I1006_29115_55_6115}>
                  <View style={styles.View_I1006_29115_55_6116}>
                    <Text style={styles.Text_I1006_29115_55_6116}>
                      Pieces: 4
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I1006_29115_55_6124}>
          <View style={styles.View_I1006_29115_55_6125} />
          <View style={styles.View_I1006_29115_55_6126}>
            <View style={styles.View_I1006_29115_55_6127}>
              <View style={styles.View_I1006_29115_55_6128}>
                <Text style={styles.Text_I1006_29115_55_6128}>Minutes</Text>
              </View>
              <View style={styles.View_I1006_29115_55_6129}>
                <Text style={styles.Text_I1006_29115_55_6129}>15</Text>
              </View>
            </View>
            <View style={styles.View_I1006_29115_55_6130}>
              <View style={styles.View_I1006_29115_55_6131}>
                <View style={styles.View_I1006_29115_55_6132} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2943737-a3e8-4006-8538-2eaa7023975a"
                  }}
                  style={styles.ImageBackground_I1006_29115_55_6138}
                />
              </View>
              <View style={styles.View_I1006_29115_55_6134}>
                <View style={styles.View_I1006_29115_55_6135}>
                  <View style={styles.View_I1006_29115_55_6136}>
                    <View style={styles.View_I1006_29115_55_6137}>
                      <Text style={styles.Text_I1006_29115_55_6137}>
                        Step 1
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1006_29116}>
        <View style={styles.View_I1006_29116_55_6101}>
          <View style={styles.View_I1006_29116_55_6102}>
            <View style={styles.View_I1006_29116_55_6103}>
              <View style={styles.View_I1006_29116_55_6104}>
                <View style={styles.View_I1006_29116_55_6105} />
              </View>
              <View style={styles.View_I1006_29116_55_6114}>
                <View style={styles.View_I1006_29116_55_6115}>
                  <View style={styles.View_I1006_29116_55_6116}>
                    <Text style={styles.Text_I1006_29116_55_6116}>
                      Pieces: 4
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I1006_29116_55_6124}>
          <View style={styles.View_I1006_29116_55_6125} />
          <View style={styles.View_I1006_29116_55_6126}>
            <View style={styles.View_I1006_29116_55_6127} />
            <View style={styles.View_I1006_29116_55_6130}>
              <View style={styles.View_I1006_29116_55_6131}>
                <View style={styles.View_I1006_29116_55_6132} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1264dc3-c217-427a-b2ad-292ceae57566"
                  }}
                  style={styles.ImageBackground_I1006_29116_55_6138}
                />
              </View>
              <View style={styles.View_I1006_29116_55_6134}>
                <View style={styles.View_I1006_29116_55_6135}>
                  <View style={styles.View_I1006_29116_55_6136}>
                    <View style={styles.View_I1006_29116_55_6137}>
                      <Text style={styles.Text_I1006_29116_55_6137}>
                        Step 1
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1006_29117}>
        <View style={styles.View_I1006_29117_60_9795}>
          <View style={styles.View_I1006_29117_60_9796}>
            <View style={styles.View_I1006_29117_60_9797}>
              <View style={styles.View_I1006_29117_60_9798}>
                <View style={styles.View_I1006_29117_60_9799} />
              </View>
              <View style={styles.View_I1006_29117_60_9808}>
                <View style={styles.View_I1006_29117_60_9809}>
                  <View style={styles.View_I1006_29117_60_9810}>
                    <Text style={styles.Text_I1006_29117_60_9810}>
                      Pieces: 4
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I1006_29117_60_9818}>
          <View style={styles.View_I1006_29117_60_9819} />
          <View style={styles.View_I1006_29117_60_9820}>
            <View style={styles.View_I1006_29117_60_9821}>
              <View style={styles.View_I1006_29117_60_9822}>
                <Text style={styles.Text_I1006_29117_60_9822}>Minutes</Text>
              </View>
              <View style={styles.View_I1006_29117_60_9823}>
                <Text style={styles.Text_I1006_29117_60_9823}>80</Text>
              </View>
            </View>
            <View style={styles.View_I1006_29117_60_9824}>
              <View style={styles.View_I1006_29117_60_9825}>
                <View style={styles.View_I1006_29117_60_9826} />
              </View>
              <View style={styles.View_I1006_29117_60_9828}>
                <View style={styles.View_I1006_29117_60_9829}>
                  <View style={styles.View_I1006_29117_60_9830}>
                    <View style={styles.View_I1006_29117_60_9831}>
                      <Text style={styles.Text_I1006_29117_60_9831}>
                        Step 1
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
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c21ef78e-7efb-4417-b96c-70e88d969cd5"
          }}
          style={styles.ImageBackground_I1006_29117_60_9832}
        />
      </View>
      <View style={styles.View_1006_29118}>
        <View style={styles.View_I1006_29118_55_6180}>
          <View style={styles.View_I1006_29118_55_6181}>
            <View style={styles.View_I1006_29118_55_6182}>
              <View style={styles.View_I1006_29118_55_6183}>
                <View style={styles.View_I1006_29118_55_6184}>
                  <View style={styles.View_I1006_29118_55_6185} />
                </View>
                <View style={styles.View_I1006_29118_55_6194}>
                  <View style={styles.View_I1006_29118_55_6195}>
                    <View style={styles.View_I1006_29118_55_6196}>
                      <Text style={styles.Text_I1006_29118_55_6196}>
                        Pieces: 10
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I1006_29118_55_6204}>
            <View style={styles.View_I1006_29118_55_6205} />
            <View style={styles.View_I1006_29118_55_6206}>
              <View style={styles.View_I1006_29118_55_6207}>
                <View style={styles.View_I1006_29118_55_6208}>
                  <Text style={styles.Text_I1006_29118_55_6208}>Minutes</Text>
                </View>
                <View style={styles.View_I1006_29118_55_6209}>
                  <Text style={styles.Text_I1006_29118_55_6209}>35</Text>
                </View>
              </View>
              <View style={styles.View_I1006_29118_55_6210}>
                <View style={styles.View_I1006_29118_55_6211}>
                  <View style={styles.View_I1006_29118_55_6212} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a45d3157-5c7c-4bef-9420-a7bcd856890a"
                    }}
                    style={styles.ImageBackground_I1006_29118_55_6218}
                  />
                </View>
                <View style={styles.View_I1006_29118_55_6214}>
                  <View style={styles.View_I1006_29118_55_6215}>
                    <View style={styles.View_I1006_29118_55_6216}>
                      <View style={styles.View_I1006_29118_55_6217}>
                        <Text style={styles.Text_I1006_29118_55_6217}>
                          Step 3
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1006_29119}>
        <View style={styles.View_I1006_29119_60_9795}>
          <View style={styles.View_I1006_29119_60_9796}>
            <View style={styles.View_I1006_29119_60_9797}>
              <View style={styles.View_I1006_29119_60_9798}>
                <View style={styles.View_I1006_29119_60_9799} />
              </View>
              <View style={styles.View_I1006_29119_60_9808}>
                <View style={styles.View_I1006_29119_60_9809}>
                  <View style={styles.View_I1006_29119_60_9810}>
                    <Text style={styles.Text_I1006_29119_60_9810}>
                      Pieces: 4
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I1006_29119_60_9818}>
          <View style={styles.View_I1006_29119_60_9819} />
          <View style={styles.View_I1006_29119_60_9820}>
            <View style={styles.View_I1006_29119_60_9821}>
              <View style={styles.View_I1006_29119_60_9822}>
                <Text style={styles.Text_I1006_29119_60_9822}>Minutes</Text>
              </View>
              <View style={styles.View_I1006_29119_60_9823}>
                <Text style={styles.Text_I1006_29119_60_9823}>80</Text>
              </View>
            </View>
            <View style={styles.View_I1006_29119_60_9824}>
              <View style={styles.View_I1006_29119_60_9825}>
                <View style={styles.View_I1006_29119_60_9826} />
              </View>
              <View style={styles.View_I1006_29119_60_9828}>
                <View style={styles.View_I1006_29119_60_9829}>
                  <View style={styles.View_I1006_29119_60_9830}>
                    <View style={styles.View_I1006_29119_60_9831}>
                      <Text style={styles.Text_I1006_29119_60_9831}>
                        Step 1
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
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3d549ca-11d8-4c9f-b3ce-c1703b7831a6"
          }}
          style={styles.ImageBackground_I1006_29119_60_9832}
        />
      </View>
      <View style={styles.View_1006_29120}>
        <View style={styles.View_1006_29121}>
          <Text style={styles.Text_1006_29121}>Apply Filters</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ce3bfa6-12e9-40dc-92a2-bc65da9a45c9"
          }}
          style={styles.ImageBackground_1006_29122}
        />
      </View>
      <View style={styles.View_1006_29123}>
        <View style={styles.View_I1006_29123_269_27952} />
        <View style={styles.View_I1006_29123_269_27953}>
          <View style={styles.View_I1006_29123_269_27954}>
            <View style={styles.View_I1006_29123_269_27955} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/529d832c-9e93-4784-8cb9-7119eb75725a"
              }}
              style={styles.ImageBackground_I1006_29123_269_27956}
            />
            <View style={styles.View_I1006_29123_269_27957} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0974b167-58f4-4bd1-bcf2-62a3135ee7ae"
            }}
            style={styles.ImageBackground_I1006_29123_269_27958}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3fb3752-f07a-4ddd-938a-85e110c86ac5"
            }}
            style={styles.ImageBackground_I1006_29123_269_27962}
          />
          <View style={styles.View_I1006_29123_269_27967}>
            <Text style={styles.Text_I1006_29123_269_27967}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I1006_29123_269_27968}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/816a5ea0-f4bf-46d2-8ce8-a7e7117096d4"
            }}
            style={styles.ImageBackground_I1006_29123_269_27969}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/563fc556-4405-4f56-96c8-5db677c6a388"
            }}
            style={styles.ImageBackground_I1006_29123_269_27970}
          />
        </View>
      </View>
      <View style={styles.View_1006_29124} />
      <View style={styles.View_1006_29125}>
        <View style={styles.View_1006_29126} />
        <View style={styles.View_1006_29127}>
          <View style={styles.View_1006_29128}>
            <View style={styles.View_1006_29129}>
              <View style={styles.View_1006_29130}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f960f282-5ff0-4e87-81ff-3dc372008666"
                  }}
                  style={styles.ImageBackground_1006_29131}
                />
                <View style={styles.View_1006_29132} />
              </View>
              <View style={styles.View_1006_29135}>
                <Text style={styles.Text_1006_29135}>Line Cost Details</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1006_29136}>
            <View style={styles.View_1006_29137}>
              <View style={styles.View_1006_29138}>
                <Text style={styles.Text_1006_29138}>View Info</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ecca48e-d52f-45ee-bc62-c15eac1df6bb"
                }}
                style={styles.ImageBackground_1006_29139}
              />
            </View>
          </View>
          <View style={styles.View_1006_29141} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2fc2cee-c38a-4d41-94a1-e70740ae374e"
          }}
          style={styles.ImageBackground_1006_29167}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_1006_29103: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29103_624_14690: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1006_29103_624_14691: {
    width: wp("91%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29103_624_14692: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I1006_29103_624_14693: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1006_29103_624_14694: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29103_624_14694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I1006_29103_624_14695: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29103_624_14695: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_29103_624_14696: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I1006_29103_624_14697: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29103_624_14697: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I1006_29103_624_14698: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29103_624_14698: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_29103_624_14699: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%")
  },
  View_I1006_29103_624_14703: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1006_29103_624_14700: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29103_624_14702: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1006_29103_624_14702: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_29104: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1006_29105: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-117%"),
    top: hp("0%")
  },
  View_1006_29106: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1006_29107: {
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
  View_I1006_29107_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1006_29107_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_29108: {
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
  View_I1006_29108_364_8270: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1006_29108_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_29109: {
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
  View_I1006_29109_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1006_29109_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_29110: {
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
  View_I1006_29110_364_8270: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1006_29110_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_29111: {
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
  View_I1006_29111_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1006_29111_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_29112: {
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
  View_I1006_29112_364_8270: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1006_29112_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_29113: {
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
  View_I1006_29113_364_8270: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1006_29113_364_8270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_29114: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29114_55_6101: {
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
  View_I1006_29114_55_6102: {
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
  View_I1006_29114_55_6103: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29114_55_6104: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29114_55_6105: {
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
  View_I1006_29114_55_6114: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I1006_29114_55_6115: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29114_55_6116: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29114_55_6116: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29114_55_6124: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1006_29114_55_6125: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1006_29114_55_6126: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I1006_29114_55_6127: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29114_55_6128: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29114_55_6128: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29114_55_6129: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29114_55_6129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29114_55_6130: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29114_55_6131: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29114_55_6132: {
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
  ImageBackground_I1006_29114_55_6138: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_29114_55_6134: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1006_29114_55_6135: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29114_55_6136: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29114_55_6137: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29114_55_6137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_1006_29115: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29115_55_6101: {
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
  View_I1006_29115_55_6102: {
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
  View_I1006_29115_55_6103: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29115_55_6104: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29115_55_6105: {
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
  View_I1006_29115_55_6114: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I1006_29115_55_6115: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29115_55_6116: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29115_55_6116: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29115_55_6124: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1006_29115_55_6125: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1006_29115_55_6126: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I1006_29115_55_6127: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29115_55_6128: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29115_55_6128: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29115_55_6129: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29115_55_6129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29115_55_6130: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29115_55_6131: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29115_55_6132: {
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
  ImageBackground_I1006_29115_55_6138: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_29115_55_6134: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1006_29115_55_6135: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29115_55_6136: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29115_55_6137: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29115_55_6137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_1006_29116: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29116_55_6101: {
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
  View_I1006_29116_55_6102: {
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
  View_I1006_29116_55_6103: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29116_55_6104: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29116_55_6105: {
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
  View_I1006_29116_55_6114: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I1006_29116_55_6115: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29116_55_6116: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29116_55_6116: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29116_55_6124: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1006_29116_55_6125: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1006_29116_55_6126: {
    width: wp("33%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I1006_29116_55_6127: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29116_55_6130: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29116_55_6131: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29116_55_6132: {
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
  ImageBackground_I1006_29116_55_6138: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_29116_55_6134: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1006_29116_55_6135: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29116_55_6136: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29116_55_6137: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29116_55_6137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_1006_29117: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29117_60_9795: {
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
  View_I1006_29117_60_9796: {
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
  View_I1006_29117_60_9797: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29117_60_9798: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29117_60_9799: {
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
  View_I1006_29117_60_9808: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I1006_29117_60_9809: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29117_60_9810: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29117_60_9810: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29117_60_9818: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1006_29117_60_9819: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1006_29117_60_9820: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I1006_29117_60_9821: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29117_60_9822: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29117_60_9822: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29117_60_9823: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29117_60_9823: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29117_60_9824: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29117_60_9825: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29117_60_9826: {
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
  View_I1006_29117_60_9828: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1006_29117_60_9829: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29117_60_9830: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29117_60_9831: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29117_60_9831: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_I1006_29117_60_9832: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_1006_29118: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29118_55_6180: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1006_29118_55_6181: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29118_55_6182: {
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
  View_I1006_29118_55_6183: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29118_55_6184: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29118_55_6185: {
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
  View_I1006_29118_55_6194: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I1006_29118_55_6195: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29118_55_6196: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29118_55_6196: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29118_55_6204: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29118_55_6205: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1006_29118_55_6206: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I1006_29118_55_6207: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29118_55_6208: {
    width: wp("16%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29118_55_6208: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29118_55_6209: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29118_55_6209: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29118_55_6210: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29118_55_6211: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29118_55_6212: {
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
  ImageBackground_I1006_29118_55_6218: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_29118_55_6214: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1006_29118_55_6215: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29118_55_6216: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29118_55_6217: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29118_55_6217: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_1006_29119: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29119_60_9795: {
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
  View_I1006_29119_60_9796: {
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
  View_I1006_29119_60_9797: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1006_29119_60_9798: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29119_60_9799: {
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
  View_I1006_29119_60_9808: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I1006_29119_60_9809: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29119_60_9810: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29119_60_9810: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29119_60_9818: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1006_29119_60_9819: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1006_29119_60_9820: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I1006_29119_60_9821: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29119_60_9822: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29119_60_9822: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29119_60_9823: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29119_60_9823: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I1006_29119_60_9824: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29119_60_9825: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29119_60_9826: {
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
  View_I1006_29119_60_9828: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I1006_29119_60_9829: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29119_60_9830: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_29119_60_9831: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29119_60_9831: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_I1006_29119_60_9832: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_1006_29120: {
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
  View_1006_29121: {
    width: wp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_29121: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_1006_29122: {
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
  View_1006_29123: {
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
  View_I1006_29123_269_27952: {
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
  View_I1006_29123_269_27953: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I1006_29123_269_27954: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_I1006_29123_269_27955: {
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
  ImageBackground_I1006_29123_269_27956: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I1006_29123_269_27957: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_I1006_29123_269_27958: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_I1006_29123_269_27962: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_I1006_29123_269_27967: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_29123_269_27967: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I1006_29123_269_27968: {
    flexGrow: 1,
    width: wp("66%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%")
  },
  ImageBackground_I1006_29123_269_27969: {
    width: wp("41%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_I1006_29123_269_27970: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_29124: {
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
    opacity: 0.15000000596046448
  },
  View_1006_29125: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%")
  },
  View_1006_29126: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1006_29127: {
    width: wp("91%"),
    height: hp("11%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1006_29128: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1006_29129: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1006_29130: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1006_29131: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_1006_29132: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1006_29135: {
    width: wp("46%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_29135: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_1006_29136: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_1006_29137: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1006_29138: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1006_29138: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_1006_29139: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_1006_29141: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("869%"),
    top: hp("7182%")
  },
  ImageBackground_1006_29167: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("1%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
