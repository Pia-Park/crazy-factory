// import React, {Component} from 'react'
// import { View } from "react-native"
// import { SliderBox } from 'react-native-image-slider-box'


// export default class Slide extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         currentIndex:1,
//         images: [

//           require('../../public/bg1.jpg'),   
//           require('../../public/bg2.jpg'),          // Local image
//         ]
//       };
//     }

//     render(){
//         return (
//             <View style={{ width: wp('100%'), height: hp('30%'), flex: 1 }}>
//                 <SliderBox 
//                     autoplay={true}
//                     images={this.state.images}
//                     currentImageEmitter={index =>
//                         this.setState({
//                             currentIndex: index + 1,
//                         })
//                     }
                
//                 />

//             </View>
//         )
//     }
// }

