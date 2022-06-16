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
      <View style={styles.View_1006_27504}>
        <View style={styles.View_1006_27505}>
          <View style={styles.View_1006_27506}>
            <View style={styles.View_1006_27507}>
              <View style={styles.View_1006_27508}>
                <View style={styles.View_1006_27509}>
                  <View style={styles.View_1006_27510}>
                    <Text style={styles.Text_1006_27510}>01</Text>
                  </View>
                  <View style={styles.View_1006_27511}>
                    <Text style={styles.Text_1006_27511}>Sequence Number</Text>
                  </View>
                </View>
                <View style={styles.View_1006_27512}>
                  <View style={styles.View_1006_27513}>
                    <Text style={styles.Text_1006_27513}>Side Attach</Text>
                  </View>
                  <View style={styles.View_1006_27514}>
                    <Text style={styles.Text_1006_27514}>Step Name</Text>
                  </View>
                </View>
                <View style={styles.View_1006_27515}>
                  <View style={styles.View_1006_27516}>
                    <Text style={styles.Text_1006_27516}>28.3 Seconds</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa93b062-aa77-43d8-95c0-d37f93bfad87"
                    }}
                    style={styles.ImageBackground_1006_27517}
                  />
                  <View style={styles.View_1006_27519}>
                    <View style={styles.View_1006_27520}>
                      <Text style={styles.Text_1006_27520}>Overlock</Text>
                    </View>
                    <View style={styles.View_1006_27521}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0cd42fa-7c1a-431d-bf2e-cd715ac67446"
                        }}
                        style={styles.ImageBackground_1006_27522}
                      />
                      <View style={styles.View_1006_27523}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0156df65-7ecb-4e24-a280-f7c48e31bd85"
                          }}
                          style={styles.ImageBackground_1006_27524}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8267c94b-99da-41e7-97a5-fe6dfc938f35"
                          }}
                          style={styles.ImageBackground_1006_27528}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f06234d7-894a-4d34-931a-b187436363b3"
                          }}
                          style={styles.ImageBackground_1006_27529}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e066249-768f-4a99-8de2-f775dc37e2d3"
                          }}
                          style={styles.ImageBackground_1006_27530}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fb3d888-f9e1-42d8-9868-501a2f6a5b85"
                          }}
                          style={styles.ImageBackground_1006_27531}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03980c89-000c-47b1-8d63-8bc36e93457f"
                }}
                style={styles.ImageBackground_1006_27532}
              />
            </View>
          </View>
          <View style={styles.View_1006_27534}>
            <View style={styles.View_1006_27535}>
              <Text style={styles.Text_1006_27535}>Step</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1361bb15-0fb7-4a76-ab11-424ac392fb7d"
          }}
          style={styles.ImageBackground_1006_27536}
        />
        <View style={styles.View_1006_27537}>
          <View style={styles.View_1006_27538}>
            <View style={styles.View_1006_27539}>
              <View style={styles.View_1006_27540}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef7e4243-eaf4-478e-876f-bdc888c17329"
                  }}
                  style={styles.ImageBackground_1006_27541}
                />
              </View>
              <View style={styles.View_1006_27543}>
                <View style={styles.View_1006_27544} />
                <View style={styles.View_1006_27563}>
                  <View style={styles.View_1006_27564}>
                    <View style={styles.View_1006_27565}>
                      <View style={styles.View_1006_27566}>
                        <Text style={styles.Text_1006_27566}>1234</Text>
                      </View>
                      <View style={styles.View_1006_27567}>
                        <Text style={styles.Text_1006_27567}>Machine Make</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_1006_27568}>
                    <View style={styles.View_1006_27569}>
                      <View style={styles.View_1006_27570}>
                        <Text style={styles.Text_1006_27570}>3453</Text>
                      </View>
                      <View style={styles.View_1006_27571}>
                        <Text style={styles.Text_1006_27571}>
                          Machine Model
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_1006_27572}>
                  <View style={styles.View_1006_27573}>
                    <View style={styles.View_1006_27574}>
                      <View style={styles.View_1006_27575}>
                        <Text style={styles.Text_1006_27575}>Brother</Text>
                      </View>
                      <View style={styles.View_1006_27576}>
                        <Text style={styles.Text_1006_27576}>Name</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_1006_27577}>
                    <View style={styles.View_1006_27578}>
                      <View style={styles.View_1006_27579}>
                        <Text style={styles.Text_1006_27579}>3453</Text>
                      </View>
                      <View style={styles.View_1006_27580}>
                        <Text style={styles.Text_1006_27580}>Machine ID</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1006_27581}>
            <View style={styles.View_1006_27582}>
              <Text style={styles.Text_1006_27582}>Machine</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69734892-df31-4e55-9264-25469fc0b3a8"
          }}
          style={styles.ImageBackground_1006_27583}
        />
        <View style={styles.View_1006_27584}>
          <View style={styles.View_1006_27585}>
            <View style={styles.View_I1006_27585_791_31693}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99e463eb-0c5d-4d7b-8d12-49558158e66e"
                }}
                style={styles.ImageBackground_I1006_27585_791_31694}
              />
            </View>
            <View style={styles.View_I1006_27585_791_31696}>
              <View style={styles.View_I1006_27585_791_31697} />
              <View style={styles.View_I1006_27585_791_31704}>
                <View style={styles.View_I1006_27585_791_31705}>
                  <View style={styles.View_I1006_27585_791_31727}>
                    <View style={styles.View_I1006_27585_791_31728}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/436c823b-3e97-416d-a832-2013ffcfad8b"
                        }}
                        style={styles.ImageBackground_I1006_27585_791_31729}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/959442f0-f6bd-431c-a9d7-b8736c208cf1"
                        }}
                        style={styles.ImageBackground_I1006_27585_791_31730}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed1e9ed5-b9cb-46ef-a653-33cb059408cf"
                      }}
                      style={styles.ImageBackground_I1006_27585_791_31732}
                    />
                  </View>
                  <View style={styles.View_I1006_27585_791_31710}>
                    <View style={styles.View_I1006_27585_791_31711}>
                      <View style={styles.View_I1006_27585_791_31712}>
                        <Text style={styles.Text_I1006_27585_791_31712}>
                          Tailor
                        </Text>
                      </View>
                      <View style={styles.View_I1006_27585_791_31713}>
                        <Text style={styles.Text_I1006_27585_791_31713}>
                          Padmavathy V
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I1006_27585_791_31714}>
                <View style={styles.View_I1006_27585_791_31715}>
                  <View style={styles.View_I1006_27585_791_31716}>
                    <View style={styles.View_I1006_27585_791_31717}>
                      <Text style={styles.Text_I1006_27585_791_31717}>
                        1234
                      </Text>
                    </View>
                    <View style={styles.View_I1006_27585_791_31718}>
                      <Text style={styles.Text_I1006_27585_791_31718}>
                        Employee Code
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I1006_27585_791_31721}>
                  <View style={styles.View_I1006_27585_791_31722}>
                    <View style={styles.View_I1006_27585_791_31723}>
                      <Text style={styles.Text_I1006_27585_791_31723}>
                        3453
                      </Text>
                    </View>
                    <View style={styles.View_I1006_27585_791_31724}>
                      <Text style={styles.Text_I1006_27585_791_31724}>
                        RFID
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1006_27586}>
            <View style={styles.View_1006_27587}>
              <Text style={styles.Text_1006_27587}>Employee</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22cc78c6-5379-43b9-82d6-ab93145ae441"
          }}
          style={styles.ImageBackground_1006_27588}
        />
        <View style={styles.View_1006_27589}>
          <View style={styles.View_1006_27590}>
            <View style={styles.View_1006_27591}>
              <View style={styles.View_I1006_27591_399_9166} />
              <View style={styles.View_I1006_27591_399_9167}>
                <View style={styles.View_I1006_27591_399_9168}>
                  <View style={styles.View_I1006_27591_399_9169}>
                    <View style={styles.View_I1006_27591_399_9170}>
                      <View style={styles.View_I1006_27591_399_9171}>
                        <Text style={styles.Text_I1006_27591_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27591_399_9172}>
                    <View style={styles.View_I1006_27591_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c83f300-97b2-40cf-b3ff-3d71bdc82ce1"
                      }}
                      style={styles.ImageBackground_I1006_27591_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I1006_27591_399_9175}>
                  <View style={styles.View_I1006_27591_399_9176}>
                    <View style={styles.View_I1006_27591_399_9177}>
                      <Text style={styles.Text_I1006_27591_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27591_399_9178}>
                    <View style={styles.View_I1006_27591_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/369c2a50-3677-4ecb-bd8e-1e5521ed621b"
                        }}
                        style={styles.ImageBackground_I1006_27591_399_9180}
                      />
                    </View>
                    <View style={styles.View_I1006_27591_399_9183}>
                      <Text style={styles.Text_I1006_27591_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27591_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c37f1ba-cf80-43e5-bf36-87d52403e370"
                      }}
                      style={styles.ImageBackground_I1006_27591_399_9185}
                    />
                    <View style={styles.View_I1006_27591_399_9187}>
                      <Text style={styles.Text_I1006_27591_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I1006_27591_399_9188}>
                  <View style={styles.View_I1006_27591_399_9189}>
                    <View style={styles.View_I1006_27591_399_9190}>
                      <Text style={styles.Text_I1006_27591_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27591_399_9191}>
                    <View style={styles.View_I1006_27591_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/538408fe-4de6-4c47-a836-40bcab32aa5b"
                        }}
                        style={styles.ImageBackground_I1006_27591_399_9193}
                      />
                    </View>
                    <View style={styles.View_I1006_27591_399_9196}>
                      <Text style={styles.Text_I1006_27591_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27591_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fec468cb-38b0-441b-b495-e84695b0696a"
                      }}
                      style={styles.ImageBackground_I1006_27591_399_9198}
                    />
                    <View style={styles.View_I1006_27591_399_9200}>
                      <Text style={styles.Text_I1006_27591_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1006_27592}>
              <View style={styles.View_I1006_27592_399_9166} />
              <View style={styles.View_I1006_27592_399_9167}>
                <View style={styles.View_I1006_27592_399_9168}>
                  <View style={styles.View_I1006_27592_399_9169}>
                    <View style={styles.View_I1006_27592_399_9170}>
                      <View style={styles.View_I1006_27592_399_9171}>
                        <Text style={styles.Text_I1006_27592_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27592_399_9172}>
                    <View style={styles.View_I1006_27592_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c984313-a690-45ed-849e-7cb881e9e004"
                      }}
                      style={styles.ImageBackground_I1006_27592_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I1006_27592_399_9175}>
                  <View style={styles.View_I1006_27592_399_9176}>
                    <View style={styles.View_I1006_27592_399_9177}>
                      <Text style={styles.Text_I1006_27592_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27592_399_9178}>
                    <View style={styles.View_I1006_27592_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee14d012-3783-42e7-b9d5-95f074e518ba"
                        }}
                        style={styles.ImageBackground_I1006_27592_399_9180}
                      />
                    </View>
                    <View style={styles.View_I1006_27592_399_9183}>
                      <Text style={styles.Text_I1006_27592_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27592_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc9d008d-0819-4c55-b24a-b408b129488f"
                      }}
                      style={styles.ImageBackground_I1006_27592_399_9185}
                    />
                    <View style={styles.View_I1006_27592_399_9187}>
                      <Text style={styles.Text_I1006_27592_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I1006_27592_399_9188}>
                  <View style={styles.View_I1006_27592_399_9189}>
                    <View style={styles.View_I1006_27592_399_9190}>
                      <Text style={styles.Text_I1006_27592_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27592_399_9191}>
                    <View style={styles.View_I1006_27592_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32df0722-3d80-4808-8afe-f83a589c2d39"
                        }}
                        style={styles.ImageBackground_I1006_27592_399_9193}
                      />
                    </View>
                    <View style={styles.View_I1006_27592_399_9196}>
                      <Text style={styles.Text_I1006_27592_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27592_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcf17907-3322-4456-a274-7f56138e4283"
                      }}
                      style={styles.ImageBackground_I1006_27592_399_9198}
                    />
                    <View style={styles.View_I1006_27592_399_9200}>
                      <Text style={styles.Text_I1006_27592_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1006_27593}>
              <View style={styles.View_I1006_27593_399_9166} />
              <View style={styles.View_I1006_27593_399_9167}>
                <View style={styles.View_I1006_27593_399_9168}>
                  <View style={styles.View_I1006_27593_399_9169}>
                    <View style={styles.View_I1006_27593_399_9170}>
                      <View style={styles.View_I1006_27593_399_9171}>
                        <Text style={styles.Text_I1006_27593_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27593_399_9172}>
                    <View style={styles.View_I1006_27593_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74273bbf-a0eb-4622-92bf-2f8d09415dda"
                      }}
                      style={styles.ImageBackground_I1006_27593_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I1006_27593_399_9175}>
                  <View style={styles.View_I1006_27593_399_9176}>
                    <View style={styles.View_I1006_27593_399_9177}>
                      <Text style={styles.Text_I1006_27593_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27593_399_9178}>
                    <View style={styles.View_I1006_27593_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47bcf8e7-354f-4d93-8feb-260392aa5bfe"
                        }}
                        style={styles.ImageBackground_I1006_27593_399_9180}
                      />
                    </View>
                    <View style={styles.View_I1006_27593_399_9183}>
                      <Text style={styles.Text_I1006_27593_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27593_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8dc98193-110f-4394-bf04-9273162a06dc"
                      }}
                      style={styles.ImageBackground_I1006_27593_399_9185}
                    />
                    <View style={styles.View_I1006_27593_399_9187}>
                      <Text style={styles.Text_I1006_27593_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I1006_27593_399_9188}>
                  <View style={styles.View_I1006_27593_399_9189}>
                    <View style={styles.View_I1006_27593_399_9190}>
                      <Text style={styles.Text_I1006_27593_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27593_399_9191}>
                    <View style={styles.View_I1006_27593_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6dbfb4bd-fbec-4112-b482-4ea04e2fac08"
                        }}
                        style={styles.ImageBackground_I1006_27593_399_9193}
                      />
                    </View>
                    <View style={styles.View_I1006_27593_399_9196}>
                      <Text style={styles.Text_I1006_27593_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27593_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b633a7db-4d9a-4a01-8cda-b12a717d7a6a"
                      }}
                      style={styles.ImageBackground_I1006_27593_399_9198}
                    />
                    <View style={styles.View_I1006_27593_399_9200}>
                      <Text style={styles.Text_I1006_27593_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1006_27594}>
              <View style={styles.View_I1006_27594_399_9166} />
              <View style={styles.View_I1006_27594_399_9167}>
                <View style={styles.View_I1006_27594_399_9168}>
                  <View style={styles.View_I1006_27594_399_9169}>
                    <View style={styles.View_I1006_27594_399_9170}>
                      <View style={styles.View_I1006_27594_399_9171}>
                        <Text style={styles.Text_I1006_27594_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27594_399_9172}>
                    <View style={styles.View_I1006_27594_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cdeff7a-ece6-4852-9022-2119b2908223"
                      }}
                      style={styles.ImageBackground_I1006_27594_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I1006_27594_399_9175}>
                  <View style={styles.View_I1006_27594_399_9176}>
                    <View style={styles.View_I1006_27594_399_9177}>
                      <Text style={styles.Text_I1006_27594_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27594_399_9178}>
                    <View style={styles.View_I1006_27594_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f134dce6-80c7-44ea-9e08-6696f30bd81d"
                        }}
                        style={styles.ImageBackground_I1006_27594_399_9180}
                      />
                    </View>
                    <View style={styles.View_I1006_27594_399_9183}>
                      <Text style={styles.Text_I1006_27594_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27594_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac580297-cf3b-493c-8158-5e689ced9245"
                      }}
                      style={styles.ImageBackground_I1006_27594_399_9185}
                    />
                    <View style={styles.View_I1006_27594_399_9187}>
                      <Text style={styles.Text_I1006_27594_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I1006_27594_399_9188}>
                  <View style={styles.View_I1006_27594_399_9189}>
                    <View style={styles.View_I1006_27594_399_9190}>
                      <Text style={styles.Text_I1006_27594_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27594_399_9191}>
                    <View style={styles.View_I1006_27594_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/095680a0-992b-4ad8-b3ff-051c481d0a4e"
                        }}
                        style={styles.ImageBackground_I1006_27594_399_9193}
                      />
                    </View>
                    <View style={styles.View_I1006_27594_399_9196}>
                      <Text style={styles.Text_I1006_27594_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27594_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6b76d51-3f5e-4e93-97b2-ce0b727af70a"
                      }}
                      style={styles.ImageBackground_I1006_27594_399_9198}
                    />
                    <View style={styles.View_I1006_27594_399_9200}>
                      <Text style={styles.Text_I1006_27594_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1006_27595}>
              <View style={styles.View_I1006_27595_399_9166} />
              <View style={styles.View_I1006_27595_399_9167}>
                <View style={styles.View_I1006_27595_399_9168}>
                  <View style={styles.View_I1006_27595_399_9169}>
                    <View style={styles.View_I1006_27595_399_9170}>
                      <View style={styles.View_I1006_27595_399_9171}>
                        <Text style={styles.Text_I1006_27595_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27595_399_9172}>
                    <View style={styles.View_I1006_27595_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4b6a3fa-a30d-4a4f-981e-a807de6b77b7"
                      }}
                      style={styles.ImageBackground_I1006_27595_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I1006_27595_399_9175}>
                  <View style={styles.View_I1006_27595_399_9176}>
                    <View style={styles.View_I1006_27595_399_9177}>
                      <Text style={styles.Text_I1006_27595_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27595_399_9178}>
                    <View style={styles.View_I1006_27595_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3318b1ec-df4d-47fd-a003-121ae02fede3"
                        }}
                        style={styles.ImageBackground_I1006_27595_399_9180}
                      />
                    </View>
                    <View style={styles.View_I1006_27595_399_9183}>
                      <Text style={styles.Text_I1006_27595_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27595_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98e34dd4-813b-4e3e-a5ed-2a4e7fe9683b"
                      }}
                      style={styles.ImageBackground_I1006_27595_399_9185}
                    />
                    <View style={styles.View_I1006_27595_399_9187}>
                      <Text style={styles.Text_I1006_27595_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I1006_27595_399_9188}>
                  <View style={styles.View_I1006_27595_399_9189}>
                    <View style={styles.View_I1006_27595_399_9190}>
                      <Text style={styles.Text_I1006_27595_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27595_399_9191}>
                    <View style={styles.View_I1006_27595_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c909681-9bed-4a44-8187-d26a9ace9b9e"
                        }}
                        style={styles.ImageBackground_I1006_27595_399_9193}
                      />
                    </View>
                    <View style={styles.View_I1006_27595_399_9196}>
                      <Text style={styles.Text_I1006_27595_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1006_27595_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39f964ed-fdcf-44ad-8e50-17602bbbdcbe"
                      }}
                      style={styles.ImageBackground_I1006_27595_399_9198}
                    />
                    <View style={styles.View_I1006_27595_399_9200}>
                      <Text style={styles.Text_I1006_27595_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1006_27596}>
            <View style={styles.View_1006_27597}>
              <Text style={styles.Text_1006_27597}>Change Log</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1006_27598}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb979976-32b1-4f96-970a-43ab7064dd8f"
          }}
          style={styles.ImageBackground_I1006_27598_752_28469}
        />
        <View style={styles.View_I1006_27598_752_28471}>
          <View style={styles.View_I1006_27598_752_28472}>
            <Text style={styles.Text_I1006_27598_752_28472}>
              Hiking Track Pants - HTP324
            </Text>
          </View>
          <View style={styles.View_I1006_27598_752_28473}>
            <Text style={styles.Text_I1006_27598_752_28473}>Style</Text>
          </View>
        </View>
        <View style={styles.View_I1006_27598_752_28474}>
          <View style={styles.View_I1006_27598_752_28475}>
            <Text style={styles.Text_I1006_27598_752_28475}>12345</Text>
          </View>
          <View style={styles.View_I1006_27598_752_28476}>
            <Text style={styles.Text_I1006_27598_752_28476}>Job Order</Text>
          </View>
        </View>
        <View style={styles.View_I1006_27598_752_28483}>
          <View style={styles.View_I1006_27598_752_28484}>
            <Text style={styles.Text_I1006_27598_752_28484}>Line 01</Text>
          </View>
          <View style={styles.View_I1006_27598_752_28485}>
            <Text style={styles.Text_I1006_27598_752_28485}>Line Name</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82de6699-43a7-406f-94f9-443f7a21dcd6"
          }}
          style={styles.ImageBackground_I1006_27598_752_28482}
        />
        <View style={styles.View_I1006_27598_752_28492}>
          <View style={styles.View_I1006_27598_752_28486} />
          <View style={styles.View_I1006_27598_752_28477}>
            <View style={styles.View_I1006_27598_752_28478}>
              <View style={styles.View_I1006_27598_752_28479}>
                <Text style={styles.Text_I1006_27598_752_28479}>Live</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99371bad-5dfa-4cff-8145-045fc62b3427"
              }}
              style={styles.ImageBackground_I1006_27598_752_28480}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1006_27599}>
        <View style={styles.View_I1006_27599_269_27952} />
        <View style={styles.View_I1006_27599_269_27953}>
          <View style={styles.View_I1006_27599_269_27954}>
            <View style={styles.View_I1006_27599_269_27955} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/adb25b87-2469-4e01-b582-5b8896158448"
              }}
              style={styles.ImageBackground_I1006_27599_269_27956}
            />
            <View style={styles.View_I1006_27599_269_27957} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fbef485-42d5-4489-a5af-ed1a14509f4a"
            }}
            style={styles.ImageBackground_I1006_27599_269_27958}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93371227-2541-4b50-8096-946fe500f38d"
            }}
            style={styles.ImageBackground_I1006_27599_269_27962}
          />
          <View style={styles.View_I1006_27599_269_27967}>
            <Text style={styles.Text_I1006_27599_269_27967}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I1006_27599_269_27968}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d00a8ad-80d5-4e73-b5cd-5bf3aa29f941"
            }}
            style={styles.ImageBackground_I1006_27599_269_27969}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ba2f458-c038-4d8c-827c-9bba774af3be"
            }}
            style={styles.ImageBackground_I1006_27599_269_27970}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_1006_27504: {
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
  View_1006_27505: {
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
  View_1006_27506: {
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
  View_1006_27507: {
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
  View_1006_27508: {
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
  View_1006_27509: {
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
  View_1006_27510: {
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
  Text_1006_27510: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_1006_27511: {
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
  Text_1006_27511: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_1006_27512: {
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
  View_1006_27513: {
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
  Text_1006_27513: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_1006_27514: {
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
  Text_1006_27514: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_1006_27515: {
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
  View_1006_27516: {
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
  Text_1006_27516: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  ImageBackground_1006_27517: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27519: {
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
  View_1006_27520: {
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
  Text_1006_27520: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_1006_27521: {
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
  ImageBackground_1006_27522: {
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
  View_1006_27523: {
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
  ImageBackground_1006_27524: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1006_27528: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1006_27529: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1006_27530: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1006_27531: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1006_27532: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27534: {
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
  View_1006_27535: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_27535: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_1006_27536: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27537: {
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
  View_1006_27538: {
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
  View_1006_27539: {
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
  View_1006_27540: {
    width: wp("91%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1006_27541: {
    width: wp("91%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27543: {
    width: wp("76%"),
    height: hp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1006_27544: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_1006_27563: {
    width: wp("74%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27564: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27565: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27566: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_27566: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1006_27567: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_27567: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_1006_27568: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_1006_27569: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27570: {
    width: wp("19%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_27570: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1006_27571: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_27571: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_1006_27572: {
    width: wp("66%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27573: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27574: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27575: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_27575: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1006_27576: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_27576: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_1006_27577: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_1006_27578: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27579: {
    width: wp("19%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_27579: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1006_27580: {
    width: wp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_27580: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_1006_27581: {
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
  View_1006_27582: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_27582: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_1006_27583: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27584: {
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
  View_1006_27585: {
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
  View_I1006_27585_791_31693: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1006_27585_791_31694: {
    width: wp("91%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27585_791_31696: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I1006_27585_791_31697: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_I1006_27585_791_31704: {
    width: wp("38%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27585_791_31705: {
    width: wp("38%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27585_791_31727: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27585_791_31728: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1006_27585_791_31729: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1006_27585_791_31730: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1006_27585_791_31732: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I1006_27585_791_31710: {
    width: wp("26%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_I1006_27585_791_31711: {
    width: wp("26%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27585_791_31712: {
    width: wp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27585_791_31712: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1006_27585_791_31713: {
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27585_791_31713: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27585_791_31714: {
    width: wp("66%"),
    height: hp("5%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27585_791_31715: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27585_791_31716: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27585_791_31717: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27585_791_31717: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1006_27585_791_31718: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27585_791_31718: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27585_791_31721: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_I1006_27585_791_31722: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27585_791_31723: {
    width: wp("19%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27585_791_31723: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1006_27585_791_31724: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27585_791_31724: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_1006_27586: {
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
  View_1006_27587: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_27587: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_1006_27588: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27589: {
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
  View_1006_27590: {
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
  View_1006_27591: {
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
  View_I1006_27591_399_9166: {
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
  View_I1006_27591_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I1006_27591_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27591_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I1006_27591_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27591_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27591_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27591_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27591_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1006_27591_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I1006_27591_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27591_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27591_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27591_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27591_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27591_399_9179: {
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
  ImageBackground_I1006_27591_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_27591_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27591_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27591_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I1006_27591_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27591_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27591_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27591_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27591_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27591_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27591_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27591_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27591_399_9192: {
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
  ImageBackground_I1006_27591_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_27591_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27591_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27591_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I1006_27591_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27591_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27591_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_27592: {
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
  View_I1006_27592_399_9166: {
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
  View_I1006_27592_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I1006_27592_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27592_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I1006_27592_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27592_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27592_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27592_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27592_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1006_27592_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I1006_27592_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27592_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27592_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27592_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27592_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27592_399_9179: {
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
  ImageBackground_I1006_27592_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_27592_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27592_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27592_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I1006_27592_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27592_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27592_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27592_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27592_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27592_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27592_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27592_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27592_399_9192: {
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
  ImageBackground_I1006_27592_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_27592_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27592_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27592_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I1006_27592_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27592_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27592_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_27593: {
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
  View_I1006_27593_399_9166: {
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
  View_I1006_27593_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I1006_27593_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27593_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I1006_27593_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27593_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27593_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27593_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27593_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1006_27593_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I1006_27593_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27593_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27593_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27593_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27593_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27593_399_9179: {
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
  ImageBackground_I1006_27593_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_27593_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27593_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27593_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I1006_27593_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27593_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27593_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27593_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27593_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27593_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27593_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27593_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27593_399_9192: {
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
  ImageBackground_I1006_27593_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_27593_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27593_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27593_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I1006_27593_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27593_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27593_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_27594: {
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
  View_I1006_27594_399_9166: {
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
  View_I1006_27594_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I1006_27594_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27594_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I1006_27594_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27594_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27594_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27594_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27594_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1006_27594_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I1006_27594_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27594_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27594_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27594_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27594_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27594_399_9179: {
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
  ImageBackground_I1006_27594_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_27594_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27594_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27594_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I1006_27594_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27594_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27594_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27594_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27594_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27594_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27594_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27594_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27594_399_9192: {
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
  ImageBackground_I1006_27594_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_27594_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27594_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27594_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I1006_27594_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27594_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27594_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_27595: {
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
  View_I1006_27595_399_9166: {
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
  View_I1006_27595_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I1006_27595_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27595_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I1006_27595_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27595_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27595_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27595_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27595_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I1006_27595_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I1006_27595_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27595_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27595_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27595_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27595_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27595_399_9179: {
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
  ImageBackground_I1006_27595_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_27595_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27595_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27595_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I1006_27595_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27595_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27595_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27595_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27595_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27595_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27595_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27595_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27595_399_9192: {
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
  ImageBackground_I1006_27595_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1006_27595_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27595_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I1006_27595_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I1006_27595_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1006_27595_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27595_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_27596: {
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
  View_1006_27597: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1006_27597: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_1006_27598: {
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
  ImageBackground_I1006_27598_752_28469: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1006_27598_752_28471: {
    flexGrow: 1,
    width: wp("63%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%")
  },
  View_I1006_27598_752_28472: {
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
  Text_I1006_27598_752_28472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I1006_27598_752_28473: {
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
  Text_I1006_27598_752_28473: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27598_752_28474: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%")
  },
  View_I1006_27598_752_28475: {
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
  Text_I1006_27598_752_28475: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I1006_27598_752_28476: {
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
  Text_I1006_27598_752_28476: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I1006_27598_752_28483: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("9%")
  },
  View_I1006_27598_752_28484: {
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
  Text_I1006_27598_752_28484: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I1006_27598_752_28485: {
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
  Text_I1006_27598_752_28485: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  ImageBackground_I1006_27598_752_28482: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I1006_27598_752_28492: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("1%")
  },
  View_I1006_27598_752_28486: {
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
  View_I1006_27598_752_28477: {
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
  View_I1006_27598_752_28478: {
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
  View_I1006_27598_752_28479: {
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
  Text_I1006_27598_752_28479: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_I1006_27598_752_28480: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1006_27599: {
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
  View_I1006_27599_269_27952: {
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
  View_I1006_27599_269_27953: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I1006_27599_269_27954: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_I1006_27599_269_27955: {
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
  ImageBackground_I1006_27599_269_27956: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I1006_27599_269_27957: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_I1006_27599_269_27958: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_I1006_27599_269_27962: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_I1006_27599_269_27967: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1006_27599_269_27967: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I1006_27599_269_27968: {
    flexGrow: 1,
    width: wp("66%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%")
  },
  ImageBackground_I1006_27599_269_27969: {
    width: wp("41%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_I1006_27599_269_27970: {
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
