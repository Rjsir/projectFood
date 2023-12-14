import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Touchable, TouchableOpacity, Image, ScrollView } from 'react-native'
import ImageBox from './ImageBox';




export const Todo = () => {


  return (
    <View style={styles.mainContainer}>
      {/* Header */}

      <View style={styles.contaiNer}>
        <View style={styles.magIcon}>
          <TouchableOpacity>
            <Image
              source={require('../immages/imagemag.png')}
              style={{ height: 50, width: 50, margin: 80, borderWidth: 1, borderColor: "black", borderRadius: 5, }}
            />
          </TouchableOpacity>

        </View>

        <View>
          <Text style={{}}>
            Current location
          </Text>
          <Text style={{}}>Karachi,Pakistan</Text>
        </View>

        <View style={styles.bellIcon}>
          <TouchableOpacity>
            <Image
              source={require('../immages/image2.png')}
              style={{ height: 50, width: 50, margin: 80, borderWidth: 1, borderColor: "black", borderRadius: 5, }}
            />
          </TouchableOpacity>
        </View>

      </View>

      {/* Body */}

      <ScrollView>
        <View style={{ alignItems: 'center', }}>
          <Image
            source={require('../immages/image3.jpg')}
            style={{ width: 365, borderRadius: 10, }}
          />
        </View>

        {/* body-image-2 */}


        <View style={styles.bodyContainer2}>

          {/* {[1,2,3,4].map((item, index)=>{
          return(
            <ImageBox pic={require('../immages/foodimage2.png')} text={'Burger'} /> 
          )
        })} */}

          <ImageBox pic={require('../immages/foodimage2.png')} text={'Pizza'} />
          <ImageBox pic={require('../immages/foodimage1.png')} text={'Burger'} />
          <ImageBox pic={require('../immages/foodimage3.png')} text={'Wrape'} />
          <ImageBox pic={require('../immages/foodimage4.png')} text={'Shawarma'} />

        </View>

        {/* Image 3 */}

        <View style={{ paddingTop: 5, }}>
          <Text style={{ fontSize: 20 }}>Discount For You</Text>
        </View>

        {/* banner 2 */}

        <ScrollView horizontal={true} style={{ paddingTop: 10, }}>
          <Image
            source={require('../immages/burgerimg2.png')}
            style={{ width: 320, height: 170, borderRadius: 10, }} />

          <Image
            source={require('../immages/burger2.jpg')}
            style={{ width: 370, height: 170, borderRadius: 10, marginLeft: 10 }} />
        </ScrollView>

        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }} >

          {/* banner 3 */}
          <View >
            <Text style={{ fontSize: 20 }}>Recomandation Near you  </Text>
          </View>

          <TouchableOpacity>
            <View>
              <Text style={{ color: '#E16E32' }}>View All</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', marginTop: 10}}>

          <View>

            <Image
              source={require('../immages/burger4.jpg')}
              style={{height:120, width:180}}
            />
          </View>

          <View style={{marginLeft:20}}>
            <Image
              source={require('../immages/burger5.jpg')}
              style={{height:120, width:180}}
              />
          </View>

        </View>

      </ScrollView>



    </View>

  );
};
export default Todo

const styles = StyleSheet.create({
  contaiNer: {

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: -50,

  },



  bodyContainer2: {
    flexDirection: 'row',
    // justifyContent: 'space-between',


    // margin: 10,
  },
  image: {
    marginHorizontal: 10,
    height: 40,
    width: 40,

  },

  imageContaner:
  {
    backgroundColor: '#FFF7EC', height: 80, width: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 10
  },
  mainContainer: {
    padding: 10
  }






});