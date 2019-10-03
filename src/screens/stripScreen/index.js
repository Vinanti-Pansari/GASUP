import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import Styles from './style';
import Container from '../../component/Container';
import PlaceHolder from '../../utility/placeHolder';
import DataOption from '../../utility/dataOptions';
import Input from "../../component/Input";
import { getStripDetails } from '../../modules/getStripDetails';

class StripScreen extends Component {
    constructor() {
        super();
        this.state = {
            stripData: [],
            selectedColorData: DataOption.SELECTED_STRIP_COLOR,

        }
    }

    componentDidMount() {
        this.fetchStripData();
    }

    componentDidUpdate(prevProps) {
        const { stripPayload } = this.props;
        if(stripPayload !== prevProps.stripPayload){
            this.setState({
                stripData: stripPayload
            })
        }
    }

    /**
     * Method to fetch the strip data.
     */
    fetchStripData = () => {
        const { navigation: { dispatch }} = this.props;
        dispatch(getStripDetails());
    };


    /**
     * Method to update the ppm value.
     * @param index
     * @param color
     */
    updateOption = (index, color) => {
        const { selectedColorData } = this.state;
        selectedColorData[index] = color;
        this.setState({
            selectedColorData
        })
    };

    /**
     * Method to handle the text entry.
     * @param text
     * @param field
     */
    handleTextChange = (text, index) => {
        const { stripData, selectedColorData } = this.state;
        stripData.map((data, dataIndex) => {
            if(dataIndex === index){
                data.colorData.map(color =>{
                    if(color.value === parseInt(text)){
                        selectedColorData[index] = color.color;
                    }
                })
            }
        });
        this.setState({
            selectedColorData
        })

    };


    render() {
        const { stripData, selectedColorData } = this.state;
        return (
            <Container
                fetching={false}
                screen={'videos'}
            >
                <TouchableOpacity
                 style={Styles.nextButtonView}
                >
                    <Text>Next</Text>
                    </TouchableOpacity>
                <Text style={Styles.mainHeadingStyle}>Test Strip</Text>
                <View style={Styles.container}>
                        <View style={{width: '8%'}}>
                            <FlatList
                                style={Styles.selectionView}
                                showsVerticalScrollIndicator={false}
                                data={selectedColorData}
                                extraData={this.state}
                                keyExtractor={this._keyExtractor}
                                renderItem={(data, index) => {
                                    return (
                                        <View style={Styles.colorSelectBlock}>
                                            <TouchableOpacity style={[
                                                Styles.colorTouchableView,
                                                {backgroundColor: data.item}
                                            ]}>
                                            </TouchableOpacity>
                                        </View>
                                    )

                                }}
                            />
                        </View>
                        <FlatList
                            style={Styles.stripHorizontalView}
                            showsVerticalScrollIndicator={false}
                            data={stripData}
                            extraData={this.state}
                            keyExtractor={this._keyExtractor}
                            renderItem={(data, index) => {
                                return (
                                    <View
                                        style={Styles.stripHorizontalRowContainer}>
                                        <View style={Styles.stripHeaderBlock}>
                                            <Text style={Styles.stripHeadingText}>{data.item.Key}</Text>
                                            <Input
                                                style={Styles.textInput}
                                                placeholder={PlaceHolder.NUMBER}
                                                keyboardType="numeric"
                                                returnKeyType={'next'}
                                                onChangeText={(text) => this.handleTextChange(text, data.index)}
                                            />
                                        </View>
                                        <FlatList
                                            style={Styles.stripRowView}
                                            showsHorizontalScrollIndicator={false}
                                            horizontal={true}
                                            data={data.item.colorData}
                                            extraData={this.state}
                                            keyExtractor={this._keyExtractor}
                                            renderItem={(colorData) => {
                                                return (
                                                    <View style={Styles.colorView}>

                                                                <View style={  selectedColorData[data.index] === colorData.item.color &&
                                                                Styles.selectedButtonBorderView
                                                                }>
                                                                    <TouchableOpacity
                                                                        onPress={() => this.updateOption(data.index, colorData.item.color)}
                                                                        style={[
                                                                            selectedColorData[data.index] === colorData.item.color ?
                                                                                Styles.selectedButton
                                                                            :Styles.buttonBlock,
                                                                            {backgroundColor: colorData.item.color
                                                                        }]}/>
                                                                </View>

                                                        <Text style={Styles.stripValue}>{colorData.item.value}</Text>
                                                    </View>
                                                )

                                            }}
                                        />
                                    </View>

                                )

                            }}
                        />
                </View>
            </Container>
        )
    }
}


StripScreen.propTypes = {
    dispatch: PropTypes.object,
    fetching: PropTypes.bool,
};
StripScreen.defaultProps = {
    dispatch: {},
    fetching: false,
};
const mapStateToProps = state => ({
    fetching: state.signIn.fetching,
    stripPayload: state.getStripDetails.stripPayload,
});
export default connect(mapStateToProps)(StripScreen);
