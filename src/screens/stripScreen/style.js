import { StyleSheet } from 'react-native';
import Fonts from '../../utility/fonts';
import Colors from '../../utility/colors';

const styles = StyleSheet.create({
    container: {
        width: '95%',
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20
    },
    stripHeadingText:{
        paddingTop: 10,
        //paddingBottom: 10,
        paddingLeft: 10,
        fontSize: 15,
        textAlign: 'left',
        color: Colors.STRIP_TEXT_COLOR,
        fontFamily: Fonts.HEADING_FONT
    },
    stripValue:{
        width: '100%',
        paddingTop: 5,
        fontSize: 12,
        textAlign: 'center',
        color: Colors.GRAY_BORDER,
        fontFamily: Fonts.SUB_HEADING_FONT
    },
    selectionView:{
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 10,
        marginBottom: 10
    },
    colorSelectBlock:{
        height: 125,
        alignItems: 'center',
        marginBottom: 5,
        justifyContent: 'center'
    },
    colorTouchableView:{
        height: 25,
        width: '100%'
    },
    stripHorizontalView:{
        width: '92%',
    },
    stripHorizontalRowContainer:{
        height: 120,
        margin: 5,
        justifyContent: 'center'
    },
    stripHeaderBlock:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        height: 35,
        width: 60,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop:10,
        marginRight:5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    stripRowView:{
        width: '100%'
    },
    colorView:{
        width: 50,
        margin: 10
    },
    buttonBlock:{
        height: 28,
        width: 50,
        borderRadius: 4,
    },
    selectedButton:{
        height: 22,
        width: 45,
        borderRadius: 4,
    },
    selectedButtonBorderView:{
        height: 30,
        width: 52,
        borderRadius: 4,
        borderColor: Colors.DEFAULT_GREEN,
        borderWidth: 2,
        alignItems:'center',
        justifyContent: 'center'
    },
    mainHeadingStyle:{
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 30,
        textAlign: 'left',
        color: '#3333cc',
        fontFamily: Fonts.HEADING_FONT
    },
    nextButtonView:{
        alignSelf: 'flex-end',
        width:70,
        borderRadius: 8,
        backgroundColor: Colors.GRAY_BORDER,
        marginTop: 25,
        marginRight: 20,
        alignItems: 'center'
    }
});

export default styles;
