import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {datas, forthdata, secnddatas, thrddatas} from '../data/Datas';
import {useCart} from '../shopcontext/ShopContext';

const FirstBody = ({navigation}) => {
  const {addToCart, cartItems} = useCart();
  console.log(cartItems);
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 140,
          // backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '95%',
            height: 60,
            // backgroundColor: 'white',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'column', width: '68%', height: '70%'}}>
            <View
              style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'row',
                width: '90%',
                height: '60%',
                // backgroundColor:'red'
              }}>
              <Image
                style={{width: 20, height: 20, opacity: 0.7}}
                source={require('../../imgs/location.png')}
              />
              <Text style={{color: 'black', fontSize: 15, fontWeight: 700}}>
                Bangalore East Railway
              </Text>
              <Image
                style={{width: 14, height: 14, marginTop: 3, marginRight: 3}}
                source={require('../../imgs/downarrow.png')}
              />
            </View>
            <Text style={{color: 'gray', marginLeft: 20, fontSize: 11}}>
              Bangalore,Karnataka,India
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('cart')}>
            <Image
              style={{width: 28, height: 28}}
              source={require('../../imgs/shopping-cart.png')}
            />
          </TouchableOpacity>
          <Image
            style={{width: 38, height: 38, marginRight: 17}}
            source={require('../../imgs/person.png')}
          />
        </View>
        <View
          style={{
            borderRadius: 10,
            opacity: 0.7,

            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            height: 50,
            backgroundColor: '#e6e6e6',
          }}>
          <TextInput
            style={{
              // backgroundColor: 'white',
              borderRadius: 8,
              width: '75%',
              height: '100%',
              fontSize: 15,
              padding: 10,
            }}
            placeholder="Search,Order,Enjoy,Repeat"
            placeholderTextColor="gray"
          />
          <View
            style={{
              alignItems: 'center',
              borderRadius: 8,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '22%',
              height: '100%',
              // backgroundColor: 'yellow',
            }}>
            <Image
              source={require('../../imgs/search.png')}
              style={{width: 26, height: 26}}
            />
            <View
              style={{
                height: '40%',
                borderColor: 'gray',
                borderWidth: 1,
              }}></View>
            <Image
              source={require('../../imgs/voice.png')}
              style={{width: 28, height: 28}}
            />
          </View>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 100,
            // backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: '90%',
              height: '70%',
              backgroundColor: '#e6e6e6',
              borderRadius: 12,
            }}>
            <Image
              style={{width: 48, height: 48}}
              source={require('../../imgs/discount-badge.png')}
            />
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'column',
                width: '68%',
                height: '100%',
                // backgroundColor: 'white',
              }}>
              <Text
                style={{
                  marginLeft: 15,
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 500,
                }}>
                Offers upto 60% off
              </Text>
              <Text style={{marginLeft: 15, color: 'gray', fontSize: 12}}>
                Hot Deals, Flat Offers & more
              </Text>
            </View>
            <Image
              style={{width: 17, height: 17}}
              source={require('../../imgs/rightarrow.png')}
            />
          </View>
        </View>

        <ScrollView horizontal>
          <View
            style={{
              width: 350,
              alignItems: 'center',
              justifyContent: 'center',
              height: 180,
              // backgroundColor: 'gray',
            }}>
            <Image
              style={{width: '90%', height: '100%', borderRadius: 10}}
              source={require('../../imgs/banner-three.jpg')}
            />
          </View>
          <View
            style={{
              width: 350,
              alignItems: 'center',
              justifyContent: 'center',
              height: 180,
              backgroundColor: 'rēd',
            }}>
            <Image
              style={{width: '90%', height: '100%', borderRadius: 10}}
              source={require('../../imgs/banner-two.png')}
            />
          </View>
          <View
            style={{
              width: 350,
              alignItems: 'center',
              justifyContent: 'center',
              height: 180,
              // backgroundColor: 'red',
            }}>
            <Image
              style={{width: '89%', height: '100%', borderRadius: 10}}
              source={require('../../imgs/banner-one.jpg')}
            />
          </View>
        </ScrollView>
        <View
          style={{
            width: '100%',
            height: 100,
            // backgroundColor: 'gray',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginBottom: 10,
              fontWeight: 500,
              marginLeft: 20,
              color: 'black',
              fontSize: 18,
            }}>
            Qick picks for you
          </Text>
          <View
            style={{
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
              width: '33%',
              height: '30%',
              backgroundColor: 'black',
              borderRadius: 30,
            }}>
            <Text style={{color: 'white', fontSize: 12}}>
              Lowest delivery fee
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            height: 360,
            // backgroundColor: 'gray',
          }}>
          <FlatList
            numColumns={3}
            data={datas}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => addToCart(item.id)}
                style={{
                  marginTop: 20,
                  width: 110,
                  marginLeft: 3,
                  marginRight: 3,
                  height: 150,
                  borderRadius: 10,
                  // backgroundColor: 'white',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '75%',
                    backgroundColor: 'black',
                    borderRadius: 10,
                    opacity: 1.1,
                  }}>
                  <Image
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                      opacity: 0.7,
                      // backgroundColor: 'black',
                    }}
                    source={item.img}
                  />

                  <View
                    style={{
                      justifyContent: 'space-between',
                      width: '100%',
                      height: '100%',

                      borderRadius: 20,
                    }}>
                    <View
                      style={{
                        width: '100%',
                        height: '30%',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}>
                      <Image style={{marginRight: 7}} source={item.love} />
                    </View>
                    <View
                      style={{
                        width: '100%',
                        height: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{color: 'white', fontSize: 18, fontWeight: 800}}>
                        {item.offer}
                      </Text>
                      <Text
                        style={{color: 'white', fontWeight: 400, fontSize: 10}}>
                        {item.upto}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '20%',
                    // backgroundColor: 'yellow',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 600,
                      color: 'black',
                      fontSize: 14,
                    }}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: '50%',
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',
                      }}>
                      <Image
                        style={{width: 11, height: 11}}
                        source={item.star}
                      />
                      <Image
                        style={{width: 11, height: 11}}
                        source={item.star}
                      />
                      <Image
                        style={{width: 11, height: 11}}
                        source={item.star}
                      />
                      <Image
                        style={{width: 11, height: 11}}
                        source={item.star}
                      />
                    </View>

                    <Text
                      style={{color: 'black', fontSize: 11, fontWeight: 500}}>
                      {item.rating}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',

            width: '100%',
            height: 50,
            // backgroundColor: 'gray',
          }}>
          <View
            style={{
              width: '90%',
              height: '100%',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#cccccc',
              // backgroundColor: 'yellow',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '45%',
                height: '100%',
                // backgroundColor: 'red',
              }}>
              <Text style={{color: '#ff751a', fontWeight: 700}}>
                see more restaurants
              </Text>
            </TouchableOpacity>
            <Image
              style={{width: 13, height: 13}}
              source={require('../../imgs/orange-arrow.png')}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            // backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 19,
              marginLeft: 20,
              fontWeight: 800,
            }}>
            Restaurants to explore
          </Text>
        </View>
        <View style={{width: '100%', height: 650}}>
          <FlatList
            data={secnddatas}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => addToCart(item.id)}
                style={{
                  width: '100%',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  height: 140,
                  // backgroundColor: 'yellow',
                  marginTop: 20,
                }}>
                <View
                  style={{
                    width: '35%',
                    height: '100%',
                    backgroundColor: 'white',
                    justifyContent: 'space-between',
                    backgroundColor: 'black',
                    borderRadius: 10,
                    opacity: 1.1,
                  }}>
                  <Image
                    source={item.img}
                    style={{
                      width: '100%',
                      opacity: 0.7,
                      height: '100%',
                      borderRadius: 10,
                      position: 'absolute',
                    }}
                  />
                  <View
                    style={{
                      width: '100%',
                      height: '30%',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <Image style={{marginRight: 7}} source={item.love} />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '50%',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                      // backgroundColor:'red'
                    }}>
                    <Text
                      style={{
                        marginLeft: 10,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      {item.offer}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        marginLeft: 10,
                        marginBottom: 10,
                        fontWeight: 900,
                        fontSize: 10,
                      }}>
                      {item.upto}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    width: '40%',
                    height: '80%',
                    // backgroundColor: 'white',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}>
                  <Text style={{fontSize: 17, color: 'black'}}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      width: '80%',
                      height: '20%',
                      // backgroundColor: 'gray',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        width: '55%',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{width: 15, height: 15}}
                        source={item.star}
                      />
                      <Image
                        style={{width: 15, height: 15}}
                        source={item.star}
                      />
                      <Image
                        style={{width: 15, height: 15}}
                        source={item.star}
                      />
                      <Image
                        style={{width: 15, height: 15}}
                        source={item.star}
                      />
                    </View>
                    <Text
                      style={{fontSize: 14, color: 'black', fontWeight: 900}}>
                      {item.rating}
                    </Text>
                  </View>
                  <Text style={{color: '#a6a6a6'}}>{item.brand}</Text>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: '80%',
                      justifyContent: 'space-evenly',
                      height: 25,
                      backgroundColor: '#f0e6ff',
                      borderRadius: 13,
                    }}>
                    <Image
                      source={require('../../imgs/delivery-man.png')}
                      style={{width: 17, height: 17}}
                    />
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: '900',
                        color: '#751aff',
                      }}>
                      FREE DELEVERY
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            width: '100%',
            height: 60,
            backgroundColor: '#001a00',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '900',
              marginLeft: 20,
            }}>
            Popular Brands
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'space-around',
            width: '100%',
            height: 270,
            backgroundColor: '#001a00',
          }}>
          <ScrollView horizontal>
            <FlatList
              numColumns={5}
              data={thrddatas}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => addToCart(item.id)}
                  style={{
                    marginLeft: 10,
                    width: 120,
                    height: 220,
                    // backgroundColor: 'white',
                    marginTop: 10,
                    marginRight: 10,
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      width: '100%',
                      height: '65%',
                      backgroundColor: 'black',
                      opacity: 1.1,
                      borderRadius: 10,
                    }}>
                    <Image
                      source={item.img}
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        opacity: 0.6,
                        borderRadius: 10,
                      }}
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        width: '100%',
                        height: '30%',
                        // backgroundColor: 'yellow',
                      }}>
                      <Image source={item.love} />
                    </View>

                    <View
                      style={{
                        // alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '40%',
                        // backgroundColor: 'black',
                        // opacity: 0.6,
                      }}>
                      <Text
                        style={{
                          fontSize: 19,
                          marginLeft: 10,
                          fontWeight: '900',
                          color: 'white',
                        }}>
                        {item.offer}
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          marginLeft: 12,
                          fontWeight: '500',
                          color: 'white',
                        }}>
                        {item.upto}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      width: '100%',
                      height: '32%',
                      // backgroundColor: 'black',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: '500',
                        opacity: 0.8,
                      }}>
                      {item.name}
                    </Text>
                    <View
                      style={{
                        width: '40%',
                        height: '30%',
                        // backgroundColor: 'green',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                      }}>
                      <Image
                        source={item.star}
                        style={{width: 15, height: 15}}
                      />
                      <Text
                        style={{color: 'white', fontSize: 11, opacity: 0.7}}>
                        {item.rating}
                      </Text>
                    </View>
                    <Text style={{color: 'white', opacity: 0.5}}>
                      {item.brand}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </View>

        <View
          style={{
            width: '100%',
            height: 60,
            // backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 19,
              marginLeft: 20,
              fontWeight: 800,
            }}>
            Nadan Kerala Items
          </Text>
        </View>
        <View style={{width: '100%', height: 650}}>
          <FlatList
            data={forthdata}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => addToCart(item.id)}
                style={{
                  width: '100%',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  height: 140,
                  // backgroundColor: 'yellow',
                  marginTop: 20,
                }}>
                <View
                  style={{
                    width: '35%',
                    height: '100%',
                    backgroundColor: 'white',
                    justifyContent: 'space-between',
                    backgroundColor: 'black',
                    borderRadius: 10,
                    opacity: 1.1,
                  }}>
                  <Image
                    source={item.img}
                    style={{
                      width: '100%',
                      opacity: 0.7,
                      height: '100%',
                      borderRadius: 10,
                      position: 'absolute',
                    }}
                  />
                  <View
                    style={{
                      width: '100%',
                      height: '30%',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <Image style={{marginRight: 7}} source={item.love} />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '50%',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                      // backgroundColor:'red'
                    }}>
                    <Text
                      style={{
                        marginLeft: 10,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      {item.offer}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        marginLeft: 10,
                        marginBottom: 10,
                        fontWeight: 900,
                        fontSize: 10,
                      }}>
                      {item.upto}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    width: '40%',
                    height: '80%',
                    // backgroundColor: 'white',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}>
                  <Text style={{fontSize: 17, color: 'black'}}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      width: '80%',
                      height: '20%',
                      // backgroundColor: 'gray',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        width: '55%',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{width: 15, height: 15}}
                        source={item.star}
                      />
                      <Image
                        style={{width: 15, height: 15}}
                        source={item.star}
                      />
                      <Image
                        style={{width: 15, height: 15}}
                        source={item.star}
                      />
                      <Image
                        style={{width: 15, height: 15}}
                        source={item.star}
                      />
                    </View>
                    <Text
                      style={{fontSize: 14, color: 'black', fontWeight: 900}}>
                      {item.rating}
                    </Text>
                  </View>
                  <Text style={{color: '#a6a6a6'}}>{item.brand}</Text>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: '80%',
                      justifyContent: 'space-evenly',
                      height: 25,
                      backgroundColor: '#f0e6ff',
                      borderRadius: 13,
                    }}>
                    <Image
                      source={require('../../imgs/delivery-man.png')}
                      style={{width: 17, height: 17}}
                    />
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: '900',
                        color: '#751aff',
                      }}>
                      FREE DELEVERY
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            backgroundColor: '#e6e6e6',
            height: 550,
            width: '100%',
            // justifyContent: 'center',
          }}>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#75787d', fontSize: 75, fontWeight: '700'}}>
              Live
            </Text>
            <Text style={{color: '#75787d', fontSize: 75, fontWeight: '700'}}>
              it up!
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
            <Text style={{color: 'grey'}}>Crafted with</Text>
            <Image
              style={{width: 17, height: 17}}
              source={require('../../imgs/heart.png')}
            />
            <Text style={{color: 'grey'}}>in Bengaluru,India</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FirstBody;

const styles = StyleSheet.create({});
