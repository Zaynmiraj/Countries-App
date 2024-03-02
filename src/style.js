import { StyleSheet} from 'react-native'



export const styles = StyleSheet.create({
    flex:{
        width:'100%',
        height:'100%',
        flex:1,
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
    },

    flexInner:{
        width:'100%',
        height:'20%',
        flex:.8,
        justifyContent:'center',
        alignItems:'center'
    },

    flexBottom : {
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        margin:'auto',
        width:'100%',
        backgroundColor:'#7E6EA7',
        height:"80%",
        borderTopColor:'#FF5733',
        borderTopWidth:10,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
    },
    headerTitle:{
        fontSize:30,
        fontWeight:'700',
        color:'#FF5733',
        elevation:10,
        shadowColor:'black'

    },
    subtitle:{
        color:'#7E6EA7',
        fontSize:20,
        fontWeight:'500'
    },
    button: {
        backgroundColor:'#7E6EA7',
        elevation:20,
        width:'60%',
        padding:20,
        borderTopLeftRadius:30,
        borderBottomRightRadius:30,
    },

    buttonText:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontWeight:'700',
    },
    InneFlex:{
        width: '70%',
        height:'60%',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Input:{
        elevation:5,
        marginVertical:8,
        padding:20,
        width:'100%',
    },
    Text:{
        textAlign:'center',
        fontSize:16,
        fontWeight:500
    },
    LineList:{
        margin: 10,
        padding:10,
        textAlign:'left',
        fontSize:18,
        fontWeight:'700',
        elevation:20,
        color:'white',
        shadowColor:'black',
        shadowOpacity:1.0,
        backgroundColor:'#7E6DAB'
      }
})