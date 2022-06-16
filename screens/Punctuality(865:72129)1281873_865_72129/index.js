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
      <View style={styles.View_865_72130}>
        <View style={styles.View_865_72131}>
          <View style={styles.View_865_72132} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1126ccb8-dd55-4297-a1f5-2ebdd637b197"
            }}
            style={styles.ImageBackground_865_72133}
          />
          <View style={styles.View_865_72134} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de5151c7-2176-449e-9937-1e1056747a3e"
          }}
          style={styles.ImageBackground_865_72135}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af1367bc-ea25-45e4-b4e3-0815f7b2fd5a"
          }}
          style={styles.ImageBackground_865_72139}
        />
        <View style={styles.View_865_72144}>
          <Text style={styles.Text_865_72144}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_865_72145}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a75afd2-2b86-45bb-9edd-f632f3886b41"
          }}
          style={styles.ImageBackground_865_72146}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df0fc8ff-43b9-46de-ae81-3a8b2c2c9724"
          }}
          style={styles.ImageBackground_865_72147}
        />
      </View>
      <View style={styles.View_865_72153}>
        <View style={styles.View_I865_72153_624_14690}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/308b8826-3337-491f-8881-58c76253c7d7"
            }}
            style={styles.ImageBackground_I865_72153_624_14691}
          />
          <View style={styles.View_I865_72153_624_14692}>
            <View style={styles.View_I865_72153_624_14693}>
              <View style={styles.View_I865_72153_624_14694}>
                <Text style={styles.Text_I865_72153_624_14694}>H&amp;M</Text>
              </View>
              <View style={styles.View_I865_72153_624_14695}>
                <Text style={styles.Text_I865_72153_624_14695}>Buyer </Text>
              </View>
            </View>
            <View style={styles.View_I865_72153_624_14696}>
              <View style={styles.View_I865_72153_624_14697}>
                <Text style={styles.Text_I865_72153_624_14697}>
                  Hiking Track Pants - HTP324
                </Text>
              </View>
              <View style={styles.View_I865_72153_624_14698}>
                <Text style={styles.Text_I865_72153_624_14698}>Style</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I865_72153_624_14699}>
            <View style={styles.View_I865_72153_624_14703}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f439068-c244-4197-91ee-f0b92efb1549"
                }}
                style={styles.ImageBackground_I865_72153_624_14700}
              />
              <View style={styles.View_I865_72153_624_14702}>
                <Text style={styles.Text_I865_72153_624_14702}>Tech Pack</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_72154}>
        <View style={styles.View_865_72155}>
          <View style={styles.View_865_72156}>
            <View style={styles.View_I865_72156_364_8270}>
              <Text style={styles.Text_I865_72156_364_8270}>Live Status</Text>
            </View>
          </View>
          <View style={styles.View_865_72157}>
            <View style={styles.View_I865_72157_364_8270}>
              <Text style={styles.Text_I865_72157_364_8270}>Production</Text>
            </View>
          </View>
          <View style={styles.View_865_72158}>
            <View style={styles.View_I865_72158_364_8270}>
              <Text style={styles.Text_I865_72158_364_8270}>Punctuality</Text>
            </View>
          </View>
          <View style={styles.View_865_72159}>
            <View style={styles.View_I865_72159_364_8270}>
              <Text style={styles.Text_I865_72159_364_8270}>Short Stops</Text>
            </View>
          </View>
          <View style={styles.View_865_72160}>
            <View style={styles.View_I865_72160_364_8270}>
              <Text style={styles.Text_I865_72160_364_8270}>Down Time</Text>
            </View>
          </View>
          <View style={styles.View_865_72161}>
            <View style={styles.View_I865_72161_364_8270}>
              <Text style={styles.Text_I865_72161_364_8270}>Speed Loss</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_72162}>
        <View style={styles.View_I865_72162_55_6101}>
          <View style={styles.View_I865_72162_55_6102}>
            <View style={styles.View_I865_72162_55_6103}>
              <View style={styles.View_I865_72162_55_6104}>
                <View style={styles.View_I865_72162_55_6105} />
              </View>
              <View style={styles.View_I865_72162_55_6114}>
                <View style={styles.View_I865_72162_55_6115}>
                  <View style={styles.View_I865_72162_55_6116}>
                    <Text style={styles.Text_I865_72162_55_6116}>
                      Pieces: 4
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_72162_55_6124}>
          <View style={styles.View_I865_72162_55_6125} />
          <View style={styles.View_I865_72162_55_6126}>
            <View style={styles.View_I865_72162_55_6127}>
              <View style={styles.View_I865_72162_55_6128}>
                <Text style={styles.Text_I865_72162_55_6128}>Minutes</Text>
              </View>
              <View style={styles.View_I865_72162_55_6129}>
                <Text style={styles.Text_I865_72162_55_6129}>15</Text>
              </View>
            </View>
            <View style={styles.View_I865_72162_55_6130}>
              <View style={styles.View_I865_72162_55_6131}>
                <View style={styles.View_I865_72162_55_6132} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01cf30a0-1f2c-4325-b4c8-3305ae73b913"
                  }}
                  style={styles.ImageBackground_I865_72162_55_6138}
                />
              </View>
              <View style={styles.View_I865_72162_55_6134}>
                <View style={styles.View_I865_72162_55_6135}>
                  <View style={styles.View_I865_72162_55_6136}>
                    <View style={styles.View_I865_72162_55_6137}>
                      <Text style={styles.Text_I865_72162_55_6137}>Step 1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_72163}>
        <View style={styles.View_I865_72163_55_6101}>
          <View style={styles.View_I865_72163_55_6102}>
            <View style={styles.View_I865_72163_55_6103}>
              <View style={styles.View_I865_72163_55_6104}>
                <View style={styles.View_I865_72163_55_6105} />
              </View>
              <View style={styles.View_I865_72163_55_6114}>
                <View style={styles.View_I865_72163_55_6115}>
                  <View style={styles.View_I865_72163_55_6116}>
                    <Text style={styles.Text_I865_72163_55_6116}>
                      Pieces: 4
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_72163_55_6124}>
          <View style={styles.View_I865_72163_55_6125} />
          <View style={styles.View_I865_72163_55_6126}>
            <View style={styles.View_I865_72163_55_6127}>
              <View style={styles.View_I865_72163_55_6128}>
                <Text style={styles.Text_I865_72163_55_6128}>Minutes</Text>
              </View>
              <View style={styles.View_I865_72163_55_6129}>
                <Text style={styles.Text_I865_72163_55_6129}>15</Text>
              </View>
            </View>
            <View style={styles.View_I865_72163_55_6130}>
              <View style={styles.View_I865_72163_55_6131}>
                <View style={styles.View_I865_72163_55_6132} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39ab3806-161f-4e76-ae4a-0bb883c8e280"
                  }}
                  style={styles.ImageBackground_I865_72163_55_6138}
                />
              </View>
              <View style={styles.View_I865_72163_55_6134}>
                <View style={styles.View_I865_72163_55_6135}>
                  <View style={styles.View_I865_72163_55_6136}>
                    <View style={styles.View_I865_72163_55_6137}>
                      <Text style={styles.Text_I865_72163_55_6137}>Step 1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_72164}>
        <View style={styles.View_I865_72164_55_6101}>
          <View style={styles.View_I865_72164_55_6102}>
            <View style={styles.View_I865_72164_55_6103}>
              <View style={styles.View_I865_72164_55_6104}>
                <View style={styles.View_I865_72164_55_6105} />
              </View>
              <View style={styles.View_I865_72164_55_6114}>
                <View style={styles.View_I865_72164_55_6115}>
                  <View style={styles.View_I865_72164_55_6116}>
                    <Text style={styles.Text_I865_72164_55_6116}>
                      Pieces: 4
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_72164_55_6124}>
          <View style={styles.View_I865_72164_55_6125} />
          <View style={styles.View_I865_72164_55_6126}>
            <View style={styles.View_I865_72164_55_6127} />
            <View style={styles.View_I865_72164_55_6130}>
              <View style={styles.View_I865_72164_55_6131}>
                <View style={styles.View_I865_72164_55_6132} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd98e590-531c-46da-8ad0-723b442f09ac"
                  }}
                  style={styles.ImageBackground_I865_72164_55_6138}
                />
              </View>
              <View style={styles.View_I865_72164_55_6134}>
                <View style={styles.View_I865_72164_55_6135}>
                  <View style={styles.View_I865_72164_55_6136}>
                    <View style={styles.View_I865_72164_55_6137}>
                      <Text style={styles.Text_I865_72164_55_6137}>Step 1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_72165}>
        <View style={styles.View_I865_72165_60_9795}>
          <View style={styles.View_I865_72165_60_9796}>
            <View style={styles.View_I865_72165_60_9797}>
              <View style={styles.View_I865_72165_60_9798}>
                <View style={styles.View_I865_72165_60_9799} />
              </View>
              <View style={styles.View_I865_72165_60_9808}>
                <View style={styles.View_I865_72165_60_9809}>
                  <View style={styles.View_I865_72165_60_9810}>
                    <Text style={styles.Text_I865_72165_60_9810}>
                      Pieces: 4
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_72165_60_9818}>
          <View style={styles.View_I865_72165_60_9819} />
          <View style={styles.View_I865_72165_60_9820}>
            <View style={styles.View_I865_72165_60_9821}>
              <View style={styles.View_I865_72165_60_9822}>
                <Text style={styles.Text_I865_72165_60_9822}>Minutes</Text>
              </View>
              <View style={styles.View_I865_72165_60_9823}>
                <Text style={styles.Text_I865_72165_60_9823}>80</Text>
              </View>
            </View>
            <View style={styles.View_I865_72165_60_9824}>
              <View style={styles.View_I865_72165_60_9825}>
                <View style={styles.View_I865_72165_60_9826} />
              </View>
              <View style={styles.View_I865_72165_60_9828}>
                <View style={styles.View_I865_72165_60_9829}>
                  <View style={styles.View_I865_72165_60_9830}>
                    <View style={styles.View_I865_72165_60_9831}>
                      <Text style={styles.Text_I865_72165_60_9831}>Step 1</Text>
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
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6845ca6e-b292-4976-ad9e-8b0eab7dea9c"
          }}
          style={styles.ImageBackground_I865_72165_60_9832}
        />
      </View>
      <View style={styles.View_865_72166}>
        <View style={styles.View_I865_72166_55_6180}>
          <View style={styles.View_I865_72166_55_6181}>
            <View style={styles.View_I865_72166_55_6182}>
              <View style={styles.View_I865_72166_55_6183}>
                <View style={styles.View_I865_72166_55_6184}>
                  <View style={styles.View_I865_72166_55_6185} />
                </View>
                <View style={styles.View_I865_72166_55_6194}>
                  <View style={styles.View_I865_72166_55_6195}>
                    <View style={styles.View_I865_72166_55_6196}>
                      <Text style={styles.Text_I865_72166_55_6196}>
                        Pieces: 10
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I865_72166_55_6204}>
            <View style={styles.View_I865_72166_55_6205} />
            <View style={styles.View_I865_72166_55_6206}>
              <View style={styles.View_I865_72166_55_6207}>
                <View style={styles.View_I865_72166_55_6208}>
                  <Text style={styles.Text_I865_72166_55_6208}>Minutes</Text>
                </View>
                <View style={styles.View_I865_72166_55_6209}>
                  <Text style={styles.Text_I865_72166_55_6209}>35</Text>
                </View>
              </View>
              <View style={styles.View_I865_72166_55_6210}>
                <View style={styles.View_I865_72166_55_6211}>
                  <View style={styles.View_I865_72166_55_6212} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d77c2ed-df27-4597-9ded-5b1f0d41a1b6"
                    }}
                    style={styles.ImageBackground_I865_72166_55_6218}
                  />
                </View>
                <View style={styles.View_I865_72166_55_6214}>
                  <View style={styles.View_I865_72166_55_6215}>
                    <View style={styles.View_I865_72166_55_6216}>
                      <View style={styles.View_I865_72166_55_6217}>
                        <Text style={styles.Text_I865_72166_55_6217}>
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
      <View style={styles.View_865_72167}>
        <View style={styles.View_I865_72167_60_9795}>
          <View style={styles.View_I865_72167_60_9796}>
            <View style={styles.View_I865_72167_60_9797}>
              <View style={styles.View_I865_72167_60_9798}>
                <View style={styles.View_I865_72167_60_9799} />
              </View>
              <View style={styles.View_I865_72167_60_9808}>
                <View style={styles.View_I865_72167_60_9809}>
                  <View style={styles.View_I865_72167_60_9810}>
                    <Text style={styles.Text_I865_72167_60_9810}>
                      Pieces: 4
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_72167_60_9818}>
          <View style={styles.View_I865_72167_60_9819} />
          <View style={styles.View_I865_72167_60_9820}>
            <View style={styles.View_I865_72167_60_9821}>
              <View style={styles.View_I865_72167_60_9822}>
                <Text style={styles.Text_I865_72167_60_9822}>Minutes</Text>
              </View>
              <View style={styles.View_I865_72167_60_9823}>
                <Text style={styles.Text_I865_72167_60_9823}>80</Text>
              </View>
            </View>
            <View style={styles.View_I865_72167_60_9824}>
              <View style={styles.View_I865_72167_60_9825}>
                <View style={styles.View_I865_72167_60_9826} />
              </View>
              <View style={styles.View_I865_72167_60_9828}>
                <View style={styles.View_I865_72167_60_9829}>
                  <View style={styles.View_I865_72167_60_9830}>
                    <View style={styles.View_I865_72167_60_9831}>
                      <Text style={styles.Text_I865_72167_60_9831}>Step 1</Text>
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
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ac4fe81-7298-4402-b087-cbff0b5a86e6"
          }}
          style={styles.ImageBackground_I865_72167_60_9832}
        />
      </View>
      <View style={styles.View_865_72168}>
        <View style={styles.View_865_72169}>
          <Text style={styles.Text_865_72169}>Apply Filters</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c287d1dd-6179-4516-99e6-55098ea0936a"
          }}
          style={styles.ImageBackground_865_72170}
        />
      </View>
      <View style={styles.View_865_72171} />
      <View style={styles.View_865_72172}>
        <View style={styles.View_865_72173} />
        <TouchableOpacity
          style={styles.TouchableOpacity_865_72174}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("865_71963"))
          }
        >
          <View style={styles.View_865_72175}>
            <View style={styles.View_865_72176}>
              <View style={styles.View_865_72177}>
                <Text style={styles.Text_865_72177}>View Details</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_865_72178}>
          <View style={styles.View_865_72179}>
            <View style={styles.View_865_72180}>
              <View style={styles.View_865_72181}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c98d7661-ecc5-4718-8e97-151e39194f37"
                  }}
                  style={styles.ImageBackground_865_72182}
                />
                <View style={styles.View_865_72183} />
              </View>
              <View style={styles.View_865_72186}>
                <Text style={styles.Text_865_72186}>Step 1: Collar Attach</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_865_72187}>
            <View style={styles.View_865_72188}>
              <View style={styles.View_865_72189}>
                <Text style={styles.Text_865_72189}>View Info</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13752ffe-2d13-4fff-8042-4713078f4561"
                }}
                style={styles.ImageBackground_865_72190}
              />
            </View>
          </View>
          <View style={styles.View_865_72192}>
            <View style={styles.View_865_72193}>
              <View style={styles.View_865_72194}>
                <View style={styles.View_865_72195} />
              </View>
              <View style={styles.View_865_72198}>
                <Text style={styles.Text_865_72198}>Punctuality Details</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_865_72199}>
            <View style={styles.View_865_72200}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cef49372-feba-4c0c-bac5-ca3199d16df1"
                }}
                style={styles.ImageBackground_865_72201}
              />
            </View>
            <View style={styles.View_865_72203}>
              <Text style={styles.Text_865_72203}>22-Mar-2022</Text>
            </View>
            <View style={styles.View_865_72204}>
              <View style={styles.View_865_72205}>
                <View style={styles.View_865_72206}>
                  <View style={styles.View_865_72207}>
                    <View style={styles.View_865_72208}>
                      <View style={styles.View_865_72209}>
                        <Text style={styles.Text_865_72209}>First Swipe</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_865_72210}>
                    <View style={styles.View_865_72211}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d4d69c8-d30b-4231-a9b9-f0247d653d03"
                        }}
                        style={styles.ImageBackground_865_72212}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_865_72214}>
                  <Text style={styles.Text_865_72214}>09:12 AM</Text>
                </View>
              </View>
              <View style={styles.View_865_72215}>
                <View style={styles.View_865_72216}>
                  <View style={styles.View_865_72217}>
                    <View style={styles.View_865_72218}>
                      <View style={styles.View_865_72219}>
                        <Text style={styles.Text_865_72219}>
                          Number of Swipes{" "}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_865_72220}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a154d980-ba3e-41e8-a1bc-1c12a4ad5355"
                      }}
                      style={styles.ImageBackground_865_72221}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5878309-737a-41d3-8de0-dde20bbb1cc4"
                      }}
                      style={styles.ImageBackground_865_72222}
                    />
                  </View>
                </View>
                <View style={styles.View_865_72227}>
                  <Text style={styles.Text_865_72227}>04</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18a8a8e1-9d4c-43c0-b62e-6336fdc5b584"
          }}
          style={styles.ImageBackground_865_72228}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_865_72130: {
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
  View_865_72131: {
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
  View_865_72132: {
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
  ImageBackground_865_72133: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_865_72134: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_865_72135: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_865_72139: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_865_72144: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_72144: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_865_72145: {
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
  ImageBackground_865_72146: {
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
  ImageBackground_865_72147: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_72153: {
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
  View_I865_72153_624_14690: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I865_72153_624_14691: {
    width: wp("91%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72153_624_14692: {
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
  View_I865_72153_624_14693: {
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
  View_I865_72153_624_14694: {
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
  Text_I865_72153_624_14694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_72153_624_14695: {
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
  Text_I865_72153_624_14695: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_72153_624_14696: {
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
  View_I865_72153_624_14697: {
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
  Text_I865_72153_624_14697: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_72153_624_14698: {
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
  Text_I865_72153_624_14698: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_72153_624_14699: {
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
  View_I865_72153_624_14703: {
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
  ImageBackground_I865_72153_624_14700: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72153_624_14702: {
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
  Text_I865_72153_624_14702: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_72154: {
    width: wp("194%"),
    minWidth: wp("194%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10%"),
    top: hp("29%")
  },
  View_865_72155: {
    width: wp("194%"),
    minWidth: wp("194%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_72156: {
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
  View_I865_72156_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_72156_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_72157: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_72157_364_8270: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_72157_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_72158: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_72158_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_72158_364_8270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_72159: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_72159_364_8270: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_72159_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_72160: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("133%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_72160_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_72160_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_72161: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("167%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_72161_364_8270: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_72161_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_72162: {
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
  View_I865_72162_55_6101: {
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
  View_I865_72162_55_6102: {
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
  View_I865_72162_55_6103: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_72162_55_6104: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72162_55_6105: {
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
  View_I865_72162_55_6114: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_72162_55_6115: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72162_55_6116: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72162_55_6116: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72162_55_6124: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_72162_55_6125: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_72162_55_6126: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_72162_55_6127: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72162_55_6128: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72162_55_6128: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72162_55_6129: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72162_55_6129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72162_55_6130: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72162_55_6131: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72162_55_6132: {
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
  ImageBackground_I865_72162_55_6138: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_72162_55_6134: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_72162_55_6135: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72162_55_6136: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72162_55_6137: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72162_55_6137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_72163: {
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
  View_I865_72163_55_6101: {
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
  View_I865_72163_55_6102: {
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
  View_I865_72163_55_6103: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_72163_55_6104: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72163_55_6105: {
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
  View_I865_72163_55_6114: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_72163_55_6115: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72163_55_6116: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72163_55_6116: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72163_55_6124: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_72163_55_6125: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_72163_55_6126: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_72163_55_6127: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72163_55_6128: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72163_55_6128: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72163_55_6129: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72163_55_6129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72163_55_6130: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72163_55_6131: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72163_55_6132: {
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
  ImageBackground_I865_72163_55_6138: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_72163_55_6134: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_72163_55_6135: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72163_55_6136: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72163_55_6137: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72163_55_6137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_72164: {
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
  View_I865_72164_55_6101: {
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
  View_I865_72164_55_6102: {
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
  View_I865_72164_55_6103: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_72164_55_6104: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72164_55_6105: {
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
  View_I865_72164_55_6114: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_72164_55_6115: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72164_55_6116: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72164_55_6116: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72164_55_6124: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_72164_55_6125: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_72164_55_6126: {
    width: wp("33%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_72164_55_6127: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72164_55_6130: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72164_55_6131: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72164_55_6132: {
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
  ImageBackground_I865_72164_55_6138: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_72164_55_6134: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_72164_55_6135: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72164_55_6136: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72164_55_6137: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72164_55_6137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_72165: {
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
  View_I865_72165_60_9795: {
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
  View_I865_72165_60_9796: {
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
  View_I865_72165_60_9797: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_72165_60_9798: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72165_60_9799: {
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
  View_I865_72165_60_9808: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_72165_60_9809: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72165_60_9810: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72165_60_9810: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72165_60_9818: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_72165_60_9819: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_72165_60_9820: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_72165_60_9821: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72165_60_9822: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72165_60_9822: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72165_60_9823: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72165_60_9823: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72165_60_9824: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72165_60_9825: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72165_60_9826: {
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
  View_I865_72165_60_9828: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_72165_60_9829: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72165_60_9830: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72165_60_9831: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72165_60_9831: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_I865_72165_60_9832: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_865_72166: {
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
  View_I865_72166_55_6180: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_72166_55_6181: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_72166_55_6182: {
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
  View_I865_72166_55_6183: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_72166_55_6184: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72166_55_6185: {
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
  View_I865_72166_55_6194: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_72166_55_6195: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72166_55_6196: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72166_55_6196: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72166_55_6204: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72166_55_6205: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_72166_55_6206: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_72166_55_6207: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72166_55_6208: {
    width: wp("16%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72166_55_6208: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72166_55_6209: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72166_55_6209: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72166_55_6210: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72166_55_6211: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72166_55_6212: {
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
  ImageBackground_I865_72166_55_6218: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_72166_55_6214: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_72166_55_6215: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72166_55_6216: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72166_55_6217: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72166_55_6217: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_72167: {
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
  View_I865_72167_60_9795: {
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
  View_I865_72167_60_9796: {
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
  View_I865_72167_60_9797: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_72167_60_9798: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72167_60_9799: {
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
  View_I865_72167_60_9808: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_72167_60_9809: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72167_60_9810: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72167_60_9810: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72167_60_9818: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_72167_60_9819: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_72167_60_9820: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_72167_60_9821: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72167_60_9822: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72167_60_9822: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72167_60_9823: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72167_60_9823: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_72167_60_9824: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72167_60_9825: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72167_60_9826: {
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
  View_I865_72167_60_9828: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_72167_60_9829: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72167_60_9830: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_72167_60_9831: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_72167_60_9831: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_I865_72167_60_9832: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_865_72168: {
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
  View_865_72169: {
    width: wp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_72169: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_865_72170: {
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
  View_865_72171: {
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
  View_865_72172: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%")
  },
  View_865_72173: {
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
  TouchableOpacity_865_72174: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("58%")
  },
  View_865_72175: {
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
  View_865_72176: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_72177: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_865_72177: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_72178: {
    width: wp("91%"),
    height: hp("39%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_72179: {
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
  View_865_72180: {
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
  View_865_72181: {
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
  ImageBackground_865_72182: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_865_72183: {
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
  View_865_72186: {
    width: wp("46%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_72186: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_72187: {
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
  View_865_72188: {
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
  View_865_72189: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_865_72189: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_72190: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_865_72192: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_865_72193: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_72194: {
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
  View_865_72195: {
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
  View_865_72198: {
    width: wp("46%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_72198: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_72199: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  View_865_72200: {
    width: wp("91%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_865_72201: {
    width: wp("91%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_72203: {
    width: wp("23%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    justifyContent: "flex-start"
  },
  Text_865_72203: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_72204: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_865_72205: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_72206: {
    width: wp("28%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_72207: {
    width: wp("20%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_865_72208: {
    width: wp("20%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_72209: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_72209: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_865_72210: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_72211: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_865_72212: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_72214: {
    width: wp("29%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_72214: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_72215: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_865_72216: {
    width: wp("41%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_72217: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_865_72218: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_72219: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_72219: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_865_72220: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_865_72221: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_865_72222: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_865_72227: {
    width: wp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_72227: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_865_72228: {
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
