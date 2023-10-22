import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
  } from 'react-native'
  import React, { useState } from 'react'
  import { Image } from 'react-native'
  import { NavBar } from 'antd-mobile';

  
  const ScreenA = (props) => {
    // Lấy navigate và route từ props
    const { navigation, route } = props
    const { navigate, goBack } = navigation
  
    // Lấy kích thước toàn màn hình
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
  
    const [data, setData] = useState([
      {
        id: 1,
        name: 'Ca nấu lẩu, nấu mì mini...',
        shop: 'Devang',
        image: require('./assets/noi.png'),
      },
      {
        id: 2,
        name: '1KG KHÔ GÀ BƠ TỎI ...',
        shop: 'LTD Food',
        image: require('./assets/kho_ga.png'),
      },
      {
        id: 3,
        name: 'Xe cần cẩu đa năng',
        shop: 'Thế giới đồ chơi',
        image: require('./assets/xe_cau.png'),
      },
      {
        id: 4,
        name: 'Đồ chơi dạng mô hình',
        shop: 'Thế giới đồ chơi',
        image: require('./assets/xe_mo_hinh.png'),
      },
      {
        id: 5,
        name: 'Lãnh đạo giản đơn',
        shop: 'Minh Long Book',
        image: require('./assets/sach_lanh_dao.png'),
      },
      {
        id: 6,
        name: 'Hiểu lòng con trẻ',
        shop: 'Minh Long Book',
        image: require('./assets/sach_hieu_long.png'),
      },
      {
        id: 7,
        name: 'Donald Trump Thiên tài lãnh đạo',
        shop: 'Minh Long Book',
        image: require('./assets/trump.png'),
      },
    ])
  
    return (
    <View style={{ flex: 1 }}>
      <NavBar
        mode="light"
        style={{ backgroundColor: '#1ba9ff' }}
        leftContent={
          <Image
            source={require('./assets/back.png')}
            style={{ height: 30, width: 30, marginHorizontal: 15 }}
          />
        }
        rightContent={
          <Image
            source={require('./assets/cart.png')}
            style={{ height: 30, width: 30, marginHorizontal: 15 }}
          />
        }
      >
        Chat
      </NavBar>

        <Text
          style={{
            marginStart: 23,
            marginEnd: 20,
            marginVertical: 10,
            color: '#000',
            fontSize: 16,
            fontWeight: '500',
          }}
        >
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!
        </Text>
  
        <ScrollView
          style={{
            marginBottom: screenHeight * 0.08,
          }}
        >
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigate('ScreenB')
              }}
            >
              <View
                style={{
                  //height: 0.2,
                  //width: screenWidth,
                  backgroundColor: 'rgba(45,45,45,0.2)',
                }}
              ></View>
              <View 
                style={{
                  marginVertical: 3,
                  //height: screenHeight * 0.11,
                  //width: screenWidth,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: item.id == 1 ? '#fff' : '',
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    height: screenHeight * 0.11,
                    width: screenHeight * 0.11,
                  }}
                />
                <View 
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                    //height: screenHeight * 0.11,
                    marginVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 3,
                      fontSize: 15,
                      color: 'black',
                      fontWeight: '500',
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      marginTop: 8,
                      fontSize: 15,
                      color: item.id == 1 ? 'red' : '#7d5b5b',
                    }}
                  >
                    Shop{' '}
                    <Text
                      style={{
                        color: item.id < 3 ? 'red' : 'black',
                      }}
                    >
                      {item.shop}
                    </Text>
                  </Text>
                </View>
                {item.id != 7 ? (
                  <View 
                    style={{
                      height: screenHeight * 0.051,
                      width: screenWidth * 0.22,
                      backgroundColor: 'red',
                      marginRight: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'white',
                      }}
                    >
                      Chat
                    </Text>
                  </View>
                ) : (
                  <View
                    style={{
                      marginHorizontal: 20,
                    }}
                  ></View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
  
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: '8%', // 8% of the screen height
            width: '100%', // 100% of the screen width
            backgroundColor: '#1ba9ff',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              height: 30,
              width: 30,
              marginHorizontal: 15,
            }}
            source={require('./assets/menu.png')}
          />
          <Image
            style={{
              height: 30,
              width: 30,
              marginHorizontal: 15,
            }}
            source={require('./assets/home.png')}
          />
          <Image
            style={{
              height: 30,
              width: 30,
              marginHorizontal: 15,
            }}
            source={require('./assets/back_bottom.png')}
          />
        </View>
      </View>
    )
  }
  
  export default ScreenA
  
  const styles = StyleSheet.create({})