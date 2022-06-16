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
      <View style={styles.View_865_70889}>
        <View style={styles.View_865_70890}>
          <View style={styles.View_865_70891} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cf40126-6ee2-415d-966a-bf0dbdfb4496"
            }}
            style={styles.ImageBackground_865_70892}
          />
          <View style={styles.View_865_70893} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b6aa4bc-ce5e-46cd-8917-e8e6b33710de"
          }}
          style={styles.ImageBackground_865_70894}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/747bf3f7-644f-47ff-9f0f-1a9a2765a75e"
          }}
          style={styles.ImageBackground_865_70898}
        />
        <View style={styles.View_865_70903}>
          <Text style={styles.Text_865_70903}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_865_70904}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ac405fb-1f0e-4e7f-84d4-342a7a8c495e"
          }}
          style={styles.ImageBackground_865_70905}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11829a90-fc86-4aef-9b15-a6d7a50bfd0d"
          }}
          style={styles.ImageBackground_865_70906}
        />
      </View>
      <View style={styles.View_865_70912}>
        <View style={styles.View_865_70913}>
          <View style={styles.View_865_70914}>
            <View style={styles.View_I865_70914_364_8270}>
              <Text style={styles.Text_I865_70914_364_8270}>Live Status</Text>
            </View>
          </View>
          <View style={styles.View_865_70915}>
            <View style={styles.View_I865_70915_364_8270}>
              <Text style={styles.Text_I865_70915_364_8270}>Production</Text>
            </View>
          </View>
          <View style={styles.View_865_70916}>
            <View style={styles.View_I865_70916_364_8270}>
              <Text style={styles.Text_I865_70916_364_8270}>Punctuality</Text>
            </View>
          </View>
          <View style={styles.View_865_70917}>
            <View style={styles.View_I865_70917_364_8270}>
              <Text style={styles.Text_I865_70917_364_8270}>Short Stops</Text>
            </View>
          </View>
          <View style={styles.View_865_70918}>
            <View style={styles.View_I865_70918_364_8270}>
              <Text style={styles.Text_I865_70918_364_8270}>Down Time</Text>
            </View>
          </View>
          <View style={styles.View_865_70919}>
            <View style={styles.View_I865_70919_364_8270}>
              <Text style={styles.Text_I865_70919_364_8270}>Speed Loss</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70920}>
        <View style={styles.View_I865_70920_55_5047}>
          <View style={styles.View_I865_70920_55_5048}>
            <View style={styles.View_I865_70920_55_5049}>
              <View style={styles.View_I865_70920_55_5050}>
                <View style={styles.View_I865_70920_55_5051} />
              </View>
              <View style={styles.View_I865_70920_55_5060}>
                <View style={styles.View_I865_70920_55_5061}>
                  <View style={styles.View_I865_70920_55_5062}>
                    <Text style={styles.Text_I865_70920_55_5062}>
                      Efficiency: 90%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70920_55_5070}>
          <View style={styles.View_I865_70920_55_5071} />
          <View style={styles.View_I865_70920_55_5072}>
            <View style={styles.View_I865_70920_55_5073}>
              <View style={styles.View_I865_70920_55_5074}>
                <Text style={styles.Text_I865_70920_55_5074}>Quantity</Text>
              </View>
              <View style={styles.View_I865_70920_55_5075}>
                <Text style={styles.Text_I865_70920_55_5075}>180</Text>
              </View>
            </View>
            <View style={styles.View_I865_70920_55_5076}>
              <View style={styles.View_I865_70920_55_5077}>
                <View style={styles.View_I865_70920_55_5078} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bf58990-8cc1-436e-862a-85d8ec52a773"
                  }}
                  style={styles.ImageBackground_I865_70920_55_5079}
                />
              </View>
              <View style={styles.View_I865_70920_55_5080}>
                <View style={styles.View_I865_70920_55_5081}>
                  <View style={styles.View_I865_70920_55_5082}>
                    <View style={styles.View_I865_70920_55_5083}>
                      <Text style={styles.Text_I865_70920_55_5083}>Step 1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70921}>
        <View style={styles.View_I865_70921_55_5047}>
          <View style={styles.View_I865_70921_55_5048}>
            <View style={styles.View_I865_70921_55_5049}>
              <View style={styles.View_I865_70921_55_5050}>
                <View style={styles.View_I865_70921_55_5051} />
              </View>
              <View style={styles.View_I865_70921_55_5060}>
                <View style={styles.View_I865_70921_55_5061}>
                  <View style={styles.View_I865_70921_55_5062}>
                    <Text style={styles.Text_I865_70921_55_5062}>
                      Efficiency: 90%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70921_55_5070}>
          <View style={styles.View_I865_70921_55_5071} />
          <View style={styles.View_I865_70921_55_5072}>
            <View style={styles.View_I865_70921_55_5073}>
              <View style={styles.View_I865_70921_55_5074}>
                <Text style={styles.Text_I865_70921_55_5074}>Quantity</Text>
              </View>
              <View style={styles.View_I865_70921_55_5075}>
                <Text style={styles.Text_I865_70921_55_5075}>180</Text>
              </View>
            </View>
            <View style={styles.View_I865_70921_55_5076}>
              <View style={styles.View_I865_70921_55_5077}>
                <View style={styles.View_I865_70921_55_5078} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebc4c32b-7ab0-4f3c-bbc0-ad8f4ff5272c"
                  }}
                  style={styles.ImageBackground_I865_70921_55_5079}
                />
              </View>
              <View style={styles.View_I865_70921_55_5080}>
                <View style={styles.View_I865_70921_55_5081}>
                  <View style={styles.View_I865_70921_55_5082}>
                    <View style={styles.View_I865_70921_55_5083}>
                      <Text style={styles.Text_I865_70921_55_5083}>Step 1</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70922}>
        <View style={styles.View_I865_70922_55_5047}>
          <View style={styles.View_I865_70922_55_5048}>
            <View style={styles.View_I865_70922_55_5049}>
              <View style={styles.View_I865_70922_55_5050}>
                <View style={styles.View_I865_70922_55_5051} />
              </View>
              <View style={styles.View_I865_70922_55_5060}>
                <View style={styles.View_I865_70922_55_5061}>
                  <View style={styles.View_I865_70922_55_5062}>
                    <Text style={styles.Text_I865_70922_55_5062}>
                      Efficiency: 90%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70922_55_5070}>
          <View style={styles.View_I865_70922_55_5071} />
          <View style={styles.View_I865_70922_55_5072}>
            <View style={styles.View_I865_70922_55_5073}>
              <View style={styles.View_I865_70922_55_5074}>
                <Text style={styles.Text_I865_70922_55_5074}>Quantity</Text>
              </View>
              <View style={styles.View_I865_70922_55_5075}>
                <Text style={styles.Text_I865_70922_55_5075}>180</Text>
              </View>
            </View>
            <View style={styles.View_I865_70922_55_5076}>
              <View style={styles.View_I865_70922_55_5077}>
                <View style={styles.View_I865_70922_55_5078} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17e16601-592b-4415-9b19-9fa5725e9a64"
                  }}
                  style={styles.ImageBackground_I865_70922_55_5079}
                />
              </View>
              <View style={styles.View_I865_70922_55_5080}>
                <View style={styles.View_I865_70922_55_5081}>
                  <View style={styles.View_I865_70922_55_5082}>
                    <View style={styles.View_I865_70922_55_5083}>
                      <Text style={styles.Text_I865_70922_55_5083}>Step 4</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70923}>
        <View style={styles.View_I865_70923_55_5163}>
          <View style={styles.View_I865_70923_55_5164}>
            <View style={styles.View_I865_70923_55_5165}>
              <View style={styles.View_I865_70923_55_5166}>
                <View style={styles.View_I865_70923_55_5167}>
                  <View style={styles.View_I865_70923_55_5168} />
                </View>
                <View style={styles.View_I865_70923_55_5177}>
                  <View style={styles.View_I865_70923_55_5178}>
                    <View style={styles.View_I865_70923_55_5179}>
                      <Text style={styles.Text_I865_70923_55_5179}>
                        Efficiency: 10%
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I865_70923_55_5187}>
            <View style={styles.View_I865_70923_55_5188} />
            <View style={styles.View_I865_70923_55_5189}>
              <View style={styles.View_I865_70923_55_5190}>
                <View style={styles.View_I865_70923_55_5191}>
                  <Text style={styles.Text_I865_70923_55_5191}>Quantity</Text>
                </View>
                <View style={styles.View_I865_70923_55_5192}>
                  <Text style={styles.Text_I865_70923_55_5192}>180</Text>
                </View>
              </View>
              <View style={styles.View_I865_70923_55_5193}>
                <View style={styles.View_I865_70923_55_5194}>
                  <View style={styles.View_I865_70923_55_5195} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/639e96de-1b87-4476-9d62-e828f031d600"
                    }}
                    style={styles.ImageBackground_I865_70923_55_5196}
                  />
                </View>
                <View style={styles.View_I865_70923_55_5197}>
                  <View style={styles.View_I865_70923_55_5198}>
                    <View style={styles.View_I865_70923_55_5199}>
                      <View style={styles.View_I865_70923_55_5200}>
                        <Text style={styles.Text_I865_70923_55_5200}>
                          Step 6
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
      <View style={styles.View_865_70924}>
        <View style={styles.View_I865_70924_749_20129}>
          <View style={styles.View_I865_70924_749_20130}>
            <View style={styles.View_I865_70924_749_20131}>
              <View style={styles.View_I865_70924_749_20132}>
                <View style={styles.View_I865_70924_749_20133}>
                  <View style={styles.View_I865_70924_749_20134} />
                </View>
                <View style={styles.View_I865_70924_749_20143}>
                  <View style={styles.View_I865_70924_749_20144}>
                    <View style={styles.View_I865_70924_749_20145}>
                      <Text style={styles.Text_I865_70924_749_20145}>
                        Efficiency: 50%
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I865_70924_749_20153}>
            <View style={styles.View_I865_70924_749_20154} />
            <View style={styles.View_I865_70924_749_20155}>
              <View style={styles.View_I865_70924_749_20156}>
                <View style={styles.View_I865_70924_749_20157}>
                  <Text style={styles.Text_I865_70924_749_20157}>Quantity</Text>
                </View>
                <View style={styles.View_I865_70924_749_20158}>
                  <Text style={styles.Text_I865_70924_749_20158}>180</Text>
                </View>
              </View>
              <View style={styles.View_I865_70924_749_20159}>
                <View style={styles.View_I865_70924_749_20160}>
                  <View style={styles.View_I865_70924_749_20161} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bd12db8-406a-416f-ac4a-f950d0a1ec5a"
                    }}
                    style={styles.ImageBackground_I865_70924_749_20162}
                  />
                </View>
                <View style={styles.View_I865_70924_749_20163}>
                  <View style={styles.View_I865_70924_749_20164}>
                    <View style={styles.View_I865_70924_749_20165}>
                      <View style={styles.View_I865_70924_749_20166}>
                        <Text style={styles.Text_I865_70924_749_20166}>
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
      <View style={styles.View_865_70925}>
        <View style={styles.View_I865_70925_55_5124}>
          <View style={styles.View_I865_70925_55_5125}>
            <View style={styles.View_I865_70925_55_5126}>
              <View style={styles.View_I865_70925_55_5127}>
                <View style={styles.View_I865_70925_55_5128}>
                  <View style={styles.View_I865_70925_55_5129} />
                </View>
                <View style={styles.View_I865_70925_55_5138}>
                  <View style={styles.View_I865_70925_55_5139}>
                    <View style={styles.View_I865_70925_55_5140}>
                      <Text style={styles.Text_I865_70925_55_5140}>
                        Efficiency: 10%
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I865_70925_55_5148}>
            <View style={styles.View_I865_70925_55_5149} />
            <View style={styles.View_I865_70925_55_5150}>
              <View style={styles.View_I865_70925_55_5151}>
                <View style={styles.View_I865_70925_55_5152}>
                  <Text style={styles.Text_I865_70925_55_5152}>Quantity</Text>
                </View>
                <View style={styles.View_I865_70925_55_5153}>
                  <Text style={styles.Text_I865_70925_55_5153}>180</Text>
                </View>
              </View>
              <View style={styles.View_I865_70925_55_5154}>
                <View style={styles.View_I865_70925_55_5155}>
                  <View style={styles.View_I865_70925_55_5156} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70d24a4e-b166-4f4f-a224-8278bfcce267"
                    }}
                    style={styles.ImageBackground_I865_70925_55_5157}
                  />
                </View>
                <View style={styles.View_I865_70925_55_5158}>
                  <View style={styles.View_I865_70925_55_5159}>
                    <View style={styles.View_I865_70925_55_5160}>
                      <View style={styles.View_I865_70925_55_5161}>
                        <Text style={styles.Text_I865_70925_55_5161}>
                          Step 5
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
      <View style={styles.View_865_70926}>
        <View style={styles.View_865_70927}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d85bcae-ee61-4ec5-b1b8-142d4690974c"
            }}
            style={styles.ImageBackground_865_70928}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69c15ccd-7e30-47d3-bc37-24ab349b1231"
            }}
            style={styles.ImageBackground_865_70929}
          />
        </View>
      </View>
      <View style={styles.View_865_70931} />
      <View style={styles.View_865_70932}>
        <View style={styles.View_865_70933}>
          <View style={styles.View_865_70934} />
        </View>
        <View style={styles.View_865_70935} />
        <View style={styles.View_865_70938}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c11e0d4f-1f97-4a37-a297-f5536f605a90"
            }}
            style={styles.ImageBackground_865_70939}
          />
          <View style={styles.View_865_70940}>
            <View style={styles.View_865_70941}>
              <Text style={styles.Text_865_70941}>Filters</Text>
            </View>
            <TouchableOpacity
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf2ca19a-825d-4f32-9e36-8bad67b9f606"
              }}
              style={styles.TouchableOpacity_865_70942}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("865_71544"))
              }
            />
          </View>
        </View>
        <View style={styles.View_865_70943}>
          <View style={styles.View_865_70944}>
            <View style={styles.View_865_70945}>
              <View style={styles.View_865_70946}>
                <View style={styles.View_865_70947}>
                  <Text style={styles.Text_865_70947}>Day</Text>
                </View>
                <View style={styles.View_865_70948}>
                  <Text style={styles.Text_865_70948}>
                    12 May 2022 l Today{" "}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_865_70949}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("865_70813"))
              }
            >
              <View style={styles.View_865_70950}>
                <Text style={styles.Text_865_70950}>Change Date</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5cac9f0-18bd-4784-925b-42c99e5080cf"
                }}
                style={styles.ImageBackground_865_70951}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.View_865_70952}>
            <View style={styles.View_865_70953}>
              <View style={styles.View_865_70954}>
                <Text style={styles.Text_865_70954}>Shift</Text>
              </View>
              <View style={styles.View_865_70955}>
                <View style={styles.View_I865_70955_750_24081}>
                  <View style={styles.View_I865_70955_750_24082}>
                    <Text style={styles.Text_I865_70955_750_24082}>
                      Morning Shift
                    </Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef772ba5-b681-4405-8798-f0f5e9f2f8f8"
                    }}
                    style={styles.ImageBackground_I865_70955_750_24083}
                  />
                </View>
              </View>
              <View style={styles.View_865_70956}>
                <View style={styles.View_I865_70956_50994_6728}>
                  <Text style={styles.Text_I865_70956_50994_6728}>
                    Evening Shift
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_865_70957}>
            <View style={styles.View_865_70958}>
              <View style={styles.View_865_70959}>
                <Text style={styles.Text_865_70959}>Session</Text>
              </View>
              <View style={styles.View_865_70960}>
                <View style={styles.View_I865_70960_50994_6728}>
                  <Text style={styles.Text_I865_70960_50994_6728}>
                    Session Name
                  </Text>
                </View>
              </View>
              <View style={styles.View_865_70961}>
                <View style={styles.View_I865_70961_50994_6728}>
                  <Text style={styles.Text_I865_70961_50994_6728}>
                    Session Name
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70962}>
        <View style={styles.View_865_70963} />
        <View style={styles.View_865_70964}>
          <View style={styles.View_865_70965}>
            <View style={styles.View_865_70966}>
              <View style={styles.View_865_70967}>
                <Text style={styles.Text_865_70967}>Clear</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_865_70968}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("865_71517"))
              }
            >
              <View style={styles.View_865_70969}>
                <Text style={styles.Text_865_70969}>Apply Filters</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70970}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da65ab84-2d07-44f8-a1c9-1c233e4bc950"
          }}
          style={styles.ImageBackground_I865_70970_752_28469}
        />
        <View style={styles.View_I865_70970_752_28471}>
          <View style={styles.View_I865_70970_752_28472}>
            <Text style={styles.Text_I865_70970_752_28472}>
              Hiking Track Pants - HTP324
            </Text>
          </View>
          <View style={styles.View_I865_70970_752_28473}>
            <Text style={styles.Text_I865_70970_752_28473}>Style</Text>
          </View>
        </View>
        <View style={styles.View_I865_70970_752_28474}>
          <View style={styles.View_I865_70970_752_28475}>
            <Text style={styles.Text_I865_70970_752_28475}>12345</Text>
          </View>
          <View style={styles.View_I865_70970_752_28476}>
            <Text style={styles.Text_I865_70970_752_28476}>Job Order</Text>
          </View>
        </View>
        <View style={styles.View_I865_70970_752_28483}>
          <View style={styles.View_I865_70970_752_28484}>
            <Text style={styles.Text_I865_70970_752_28484}>Line 01</Text>
          </View>
          <View style={styles.View_I865_70970_752_28485}>
            <Text style={styles.Text_I865_70970_752_28485}>Line Name</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b919cbca-a29d-4a06-8cf2-799411a7071a"
          }}
          style={styles.ImageBackground_I865_70970_752_28482}
        />
        <View style={styles.View_I865_70970_752_28492}>
          <View style={styles.View_I865_70970_752_28486} />
          <View style={styles.View_I865_70970_752_28477}>
            <View style={styles.View_I865_70970_752_28478}>
              <View style={styles.View_I865_70970_752_28479}>
                <Text style={styles.Text_I865_70970_752_28479}>Live</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b668e365-378e-4579-a861-1006851218e2"
              }}
              style={styles.ImageBackground_I865_70970_752_28480}
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
  View_865_70889: {
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
  View_865_70890: {
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
  View_865_70891: {
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
  ImageBackground_865_70892: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_865_70893: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_865_70894: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_865_70898: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_865_70903: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_70903: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_865_70904: {
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
  ImageBackground_865_70905: {
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
  ImageBackground_865_70906: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_70912: {
    width: wp("194%"),
    minWidth: wp("194%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("29%")
  },
  View_865_70913: {
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
  View_865_70914: {
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
  View_I865_70914_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70914_364_8270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70915: {
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
  View_I865_70915_364_8270: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70915_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70916: {
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
  View_I865_70916_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70916_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70917: {
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
  View_I865_70917_364_8270: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70917_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70918: {
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
  View_I865_70918_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70918_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70919: {
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
  View_I865_70919_364_8270: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70919_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70920: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70920_55_5047: {
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
  View_I865_70920_55_5048: {
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
  View_I865_70920_55_5049: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70920_55_5050: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70920_55_5051: {
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
  View_I865_70920_55_5060: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_70920_55_5061: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70920_55_5062: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70920_55_5062: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70920_55_5070: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70920_55_5071: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_70920_55_5072: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70920_55_5073: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70920_55_5074: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70920_55_5074: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70920_55_5075: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70920_55_5075: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70920_55_5076: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70920_55_5077: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70920_55_5078: {
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
  ImageBackground_I865_70920_55_5079: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_70920_55_5080: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_70920_55_5081: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70920_55_5082: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70920_55_5083: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70920_55_5083: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70921: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70921_55_5047: {
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
  View_I865_70921_55_5048: {
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
  View_I865_70921_55_5049: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70921_55_5050: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70921_55_5051: {
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
  View_I865_70921_55_5060: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_70921_55_5061: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70921_55_5062: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70921_55_5062: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70921_55_5070: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70921_55_5071: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_70921_55_5072: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70921_55_5073: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70921_55_5074: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70921_55_5074: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70921_55_5075: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70921_55_5075: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70921_55_5076: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70921_55_5077: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70921_55_5078: {
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
  ImageBackground_I865_70921_55_5079: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_70921_55_5080: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_70921_55_5081: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70921_55_5082: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70921_55_5083: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70921_55_5083: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70922: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70922_55_5047: {
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
  View_I865_70922_55_5048: {
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
  View_I865_70922_55_5049: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70922_55_5050: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70922_55_5051: {
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
  View_I865_70922_55_5060: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_70922_55_5061: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70922_55_5062: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70922_55_5062: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70922_55_5070: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70922_55_5071: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_70922_55_5072: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70922_55_5073: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70922_55_5074: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70922_55_5074: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70922_55_5075: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70922_55_5075: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70922_55_5076: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70922_55_5077: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70922_55_5078: {
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
  ImageBackground_I865_70922_55_5079: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_70922_55_5080: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_70922_55_5081: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70922_55_5082: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70922_55_5083: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70922_55_5083: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70923: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("74%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70923_55_5163: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70923_55_5164: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70923_55_5165: {
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
  View_I865_70923_55_5166: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70923_55_5167: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70923_55_5168: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(117, 117, 117, 1)",
    opacity: 0.15000000596046448
  },
  View_I865_70923_55_5177: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_70923_55_5178: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70923_55_5179: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70923_55_5179: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70923_55_5187: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70923_55_5188: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_70923_55_5189: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70923_55_5190: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70923_55_5191: {
    width: wp("11%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70923_55_5191: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70923_55_5192: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70923_55_5192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70923_55_5193: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70923_55_5194: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70923_55_5195: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(117, 117, 117, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I865_70923_55_5196: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_70923_55_5197: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_70923_55_5198: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70923_55_5199: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70923_55_5200: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70923_55_5200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70924: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70924_749_20129: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70924_749_20130: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70924_749_20131: {
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
  View_I865_70924_749_20132: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70924_749_20133: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70924_749_20134: {
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
  View_I865_70924_749_20143: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_70924_749_20144: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70924_749_20145: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70924_749_20145: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70924_749_20153: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70924_749_20154: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_70924_749_20155: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70924_749_20156: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70924_749_20157: {
    width: wp("16%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70924_749_20157: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70924_749_20158: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70924_749_20158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70924_749_20159: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70924_749_20160: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70924_749_20161: {
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
  ImageBackground_I865_70924_749_20162: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_70924_749_20163: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_70924_749_20164: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70924_749_20165: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70924_749_20166: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70924_749_20166: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70925: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("74%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70925_55_5124: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70925_55_5125: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70925_55_5126: {
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
  View_I865_70925_55_5127: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70925_55_5128: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70925_55_5129: {
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
  View_I865_70925_55_5138: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I865_70925_55_5139: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70925_55_5140: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70925_55_5140: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70925_55_5148: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70925_55_5149: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_70925_55_5150: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70925_55_5151: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70925_55_5152: {
    width: wp("11%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70925_55_5152: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70925_55_5153: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70925_55_5153: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70925_55_5154: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70925_55_5155: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70925_55_5156: {
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
  ImageBackground_I865_70925_55_5157: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_70925_55_5158: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_70925_55_5159: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70925_55_5160: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70925_55_5161: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70925_55_5161: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70926: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("98%")
  },
  View_865_70927: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_865_70928: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_865_70929: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_865_70931: {
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
  View_865_70932: {
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
  View_865_70933: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_70934: {
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
  View_865_70935: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_865_70938: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  ImageBackground_865_70939: {
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
  View_865_70940: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_865_70941: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_70941: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  TouchableOpacity_865_70942: {
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
  View_865_70943: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_70944: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_70945: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_70946: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_70947: {
    width: wp("46%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_70947: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70948: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_865_70948: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  TouchableOpacity_865_70949: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%")
  },
  View_865_70950: {
    width: wp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_70950: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_865_70951: {
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
  View_865_70952: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_865_70953: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_70954: {
    width: wp("46%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_865_70954: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70955: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(217, 207, 243, 1)"
  },
  View_I865_70955_750_24081: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70955_750_24082: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I865_70955_750_24082: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_I865_70955_750_24083: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_865_70956: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70956_50994_6728: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70956_50994_6728: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70957: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_865_70958: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_70959: {
    width: wp("46%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_865_70959: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70960: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70960_50994_6728: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70960_50994_6728: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70961: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70961_50994_6728: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70961_50994_6728: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70962: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95%")
  },
  View_865_70963: {
    width: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_70964: {
    width: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%")
  },
  View_865_70965: {
    width: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_865_70966: {
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
  View_865_70967: {
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
  Text_865_70967: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_865_70968: {
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
  View_865_70969: {
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
  Text_865_70969: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_865_70970: {
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
  ImageBackground_I865_70970_752_28469: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70970_752_28471: {
    flexGrow: 1,
    width: wp("63%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%")
  },
  View_I865_70970_752_28472: {
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
  Text_I865_70970_752_28472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_70970_752_28473: {
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
  Text_I865_70970_752_28473: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_70970_752_28474: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%")
  },
  View_I865_70970_752_28475: {
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
  Text_I865_70970_752_28475: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_70970_752_28476: {
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
  Text_I865_70970_752_28476: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_70970_752_28483: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("9%")
  },
  View_I865_70970_752_28484: {
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
  Text_I865_70970_752_28484: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_70970_752_28485: {
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
  Text_I865_70970_752_28485: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  ImageBackground_I865_70970_752_28482: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I865_70970_752_28492: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("1%")
  },
  View_I865_70970_752_28486: {
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
  View_I865_70970_752_28477: {
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
  View_I865_70970_752_28478: {
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
  View_I865_70970_752_28479: {
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
  Text_I865_70970_752_28479: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_I865_70970_752_28480: {
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
