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
      <View style={styles.View_865_74334}>
        <View style={styles.View_865_74335}>
          <View style={styles.View_865_74336}>
            <View style={styles.View_865_74337}>
              <View style={styles.View_865_74338}>
                <View style={styles.View_865_74339}>
                  <View style={styles.View_865_74340}>
                    <Text style={styles.Text_865_74340}>01</Text>
                  </View>
                  <View style={styles.View_865_74341}>
                    <Text style={styles.Text_865_74341}>Sequence Number</Text>
                  </View>
                </View>
                <View style={styles.View_865_74342}>
                  <View style={styles.View_865_74343}>
                    <Text style={styles.Text_865_74343}>Side Attach</Text>
                  </View>
                  <View style={styles.View_865_74344}>
                    <Text style={styles.Text_865_74344}>Step Name</Text>
                  </View>
                </View>
                <View style={styles.View_865_74345}>
                  <View style={styles.View_865_74346}>
                    <Text style={styles.Text_865_74346}>28.3 Seconds</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20eb7351-fc6b-48fd-a5e6-4978eabf8290"
                    }}
                    style={styles.ImageBackground_865_74347}
                  />
                  <View style={styles.View_865_74349}>
                    <View style={styles.View_865_74350}>
                      <Text style={styles.Text_865_74350}>Overlock</Text>
                    </View>
                    <View style={styles.View_865_74351}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/237884c4-5436-44d2-9edb-a81354cc4f0a"
                        }}
                        style={styles.ImageBackground_865_74352}
                      />
                      <View style={styles.View_865_74353}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/863a0056-9b48-4868-8949-6a5be592a07b"
                          }}
                          style={styles.ImageBackground_865_74354}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/611913d2-853d-4223-a91f-59f8ad2d09a8"
                          }}
                          style={styles.ImageBackground_865_74358}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91b5ac67-10d6-4ff1-a40a-d77612092428"
                          }}
                          style={styles.ImageBackground_865_74359}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/245c408a-c8d9-4598-b38f-8810611fa677"
                          }}
                          style={styles.ImageBackground_865_74360}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6100130-f0ec-4022-b697-8116a19dc73c"
                          }}
                          style={styles.ImageBackground_865_74361}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86e3fcd8-9849-40da-aac7-48dc574ca8e0"
                }}
                style={styles.ImageBackground_865_74362}
              />
            </View>
          </View>
          <View style={styles.View_865_74364}>
            <View style={styles.View_865_74365}>
              <Text style={styles.Text_865_74365}>Step</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/265e7aa4-f0f5-471e-b3ea-49f8883d573c"
          }}
          style={styles.ImageBackground_865_74366}
        />
        <View style={styles.View_865_74367}>
          <View style={styles.View_865_74368}>
            <View style={styles.View_865_74369}>
              <View style={styles.View_865_74370}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22b4b067-54b8-4b44-80c0-ba6193522c38"
                  }}
                  style={styles.ImageBackground_865_74371}
                />
              </View>
              <View style={styles.View_865_74373}>
                <View style={styles.View_865_74374} />
                <View style={styles.View_865_74393}>
                  <View style={styles.View_865_74394}>
                    <View style={styles.View_865_74395}>
                      <View style={styles.View_865_74396}>
                        <Text style={styles.Text_865_74396}>1234</Text>
                      </View>
                      <View style={styles.View_865_74397}>
                        <Text style={styles.Text_865_74397}>Machine Make</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_865_74398}>
                    <View style={styles.View_865_74399}>
                      <View style={styles.View_865_74400}>
                        <Text style={styles.Text_865_74400}>3453</Text>
                      </View>
                      <View style={styles.View_865_74401}>
                        <Text style={styles.Text_865_74401}>Machine Model</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_865_74402}>
                  <View style={styles.View_865_74403}>
                    <View style={styles.View_865_74404}>
                      <View style={styles.View_865_74405}>
                        <Text style={styles.Text_865_74405}>Brother</Text>
                      </View>
                      <View style={styles.View_865_74406}>
                        <Text style={styles.Text_865_74406}>Name</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_865_74407}>
                    <View style={styles.View_865_74408}>
                      <View style={styles.View_865_74409}>
                        <Text style={styles.Text_865_74409}>3453</Text>
                      </View>
                      <View style={styles.View_865_74410}>
                        <Text style={styles.Text_865_74410}>Machine ID</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_865_74411}>
            <View style={styles.View_865_74412}>
              <Text style={styles.Text_865_74412}>Machine</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c54f0bf5-9258-43fb-9385-ea5892de6cbf"
          }}
          style={styles.ImageBackground_865_74413}
        />
        <View style={styles.View_865_74414}>
          <View style={styles.View_865_74415}>
            <View style={styles.View_I865_74415_791_31693}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5347ed15-0b31-42c1-9a92-9fd37f935990"
                }}
                style={styles.ImageBackground_I865_74415_791_31694}
              />
            </View>
            <View style={styles.View_I865_74415_791_31696}>
              <View style={styles.View_I865_74415_791_31697} />
              <View style={styles.View_I865_74415_791_31704}>
                <View style={styles.View_I865_74415_791_31705}>
                  <View style={styles.View_I865_74415_791_31727}>
                    <View style={styles.View_I865_74415_791_31728}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01827ad7-bde6-498a-9a19-7a2134be589e"
                        }}
                        style={styles.ImageBackground_I865_74415_791_31729}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e04c92a-1cc7-4b04-a2fd-70b1d3276e51"
                        }}
                        style={styles.ImageBackground_I865_74415_791_31730}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b90b2f54-ded2-4a23-bcd6-0163a69a70df"
                      }}
                      style={styles.ImageBackground_I865_74415_791_31732}
                    />
                  </View>
                  <View style={styles.View_I865_74415_791_31710}>
                    <View style={styles.View_I865_74415_791_31711}>
                      <View style={styles.View_I865_74415_791_31712}>
                        <Text style={styles.Text_I865_74415_791_31712}>
                          Tailor
                        </Text>
                      </View>
                      <View style={styles.View_I865_74415_791_31713}>
                        <Text style={styles.Text_I865_74415_791_31713}>
                          Padmavathy V
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I865_74415_791_31714}>
                <View style={styles.View_I865_74415_791_31715}>
                  <View style={styles.View_I865_74415_791_31716}>
                    <View style={styles.View_I865_74415_791_31717}>
                      <Text style={styles.Text_I865_74415_791_31717}>1234</Text>
                    </View>
                    <View style={styles.View_I865_74415_791_31718}>
                      <Text style={styles.Text_I865_74415_791_31718}>
                        Employee Code
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_74415_791_31721}>
                  <View style={styles.View_I865_74415_791_31722}>
                    <View style={styles.View_I865_74415_791_31723}>
                      <Text style={styles.Text_I865_74415_791_31723}>3453</Text>
                    </View>
                    <View style={styles.View_I865_74415_791_31724}>
                      <Text style={styles.Text_I865_74415_791_31724}>RFID</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_865_74416}>
            <View style={styles.View_865_74417}>
              <Text style={styles.Text_865_74417}>Employee</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b933e3bc-9a2f-44de-a0b0-884ad49f70a0"
          }}
          style={styles.ImageBackground_865_74418}
        />
        <View style={styles.View_865_74419}>
          <View style={styles.View_865_74420}>
            <View style={styles.View_865_74421}>
              <View style={styles.View_I865_74421_399_9166} />
              <View style={styles.View_I865_74421_399_9167}>
                <View style={styles.View_I865_74421_399_9168}>
                  <View style={styles.View_I865_74421_399_9169}>
                    <View style={styles.View_I865_74421_399_9170}>
                      <View style={styles.View_I865_74421_399_9171}>
                        <Text style={styles.Text_I865_74421_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_74421_399_9172}>
                    <View style={styles.View_I865_74421_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c6b227d-823d-4f18-90f3-829bd121d455"
                      }}
                      style={styles.ImageBackground_I865_74421_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I865_74421_399_9175}>
                  <View style={styles.View_I865_74421_399_9176}>
                    <View style={styles.View_I865_74421_399_9177}>
                      <Text style={styles.Text_I865_74421_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74421_399_9178}>
                    <View style={styles.View_I865_74421_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00b5aea9-fd18-42d6-b24c-05be0d19ed23"
                        }}
                        style={styles.ImageBackground_I865_74421_399_9180}
                      />
                    </View>
                    <View style={styles.View_I865_74421_399_9183}>
                      <Text style={styles.Text_I865_74421_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74421_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb0ae9b6-33f4-489b-bcc0-69049beaab07"
                      }}
                      style={styles.ImageBackground_I865_74421_399_9185}
                    />
                    <View style={styles.View_I865_74421_399_9187}>
                      <Text style={styles.Text_I865_74421_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_74421_399_9188}>
                  <View style={styles.View_I865_74421_399_9189}>
                    <View style={styles.View_I865_74421_399_9190}>
                      <Text style={styles.Text_I865_74421_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74421_399_9191}>
                    <View style={styles.View_I865_74421_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6bb3961-089a-42d4-9686-d1ee93047e8c"
                        }}
                        style={styles.ImageBackground_I865_74421_399_9193}
                      />
                    </View>
                    <View style={styles.View_I865_74421_399_9196}>
                      <Text style={styles.Text_I865_74421_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74421_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e27c098-49c2-41d5-99fa-8ad3c0909508"
                      }}
                      style={styles.ImageBackground_I865_74421_399_9198}
                    />
                    <View style={styles.View_I865_74421_399_9200}>
                      <Text style={styles.Text_I865_74421_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_865_74422}>
              <View style={styles.View_I865_74422_399_9166} />
              <View style={styles.View_I865_74422_399_9167}>
                <View style={styles.View_I865_74422_399_9168}>
                  <View style={styles.View_I865_74422_399_9169}>
                    <View style={styles.View_I865_74422_399_9170}>
                      <View style={styles.View_I865_74422_399_9171}>
                        <Text style={styles.Text_I865_74422_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_74422_399_9172}>
                    <View style={styles.View_I865_74422_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a77b5a4-0f69-413f-a1a1-3a6b01a0a8d2"
                      }}
                      style={styles.ImageBackground_I865_74422_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I865_74422_399_9175}>
                  <View style={styles.View_I865_74422_399_9176}>
                    <View style={styles.View_I865_74422_399_9177}>
                      <Text style={styles.Text_I865_74422_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74422_399_9178}>
                    <View style={styles.View_I865_74422_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0416e4f-79aa-48fb-9bce-47fd686b3588"
                        }}
                        style={styles.ImageBackground_I865_74422_399_9180}
                      />
                    </View>
                    <View style={styles.View_I865_74422_399_9183}>
                      <Text style={styles.Text_I865_74422_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74422_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5220eab-b610-4157-9f1d-65863b4fa819"
                      }}
                      style={styles.ImageBackground_I865_74422_399_9185}
                    />
                    <View style={styles.View_I865_74422_399_9187}>
                      <Text style={styles.Text_I865_74422_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_74422_399_9188}>
                  <View style={styles.View_I865_74422_399_9189}>
                    <View style={styles.View_I865_74422_399_9190}>
                      <Text style={styles.Text_I865_74422_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74422_399_9191}>
                    <View style={styles.View_I865_74422_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/adb094e2-267d-47f6-a859-2ea906ace762"
                        }}
                        style={styles.ImageBackground_I865_74422_399_9193}
                      />
                    </View>
                    <View style={styles.View_I865_74422_399_9196}>
                      <Text style={styles.Text_I865_74422_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74422_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94caee12-8baa-4696-a080-2d99da18803c"
                      }}
                      style={styles.ImageBackground_I865_74422_399_9198}
                    />
                    <View style={styles.View_I865_74422_399_9200}>
                      <Text style={styles.Text_I865_74422_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_865_74423}>
              <View style={styles.View_I865_74423_399_9166} />
              <View style={styles.View_I865_74423_399_9167}>
                <View style={styles.View_I865_74423_399_9168}>
                  <View style={styles.View_I865_74423_399_9169}>
                    <View style={styles.View_I865_74423_399_9170}>
                      <View style={styles.View_I865_74423_399_9171}>
                        <Text style={styles.Text_I865_74423_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_74423_399_9172}>
                    <View style={styles.View_I865_74423_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38225a97-0098-42c8-8175-a6bde3d4a4ca"
                      }}
                      style={styles.ImageBackground_I865_74423_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I865_74423_399_9175}>
                  <View style={styles.View_I865_74423_399_9176}>
                    <View style={styles.View_I865_74423_399_9177}>
                      <Text style={styles.Text_I865_74423_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74423_399_9178}>
                    <View style={styles.View_I865_74423_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e80796b-70d9-4b06-9828-cb46b2e6dd13"
                        }}
                        style={styles.ImageBackground_I865_74423_399_9180}
                      />
                    </View>
                    <View style={styles.View_I865_74423_399_9183}>
                      <Text style={styles.Text_I865_74423_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74423_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a98e0ca8-30e4-4661-8beb-5868b66b5a2e"
                      }}
                      style={styles.ImageBackground_I865_74423_399_9185}
                    />
                    <View style={styles.View_I865_74423_399_9187}>
                      <Text style={styles.Text_I865_74423_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_74423_399_9188}>
                  <View style={styles.View_I865_74423_399_9189}>
                    <View style={styles.View_I865_74423_399_9190}>
                      <Text style={styles.Text_I865_74423_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74423_399_9191}>
                    <View style={styles.View_I865_74423_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52faf235-56fd-4341-992e-3fb9efb7644c"
                        }}
                        style={styles.ImageBackground_I865_74423_399_9193}
                      />
                    </View>
                    <View style={styles.View_I865_74423_399_9196}>
                      <Text style={styles.Text_I865_74423_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74423_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12d2f959-c3ba-4d5e-a3d5-e44bea3045e0"
                      }}
                      style={styles.ImageBackground_I865_74423_399_9198}
                    />
                    <View style={styles.View_I865_74423_399_9200}>
                      <Text style={styles.Text_I865_74423_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_865_74424}>
              <View style={styles.View_I865_74424_399_9166} />
              <View style={styles.View_I865_74424_399_9167}>
                <View style={styles.View_I865_74424_399_9168}>
                  <View style={styles.View_I865_74424_399_9169}>
                    <View style={styles.View_I865_74424_399_9170}>
                      <View style={styles.View_I865_74424_399_9171}>
                        <Text style={styles.Text_I865_74424_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_74424_399_9172}>
                    <View style={styles.View_I865_74424_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6613ee76-08b6-4e2c-8bcf-9bcb2285546c"
                      }}
                      style={styles.ImageBackground_I865_74424_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I865_74424_399_9175}>
                  <View style={styles.View_I865_74424_399_9176}>
                    <View style={styles.View_I865_74424_399_9177}>
                      <Text style={styles.Text_I865_74424_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74424_399_9178}>
                    <View style={styles.View_I865_74424_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c06865a-dd3e-4a56-8868-b362a8b3bf8e"
                        }}
                        style={styles.ImageBackground_I865_74424_399_9180}
                      />
                    </View>
                    <View style={styles.View_I865_74424_399_9183}>
                      <Text style={styles.Text_I865_74424_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74424_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e897ac4e-6588-4c50-9d89-8ee609e61331"
                      }}
                      style={styles.ImageBackground_I865_74424_399_9185}
                    />
                    <View style={styles.View_I865_74424_399_9187}>
                      <Text style={styles.Text_I865_74424_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_74424_399_9188}>
                  <View style={styles.View_I865_74424_399_9189}>
                    <View style={styles.View_I865_74424_399_9190}>
                      <Text style={styles.Text_I865_74424_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74424_399_9191}>
                    <View style={styles.View_I865_74424_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2bd758b-0e50-40af-bb01-ac49ecaaf69f"
                        }}
                        style={styles.ImageBackground_I865_74424_399_9193}
                      />
                    </View>
                    <View style={styles.View_I865_74424_399_9196}>
                      <Text style={styles.Text_I865_74424_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74424_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b708b99-34ed-46d4-acb3-c585157dba57"
                      }}
                      style={styles.ImageBackground_I865_74424_399_9198}
                    />
                    <View style={styles.View_I865_74424_399_9200}>
                      <Text style={styles.Text_I865_74424_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_865_74425}>
              <View style={styles.View_I865_74425_399_9166} />
              <View style={styles.View_I865_74425_399_9167}>
                <View style={styles.View_I865_74425_399_9168}>
                  <View style={styles.View_I865_74425_399_9169}>
                    <View style={styles.View_I865_74425_399_9170}>
                      <View style={styles.View_I865_74425_399_9171}>
                        <Text style={styles.Text_I865_74425_399_9171}>
                          Sharda Bai
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I865_74425_399_9172}>
                    <View style={styles.View_I865_74425_399_9173} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d469b96f-ae25-48d8-a277-15f81371278e"
                      }}
                      style={styles.ImageBackground_I865_74425_399_9174}
                    />
                  </View>
                </View>
                <View style={styles.View_I865_74425_399_9175}>
                  <View style={styles.View_I865_74425_399_9176}>
                    <View style={styles.View_I865_74425_399_9177}>
                      <Text style={styles.Text_I865_74425_399_9177}>From</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74425_399_9178}>
                    <View style={styles.View_I865_74425_399_9179}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84b5a594-43a6-42e9-b4b9-812f72c6f1ea"
                        }}
                        style={styles.ImageBackground_I865_74425_399_9180}
                      />
                    </View>
                    <View style={styles.View_I865_74425_399_9183}>
                      <Text style={styles.Text_I865_74425_399_9183}>
                        23/04/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74425_399_9184}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa1b264c-ad27-4ce2-a2e9-301598c380f9"
                      }}
                      style={styles.ImageBackground_I865_74425_399_9185}
                    />
                    <View style={styles.View_I865_74425_399_9187}>
                      <Text style={styles.Text_I865_74425_399_9187}>
                        01:58 PM
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I865_74425_399_9188}>
                  <View style={styles.View_I865_74425_399_9189}>
                    <View style={styles.View_I865_74425_399_9190}>
                      <Text style={styles.Text_I865_74425_399_9190}>To</Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74425_399_9191}>
                    <View style={styles.View_I865_74425_399_9192}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b934351b-13ed-40a5-82c0-a85f4dffa549"
                        }}
                        style={styles.ImageBackground_I865_74425_399_9193}
                      />
                    </View>
                    <View style={styles.View_I865_74425_399_9196}>
                      <Text style={styles.Text_I865_74425_399_9196}>
                        24/03/2022
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I865_74425_399_9197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2352883-b1b5-46ed-b03e-1eeb0ccc7914"
                      }}
                      style={styles.ImageBackground_I865_74425_399_9198}
                    />
                    <View style={styles.View_I865_74425_399_9200}>
                      <Text style={styles.Text_I865_74425_399_9200}>
                        03:50 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_865_74426}>
            <View style={styles.View_865_74427}>
              <Text style={styles.Text_865_74427}>Change Log</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_74428}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55659344-682c-44f2-aaf7-23f826ffaeed"
          }}
          style={styles.ImageBackground_I865_74428_752_28469}
        />
        <View style={styles.View_I865_74428_752_28471}>
          <View style={styles.View_I865_74428_752_28472}>
            <Text style={styles.Text_I865_74428_752_28472}>
              Hiking Track Pants - HTP324
            </Text>
          </View>
          <View style={styles.View_I865_74428_752_28473}>
            <Text style={styles.Text_I865_74428_752_28473}>Style</Text>
          </View>
        </View>
        <View style={styles.View_I865_74428_752_28474}>
          <View style={styles.View_I865_74428_752_28475}>
            <Text style={styles.Text_I865_74428_752_28475}>12345</Text>
          </View>
          <View style={styles.View_I865_74428_752_28476}>
            <Text style={styles.Text_I865_74428_752_28476}>Job Order</Text>
          </View>
        </View>
        <View style={styles.View_I865_74428_752_28483}>
          <View style={styles.View_I865_74428_752_28484}>
            <Text style={styles.Text_I865_74428_752_28484}>Line 01</Text>
          </View>
          <View style={styles.View_I865_74428_752_28485}>
            <Text style={styles.Text_I865_74428_752_28485}>Line Name</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/352e191e-8609-45d6-91c7-738520ce09ef"
          }}
          style={styles.ImageBackground_I865_74428_752_28482}
        />
        <View style={styles.View_I865_74428_752_28492}>
          <View style={styles.View_I865_74428_752_28486} />
          <View style={styles.View_I865_74428_752_28477}>
            <View style={styles.View_I865_74428_752_28478}>
              <View style={styles.View_I865_74428_752_28479}>
                <Text style={styles.Text_I865_74428_752_28479}>Live</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e57cb5bb-c0db-4535-804c-e7c17ce5f67a"
              }}
              style={styles.ImageBackground_I865_74428_752_28480}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_865_74429}>
        <View style={styles.View_I865_74429_269_27952} />
        <View style={styles.View_I865_74429_269_27953}>
          <View style={styles.View_I865_74429_269_27954}>
            <View style={styles.View_I865_74429_269_27955} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96fa4a9f-d6f5-4fd9-bb38-97cd537f6ced"
              }}
              style={styles.ImageBackground_I865_74429_269_27956}
            />
            <View style={styles.View_I865_74429_269_27957} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cc87399-48d3-412a-92bb-4887a9c1c22a"
            }}
            style={styles.ImageBackground_I865_74429_269_27958}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30fab2c7-9b21-47d3-b7e1-8e4e5ff905dc"
            }}
            style={styles.ImageBackground_I865_74429_269_27962}
          />
          <View style={styles.View_I865_74429_269_27967}>
            <Text style={styles.Text_I865_74429_269_27967}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I865_74429_269_27968}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a25e9220-1fd5-4bba-8cc7-a564ca69e1d4"
            }}
            style={styles.ImageBackground_I865_74429_269_27969}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc384944-e13d-4ae4-bdbb-25f29f5f9285"
            }}
            style={styles.ImageBackground_I865_74429_269_27970}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_865_74334: {
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
  View_865_74335: {
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
  View_865_74336: {
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
  View_865_74337: {
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
  View_865_74338: {
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
  View_865_74339: {
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
  View_865_74340: {
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
  Text_865_74340: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_865_74341: {
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
  Text_865_74341: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74342: {
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
  View_865_74343: {
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
  Text_865_74343: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_865_74344: {
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
  Text_865_74344: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74345: {
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
  View_865_74346: {
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
  Text_865_74346: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  ImageBackground_865_74347: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74349: {
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
  View_865_74350: {
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
  Text_865_74350: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_865_74351: {
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
  ImageBackground_865_74352: {
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
  View_865_74353: {
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
  ImageBackground_865_74354: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_865_74358: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_865_74359: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_865_74360: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_865_74361: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_865_74362: {
    width: wp("91%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74364: {
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
  View_865_74365: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74365: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_74366: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74367: {
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
  View_865_74368: {
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
  View_865_74369: {
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
  View_865_74370: {
    width: wp("91%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_865_74371: {
    width: wp("91%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74373: {
    width: wp("76%"),
    height: hp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_865_74374: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_865_74393: {
    width: wp("74%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74394: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74395: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74396: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74396: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_74397: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74397: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74398: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_865_74399: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74400: {
    width: wp("19%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74400: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_74401: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74401: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74402: {
    width: wp("66%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74403: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74404: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74405: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74405: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_74406: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74406: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74407: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_865_74408: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74409: {
    width: wp("19%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74409: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_74410: {
    width: wp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74410: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74411: {
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
  View_865_74412: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74412: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_74413: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74414: {
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
  View_865_74415: {
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
  View_I865_74415_791_31693: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I865_74415_791_31694: {
    width: wp("91%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74415_791_31696: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I865_74415_791_31697: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_I865_74415_791_31704: {
    width: wp("38%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74415_791_31705: {
    width: wp("38%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74415_791_31727: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74415_791_31728: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I865_74415_791_31729: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I865_74415_791_31730: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I865_74415_791_31732: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I865_74415_791_31710: {
    width: wp("26%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_I865_74415_791_31711: {
    width: wp("26%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74415_791_31712: {
    width: wp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74415_791_31712: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I865_74415_791_31713: {
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74415_791_31713: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74415_791_31714: {
    width: wp("66%"),
    height: hp("5%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74415_791_31715: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74415_791_31716: {
    width: wp("27%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74415_791_31717: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74415_791_31717: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I865_74415_791_31718: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74415_791_31718: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74415_791_31721: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_I865_74415_791_31722: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74415_791_31723: {
    width: wp("19%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74415_791_31723: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I865_74415_791_31724: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74415_791_31724: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_865_74416: {
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
  View_865_74417: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74417: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_74418: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74419: {
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
  View_865_74420: {
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
  View_865_74421: {
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
  View_I865_74421_399_9166: {
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
  View_I865_74421_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_74421_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74421_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_74421_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74421_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74421_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74421_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74421_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I865_74421_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I865_74421_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74421_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74421_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74421_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74421_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74421_399_9179: {
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
  ImageBackground_I865_74421_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74421_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74421_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74421_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74421_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74421_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74421_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74421_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74421_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74421_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74421_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74421_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74421_399_9192: {
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
  ImageBackground_I865_74421_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74421_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74421_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74421_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74421_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74421_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74421_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74422: {
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
  View_I865_74422_399_9166: {
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
  View_I865_74422_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_74422_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74422_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_74422_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74422_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74422_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74422_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74422_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I865_74422_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I865_74422_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74422_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74422_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74422_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74422_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74422_399_9179: {
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
  ImageBackground_I865_74422_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74422_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74422_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74422_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74422_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74422_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74422_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74422_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74422_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74422_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74422_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74422_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74422_399_9192: {
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
  ImageBackground_I865_74422_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74422_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74422_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74422_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74422_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74422_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74422_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74423: {
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
  View_I865_74423_399_9166: {
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
  View_I865_74423_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_74423_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74423_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_74423_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74423_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74423_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74423_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74423_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I865_74423_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I865_74423_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74423_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74423_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74423_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74423_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74423_399_9179: {
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
  ImageBackground_I865_74423_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74423_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74423_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74423_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74423_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74423_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74423_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74423_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74423_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74423_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74423_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74423_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74423_399_9192: {
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
  ImageBackground_I865_74423_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74423_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74423_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74423_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74423_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74423_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74423_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74424: {
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
  View_I865_74424_399_9166: {
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
  View_I865_74424_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_74424_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74424_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_74424_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74424_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74424_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74424_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74424_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I865_74424_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I865_74424_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74424_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74424_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74424_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74424_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74424_399_9179: {
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
  ImageBackground_I865_74424_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74424_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74424_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74424_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74424_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74424_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74424_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74424_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74424_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74424_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74424_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74424_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74424_399_9192: {
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
  ImageBackground_I865_74424_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74424_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74424_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74424_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74424_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74424_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74424_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74425: {
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
  View_I865_74425_399_9166: {
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
  View_I865_74425_399_9167: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_74425_399_9168: {
    width: wp("47%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74425_399_9169: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I865_74425_399_9170: {
    width: wp("36%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74425_399_9171: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74425_399_9171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74425_399_9172: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74425_399_9173: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I865_74425_399_9174: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I865_74425_399_9175: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74425_399_9176: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74425_399_9177: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74425_399_9177: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74425_399_9178: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74425_399_9179: {
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
  ImageBackground_I865_74425_399_9180: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74425_399_9183: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74425_399_9183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74425_399_9184: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74425_399_9185: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74425_399_9187: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74425_399_9187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74425_399_9188: {
    width: wp("70%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74425_399_9189: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74425_399_9190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74425_399_9190: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74425_399_9191: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74425_399_9192: {
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
  ImageBackground_I865_74425_399_9193: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_74425_399_9196: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74425_399_9196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_74425_399_9197: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_I865_74425_399_9198: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_74425_399_9200: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_74425_399_9200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74426: {
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
  View_865_74427: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_74427: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_74428: {
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
  ImageBackground_I865_74428_752_28469: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_74428_752_28471: {
    flexGrow: 1,
    width: wp("63%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%")
  },
  View_I865_74428_752_28472: {
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
  Text_I865_74428_752_28472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_74428_752_28473: {
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
  Text_I865_74428_752_28473: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74428_752_28474: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%")
  },
  View_I865_74428_752_28475: {
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
  Text_I865_74428_752_28475: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_74428_752_28476: {
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
  Text_I865_74428_752_28476: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_74428_752_28483: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("9%")
  },
  View_I865_74428_752_28484: {
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
  Text_I865_74428_752_28484: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_74428_752_28485: {
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
  Text_I865_74428_752_28485: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  ImageBackground_I865_74428_752_28482: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I865_74428_752_28492: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("1%")
  },
  View_I865_74428_752_28486: {
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
  View_I865_74428_752_28477: {
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
  View_I865_74428_752_28478: {
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
  View_I865_74428_752_28479: {
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
  Text_I865_74428_752_28479: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_I865_74428_752_28480: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_74429: {
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
  View_I865_74429_269_27952: {
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
  View_I865_74429_269_27953: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_74429_269_27954: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_I865_74429_269_27955: {
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
  ImageBackground_I865_74429_269_27956: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I865_74429_269_27957: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_I865_74429_269_27958: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_I865_74429_269_27962: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_I865_74429_269_27967: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_74429_269_27967: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I865_74429_269_27968: {
    flexGrow: 1,
    width: wp("66%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%")
  },
  ImageBackground_I865_74429_269_27969: {
    width: wp("41%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_I865_74429_269_27970: {
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
