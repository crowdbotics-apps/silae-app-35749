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
      <View style={styles.View_865_74435}>
        <View style={styles.View_865_74436}>
          <View style={styles.View_865_74437}>
            <View style={styles.View_865_74438}>
              <View style={styles.View_865_74439}>
                <View style={styles.View_865_74440}>
                  <View style={styles.View_865_74441}>
                    <Text style={styles.Text_865_74441}>01</Text>
                  </View>
                  <View style={styles.View_865_74442}>
                    <Text style={styles.Text_865_74442}>Sequence Number</Text>
                  </View>
                </View>
                <View style={styles.View_865_74443}>
                  <View style={styles.View_865_74444}>
                    <Text style={styles.Text_865_74444}>Side Attach</Text>
                  </View>
                  <View style={styles.View_865_74445}>
                    <Text style={styles.Text_865_74445}>Step Name</Text>
                  </View>
                </View>
                <View style={styles.View_865_74446}>
                  <View style={styles.View_865_74447}>
                    <Text style={styles.Text_865_74447}>28.3 Seconds</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39f5361a-f352-47fd-a657-c33232845eab"
                    }}
                    style={styles.ImageBackground_865_74448}
                  />
                  <View style={styles.View_865_74450}>
                    <View style={styles.View_865_74451}>
                      <Text style={styles.Text_865_74451}>Overlock</Text>
                    </View>
                    <View style={styles.View_865_74452}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20b0bee4-7c82-4f67-a8af-80505e86f0ba"
                        }}
                        style={styles.ImageBackground_865_74453}
                      />
                      <View style={styles.View_865_74454}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b091b1ce-dbe5-483d-8965-8de59705ff9d"
                          }}
                          style={styles.ImageBackground_865_74455}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb882db5-c3b9-4658-abd0-c97bbdefe8ee"
                          }}
                          style={styles.ImageBackground_865_74459}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78615553-3439-46ae-8445-2a1507e7e0b8"
                          }}
                          style={styles.ImageBackground_865_74460}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/837a7736-247e-481b-b526-80d7b41e45c3"
                          }}
                          style={styles.ImageBackground_865_74461}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e41a637f-de96-47d7-90a4-54f5609515f2"
                          }}
                          style={styles.ImageBackground_865_74462}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df512642-8af5-4417-ad8c-59146f5b9889"
                }}
                style={styles.ImageBackground_865_74463}
              />
            </View>
          </View>
          <View style={styles.View_865_74465}>
            <View style={styles.View_865_74466}>
              <Text style={styles.Text_865_74466}>Step</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/243947d2-cfe5-4edf-adab-43db6c735d36"
          }}
          style={styles.ImageBackground_865_74467}
        />
        <View style={styles.View_865_74468}>
          <View style={styles.View_865_74469}>
            <View style={styles.View_865_74470}>
              <View style={styles.View_865_74471}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e0198c0-feda-41e8-a8da-17625e2a932a"
                  }}
                  style={styles.ImageBackground_865_74472}
                />
              </View>
              <View style={styles.View_865_74474}>
                <View style={styles.View_865_74475} />
                <View style={styles.View_865_74494}>
                  <View style={styles.View_865_74495}>
                    <View style={styles.View_865_74496}>
                      <View style={styles.View_865_74497}>
                        <Text style={styles.Text_865_74497}>1234</Text>
                      </View>
                      <View style={styles.View_865_74498}>
                        <Text style={styles.Text_865_74498}>Machine Make</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_865_74499}>
                    <View style={styles.View_865_74500}>
                      <View style={styles.View_865_74501}>
                        <Text style={styles.Text_865_74501}>3453</Text>
                      </View>
                      <View style={styles.View_865_74502}>
                        <Text style={styles.Text_865_74502}>Machine Model</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_865_74503}>
                  <View style={styles.View_865_74504}>
                    <View style={styles.View_865_74505}>
                      <View style={styles.View_865_74506}>
                        <Text style={styles.Text_865_74506}>Brother</Text>
                      </View>
                      <View style={styles.View_865_74507}>
                        <Text style={styles.Text_865_74507}>Name</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_865_74508}>
                    <View style={styles.View_865_74509}>
                      <View style={styles.View_865_74510}>
                        <Text style={styles.Text_865_74510}>3453</Text>
                      </View>
                      <View style={styles.View_865_74511}>
                        <Text style={styles.Text_865_74511}>Machine ID</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_865_74512}>
            <View style={styles.View_865_74513}>
              <Text style={styles.Text_865_74513}>Machine</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e71bc265-b0f7-4987-8b39-2ea0c36f4894"
          }}
          style={styles.ImageBackground_865_74514}
        />
        <View style={styles.View_865_74515}>
          <View style={styles.View_865_74516}>
            <View style={styles.View_I865_74516_791_31693}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9693aa0-6035-47b9-806a-bc9e59b65868"
                }}
                style={styles.ImageBackground_I865_74516_791_31694}
              />
            </View>
            <View style={styles.View_I865_74516_791_31696}>
              <View style={styles.View_I865_74516_791_31697} />
              <View style={styles.View_I865_74516_791_31704}>
                <View style={styles.View_I865_74516_791_31705}>
                  <View style={styles.View_I865_74516_791_31727}>
                    <View style={styles.View_I865_74516_791_31728}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d263d2f-c196-4689-955a-87d06d12eaa3"
                        }}
                        style={styles.ImageBackground_I865_74516_791_31729}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22148717-366b-4ee2-a70d-a0c8a70e048b"
                        }}
                        style={styles.ImageBackground_I865_74516_791_31730}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de65be99-5b08-41e5-a1b5-c2d988a39384"
                      }}
                      style={styles.ImageBackground_I865_74516_791_31732}
                    />
                  </View>
                  <View style={styles.View_I865_74516_791_31710}>
                    <View style={styles.View_I865_74516_791_31711}>
                      <View style={styles.View_I865_74516_791_31712}>
                        <Text style={styles.Text_I865_74516_791_31712}>
                          Tailor
                        </Text>
                      </View>
                      <View style={styles.View_I865_74516_791_31713}>
                        <Text style={styles.Text_I865_74516_791_31713}>
                          Padmavathy V
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I865_74516_791_31714}>
                <View style={styles.View_I865_74516_791_31715}>
                  <View style={styles.View_I865_74516_791_31716}>
                    <View style={styles.View_I865_74516_791_31717}>
                      <Text style={styles.Text_I865_74516_791_31717}>1234</Text>
                    </View>
                    <View style={styles.View_I865_74516_791_31718}>
                      <Text style={styles.Text_I865_74516_791_31718}>
                        Employee Code
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_74516_791_31721}>
                  <View style={styles.View_I865_74516_791_31722}>
                    <View style={styles.View_I865_74516_791_31723}>
                      <Text style={styles.Text_I865_74516_791_31723}>3453</Text>
                    </View>
                    <View style={styles.View_I865_74516_791_31724}>
                      <Text style={styles.Text_I865_74516_791_31724}>RFID</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_865_74517}>
            <View style={styles.View_865_74518}>
              <Text style={styles.Text_865_74518}>Employee</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bd4eb0b-a9ae-4da0-afa5-f4907d797882"
          }}
          style={styles.ImageBackground_865_74519}
        />
        <View style={styles.View_865_74520}>
          <View style={styles.View_865_74521}>
            <View style={styles.View_865_74522}>
              <View style={styles.View_I865_74522_399_9166} />
              <View style={styles.View_I865_74522_399_9167}>
                <View style={styles.View_I865_74522_399_9168}>
                  <View style={styles.View_I865_74522_399_9169}>
                    <View style={styles.View_I865_74522_399_9170}>
                      <View style={styles.View_I865_74522_399_9171}>
                        <Text style={styles.Text_I865_74522_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_74522_399_9172}>
                    <View style={styles.View_I865_74522_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4cc4580-888d-42d7-b9f7-d3e6cf739c74"
                      }}
                      style={styles.ImageBackground_I865_74522_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I865_74522_399_9175}>
                  <View style={styles.View_I865_74522_399_9176}>
                    <View style={styles.View_I865_74522_399_9177}>
                      <Text style={styles.Text_I865_74522_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74522_399_9178}>
                    <View style={styles.View_I865_74522_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/108060f1-6ad0-4f9a-9711-753d60f3d191"
                        }}
                        style={styles.ImageBackground_I865_74522_399_9180}
                      />
                    </View>
                    <View style={styles.View_I865_74522_399_9183}>
                      <Text style={styles.Text_I865_74522_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74522_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65e75a8f-a145-46ca-bc4e-86fb45381af0"
                      }}
                      style={styles.ImageBackground_I865_74522_399_9185}
                    />
                    <View style={styles.View_I865_74522_399_9187}>
                      <Text style={styles.Text_I865_74522_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_74522_399_9188}>
                  <View style={styles.View_I865_74522_399_9189}>
                    <View style={styles.View_I865_74522_399_9190}>
                      <Text style={styles.Text_I865_74522_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74522_399_9191}>
                    <View style={styles.View_I865_74522_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9a26b3c-0fb5-4e3a-a903-41ac5253aa1a"
                        }}
                        style={styles.ImageBackground_I865_74522_399_9193}
                      />
                    </View>
                    <View style={styles.View_I865_74522_399_9196}>
                      <Text style={styles.Text_I865_74522_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74522_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0dfba3c9-4819-4c26-a5c3-d276133fd218"
                      }}
                      style={styles.ImageBackground_I865_74522_399_9198}
                    />
                    <View style={styles.View_I865_74522_399_9200}>
                      <Text style={styles.Text_I865_74522_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_865_74523}>
              <View style={styles.View_I865_74523_399_9166} />
              <View style={styles.View_I865_74523_399_9167}>
                <View style={styles.View_I865_74523_399_9168}>
                  <View style={styles.View_I865_74523_399_9169}>
                    <View style={styles.View_I865_74523_399_9170}>
                      <View style={styles.View_I865_74523_399_9171}>
                        <Text style={styles.Text_I865_74523_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_74523_399_9172}>
                    <View style={styles.View_I865_74523_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b1f45c4-4331-4b37-b211-d2f9d470c1c9"
                      }}
                      style={styles.ImageBackground_I865_74523_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I865_74523_399_9175}>
                  <View style={styles.View_I865_74523_399_9176}>
                    <View style={styles.View_I865_74523_399_9177}>
                      <Text style={styles.Text_I865_74523_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74523_399_9178}>
                    <View style={styles.View_I865_74523_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a70760b9-2a76-4b41-a686-8b7a08c3ecd5"
                        }}
                        style={styles.ImageBackground_I865_74523_399_9180}
                      />
                    </View>
                    <View style={styles.View_I865_74523_399_9183}>
                      <Text style={styles.Text_I865_74523_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74523_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebc221a2-2f8e-41f9-ba7b-bf7962addcbf"
                      }}
                      style={styles.ImageBackground_I865_74523_399_9185}
                    />
                    <View style={styles.View_I865_74523_399_9187}>
                      <Text style={styles.Text_I865_74523_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_74523_399_9188}>
                  <View style={styles.View_I865_74523_399_9189}>
                    <View style={styles.View_I865_74523_399_9190}>
                      <Text style={styles.Text_I865_74523_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74523_399_9191}>
                    <View style={styles.View_I865_74523_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d97a62ea-3c41-458d-989f-49f3d55dc061"
                        }}
                        style={styles.ImageBackground_I865_74523_399_9193}
                      />
                    </View>
                    <View style={styles.View_I865_74523_399_9196}>
                      <Text style={styles.Text_I865_74523_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74523_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d01ca72-6ad2-4eb9-81d3-a9ec79029c59"
                      }}
                      style={styles.ImageBackground_I865_74523_399_9198}
                    />
                    <View style={styles.View_I865_74523_399_9200}>
                      <Text style={styles.Text_I865_74523_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_865_74524}>
              <View style={styles.View_I865_74524_399_9166} />
              <View style={styles.View_I865_74524_399_9167}>
                <View style={styles.View_I865_74524_399_9168}>
                  <View style={styles.View_I865_74524_399_9169}>
                    <View style={styles.View_I865_74524_399_9170}>
                      <View style={styles.View_I865_74524_399_9171}>
                        <Text style={styles.Text_I865_74524_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_74524_399_9172}>
                    <View style={styles.View_I865_74524_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31d71da0-2eeb-4e70-a018-83878e66bae7"
                      }}
                      style={styles.ImageBackground_I865_74524_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I865_74524_399_9175}>
                  <View style={styles.View_I865_74524_399_9176}>
                    <View style={styles.View_I865_74524_399_9177}>
                      <Text style={styles.Text_I865_74524_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74524_399_9178}>
                    <View style={styles.View_I865_74524_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de75fd42-b9df-47a4-aab7-5abaaacecf11"
                        }}
                        style={styles.ImageBackground_I865_74524_399_9180}
                      />
                    </View>
                    <View style={styles.View_I865_74524_399_9183}>
                      <Text style={styles.Text_I865_74524_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74524_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb038bbb-85d8-4b16-b9fc-674dc7a40a63"
                      }}
                      style={styles.ImageBackground_I865_74524_399_9185}
                    />
                    <View style={styles.View_I865_74524_399_9187}>
                      <Text style={styles.Text_I865_74524_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_74524_399_9188}>
                  <View style={styles.View_I865_74524_399_9189}>
                    <View style={styles.View_I865_74524_399_9190}>
                      <Text style={styles.Text_I865_74524_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74524_399_9191}>
                    <View style={styles.View_I865_74524_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e66f249a-55e1-4b24-99ca-f1f7b708e065"
                        }}
                        style={styles.ImageBackground_I865_74524_399_9193}
                      />
                    </View>
                    <View style={styles.View_I865_74524_399_9196}>
                      <Text style={styles.Text_I865_74524_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74524_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecde6427-7fd6-4725-8f58-a156aae788ff"
                      }}
                      style={styles.ImageBackground_I865_74524_399_9198}
                    />
                    <View style={styles.View_I865_74524_399_9200}>
                      <Text style={styles.Text_I865_74524_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_865_74525}>
              <View style={styles.View_I865_74525_399_9166} />
              <View style={styles.View_I865_74525_399_9167}>
                <View style={styles.View_I865_74525_399_9168}>
                  <View style={styles.View_I865_74525_399_9169}>
                    <View style={styles.View_I865_74525_399_9170}>
                      <View style={styles.View_I865_74525_399_9171}>
                        <Text style={styles.Text_I865_74525_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_74525_399_9172}>
                    <View style={styles.View_I865_74525_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/145cf55f-1dc9-47d9-b9ed-e0b575e1d90d"
                      }}
                      style={styles.ImageBackground_I865_74525_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I865_74525_399_9175}>
                  <View style={styles.View_I865_74525_399_9176}>
                    <View style={styles.View_I865_74525_399_9177}>
                      <Text style={styles.Text_I865_74525_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74525_399_9178}>
                    <View style={styles.View_I865_74525_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28441bef-009c-4c34-86a2-38a669362361"
                        }}
                        style={styles.ImageBackground_I865_74525_399_9180}
                      />
                    </View>
                    <View style={styles.View_I865_74525_399_9183}>
                      <Text style={styles.Text_I865_74525_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74525_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e2d0309-3947-40d4-9627-24239010324e"
                      }}
                      style={styles.ImageBackground_I865_74525_399_9185}
                    />
                    <View style={styles.View_I865_74525_399_9187}>
                      <Text style={styles.Text_I865_74525_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_74525_399_9188}>
                  <View style={styles.View_I865_74525_399_9189}>
                    <View style={styles.View_I865_74525_399_9190}>
                      <Text style={styles.Text_I865_74525_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74525_399_9191}>
                    <View style={styles.View_I865_74525_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a926e16-bf70-4b3c-8dad-5c98ee391fa0"
                        }}
                        style={styles.ImageBackground_I865_74525_399_9193}
                      />
                    </View>
                    <View style={styles.View_I865_74525_399_9196}>
                      <Text style={styles.Text_I865_74525_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74525_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eac187b2-31d3-454c-8c84-6ae50cca9758"
                      }}
                      style={styles.ImageBackground_I865_74525_399_9198}
                    />
                    <View style={styles.View_I865_74525_399_9200}>
                      <Text style={styles.Text_I865_74525_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_865_74526}>
              <View style={styles.View_I865_74526_399_9166} />
              <View style={styles.View_I865_74526_399_9167}>
                <View style={styles.View_I865_74526_399_9168}>
                  <View style={styles.View_I865_74526_399_9169}>
                    <View style={styles.View_I865_74526_399_9170}>
                      <View style={styles.View_I865_74526_399_9171}>
                        <Text style={styles.Text_I865_74526_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_74526_399_9172}>
                    <View style={styles.View_I865_74526_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f343e37e-5e4a-4cbc-b41d-8c9cb618ec42"
                      }}
                      style={styles.ImageBackground_I865_74526_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I865_74526_399_9175}>
                  <View style={styles.View_I865_74526_399_9176}>
                    <View style={styles.View_I865_74526_399_9177}>
                      <Text style={styles.Text_I865_74526_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74526_399_9178}>
                    <View style={styles.View_I865_74526_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68d3acaa-e561-4bed-b1ef-e4eaf0724f7f"
                        }}
                        style={styles.ImageBackground_I865_74526_399_9180}
                      />
                    </View>
                    <View style={styles.View_I865_74526_399_9183}>
                      <Text style={styles.Text_I865_74526_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74526_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fad7757d-9b45-4c8b-965e-2bd3a404c786"
                      }}
                      style={styles.ImageBackground_I865_74526_399_9185}
                    />
                    <View style={styles.View_I865_74526_399_9187}>
                      <Text style={styles.Text_I865_74526_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_74526_399_9188}>
                  <View style={styles.View_I865_74526_399_9189}>
                    <View style={styles.View_I865_74526_399_9190}>
                      <Text style={styles.Text_I865_74526_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74526_399_9191}>
                    <View style={styles.View_I865_74526_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cff20daf-8971-4d7e-aae0-d52acb67fcea"
                        }}
                        style={styles.ImageBackground_I865_74526_399_9193}
                      />
                    </View>
                    <View style={styles.View_I865_74526_399_9196}>
                      <Text style={styles.Text_I865_74526_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74526_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1df4cdf-6217-447c-ab21-6a21630b6f0d"
                      }}
                      style={styles.ImageBackground_I865_74526_399_9198}
                    />
                    <View style={styles.View_I865_74526_399_9200}>
                      <Text style={styles.Text_I865_74526_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_865_74527}>
            <View style={styles.View_865_74528}>
              <Text style={styles.Text_865_74528}>Change Log</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_74529}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cfedbc9-fa90-4553-a576-895789aeca45"
          }}
          style={styles.ImageBackground_I865_74529_752_28469}
        />
        <View style={styles.View_I865_74529_752_28471}>
          <View style={styles.View_I865_74529_752_28472}>
            <Text style={styles.Text_I865_74529_752_28472}>
              Hiking Track Pants - HTP324
            </Text>
          </View>
          <View style={styles.View_I865_74529_752_28473}>
            <Text style={styles.Text_I865_74529_752_28473}>Style</Text>
          </View>
        </View>
        <View style={styles.View_I865_74529_752_28474}>
          <View style={styles.View_I865_74529_752_28475}>
            <Text style={styles.Text_I865_74529_752_28475}>12345</Text>
          </View>
          <View style={styles.View_I865_74529_752_28476}>
            <Text style={styles.Text_I865_74529_752_28476}>Job Order</Text>
          </View>
        </View>
        <View style={styles.View_I865_74529_752_28483}>
          <View style={styles.View_I865_74529_752_28484}>
            <Text style={styles.Text_I865_74529_752_28484}>Line 01</Text>
          </View>
          <View style={styles.View_I865_74529_752_28485}>
            <Text style={styles.Text_I865_74529_752_28485}>Line Name</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bc3375c-4a00-465d-ba43-7f1b4081b723"
          }}
          style={styles.ImageBackground_I865_74529_752_28482}
        />
        <View style={styles.View_I865_74529_752_28492}>
          <View style={styles.View_I865_74529_752_28486} />
          <View style={styles.View_I865_74529_752_28477}>
            <View style={styles.View_I865_74529_752_28478}>
              <View style={styles.View_I865_74529_752_28479}>
                <Text style={styles.Text_I865_74529_752_28479}>Live</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04a11dd2-dc27-426a-82f3-cd62217d4fb9"
              }}
              style={styles.ImageBackground_I865_74529_752_28480}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_865_74530}>
        <View style={styles.View_I865_74530_269_27952} />
        <View style={styles.View_I865_74530_269_27953}>
          <View style={styles.View_I865_74530_269_27954}>
            <View style={styles.View_I865_74530_269_27955} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f33b16be-524e-43a1-84aa-cbfed4b0596a"
              }}
              style={styles.ImageBackground_I865_74530_269_27956}
            />
            <View style={styles.View_I865_74530_269_27957} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5151b98f-3a39-4268-8f7e-c890a1afaf8f"
            }}
            style={styles.ImageBackground_I865_74530_269_27958}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/025ec2a7-4b49-4388-901b-572f17c40849"
            }}
            style={styles.ImageBackground_I865_74530_269_27962}
          />
          <View style={styles.View_I865_74530_269_27967}>
            <Text style={styles.Text_I865_74530_269_27967}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I865_74530_269_27968}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a3dc07a-5f3b-4f0f-a844-8f65faeef440"
            }}
            style={styles.ImageBackground_I865_74530_269_27969}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/555da1e0-9186-466e-94f3-5fc25ee1a937"
            }}
            style={styles.ImageBackground_I865_74530_269_27970}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_865_74435: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("194%"),
    minHeight: hp("194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_74436: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_74437: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_865_74438: {
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
  View_865_74439: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_865_74440: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_74441: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_865_74441: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_865_74442: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74442: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74443: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  View_865_74444: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_865_74444: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_865_74445: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74445: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74446: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_865_74447: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_865_74447: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  ImageBackground_865_74448: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74450: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  View_865_74451: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74451: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_865_74452: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_865_74453: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_74454: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_865_74455: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_865_74459: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_865_74460: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_865_74461: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_865_74462: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_865_74463: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74465: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_74466: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74466: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_74467: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74468: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%")
  },
  View_865_74469: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_865_74470: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_74471: {
    width: wp("91%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_865_74472: {
    width: wp("91%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74474: {
    width: wp("76%"),
    height: hp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_865_74475: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_865_74494: {
    width: wp("74%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74495: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74496: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74497: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74497: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_74498: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74498: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74499: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_865_74500: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74501: {
    width: wp("19%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74501: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_74502: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74502: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74503: {
    width: wp("66%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74504: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74505: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74506: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74506: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_74507: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74507: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74508: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_865_74509: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74510: {
    width: wp("19%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74510: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_74511: {
    width: wp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74511: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74512: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_74513: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74513: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_74514: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74515: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%")
  },
  View_865_74516: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74516_791_31693: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I865_74516_791_31694: {
    width: wp("91%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74516_791_31696: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I865_74516_791_31697: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_I865_74516_791_31704: {
    width: wp("38%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74516_791_31705: {
    width: wp("38%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74516_791_31727: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74516_791_31728: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I865_74516_791_31729: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I865_74516_791_31730: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I865_74516_791_31732: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I865_74516_791_31710: {
    width: wp("26%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_I865_74516_791_31711: {
    width: wp("26%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74516_791_31712: {
    width: wp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74516_791_31712: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I865_74516_791_31713: {
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74516_791_31713: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74516_791_31714: {
    width: wp("66%"),
    height: hp("5%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74516_791_31715: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74516_791_31716: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74516_791_31717: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74516_791_31717: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I865_74516_791_31718: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74516_791_31718: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74516_791_31721: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_I865_74516_791_31722: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74516_791_31723: {
    width: wp("19%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74516_791_31723: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I865_74516_791_31724: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74516_791_31724: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74517: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_74518: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74518: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_74519: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74520: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85%")
  },
  View_865_74521: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_74522: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74522_399_9166: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1
  },
  View_I865_74522_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_74522_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74522_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_74522_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74522_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74522_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74522_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74522_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I865_74522_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I865_74522_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74522_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74522_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74522_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74522_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74522_399_9179: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I865_74522_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74522_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74522_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74522_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74522_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74522_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74522_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74522_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74522_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74522_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74522_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74522_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74522_399_9192: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I865_74522_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74522_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74522_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74522_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74522_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74522_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74522_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74523: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74523_399_9166: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1
  },
  View_I865_74523_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_74523_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74523_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_74523_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74523_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74523_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74523_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74523_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I865_74523_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I865_74523_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74523_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74523_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74523_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74523_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74523_399_9179: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I865_74523_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74523_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74523_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74523_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74523_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74523_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74523_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74523_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74523_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74523_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74523_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74523_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74523_399_9192: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I865_74523_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74523_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74523_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74523_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74523_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74523_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74523_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74524: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74524_399_9166: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1
  },
  View_I865_74524_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_74524_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74524_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_74524_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74524_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74524_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74524_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74524_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I865_74524_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I865_74524_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74524_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74524_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74524_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74524_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74524_399_9179: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I865_74524_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74524_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74524_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74524_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74524_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74524_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74524_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74524_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74524_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74524_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74524_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74524_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74524_399_9192: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I865_74524_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74524_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74524_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74524_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74524_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74524_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74524_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74525: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74525_399_9166: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1
  },
  View_I865_74525_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_74525_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74525_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_74525_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74525_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74525_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74525_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74525_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I865_74525_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I865_74525_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74525_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74525_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74525_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74525_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74525_399_9179: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I865_74525_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74525_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74525_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74525_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74525_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74525_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74525_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74525_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74525_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74525_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74525_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74525_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74525_399_9192: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I865_74525_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74525_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74525_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74525_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74525_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74525_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74525_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74526: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_74526_399_9166: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1
  },
  View_I865_74526_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_74526_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74526_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_74526_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74526_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74526_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74526_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74526_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I865_74526_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I865_74526_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74526_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74526_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74526_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74526_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74526_399_9179: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I865_74526_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74526_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74526_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74526_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74526_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74526_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74526_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74526_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74526_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74526_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74526_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74526_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74526_399_9192: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I865_74526_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74526_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74526_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74526_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74526_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74526_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74526_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74527: {
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
  View_865_74528: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74528: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74529: {
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
  ImageBackground_I865_74529_752_28469: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_74529_752_28471: {
    flexGrow: 1,
    width: wp("63%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%")
  },
  View_I865_74529_752_28472: {
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
  Text_I865_74529_752_28472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_74529_752_28473: {
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
  Text_I865_74529_752_28473: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74529_752_28474: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%")
  },
  View_I865_74529_752_28475: {
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
  Text_I865_74529_752_28475: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_74529_752_28476: {
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
  Text_I865_74529_752_28476: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74529_752_28483: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("9%")
  },
  View_I865_74529_752_28484: {
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
  Text_I865_74529_752_28484: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_74529_752_28485: {
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
  Text_I865_74529_752_28485: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  ImageBackground_I865_74529_752_28482: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I865_74529_752_28492: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("1%")
  },
  View_I865_74529_752_28486: {
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
  View_I865_74529_752_28477: {
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
  View_I865_74529_752_28478: {
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
  View_I865_74529_752_28479: {
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
  Text_I865_74529_752_28479: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_I865_74529_752_28480: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74530: {
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
  View_I865_74530_269_27952: {
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
  View_I865_74530_269_27953: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_74530_269_27954: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_I865_74530_269_27955: {
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
  ImageBackground_I865_74530_269_27956: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I865_74530_269_27957: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_I865_74530_269_27958: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_I865_74530_269_27962: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_I865_74530_269_27967: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74530_269_27967: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I865_74530_269_27968: {
    flexGrow: 1,
    width: wp("66%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%")
  },
  ImageBackground_I865_74530_269_27969: {
    width: wp("41%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_I865_74530_269_27970: {
    width: wp("2%"),
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
