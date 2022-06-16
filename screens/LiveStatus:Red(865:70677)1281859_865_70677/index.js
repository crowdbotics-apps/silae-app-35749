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
      <View style={styles.View_865_70682}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25e6a1c4-520c-4e23-be19-ae886d7d2e94"
          }}
          style={styles.ImageBackground_I865_70682_752_28469}
        />
        <View style={styles.View_I865_70682_752_28471}>
          <View style={styles.View_I865_70682_752_28472}>
            <Text style={styles.Text_I865_70682_752_28472}>
              Hiking Track Pants - HTP324
            </Text>
          </View>
          <View style={styles.View_I865_70682_752_28473}>
            <Text style={styles.Text_I865_70682_752_28473}>Style</Text>
          </View>
        </View>
        <View style={styles.View_I865_70682_752_28474}>
          <View style={styles.View_I865_70682_752_28475}>
            <Text style={styles.Text_I865_70682_752_28475}>12345</Text>
          </View>
          <View style={styles.View_I865_70682_752_28476}>
            <Text style={styles.Text_I865_70682_752_28476}>Job Order</Text>
          </View>
        </View>
        <View style={styles.View_I865_70682_752_28483}>
          <View style={styles.View_I865_70682_752_28484}>
            <Text style={styles.Text_I865_70682_752_28484}>Line 01</Text>
          </View>
          <View style={styles.View_I865_70682_752_28485}>
            <Text style={styles.Text_I865_70682_752_28485}>Line Name</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/047d917c-754a-4b69-9f13-d46c12726cff"
          }}
          style={styles.ImageBackground_I865_70682_752_28482}
        />
        <View style={styles.View_I865_70682_752_28492}>
          <View style={styles.View_I865_70682_752_28486} />
          <View style={styles.View_I865_70682_752_28477}>
            <View style={styles.View_I865_70682_752_28478}>
              <View style={styles.View_I865_70682_752_28479}>
                <Text style={styles.Text_I865_70682_752_28479}>Live</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f52dbf4-0947-493d-9ccf-9e6cdbd3acc5"
              }}
              style={styles.ImageBackground_I865_70682_752_28480}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_865_70683}>
        <View style={styles.View_I865_70683_806_22328}>
          <View style={styles.View_I865_70683_806_22329}>
            <View style={styles.View_I865_70683_806_22330}>
              <View style={styles.View_I865_70683_806_22331}>
                <View style={styles.View_I865_70683_806_22332} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70683_806_22351}>
          <View style={styles.View_I865_70683_806_22352} />
          <View style={styles.View_I865_70683_806_22353}>
            <View style={styles.View_I865_70683_806_22354}>
              <View style={styles.View_I865_70683_806_22355}>
                <Text style={styles.Text_I865_70683_806_22355}>Minutes</Text>
              </View>
              <View style={styles.View_I865_70683_806_22356}>
                <Text style={styles.Text_I865_70683_806_22356}>60</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70683_839_22760}>
          <View style={styles.View_I865_70683_839_22802}>
            <View style={styles.View_I865_70683_839_22762}>
              <View style={styles.View_I865_70683_839_22763}>
                <View style={styles.View_I865_70683_839_22764}>
                  <Text style={styles.Text_I865_70683_839_22764}>Running</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70683_876_27518}>
          <View style={styles.View_I865_70683_876_27519}>
            <View style={styles.View_I865_70683_876_27520} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bff97a9-f774-40a0-ab5a-8533f45001c8"
              }}
              style={styles.ImageBackground_I865_70683_876_28424}
            />
          </View>
          <View style={styles.View_I865_70683_876_27523}>
            <View style={styles.View_I865_70683_876_27524}>
              <View style={styles.View_I865_70683_876_27525}>
                <View style={styles.View_I865_70683_876_27526}>
                  <Text style={styles.Text_I865_70683_876_27526}>Step 1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70684}>
        <View style={styles.View_I865_70684_806_22328}>
          <View style={styles.View_I865_70684_806_22329}>
            <View style={styles.View_I865_70684_806_22330}>
              <View style={styles.View_I865_70684_806_22331}>
                <View style={styles.View_I865_70684_806_22332} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70684_806_22351}>
          <View style={styles.View_I865_70684_806_22352} />
          <View style={styles.View_I865_70684_806_22353}>
            <View style={styles.View_I865_70684_806_22354}>
              <View style={styles.View_I865_70684_806_22355}>
                <Text style={styles.Text_I865_70684_806_22355}>Minutes</Text>
              </View>
              <View style={styles.View_I865_70684_806_22356}>
                <Text style={styles.Text_I865_70684_806_22356}>60</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70684_839_22760}>
          <View style={styles.View_I865_70684_839_22802}>
            <View style={styles.View_I865_70684_839_22762}>
              <View style={styles.View_I865_70684_839_22763}>
                <View style={styles.View_I865_70684_839_22764}>
                  <Text style={styles.Text_I865_70684_839_22764}>Running</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70684_876_27518}>
          <View style={styles.View_I865_70684_876_27519}>
            <View style={styles.View_I865_70684_876_27520} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75eb90d4-a607-4895-bc93-63e46d6b407e"
              }}
              style={styles.ImageBackground_I865_70684_876_28424}
            />
          </View>
          <View style={styles.View_I865_70684_876_27523}>
            <View style={styles.View_I865_70684_876_27524}>
              <View style={styles.View_I865_70684_876_27525}>
                <View style={styles.View_I865_70684_876_27526}>
                  <Text style={styles.Text_I865_70684_876_27526}>Step 1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70685}>
        <View style={styles.View_I865_70685_806_22328}>
          <View style={styles.View_I865_70685_806_22329}>
            <View style={styles.View_I865_70685_806_22330}>
              <View style={styles.View_I865_70685_806_22331}>
                <View style={styles.View_I865_70685_806_22332} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70685_806_22351}>
          <View style={styles.View_I865_70685_806_22352} />
          <View style={styles.View_I865_70685_806_22353}>
            <View style={styles.View_I865_70685_806_22354}>
              <View style={styles.View_I865_70685_806_22355}>
                <Text style={styles.Text_I865_70685_806_22355}>Minutes</Text>
              </View>
              <View style={styles.View_I865_70685_806_22356}>
                <Text style={styles.Text_I865_70685_806_22356}>60</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70685_839_22760}>
          <View style={styles.View_I865_70685_839_22802}>
            <View style={styles.View_I865_70685_839_22762}>
              <View style={styles.View_I865_70685_839_22763}>
                <View style={styles.View_I865_70685_839_22764}>
                  <Text style={styles.Text_I865_70685_839_22764}>Running</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70685_876_27518}>
          <View style={styles.View_I865_70685_876_27519}>
            <View style={styles.View_I865_70685_876_27520} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d4e35ac-cfb9-4426-814b-6ae15643f93d"
              }}
              style={styles.ImageBackground_I865_70685_876_28424}
            />
          </View>
          <View style={styles.View_I865_70685_876_27523}>
            <View style={styles.View_I865_70685_876_27524}>
              <View style={styles.View_I865_70685_876_27525}>
                <View style={styles.View_I865_70685_876_27526}>
                  <Text style={styles.Text_I865_70685_876_27526}>Step 1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70686}>
        <View style={styles.View_I865_70686_248_18854}>
          <View style={styles.View_I865_70686_248_18855}>
            <View style={styles.View_I865_70686_248_18856}>
              <View style={styles.View_I865_70686_248_18857}>
                <View style={styles.View_I865_70686_248_18858}>
                  <View style={styles.View_I865_70686_248_18859} />
                </View>
                <View style={styles.View_I865_70686_248_18868}>
                  <View style={styles.View_I865_70686_248_18897}>
                    <View style={styles.View_I865_70686_248_18898}>
                      <View style={styles.View_I865_70686_248_18899}>
                        <View style={styles.View_I865_70686_248_18900}>
                          <View style={styles.View_I865_70686_248_18901}>
                            <Text style={styles.Text_I865_70686_248_18901}>
                              Not Started
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
          <View style={styles.View_I865_70686_248_18878}>
            <View style={styles.View_I865_70686_248_18879} />
            <View style={styles.View_I865_70686_248_19154}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54c119f0-ab8a-47dc-b3c2-186d23b44716"
                }}
                style={styles.ImageBackground_I865_70686_248_19155}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70687}>
        <View style={styles.View_I865_70687_248_18698}>
          <View style={styles.View_I865_70687_248_18699}>
            <View style={styles.View_I865_70687_248_18700}>
              <View style={styles.View_I865_70687_248_18701}>
                <View style={styles.View_I865_70687_248_18702} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70687_248_18718}>
          <View style={styles.View_I865_70687_248_18719} />
          <View style={styles.View_I865_70687_248_18720}>
            <View style={styles.View_I865_70687_248_18721}>
              <View style={styles.View_I865_70687_248_18722}>
                <Text style={styles.Text_I865_70687_248_18722}>Minutes</Text>
              </View>
              <View style={styles.View_I865_70687_248_18723}>
                <Text style={styles.Text_I865_70687_248_18723}>2</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70687_248_18724}>
          <View style={styles.View_I865_70687_248_18725}>
            <View style={styles.View_I865_70687_248_18726}>
              <View style={styles.View_I865_70687_248_18727}>
                <View style={styles.View_I865_70687_248_18728}>
                  <Text style={styles.Text_I865_70687_248_18728}>Stopped</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70687_248_18729}>
          <View style={styles.View_I865_70687_248_18730}>
            <View style={styles.View_I865_70687_248_18731} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2513eabe-8352-461f-b682-336b6d58178c"
              }}
              style={styles.ImageBackground_I865_70687_248_18732}
            />
          </View>
          <View style={styles.View_I865_70687_248_18735}>
            <View style={styles.View_I865_70687_248_18736}>
              <View style={styles.View_I865_70687_248_18737}>
                <View style={styles.View_I865_70687_248_18738}>
                  <Text style={styles.Text_I865_70687_248_18738}>Step 1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70688}>
        <View style={styles.View_I865_70688_839_22807}>
          <View style={styles.View_I865_70688_839_22808}>
            <View style={styles.View_I865_70688_839_22809}>
              <View style={styles.View_I865_70688_839_22810}>
                <View style={styles.View_I865_70688_839_22811} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70688_839_22827}>
          <View style={styles.View_I865_70688_839_22828} />
          <View style={styles.View_I865_70688_839_22829}>
            <View style={styles.View_I865_70688_839_22830}>
              <View style={styles.View_I865_70688_839_22831}>
                <Text style={styles.Text_I865_70688_839_22831}>Minutes</Text>
              </View>
              <View style={styles.View_I865_70688_839_22832}>
                <Text style={styles.Text_I865_70688_839_22832}>120</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70688_839_22838}>
          <View style={styles.View_I865_70688_839_22839}>
            <View style={styles.View_I865_70688_839_22840}>
              <View style={styles.View_I865_70688_839_22841}>
                <View style={styles.View_I865_70688_839_22842}>
                  <Text style={styles.Text_I865_70688_839_22842}>
                    Machine Down
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I865_70688_876_27536}>
          <View style={styles.View_I865_70688_876_27537}>
            <View style={styles.View_I865_70688_876_27538} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee2aef5d-3ef7-496e-9973-aae470cce67b"
              }}
              style={styles.ImageBackground_I865_70688_876_28430}
            />
          </View>
          <View style={styles.View_I865_70688_876_27541}>
            <View style={styles.View_I865_70688_876_27542}>
              <View style={styles.View_I865_70688_876_27543}>
                <View style={styles.View_I865_70688_876_27544}>
                  <Text style={styles.Text_I865_70688_876_27544}>Step 1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70689}>
        <Text style={styles.Text_865_70689}>Last Upated Today at 5:17PM</Text>
      </View>
      <View style={styles.View_865_70690}>
        <View style={styles.View_I865_70690_269_27952} />
        <View style={styles.View_I865_70690_269_27953}>
          <View style={styles.View_I865_70690_269_27954}>
            <View style={styles.View_I865_70690_269_27955} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3cc1615-59ce-47c5-b617-16e3001c382c"
              }}
              style={styles.ImageBackground_I865_70690_269_27956}
            />
            <View style={styles.View_I865_70690_269_27957} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7421d315-cdd2-4c87-9fd9-38868db90b54"
            }}
            style={styles.ImageBackground_I865_70690_269_27958}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/649d7e46-477a-492e-bbfd-6779c013f8a6"
            }}
            style={styles.ImageBackground_I865_70690_269_27962}
          />
          <View style={styles.View_I865_70690_269_27967}>
            <Text style={styles.Text_I865_70690_269_27967}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I865_70690_269_27968}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c99eb04-5d6c-407e-826e-f9f1dd321056"
            }}
            style={styles.ImageBackground_I865_70690_269_27969}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e216522-0744-492d-8e97-467c9e78a61d"
            }}
            style={styles.ImageBackground_I865_70690_269_27970}
          />
        </View>
      </View>
      <View style={styles.View_865_70691} />
      <View style={styles.View_865_70692}>
        <View style={styles.View_865_70693}>
          <Text style={styles.Text_865_70693}>Apply Filters</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dba0c498-f0b2-4f63-b48b-1562cd622920"
          }}
          style={styles.ImageBackground_865_70694}
        />
      </View>
      <View style={styles.View_865_70695}>
        <View style={styles.View_865_70696}>
          <View style={styles.View_865_70697}>
            <View style={styles.View_865_70698}>
              <View style={styles.View_I865_70698_364_8270}>
                <Text style={styles.Text_I865_70698_364_8270}>Live Status</Text>
              </View>
            </View>
            <View style={styles.View_865_70699}>
              <View style={styles.View_I865_70699_364_8270}>
                <Text style={styles.Text_I865_70699_364_8270}>Production</Text>
              </View>
            </View>
            <View style={styles.View_865_70700}>
              <View style={styles.View_I865_70700_364_8270}>
                <Text style={styles.Text_I865_70700_364_8270}>Punctuality</Text>
              </View>
            </View>
            <View style={styles.View_865_70701}>
              <View style={styles.View_I865_70701_364_8270}>
                <Text style={styles.Text_I865_70701_364_8270}>Short Stops</Text>
              </View>
            </View>
            <View style={styles.View_865_70702}>
              <View style={styles.View_I865_70702_364_8270}>
                <Text style={styles.Text_I865_70702_364_8270}>Down Time</Text>
              </View>
            </View>
            <View style={styles.View_865_70703}>
              <View style={styles.View_I865_70703_364_8270}>
                <Text style={styles.Text_I865_70703_364_8270}>Speed Loss</Text>
              </View>
            </View>
            <View style={styles.View_865_70704}>
              <View style={styles.View_I865_70704_364_8270}>
                <Text style={styles.Text_I865_70704_364_8270}>Line Cost</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_865_70705}>
        <View style={styles.View_865_70706}>
          <View style={styles.View_865_70707}>
            <Text style={styles.Text_865_70707}>View Info</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b24a4913-d5d6-44ae-a4a9-c19c42b18f97"
            }}
            style={styles.ImageBackground_865_70708}
          />
        </View>
      </View>
      <View style={styles.View_865_70710}>
        <View style={styles.View_865_70711} />
        <View style={styles.View_865_70712}>
          <View style={styles.View_865_70713}>
            <View style={styles.View_865_70714}>
              <View style={styles.View_865_70715}>
                <Text style={styles.Text_865_70715}>View Details</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ae278b6-85f1-4153-b08d-a4f0736e28a9"
          }}
          style={styles.ImageBackground_865_70716}
        />
        <View style={styles.View_865_70717}>
          <View style={styles.View_865_70718}>
            <View style={styles.View_865_70719}>
              <View style={styles.View_865_70720}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/350741a8-4ba3-40e6-85b1-b15384d1735f"
                  }}
                  style={styles.ImageBackground_865_70721}
                />
                <View style={styles.View_865_70722} />
              </View>
              <View style={styles.View_865_70725}>
                <Text style={styles.Text_865_70725}>Step 5: Collar Attach</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_865_70726}>
            <View style={styles.View_865_70727}>
              <View style={styles.View_865_70728}>
                <Text style={styles.Text_865_70728}>View Info</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1eb7e81f-e06b-4e72-b439-49e11ce69d24"
                }}
                style={styles.ImageBackground_865_70729}
              />
            </View>
          </View>
          <View style={styles.View_865_70731}>
            <View style={styles.View_865_70732}>
              <View style={styles.View_865_70733}>
                <View style={styles.View_865_70734} />
              </View>
              <View style={styles.View_865_70737}>
                <Text style={styles.Text_865_70737}>Details</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_865_70738}>
            <View style={styles.View_I865_70738_626_30635}>
              <View style={styles.View_I865_70738_626_30636} />
            </View>
            <View style={styles.View_I865_70738_626_30644}>
              <View style={styles.View_I865_70738_626_30645} />
            </View>
            <View style={styles.View_I865_70738_626_30646}>
              <View style={styles.View_I865_70738_626_30647}>
                <Text style={styles.Text_I865_70738_626_30647}>
                  Down Time: 03m:23s
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01c5dfb4-9f15-4fa6-83d0-4a5e15d94fb0"
                }}
                style={styles.ImageBackground_I865_70738_626_30648}
              />
            </View>
            <View style={styles.View_I865_70738_626_30649}>
              <View style={styles.View_I865_70738_626_30650}>
                <Text style={styles.Text_I865_70738_626_30650}>
                  Tap here to assign reason
                </Text>
              </View>
              <View style={styles.View_I865_70738_626_30651}>
                <Text style={styles.Text_I865_70738_626_30651}>Reason</Text>
              </View>
            </View>
            <View style={styles.View_I865_70738_626_30652}>
              <View style={styles.View_I865_70738_626_30653}>
                <Text style={styles.Text_I865_70738_626_30653}>
                  21/07 I 2:32 PM
                </Text>
              </View>
              <View style={styles.View_I865_70738_626_30654}>
                <Text style={styles.Text_I865_70738_626_30654}>
                  Initiated At
                </Text>
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
  View_2: { height: hp("109%") },
  View_865_70682: {
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
  ImageBackground_I865_70682_752_28469: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70682_752_28471: {
    flexGrow: 1,
    width: wp("63%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%")
  },
  View_I865_70682_752_28472: {
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
  Text_I865_70682_752_28472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_70682_752_28473: {
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
  Text_I865_70682_752_28473: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_70682_752_28474: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%")
  },
  View_I865_70682_752_28475: {
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
  Text_I865_70682_752_28475: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_70682_752_28476: {
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
  Text_I865_70682_752_28476: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_70682_752_28483: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("9%")
  },
  View_I865_70682_752_28484: {
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
  Text_I865_70682_752_28484: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15753014385700226,
    textTransform: "none"
  },
  View_I865_70682_752_28485: {
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
  Text_I865_70682_752_28485: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  ImageBackground_I865_70682_752_28482: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I865_70682_752_28492: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("1%")
  },
  View_I865_70682_752_28486: {
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
  View_I865_70682_752_28477: {
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
  View_I865_70682_752_28478: {
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
  View_I865_70682_752_28479: {
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
  Text_I865_70682_752_28479: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_I865_70682_752_28480: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_70683: {
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
  View_I865_70683_806_22328: {
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
  View_I865_70683_806_22329: {
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
  View_I865_70683_806_22330: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70683_806_22331: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70683_806_22332: {
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
  View_I865_70683_806_22351: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70683_806_22352: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_70683_806_22353: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70683_806_22354: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70683_806_22355: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70683_806_22355: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70683_806_22356: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70683_806_22356: {
    color: "rgba(95, 182, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70683_839_22760: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("11%")
  },
  View_I865_70683_839_22802: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_70683_839_22762: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70683_839_22763: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70683_839_22764: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70683_839_22764: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70683_876_27518: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_I865_70683_876_27519: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70683_876_27520: {
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
  ImageBackground_I865_70683_876_28424: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_70683_876_27523: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_70683_876_27524: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70683_876_27525: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70683_876_27526: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70683_876_27526: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70684: {
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
  View_I865_70684_806_22328: {
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
  View_I865_70684_806_22329: {
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
  View_I865_70684_806_22330: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70684_806_22331: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70684_806_22332: {
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
  View_I865_70684_806_22351: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70684_806_22352: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_70684_806_22353: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70684_806_22354: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70684_806_22355: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70684_806_22355: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70684_806_22356: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70684_806_22356: {
    color: "rgba(95, 182, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70684_839_22760: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("11%")
  },
  View_I865_70684_839_22802: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_70684_839_22762: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70684_839_22763: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70684_839_22764: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70684_839_22764: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70684_876_27518: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_I865_70684_876_27519: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70684_876_27520: {
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
  ImageBackground_I865_70684_876_28424: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_70684_876_27523: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_70684_876_27524: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70684_876_27525: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70684_876_27526: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70684_876_27526: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70685: {
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
  View_I865_70685_806_22328: {
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
  View_I865_70685_806_22329: {
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
  View_I865_70685_806_22330: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70685_806_22331: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70685_806_22332: {
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
  View_I865_70685_806_22351: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70685_806_22352: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_70685_806_22353: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70685_806_22354: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70685_806_22355: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70685_806_22355: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70685_806_22356: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70685_806_22356: {
    color: "rgba(95, 182, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70685_839_22760: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("11%")
  },
  View_I865_70685_839_22802: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(95, 182, 51, 1)"
  },
  View_I865_70685_839_22762: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70685_839_22763: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70685_839_22764: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70685_839_22764: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70685_876_27518: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_I865_70685_876_27519: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70685_876_27520: {
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
  ImageBackground_I865_70685_876_28424: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_70685_876_27523: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_70685_876_27524: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70685_876_27525: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70685_876_27526: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70685_876_27526: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70686: {
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
  View_I865_70686_248_18854: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70686_248_18855: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70686_248_18856: {
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
  View_I865_70686_248_18857: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70686_248_18858: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70686_248_18859: {
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
  View_I865_70686_248_18868: {
    width: wp("26%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_I865_70686_248_18897: {
    width: wp("26%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70686_248_18898: {
    width: wp("26%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(130, 130, 130, 1)"
  },
  View_I865_70686_248_18899: {
    width: wp("23%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70686_248_18900: {
    width: wp("23%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70686_248_18901: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70686_248_18901: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70686_248_18878: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70686_248_18879: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(219, 217, 217, 1)",
    opacity: 0.550000011920929
  },
  View_I865_70686_248_19154: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I865_70686_248_19155: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_865_70687: {
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
  View_I865_70687_248_18698: {
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
  View_I865_70687_248_18699: {
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
  View_I865_70687_248_18700: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70687_248_18701: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70687_248_18702: {
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
  View_I865_70687_248_18718: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70687_248_18719: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_70687_248_18720: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70687_248_18721: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70687_248_18722: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70687_248_18722: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70687_248_18723: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70687_248_18723: {
    color: "rgba(239, 140, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70687_248_18724: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("11%")
  },
  View_I865_70687_248_18725: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)"
  },
  View_I865_70687_248_18726: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70687_248_18727: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70687_248_18728: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70687_248_18728: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70687_248_18729: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_I865_70687_248_18730: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70687_248_18731: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(239, 140, 22, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I865_70687_248_18732: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_70687_248_18735: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_70687_248_18736: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70687_248_18737: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70687_248_18738: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70687_248_18738: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70688: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("77%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70688_839_22807: {
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
  View_I865_70688_839_22808: {
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
  View_I865_70688_839_22809: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70688_839_22810: {
    width: wp("38%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70688_839_22811: {
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
  View_I865_70688_839_22827: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I865_70688_839_22828: {
    width: wp("38%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_70688_839_22829: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70688_839_22830: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70688_839_22831: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70688_839_22831: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 6.315878868103027,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70688_839_22832: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70688_839_22832: {
    color: "rgba(219, 22, 22, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70688_839_22838: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%")
  },
  View_I865_70688_839_22839: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 22, 22, 1)"
  },
  View_I865_70688_839_22840: {
    width: wp("23%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I865_70688_839_22841: {
    width: wp("23%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70688_839_22842: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70688_839_22842: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_I865_70688_876_27536: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_I865_70688_876_27537: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70688_876_27538: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(219, 22, 22, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_I865_70688_876_28430: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I865_70688_876_27541: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I865_70688_876_27542: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70688_876_27543: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70688_876_27544: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70688_876_27544: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70689: {
    width: wp("37%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_865_70689: {
    color: "rgba(67, 67, 67, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70690: {
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
  View_I865_70690_269_27952: {
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
  View_I865_70690_269_27953: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I865_70690_269_27954: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_I865_70690_269_27955: {
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
  ImageBackground_I865_70690_269_27956: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I865_70690_269_27957: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(68, 68, 68, 1)"
  },
  ImageBackground_I865_70690_269_27958: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_I865_70690_269_27962: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_I865_70690_269_27967: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70690_269_27967: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I865_70690_269_27968: {
    flexGrow: 1,
    width: wp("66%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%")
  },
  ImageBackground_I865_70690_269_27969: {
    width: wp("41%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_I865_70690_269_27970: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_865_70691: {
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
  View_865_70692: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("38%")
  },
  View_865_70693: {
    width: wp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_70693: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  ImageBackground_865_70694: {
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
  View_865_70695: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_70696: {
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
  View_865_70697: {
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
  View_865_70698: {
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
  View_I865_70698_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70698_364_8270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70699: {
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
  View_I865_70699_364_8270: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70699_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70700: {
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
  View_I865_70700_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70700_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70701: {
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
  View_I865_70701_364_8270: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70701_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70702: {
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
  View_I865_70702_364_8270: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70702_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70703: {
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
  View_I865_70703_364_8270: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70703_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70704: {
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
  View_I865_70704_364_8270: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I865_70704_364_8270: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_865_70705: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("46%")
  },
  View_865_70706: {
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
  View_865_70707: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_865_70707: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_70708: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_865_70710: {
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
  View_865_70711: {
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
  View_865_70712: {
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
  View_865_70713: {
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
  View_865_70714: {
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
  View_865_70715: {
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
  Text_865_70715: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_865_70716: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("1%")
  },
  View_865_70717: {
    width: wp("91%"),
    height: hp("39%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_865_70718: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_865_70719: {
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
  View_865_70720: {
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
  ImageBackground_865_70721: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_865_70722: {
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
  View_865_70725: {
    width: wp("46%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_70725: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70726: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_865_70727: {
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
  View_865_70728: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_865_70728: {
    color: "rgba(73, 69, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_865_70729: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_865_70731: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_865_70732: {
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
  View_865_70733: {
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
  View_865_70734: {
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
  View_865_70737: {
    width: wp("46%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_865_70737: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12090462446212769,
    textTransform: "none"
  },
  View_865_70738: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70738_626_30635: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I865_70738_626_30636: {
    width: wp("91%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(219, 22, 22, 1)",
    opacity: 0.15000000596046448
  },
  View_I865_70738_626_30644: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I865_70738_626_30645: {
    width: wp("90%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I865_70738_626_30646: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%")
  },
  View_I865_70738_626_30647: {
    width: wp("32%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I865_70738_626_30647: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I865_70738_626_30648: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I865_70738_626_30649: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_I865_70738_626_30650: {
    width: wp("39%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70738_626_30650: {
    color: "rgba(219, 22, 22, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_70738_626_30651: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70738_626_30651: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  View_I865_70738_626_30652: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("3%")
  },
  View_I865_70738_626_30653: {
    width: wp("25%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70738_626_30653: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_I865_70738_626_30654: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I865_70738_626_30654: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
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
