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
      <View style={styles.View_865_56259}>
        <View style={styles.View_865_56260}>
          <View style={styles.View_I865_56260_198_19526} />
          <View style={styles.View_I865_56260_198_19527}>
            <View style={styles.View_I865_56260_198_19528}>
              <View style={styles.View_I865_56260_198_19529}>
                <View style={styles.View_I865_56260_198_19530} />
                <View style={styles.View_I865_56260_198_19531}>
                  <View style={styles.View_I865_56260_198_19532}>
                    <View style={styles.View_I865_56260_198_19533} />
                    <View style={styles.View_I865_56260_198_19534} />
                    <View style={styles.View_I865_56260_198_19535} />
                    <View style={styles.View_I865_56260_198_19536} />
                    <View style={styles.View_I865_56260_198_19537} />
                    <View style={styles.View_I865_56260_198_19538} />
                    <View style={styles.View_I865_56260_198_19539} />
                    <View style={styles.View_I865_56260_198_19540} />
                    <View style={styles.View_I865_56260_198_19541} />
                    <View style={styles.View_I865_56260_198_19542} />
                    <View style={styles.View_I865_56260_198_19543} />
                    <View style={styles.View_I865_56260_198_19544} />
                    <View style={styles.View_I865_56260_198_19545} />
                    <View style={styles.View_I865_56260_198_19546} />
                    <View style={styles.View_I865_56260_198_19547} />
                    <View style={styles.View_I865_56260_198_19548} />
                    <View style={styles.View_I865_56260_198_19549} />
                    <View style={styles.View_I865_56260_198_19550} />
                    <View style={styles.View_I865_56260_198_19551} />
                    <View style={styles.View_I865_56260_198_19552} />
                    <View style={styles.View_I865_56260_198_19553} />
                    <View style={styles.View_I865_56260_198_19554} />
                    <View style={styles.View_I865_56260_198_19555} />
                    <View style={styles.View_I865_56260_198_19556} />
                    <View style={styles.View_I865_56260_198_19557} />
                    <View style={styles.View_I865_56260_198_19558} />
                    <View style={styles.View_I865_56260_198_19559} />
                    <View style={styles.View_I865_56260_198_19560} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I865_56260_198_19561}>
              <View style={styles.View_I865_56260_198_19562} />
              <View style={styles.View_I865_56260_198_19563}>
                <View style={styles.View_I865_56260_198_19564}>
                  <View style={styles.View_I865_56260_198_19565}>
                    <View style={styles.View_I865_56260_198_19566}>
                      <Text style={styles.Text_I865_56260_198_19566}>
                        Hiking Track Pants - HTP324
                      </Text>
                    </View>
                    <View style={styles.View_I865_56260_198_19567}>
                      <Text style={styles.Text_I865_56260_198_19567}>
                        Style
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_56260_198_19568}>
                  <View style={styles.View_I865_56260_198_19569}>
                    <Text style={styles.Text_I865_56260_198_19569}>
                      H&amp;M
                    </Text>
                  </View>
                  <View style={styles.View_I865_56260_198_19570}>
                    <Text style={styles.Text_I865_56260_198_19570}>Buyer </Text>
                  </View>
                </View>
                <View style={styles.View_I865_56260_198_19571}>
                  <View style={styles.View_I865_56260_198_19572}>
                    <View style={styles.View_I865_56260_198_19573}>
                      <View style={styles.View_I865_56260_198_19573_364_8270}>
                        <Text style={styles.Text_I865_56260_198_19573_364_8270}>
                          More
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I865_56260_198_19574}>
                      <View style={styles.View_I865_56260_198_19574_364_8270}>
                        <Text style={styles.Text_I865_56260_198_19574_364_8270}>
                          View
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_56260_198_19575}>
                  <View style={styles.View_I865_56260_198_19576}>
                    <Text style={styles.Text_I865_56260_198_19576}>Active</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bf70a94-0017-4b5c-aa6b-09e35bff4c91"
                    }}
                    style={styles.ImageBackground_I865_56260_198_19577}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_865_56261}>
          <View style={styles.View_I865_56261_198_19526} />
          <View style={styles.View_I865_56261_198_19527}>
            <View style={styles.View_I865_56261_198_19528}>
              <View style={styles.View_I865_56261_198_19529}>
                <View style={styles.View_I865_56261_198_19530} />
                <View style={styles.View_I865_56261_198_19531}>
                  <View style={styles.View_I865_56261_198_19532}>
                    <View style={styles.View_I865_56261_198_19533} />
                    <View style={styles.View_I865_56261_198_19534} />
                    <View style={styles.View_I865_56261_198_19535} />
                    <View style={styles.View_I865_56261_198_19536} />
                    <View style={styles.View_I865_56261_198_19537} />
                    <View style={styles.View_I865_56261_198_19538} />
                    <View style={styles.View_I865_56261_198_19539} />
                    <View style={styles.View_I865_56261_198_19540} />
                    <View style={styles.View_I865_56261_198_19541} />
                    <View style={styles.View_I865_56261_198_19542} />
                    <View style={styles.View_I865_56261_198_19543} />
                    <View style={styles.View_I865_56261_198_19544} />
                    <View style={styles.View_I865_56261_198_19545} />
                    <View style={styles.View_I865_56261_198_19546} />
                    <View style={styles.View_I865_56261_198_19547} />
                    <View style={styles.View_I865_56261_198_19548} />
                    <View style={styles.View_I865_56261_198_19549} />
                    <View style={styles.View_I865_56261_198_19550} />
                    <View style={styles.View_I865_56261_198_19551} />
                    <View style={styles.View_I865_56261_198_19552} />
                    <View style={styles.View_I865_56261_198_19553} />
                    <View style={styles.View_I865_56261_198_19554} />
                    <View style={styles.View_I865_56261_198_19555} />
                    <View style={styles.View_I865_56261_198_19556} />
                    <View style={styles.View_I865_56261_198_19557} />
                    <View style={styles.View_I865_56261_198_19558} />
                    <View style={styles.View_I865_56261_198_19559} />
                    <View style={styles.View_I865_56261_198_19560} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I865_56261_198_19561}>
              <View style={styles.View_I865_56261_198_19562} />
              <View style={styles.View_I865_56261_198_19563}>
                <View style={styles.View_I865_56261_198_19564}>
                  <View style={styles.View_I865_56261_198_19565}>
                    <View style={styles.View_I865_56261_198_19566}>
                      <Text style={styles.Text_I865_56261_198_19566}>
                        Hiking Track Pants - HTP324
                      </Text>
                    </View>
                    <View style={styles.View_I865_56261_198_19567}>
                      <Text style={styles.Text_I865_56261_198_19567}>
                        Style
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_56261_198_19568}>
                  <View style={styles.View_I865_56261_198_19569}>
                    <Text style={styles.Text_I865_56261_198_19569}>
                      H&amp;M
                    </Text>
                  </View>
                  <View style={styles.View_I865_56261_198_19570}>
                    <Text style={styles.Text_I865_56261_198_19570}>Buyer </Text>
                  </View>
                </View>
                <View style={styles.View_I865_56261_198_19571}>
                  <View style={styles.View_I865_56261_198_19572}>
                    <View style={styles.View_I865_56261_198_19573}>
                      <View style={styles.View_I865_56261_198_19573_364_8270}>
                        <Text style={styles.Text_I865_56261_198_19573_364_8270}>
                          More
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I865_56261_198_19574}>
                      <View style={styles.View_I865_56261_198_19574_364_8270}>
                        <Text style={styles.Text_I865_56261_198_19574_364_8270}>
                          View
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_56261_198_19575}>
                  <View style={styles.View_I865_56261_198_19576}>
                    <Text style={styles.Text_I865_56261_198_19576}>Active</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64616982-97d4-46f3-9702-2e8f5816354e"
                    }}
                    style={styles.ImageBackground_I865_56261_198_19577}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_865_56262}>
          <View style={styles.View_865_56263}>
            <View style={styles.View_I865_56263_198_19470} />
            <View style={styles.View_I865_56263_198_19471}>
              <View style={styles.View_I865_56263_198_19472}>
                <View style={styles.View_I865_56263_198_19473}>
                  <View style={styles.View_I865_56263_198_19474} />
                  <View style={styles.View_I865_56263_198_19475}>
                    <View style={styles.View_I865_56263_198_19476}>
                      <View style={styles.View_I865_56263_198_19477} />
                      <View style={styles.View_I865_56263_198_19478} />
                      <View style={styles.View_I865_56263_198_19479} />
                      <View style={styles.View_I865_56263_198_19480} />
                      <View style={styles.View_I865_56263_198_19481} />
                      <View style={styles.View_I865_56263_198_19482} />
                      <View style={styles.View_I865_56263_198_19483} />
                      <View style={styles.View_I865_56263_198_19484} />
                      <View style={styles.View_I865_56263_198_19485} />
                      <View style={styles.View_I865_56263_198_19486} />
                      <View style={styles.View_I865_56263_198_19487} />
                      <View style={styles.View_I865_56263_198_19488} />
                      <View style={styles.View_I865_56263_198_19489} />
                      <View style={styles.View_I865_56263_198_19490} />
                      <View style={styles.View_I865_56263_198_19491} />
                      <View style={styles.View_I865_56263_198_19492} />
                      <View style={styles.View_I865_56263_198_19493} />
                      <View style={styles.View_I865_56263_198_19494} />
                      <View style={styles.View_I865_56263_198_19495} />
                      <View style={styles.View_I865_56263_198_19496} />
                      <View style={styles.View_I865_56263_198_19497} />
                      <View style={styles.View_I865_56263_198_19498} />
                      <View style={styles.View_I865_56263_198_19499} />
                      <View style={styles.View_I865_56263_198_19500} />
                      <View style={styles.View_I865_56263_198_19501} />
                      <View style={styles.View_I865_56263_198_19502} />
                      <View style={styles.View_I865_56263_198_19503} />
                      <View style={styles.View_I865_56263_198_19504} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I865_56263_198_19505}>
                <View style={styles.View_I865_56263_198_19506} />
                <View style={styles.View_I865_56263_198_19507}>
                  <View style={styles.View_I865_56263_198_19508}>
                    <View style={styles.View_I865_56263_198_19509}>
                      <View style={styles.View_I865_56263_198_19510}>
                        <Text style={styles.Text_I865_56263_198_19510}>
                          Hiking Track Pants - HTP324
                        </Text>
                      </View>
                      <View style={styles.View_I865_56263_198_19511}>
                        <Text style={styles.Text_I865_56263_198_19511}>
                          Style
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_56263_198_19512}>
                    <View style={styles.View_I865_56263_198_19513}>
                      <Text style={styles.Text_I865_56263_198_19513}>
                        H&amp;M
                      </Text>
                    </View>
                    <View style={styles.View_I865_56263_198_19514}>
                      <Text style={styles.Text_I865_56263_198_19514}>
                        Buyer{" "}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_56263_198_19515}>
                    <View style={styles.View_I865_56263_198_19516}>
                      <View style={styles.View_I865_56263_198_19517}>
                        <View style={styles.View_I865_56263_198_19517_364_8270}>
                          <Text
                            style={styles.Text_I865_56263_198_19517_364_8270}
                          >
                            More
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I865_56263_198_19518}>
                        <View style={styles.View_I865_56263_198_19518_364_8270}>
                          <Text
                            style={styles.Text_I865_56263_198_19518_364_8270}
                          >
                            View
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_56263_198_19635}>
                    <View style={styles.View_I865_56263_198_19636}>
                      <Text style={styles.Text_I865_56263_198_19636}>
                        Active
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62a7206c-ec7a-4d22-bb92-93b941a41130"
                      }}
                      style={styles.ImageBackground_I865_56263_198_21285}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_865_56264}>
          <View style={styles.View_865_56265}>
            <View style={styles.View_I865_56265_198_19470} />
            <View style={styles.View_I865_56265_198_19471}>
              <View style={styles.View_I865_56265_198_19472}>
                <View style={styles.View_I865_56265_198_19473}>
                  <View style={styles.View_I865_56265_198_19474} />
                  <View style={styles.View_I865_56265_198_19475}>
                    <View style={styles.View_I865_56265_198_19476}>
                      <View style={styles.View_I865_56265_198_19477} />
                      <View style={styles.View_I865_56265_198_19478} />
                      <View style={styles.View_I865_56265_198_19479} />
                      <View style={styles.View_I865_56265_198_19480} />
                      <View style={styles.View_I865_56265_198_19481} />
                      <View style={styles.View_I865_56265_198_19482} />
                      <View style={styles.View_I865_56265_198_19483} />
                      <View style={styles.View_I865_56265_198_19484} />
                      <View style={styles.View_I865_56265_198_19485} />
                      <View style={styles.View_I865_56265_198_19486} />
                      <View style={styles.View_I865_56265_198_19487} />
                      <View style={styles.View_I865_56265_198_19488} />
                      <View style={styles.View_I865_56265_198_19489} />
                      <View style={styles.View_I865_56265_198_19490} />
                      <View style={styles.View_I865_56265_198_19491} />
                      <View style={styles.View_I865_56265_198_19492} />
                      <View style={styles.View_I865_56265_198_19493} />
                      <View style={styles.View_I865_56265_198_19494} />
                      <View style={styles.View_I865_56265_198_19495} />
                      <View style={styles.View_I865_56265_198_19496} />
                      <View style={styles.View_I865_56265_198_19497} />
                      <View style={styles.View_I865_56265_198_19498} />
                      <View style={styles.View_I865_56265_198_19499} />
                      <View style={styles.View_I865_56265_198_19500} />
                      <View style={styles.View_I865_56265_198_19501} />
                      <View style={styles.View_I865_56265_198_19502} />
                      <View style={styles.View_I865_56265_198_19503} />
                      <View style={styles.View_I865_56265_198_19504} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I865_56265_198_19505}>
                <View style={styles.View_I865_56265_198_19506} />
                <View style={styles.View_I865_56265_198_19507}>
                  <View style={styles.View_I865_56265_198_19508}>
                    <View style={styles.View_I865_56265_198_19509}>
                      <View style={styles.View_I865_56265_198_19510}>
                        <Text style={styles.Text_I865_56265_198_19510}>
                          Hiking Track Pants - HTP324
                        </Text>
                      </View>
                      <View style={styles.View_I865_56265_198_19511}>
                        <Text style={styles.Text_I865_56265_198_19511}>
                          Style
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_56265_198_19512}>
                    <View style={styles.View_I865_56265_198_19513}>
                      <Text style={styles.Text_I865_56265_198_19513}>
                        H&amp;M
                      </Text>
                    </View>
                    <View style={styles.View_I865_56265_198_19514}>
                      <Text style={styles.Text_I865_56265_198_19514}>
                        Buyer{" "}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_56265_198_19515}>
                    <View style={styles.View_I865_56265_198_19516}>
                      <View style={styles.View_I865_56265_198_19517}>
                        <View style={styles.View_I865_56265_198_19517_364_8270}>
                          <Text
                            style={styles.Text_I865_56265_198_19517_364_8270}
                          >
                            More
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I865_56265_198_19518}>
                        <View style={styles.View_I865_56265_198_19518_364_8270}>
                          <Text
                            style={styles.Text_I865_56265_198_19518_364_8270}
                          >
                            View
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_56265_198_19635}>
                    <View style={styles.View_I865_56265_198_19636}>
                      <Text style={styles.Text_I865_56265_198_19636}>
                        Active
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4163ffba-c5f7-4ecd-a165-9abde2e8b8c0"
                      }}
                      style={styles.ImageBackground_I865_56265_198_21285}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_865_56266}>
          <View style={styles.View_I865_56266_198_19581} />
          <View style={styles.View_I865_56266_198_19582}>
            <View style={styles.View_I865_56266_198_19583}>
              <View style={styles.View_I865_56266_198_19584}>
                <View style={styles.View_I865_56266_198_19585} />
                <View style={styles.View_I865_56266_198_19586}>
                  <View style={styles.View_I865_56266_198_19587}>
                    <View style={styles.View_I865_56266_198_19588} />
                    <View style={styles.View_I865_56266_198_19589} />
                    <View style={styles.View_I865_56266_198_19590} />
                    <View style={styles.View_I865_56266_198_19591} />
                    <View style={styles.View_I865_56266_198_19592} />
                    <View style={styles.View_I865_56266_198_19593} />
                    <View style={styles.View_I865_56266_198_19594} />
                    <View style={styles.View_I865_56266_198_19595} />
                    <View style={styles.View_I865_56266_198_19596} />
                    <View style={styles.View_I865_56266_198_19597} />
                    <View style={styles.View_I865_56266_198_19598} />
                    <View style={styles.View_I865_56266_198_19599} />
                    <View style={styles.View_I865_56266_198_19600} />
                    <View style={styles.View_I865_56266_198_19601} />
                    <View style={styles.View_I865_56266_198_19602} />
                    <View style={styles.View_I865_56266_198_19603} />
                    <View style={styles.View_I865_56266_198_19604} />
                    <View style={styles.View_I865_56266_198_19605} />
                    <View style={styles.View_I865_56266_198_19606} />
                    <View style={styles.View_I865_56266_198_19607} />
                    <View style={styles.View_I865_56266_198_19608} />
                    <View style={styles.View_I865_56266_198_19609} />
                    <View style={styles.View_I865_56266_198_19610} />
                    <View style={styles.View_I865_56266_198_19611} />
                    <View style={styles.View_I865_56266_198_19612} />
                    <View style={styles.View_I865_56266_198_19613} />
                    <View style={styles.View_I865_56266_198_19614} />
                    <View style={styles.View_I865_56266_198_19615} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I865_56266_198_19616}>
              <View style={styles.View_I865_56266_198_19617} />
              <View style={styles.View_I865_56266_198_19618}>
                <View style={styles.View_I865_56266_198_19619}>
                  <View style={styles.View_I865_56266_198_19620}>
                    <View style={styles.View_I865_56266_198_19621}>
                      <Text style={styles.Text_I865_56266_198_19621}>
                        Hiking Track Pants - HTP324
                      </Text>
                    </View>
                    <View style={styles.View_I865_56266_198_19622}>
                      <Text style={styles.Text_I865_56266_198_19622}>
                        Style
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_56266_198_19623}>
                  <View style={styles.View_I865_56266_198_19624}>
                    <Text style={styles.Text_I865_56266_198_19624}>
                      H&amp;M
                    </Text>
                  </View>
                  <View style={styles.View_I865_56266_198_19625}>
                    <Text style={styles.Text_I865_56266_198_19625}>Buyer </Text>
                  </View>
                </View>
                <View style={styles.View_I865_56266_198_19626}>
                  <View style={styles.View_I865_56266_198_19627}>
                    <View style={styles.View_I865_56266_198_19628}>
                      <View style={styles.View_I865_56266_198_19628_364_8270}>
                        <Text style={styles.Text_I865_56266_198_19628_364_8270}>
                          More
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I865_56266_198_19629}>
                      <View style={styles.View_I865_56266_198_19629_364_8270}>
                        <Text style={styles.Text_I865_56266_198_19629_364_8270}>
                          View
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_56266_198_19638}>
                  <View style={styles.View_I865_56266_198_19639}>
                    <Text style={styles.Text_I865_56266_198_19639}>Active</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbcce29f-a947-4912-8c00-93e33d756114"
                    }}
                    style={styles.ImageBackground_I865_56266_198_21308}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_865_56267}>
          <View style={styles.View_I865_56267_198_19581} />
          <View style={styles.View_I865_56267_198_19582}>
            <View style={styles.View_I865_56267_198_19583}>
              <View style={styles.View_I865_56267_198_19584}>
                <View style={styles.View_I865_56267_198_19585} />
                <View style={styles.View_I865_56267_198_19586}>
                  <View style={styles.View_I865_56267_198_19587}>
                    <View style={styles.View_I865_56267_198_19588} />
                    <View style={styles.View_I865_56267_198_19589} />
                    <View style={styles.View_I865_56267_198_19590} />
                    <View style={styles.View_I865_56267_198_19591} />
                    <View style={styles.View_I865_56267_198_19592} />
                    <View style={styles.View_I865_56267_198_19593} />
                    <View style={styles.View_I865_56267_198_19594} />
                    <View style={styles.View_I865_56267_198_19595} />
                    <View style={styles.View_I865_56267_198_19596} />
                    <View style={styles.View_I865_56267_198_19597} />
                    <View style={styles.View_I865_56267_198_19598} />
                    <View style={styles.View_I865_56267_198_19599} />
                    <View style={styles.View_I865_56267_198_19600} />
                    <View style={styles.View_I865_56267_198_19601} />
                    <View style={styles.View_I865_56267_198_19602} />
                    <View style={styles.View_I865_56267_198_19603} />
                    <View style={styles.View_I865_56267_198_19604} />
                    <View style={styles.View_I865_56267_198_19605} />
                    <View style={styles.View_I865_56267_198_19606} />
                    <View style={styles.View_I865_56267_198_19607} />
                    <View style={styles.View_I865_56267_198_19608} />
                    <View style={styles.View_I865_56267_198_19609} />
                    <View style={styles.View_I865_56267_198_19610} />
                    <View style={styles.View_I865_56267_198_19611} />
                    <View style={styles.View_I865_56267_198_19612} />
                    <View style={styles.View_I865_56267_198_19613} />
                    <View style={styles.View_I865_56267_198_19614} />
                    <View style={styles.View_I865_56267_198_19615} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I865_56267_198_19616}>
              <View style={styles.View_I865_56267_198_19617} />
              <View style={styles.View_I865_56267_198_19618}>
                <View style={styles.View_I865_56267_198_19619}>
                  <View style={styles.View_I865_56267_198_19620}>
                    <View style={styles.View_I865_56267_198_19621}>
                      <Text style={styles.Text_I865_56267_198_19621}>
                        Hiking Track Pants - HTP324
                      </Text>
                    </View>
                    <View style={styles.View_I865_56267_198_19622}>
                      <Text style={styles.Text_I865_56267_198_19622}>
                        Style
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_56267_198_19623}>
                  <View style={styles.View_I865_56267_198_19624}>
                    <Text style={styles.Text_I865_56267_198_19624}>
                      H&amp;M
                    </Text>
                  </View>
                  <View style={styles.View_I865_56267_198_19625}>
                    <Text style={styles.Text_I865_56267_198_19625}>Buyer </Text>
                  </View>
                </View>
                <View style={styles.View_I865_56267_198_19626}>
                  <View style={styles.View_I865_56267_198_19627}>
                    <View style={styles.View_I865_56267_198_19628}>
                      <View style={styles.View_I865_56267_198_19628_364_8270}>
                        <Text style={styles.Text_I865_56267_198_19628_364_8270}>
                          More
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_I865_56267_198_19629}>
                      <View style={styles.View_I865_56267_198_19629_364_8270}>
                        <Text style={styles.Text_I865_56267_198_19629_364_8270}>
                          View
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_56267_198_19638}>
                  <View style={styles.View_I865_56267_198_19639}>
                    <Text style={styles.Text_I865_56267_198_19639}>Active</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2312e596-9281-4d85-87f1-b82a481c77ff"
                    }}
                    style={styles.ImageBackground_I865_56267_198_21308}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_56268}>
        <View style={styles.View_865_56269}>
          <View style={styles.View_865_56270}>
            <View style={styles.View_865_56271}>
              <View style={styles.View_I865_56271_364_8270}>
                <Text style={styles.Text_I865_56271_364_8270}>Live Status</Text>
              </View>
            </View>
            <View style={styles.View_865_56272}>
              <View style={styles.View_I865_56272_364_8270}>
                <Text style={styles.Text_I865_56272_364_8270}>Production</Text>
              </View>
            </View>
            <View style={styles.View_865_56273}>
              <View style={styles.View_I865_56273_364_8270}>
                <Text style={styles.Text_I865_56273_364_8270}>Punctuality</Text>
              </View>
            </View>
            <View style={styles.View_865_56274}>
              <View style={styles.View_I865_56274_364_8270}>
                <Text style={styles.Text_I865_56274_364_8270}>Short Stops</Text>
              </View>
            </View>
            <View style={styles.View_865_56275}>
              <View style={styles.View_I865_56275_364_8270}>
                <Text style={styles.Text_I865_56275_364_8270}>Down Time</Text>
              </View>
            </View>
            <View style={styles.View_865_56276}>
              <View style={styles.View_I865_56276_364_8270}>
                <Text style={styles.Text_I865_56276_364_8270}>Speed Loss</Text>
              </View>
            </View>
            <View style={styles.View_865_56277}>
              <View style={styles.View_I865_56277_364_8270}>
                <Text style={styles.Text_I865_56277_364_8270}>Line Cost</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_56278} />
      <View style={styles.View_865_59266}>
        <View style={styles.View_I865_59266_736_46416}>
          <View style={styles.View_I865_59266_736_46417} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/465f6fef-96dd-49b2-af48-87307b19dcb7"
            }}
            style={styles.ImageBackground_I865_59266_736_46418}
          />
          <View style={styles.View_I865_59266_736_46422}>
            <View style={styles.View_I865_59266_736_46422_4_344}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31341b5b-034a-4e96-b3de-06fd15e3ac3c"
                }}
                style={styles.ImageBackground_I865_59266_736_46422_4_344_4_337}
              />
              <View style={styles.View_I865_59266_736_46422_4_344_4_340}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4a662d6-3717-4e2f-9931-2feda77c5db3"
                  }}
                  style={
                    styles.ImageBackground_I865_59266_736_46422_4_344_4_341
                  }
                />
                <View style={styles.View_I865_59266_736_46422_4_344_4_342}>
                  <Text style={styles.Text_I865_59266_736_46422_4_344_4_342}>
                    2
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I865_59266_736_46423}>
            <Text style={styles.Text_I865_59266_736_46423}>
              Live Production
            </Text>
          </View>
        </View>
        <View style={styles.View_I865_59266_736_46424}>
          <View style={styles.View_I865_59266_736_46425}>
            <View style={styles.View_I865_59266_736_46426} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7045d3f1-dbf6-424e-bf76-e7ccbf803867"
              }}
              style={styles.ImageBackground_I865_59266_736_46427}
            />
            <View style={styles.View_I865_59266_736_46428} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08a251ce-5b9a-42cf-8369-3f59fa0d3d8f"
            }}
            style={styles.ImageBackground_I865_59266_736_46429}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70559f66-ae15-4f8c-aafe-321c4f50d695"
            }}
            style={styles.ImageBackground_I865_59266_736_46433}
          />
          <View style={styles.View_I865_59266_736_46438}>
            <Text style={styles.Text_I865_59266_736_46438}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_865_56280}>
        <View style={styles.View_865_56281}>
          <View style={styles.View_865_56282}>
            <Text style={styles.Text_865_56282}>
              Tirupur/Factory 1/ Floor 4
            </Text>
          </View>
          <View style={styles.View_865_56283}>
            <View style={styles.View_865_56284}>
              <Text style={styles.Text_865_56284}>Apply Filters</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a14b1472-021a-4f55-887d-8ca73004c1a3"
              }}
              style={styles.ImageBackground_865_56285}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_865_56286} />
      <View style={styles.View_865_56287}>
        <View style={styles.View_865_56288}>
          <View style={styles.View_865_56289}>
            <View style={styles.View_865_56290}>
              <View style={styles.View_865_56291} />
            </View>
          </View>
          <View style={styles.View_865_56292} />
          <View style={styles.View_865_56295}>
            <View style={styles.View_865_56296}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/957a4306-5852-4225-895f-08b4ac352f53"
                }}
                style={styles.ImageBackground_865_56297}
              />
              <View style={styles.View_865_56298}>
                <View style={styles.View_865_56299}>
                  <Text style={styles.Text_865_56299}>Filters</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c30f37ad-17a2-4b3d-bb0c-7a1e37ed140b"
                  }}
                  style={styles.ImageBackground_865_56300}
                />
              </View>
            </View>
            <View style={styles.View_865_56301}>
              <View style={styles.View_I865_56301_916_37790}>
                <View style={styles.View_I865_56301_916_37791}>
                  <View style={styles.View_I865_56301_916_37792}>
                    <Text style={styles.Text_I865_56301_916_37792}>
                      Type here to search
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I865_56301_916_37794}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6a19391-35fb-4caa-a983-7fa17beac471"
                  }}
                  style={styles.ImageBackground_I865_56301_916_37795}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_865_56302}>
          <View style={styles.View_865_56303}>
            <View style={styles.View_865_56304}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59b66ec8-7d75-4b65-b7a3-13cd7aa970ac"
                }}
                style={styles.ImageBackground_865_56305}
              />
              <View style={styles.View_865_56306}>
                <Text style={styles.Text_865_56306}>Locations</Text>
              </View>
            </View>
            <View style={styles.View_865_56307}>
              <View style={styles.View_865_56308}>
                <View style={styles.View_I865_56308_750_24081}>
                  <View style={styles.View_I865_56308_750_24082}>
                    <Text style={styles.Text_I865_56308_750_24082}>
                      Tirupur
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b45e469-f55b-4764-88e9-891a9f065599"
                    }}
                    style={styles.ImageBackground_I865_56308_750_24083}
                  />
                </View>
              </View>
              <View style={styles.View_865_56309}>
                <View style={styles.View_I865_56309_750_24086}>
                  <Text style={styles.Text_I865_56309_750_24086}>Hasaan</Text>
                </View>
              </View>
              <View style={styles.View_865_56310}>
                <View style={styles.View_I865_56310_750_24086}>
                  <Text style={styles.Text_I865_56310_750_24086}>Hasaan</Text>
                </View>
              </View>
              <View style={styles.View_865_56311}>
                <View style={styles.View_I865_56311_750_24086}>
                  <Text style={styles.Text_I865_56311_750_24086}>Tirupur</Text>
                </View>
              </View>
              <View style={styles.View_865_56312}>
                <View style={styles.View_I865_56312_750_24086}>
                  <Text style={styles.Text_I865_56312_750_24086}>Tirupur</Text>
                </View>
              </View>
              <View style={styles.View_865_56313}>
                <View style={styles.View_I865_56313_750_24086}>
                  <Text style={styles.Text_I865_56313_750_24086}>Tirupur</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_865_56314}>
            <View style={styles.View_865_56315}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a3181a1-92f9-488a-8462-1364dcc3bccf"
                }}
                style={styles.ImageBackground_865_56316}
              />
              <View style={styles.View_865_56317}>
                <Text style={styles.Text_865_56317}>Factories</Text>
              </View>
            </View>
            <View style={styles.View_865_56318}>
              <View style={styles.View_865_56319}>
                <View style={styles.View_I865_56319_750_24081}>
                  <View style={styles.View_I865_56319_750_24082}>
                    <Text style={styles.Text_I865_56319_750_24082}>
                      FACTORY 1
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a17eb876-8331-4aaa-8772-a47b89a22563"
                    }}
                    style={styles.ImageBackground_I865_56319_750_24083}
                  />
                </View>
              </View>
              <View style={styles.View_865_56320}>
                <View style={styles.View_I865_56320_750_24086}>
                  <Text style={styles.Text_I865_56320_750_24086}>
                    FACTORY 2
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_865_56321}>
            <View style={styles.View_865_56322}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c627a618-9ab9-4dd3-9f87-5895a638ae27"
                }}
                style={styles.ImageBackground_865_56323}
              />
              <View style={styles.View_865_56324}>
                <Text style={styles.Text_865_56324}>Floors</Text>
              </View>
            </View>
            <View style={styles.View_865_56325}>
              <View style={styles.View_865_56326}>
                <View style={styles.View_I865_56326_750_24081}>
                  <View style={styles.View_I865_56326_750_24082}>
                    <Text style={styles.Text_I865_56326_750_24082}>
                      FLOOR 1
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db5e4ad2-02b3-4637-b7d3-d7e8b8c3d3d7"
                    }}
                    style={styles.ImageBackground_I865_56326_750_24083}
                  />
                </View>
              </View>
              <View style={styles.View_865_56327}>
                <View style={styles.View_I865_56327_750_24086}>
                  <Text style={styles.Text_I865_56327_750_24086}>FLOOR 2</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_865_56328}>
          <View style={styles.View_865_56329} />
          <View style={styles.View_865_56330}>
            <TouchableOpacity
              style={styles.TouchableOpacity_865_56331}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("865_56054"))
              }
            >
              <View style={styles.View_865_56332}>
                <Text style={styles.Text_865_56332}>Clear</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.View_865_56333}>
              <View style={styles.View_865_56334}>
                <Text style={styles.Text_865_56334}>Apply Filters</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("117%") },
  View_865_56259: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_56260: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56260_198_19526: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56260_198_19527: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56260_198_19528: {
    width: wp("61%"),
    height: hp("85%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56260_198_19529: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56260_198_19530: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(95, 182, 51, 1)",
    borderWidth: 1
  },
  View_I865_56260_198_19531: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I865_56260_198_19532: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56260_198_19533: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56260_198_19534: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19535: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19536: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19537: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56260_198_19538: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19539: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56260_198_19540: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56260_198_19541: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56260_198_19542: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19543: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19544: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56260_198_19545: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19546: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19547: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56260_198_19548: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("24%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19549: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("48%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19550: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("72%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19551: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("6%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56260_198_19552: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("30%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19553: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("54%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56260_198_19554: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("78%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56260_198_19555: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("12%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56260_198_19556: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("36%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19557: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("60%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19558: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("18%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56260_198_19559: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("42%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19560: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("66%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56260_198_19561: {
    width: wp("61%"),
    height: hp("24%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56260_198_19562: {
    width: wp("61%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_56260_198_19563: {
    width: wp("53%"),
    height: hp("21%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I865_56260_198_19564: {
    width: wp("51%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56260_198_19565: {
    width: wp("51%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56260_198_19566: {
    width: wp("51%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56260_198_19566: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_56260_198_19567: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56260_198_19567: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_56260_198_19568: {
    width: wp("23%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56260_198_19569: {
    width: wp("23%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56260_198_19569: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_56260_198_19570: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56260_198_19570: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_56260_198_19571: {
    width: wp("52%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56260_198_19572: {
    width: wp("52%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56260_198_19573: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56260_198_19573_364_8270: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56260_198_19573_364_8270: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_56260_198_19574: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56260_198_19574_364_8270: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56260_198_19574_364_8270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_56260_198_19575: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I865_56260_198_19576: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I865_56260_198_19576: {
    color: "rgba(95, 182, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "capitalize"
  },
  ImageBackground_I865_56260_198_19577: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_56261: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("210%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56261_198_19526: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56261_198_19527: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56261_198_19528: {
    width: wp("61%"),
    height: hp("85%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56261_198_19529: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56261_198_19530: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(95, 182, 51, 1)",
    borderWidth: 1
  },
  View_I865_56261_198_19531: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I865_56261_198_19532: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56261_198_19533: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56261_198_19534: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19535: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19536: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19537: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56261_198_19538: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19539: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56261_198_19540: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56261_198_19541: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56261_198_19542: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19543: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19544: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56261_198_19545: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19546: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19547: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56261_198_19548: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("24%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19549: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("48%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19550: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("72%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19551: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("6%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56261_198_19552: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("30%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19553: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("54%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56261_198_19554: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("78%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56261_198_19555: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("12%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56261_198_19556: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("36%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19557: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("60%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19558: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("18%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56261_198_19559: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("42%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19560: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("66%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56261_198_19561: {
    width: wp("61%"),
    height: hp("24%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56261_198_19562: {
    width: wp("61%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_56261_198_19563: {
    width: wp("53%"),
    height: hp("21%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I865_56261_198_19564: {
    width: wp("51%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56261_198_19565: {
    width: wp("51%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56261_198_19566: {
    width: wp("51%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56261_198_19566: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_56261_198_19567: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56261_198_19567: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_56261_198_19568: {
    width: wp("23%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56261_198_19569: {
    width: wp("23%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56261_198_19569: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_56261_198_19570: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56261_198_19570: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_56261_198_19571: {
    width: wp("52%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56261_198_19572: {
    width: wp("52%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56261_198_19573: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56261_198_19573_364_8270: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56261_198_19573_364_8270: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_56261_198_19574: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56261_198_19574_364_8270: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56261_198_19574_364_8270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_56261_198_19575: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I865_56261_198_19576: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I865_56261_198_19576: {
    color: "rgba(95, 182, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "capitalize"
  },
  ImageBackground_I865_56261_198_19577: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_56262: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("7%")
  },
  View_865_56263: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56263_198_19470: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56263_198_19471: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56263_198_19472: {
    width: wp("61%"),
    height: hp("85%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56263_198_19473: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56263_198_19474: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 140, 22, 1)",
    borderWidth: 1
  },
  View_I865_56263_198_19475: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I865_56263_198_19476: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56263_198_19477: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19478: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19479: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19480: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19481: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56263_198_19482: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19483: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56263_198_19484: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56263_198_19485: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56263_198_19486: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56263_198_19487: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19488: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56263_198_19489: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19490: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19491: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19492: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("24%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56263_198_19493: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("48%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19494: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("72%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19495: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("6%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56263_198_19496: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("30%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19497: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("54%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56263_198_19498: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("78%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56263_198_19499: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("12%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56263_198_19500: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("36%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19501: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("60%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19502: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("18%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56263_198_19503: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("42%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19504: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("66%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56263_198_19505: {
    width: wp("61%"),
    height: hp("24%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56263_198_19506: {
    width: wp("61%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_56263_198_19507: {
    width: wp("53%"),
    height: hp("21%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I865_56263_198_19508: {
    width: wp("51%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56263_198_19509: {
    width: wp("51%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56263_198_19510: {
    width: wp("51%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56263_198_19510: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_56263_198_19511: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56263_198_19511: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_56263_198_19512: {
    width: wp("23%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56263_198_19513: {
    width: wp("23%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56263_198_19513: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_56263_198_19514: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56263_198_19514: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_56263_198_19515: {
    width: wp("52%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56263_198_19516: {
    width: wp("52%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56263_198_19517: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56263_198_19517_364_8270: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56263_198_19517_364_8270: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_56263_198_19518: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56263_198_19518_364_8270: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56263_198_19518_364_8270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_56263_198_19635: {
    width: wp("17%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_I865_56263_198_19636: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_I865_56263_198_19636: {
    color: "rgba(239, 140, 22, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "capitalize"
  },
  ImageBackground_I865_56263_198_21285: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_56264: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("280%"),
    top: hp("7%")
  },
  View_865_56265: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56265_198_19470: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56265_198_19471: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56265_198_19472: {
    width: wp("61%"),
    height: hp("85%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56265_198_19473: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56265_198_19474: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 140, 22, 1)",
    borderWidth: 1
  },
  View_I865_56265_198_19475: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I865_56265_198_19476: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56265_198_19477: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19478: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19479: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19480: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19481: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56265_198_19482: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19483: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56265_198_19484: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56265_198_19485: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56265_198_19486: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56265_198_19487: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19488: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56265_198_19489: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19490: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19491: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19492: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("24%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56265_198_19493: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("48%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19494: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("72%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19495: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("6%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56265_198_19496: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("30%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19497: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("54%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56265_198_19498: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("78%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56265_198_19499: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("12%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56265_198_19500: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("36%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19501: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("60%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19502: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("18%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56265_198_19503: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("42%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19504: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("66%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56265_198_19505: {
    width: wp("61%"),
    height: hp("24%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56265_198_19506: {
    width: wp("61%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_56265_198_19507: {
    width: wp("53%"),
    height: hp("21%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I865_56265_198_19508: {
    width: wp("51%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56265_198_19509: {
    width: wp("51%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56265_198_19510: {
    width: wp("51%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56265_198_19510: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_56265_198_19511: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56265_198_19511: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_56265_198_19512: {
    width: wp("23%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56265_198_19513: {
    width: wp("23%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56265_198_19513: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_56265_198_19514: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56265_198_19514: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_56265_198_19515: {
    width: wp("52%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56265_198_19516: {
    width: wp("52%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56265_198_19517: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56265_198_19517_364_8270: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56265_198_19517_364_8270: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_56265_198_19518: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56265_198_19518_364_8270: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56265_198_19518_364_8270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_56265_198_19635: {
    width: wp("17%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_I865_56265_198_19636: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_I865_56265_198_19636: {
    color: "rgba(239, 140, 22, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "capitalize"
  },
  ImageBackground_I865_56265_198_21285: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_56266: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("140%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56266_198_19581: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56266_198_19582: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56266_198_19583: {
    width: wp("61%"),
    height: hp("85%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56266_198_19584: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56266_198_19585: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(219, 22, 22, 1)",
    borderWidth: 1
  },
  View_I865_56266_198_19586: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I865_56266_198_19587: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56266_198_19588: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19589: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56266_198_19590: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56266_198_19591: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56266_198_19592: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56266_198_19593: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19594: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19595: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19596: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19597: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56266_198_19598: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56266_198_19599: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19600: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19601: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56266_198_19602: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56266_198_19603: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("24%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19604: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("48%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56266_198_19605: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("72%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56266_198_19606: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("6%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19607: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("30%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19608: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("54%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19609: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("78%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19610: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("12%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19611: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("36%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19612: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("60%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56266_198_19613: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("18%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56266_198_19614: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("42%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56266_198_19615: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("66%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56266_198_19616: {
    width: wp("61%"),
    height: hp("24%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56266_198_19617: {
    width: wp("61%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_56266_198_19618: {
    width: wp("53%"),
    height: hp("21%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I865_56266_198_19619: {
    width: wp("51%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56266_198_19620: {
    width: wp("51%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56266_198_19621: {
    width: wp("51%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56266_198_19621: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_56266_198_19622: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56266_198_19622: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_56266_198_19623: {
    width: wp("23%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56266_198_19624: {
    width: wp("23%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56266_198_19624: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_56266_198_19625: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56266_198_19625: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_56266_198_19626: {
    width: wp("52%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56266_198_19627: {
    width: wp("52%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56266_198_19628: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56266_198_19628_364_8270: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56266_198_19628_364_8270: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_56266_198_19629: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56266_198_19629_364_8270: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56266_198_19629_364_8270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_56266_198_19638: {
    width: wp("17%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_I865_56266_198_19639: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_I865_56266_198_19639: {
    color: "rgba(219, 22, 22, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "capitalize"
  },
  ImageBackground_I865_56266_198_21308: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_56267: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("350%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56267_198_19581: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56267_198_19582: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56267_198_19583: {
    width: wp("61%"),
    height: hp("85%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56267_198_19584: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56267_198_19585: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(219, 22, 22, 1)",
    borderWidth: 1
  },
  View_I865_56267_198_19586: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I865_56267_198_19587: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_56267_198_19588: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19589: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56267_198_19590: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56267_198_19591: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56267_198_19592: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56267_198_19593: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19594: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19595: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19596: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19597: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56267_198_19598: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56267_198_19599: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19600: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19601: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56267_198_19602: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_56267_198_19603: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("24%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19604: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("48%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56267_198_19605: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("72%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56267_198_19606: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("6%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19607: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("30%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19608: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("54%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19609: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("78%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19610: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("12%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19611: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("36%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19612: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("60%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56267_198_19613: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("18%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_56267_198_19614: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("42%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56267_198_19615: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("66%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_56267_198_19616: {
    width: wp("61%"),
    height: hp("24%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56267_198_19617: {
    width: wp("61%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_56267_198_19618: {
    width: wp("53%"),
    height: hp("21%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I865_56267_198_19619: {
    width: wp("51%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56267_198_19620: {
    width: wp("51%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56267_198_19621: {
    width: wp("51%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56267_198_19621: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_56267_198_19622: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56267_198_19622: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_56267_198_19623: {
    width: wp("23%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56267_198_19624: {
    width: wp("23%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56267_198_19624: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_56267_198_19625: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_56267_198_19625: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_56267_198_19626: {
    width: wp("52%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_56267_198_19627: {
    width: wp("52%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56267_198_19628: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56267_198_19628_364_8270: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56267_198_19628_364_8270: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_56267_198_19629: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56267_198_19629_364_8270: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56267_198_19629_364_8270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_56267_198_19638: {
    width: wp("17%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_I865_56267_198_19639: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_I865_56267_198_19639: {
    color: "rgba(219, 22, 22, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "capitalize"
  },
  ImageBackground_I865_56267_198_21308: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_56268: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_56269: {
    width: wp("207%"),
    minWidth: wp("207%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_56270: {
    width: wp("207%"),
    minWidth: wp("207%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_56271: {
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
  View_I865_56271_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56271_364_8270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56272: {
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
  View_I865_56272_364_8270: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56272_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56273: {
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
  View_I865_56273_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56273_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56274: {
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
  View_I865_56274_364_8270: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56274_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56275: {
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
  View_I865_56275_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56275_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56276: {
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
  View_I865_56276_364_8270: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56276_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56277: {
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
  View_I865_56277_364_8270: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56277_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56278: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_865_59266: {
    width: wp("100%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_59266_736_46416: {
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
  View_I865_59266_736_46417: {
    width: wp("100%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I865_59266_736_46418: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I865_59266_736_46422: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_59266_736_46422_4_344: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I865_59266_736_46422_4_344_4_337: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_59266_736_46422_4_344_4_340: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I865_59266_736_46422_4_344_4_341: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_59266_736_46422_4_344_4_342: {
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I865_59266_736_46422_4_344_4_342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I865_59266_736_46423: {
    width: wp("24%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    justifyContent: "flex-start"
  },
  Text_I865_59266_736_46423: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "capitalize"
  },
  View_I865_59266_736_46424: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_59266_736_46425: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_I865_59266_736_46426: {
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
  ImageBackground_I865_59266_736_46427: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I865_59266_736_46428: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_I865_59266_736_46429: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_I865_59266_736_46433: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  View_I865_59266_736_46438: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_59266_736_46438: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_865_56280: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%")
  },
  View_865_56281: {
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
  View_865_56282: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_56282: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56283: {
    width: wp("20%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  View_865_56284: {
    width: wp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_56284: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_865_56285: {
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
  View_865_56286: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.15000000596046448
  },
  View_865_56287: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%")
  },
  View_865_56288: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_56289: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_56290: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_56291: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85%"),
    minHeight: hp("85%"),
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
  View_865_56292: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%")
  },
  View_865_56295: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_865_56296: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_865_56297: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%")
  },
  View_865_56298: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_865_56299: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_56299: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_865_56300: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("0%")
  },
  View_865_56301: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56301_916_37790: {
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
  View_I865_56301_916_37791: {
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
  View_I865_56301_916_37792: {
    width: wp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I865_56301_916_37792: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_I865_56301_916_37794: {
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
  ImageBackground_I865_56301_916_37795: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_865_56302: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_56303: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_56304: {
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
  ImageBackground_865_56305: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_865_56306: {
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
  Text_865_56306: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_865_56307: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_865_56308: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 207, 243, 1)"
  },
  View_I865_56308_750_24081: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56308_750_24082: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I865_56308_750_24082: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_I865_56308_750_24083: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_865_56309: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56309_750_24086: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56309_750_24086: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56310: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56310_750_24086: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56310_750_24086: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56311: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56311_750_24086: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56311_750_24086: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56312: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56312_750_24086: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56312_750_24086: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56313: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56313_750_24086: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56313_750_24086: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56314: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  View_865_56315: {
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
  ImageBackground_865_56316: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_865_56317: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_56317: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_865_56318: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_865_56319: {
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
  View_I865_56319_750_24081: {
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
  View_I865_56319_750_24082: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I865_56319_750_24082: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_I865_56319_750_24083: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_865_56320: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56320_750_24086: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56320_750_24086: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56321: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%")
  },
  View_865_56322: {
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
  ImageBackground_865_56323: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_865_56324: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_56324: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_865_56325: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_865_56326: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 207, 243, 1)"
  },
  View_I865_56326_750_24081: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56326_750_24082: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I865_56326_750_24082: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_I865_56326_750_24083: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_865_56327: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_56327_750_24086: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_56327_750_24086: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_56328: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%")
  },
  View_865_56329: {
    width: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_56330: {
    width: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%")
  },
  TouchableOpacity_865_56331: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_865_56332: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_865_56332: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_56333: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_56334: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_865_56334: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
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
