import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Placeholder from '../../utility/placeHolder';
import {connect} from 'react-redux';
import Styles from './styles';
import Container from '../../component/Container';
import PlaceHolder from '../../utility/placeHolder';
import DataOptions from '../../utility/dataOptions';
import {resetStack} from '../../utility/handleNavigation';
import EditProfile from './editProfile';
import Input from "../signUpScreen";
import ActionTypes from "../../utility/actionTypes";


class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {
            profileData: DataOptions.USER_PROFILE,
            displayEditProfilePopUp: false

        };

    }

    componentDidMount() {
        const {navigation} = this.props;
        navigation.setParams({
            logOutPressed: this.logOutPressed,
        });
    }

    /**
     * Method to handle the logout functionality
     */
    logOutPressed = () => {
        AsyncStorage.clear();
        resetStack('LoginScreen');
        dispatch({
            error: null,
            stripPayload: [],
            type: ActionTypes.FETCH_STRIP_DATA
        });
    };

    closePopUp=() =>{
        this.setState({
            displayEditProfilePopUp: false
        })
    };

    /**
     * Method to render to the profile details.
     * @param value
     * @param key
     * @returns {*}
     */
    renderDetailView = (value, key) => {
        return (
            <View style={Styles.detailView}>
                <Text style={Styles.ValueText}>
                    {value}
                </Text>
                <Text style={Styles.keyText}>
                    {key}
                </Text>
            </View>
        )
    };

    openEditProfileModal = () => {
        this.setState({displayEditProfilePopUp: true})
    }

    /**
     * Method to handle the text entry.
     * @param text
     * @param field
     */
    handleTextChange = (text, field) => {
       console.log('text, field', text, field)
    };


    render() {
        const {profileData: {name, profileImageUrl, email, mobileNumber}, displayEditProfilePopUp, profileData} = this.state;
        const {fetching} = this.props;
        return (
            <Container
                screen={'profile'}
                fetching={fetching}
            >
                <View style={{flex: 1}}>
                    <View style={Styles.topSpacing}>
                        <View style={[Styles.profileBlock, Styles.boxShadowStyle]}>
                            <View style={Styles.imageBlock}>
                                <Image
                                    source={{uri: profileImageUrl}}
                                    style={Styles.imageStyle}
                                />
                            </View>
                            <View style={Styles.commonMargin}>
                                <Text style={Styles.nameTitleStyle}>{name}</Text>
                                {
                                    this.renderDetailView(name, Placeholder.USERNAME)
                                }
                                {
                                    this.renderDetailView(mobileNumber, PlaceHolder.MOBILE_NUMBER)
                                }
                                {
                                    this.renderDetailView(email, PlaceHolder.EMAIL)
                                }
                            </View>
                            <TouchableOpacity
                                onPress={this.openEditProfileModal}
                                style={Styles.ButtonView}>
                                <Text style={Styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {
                        displayEditProfilePopUp &&
                        <EditProfile
                            closePopUp={this.closePopUp}
                            displayEditProfilePopUp={displayEditProfilePopUp}
                            profileData={profileData}
                            editData={(text, key) => this.handleTextChange(text, key)}
                        />
                    }
                </View>
            </Container>
        );
    }
}


ProfileScreen.propTypes = {
    fetching: PropTypes.bool,
};
ProfileScreen.defaultProps = {
    fetching: false,
};
const mapStateToProps = state => ({});
export default connect(mapStateToProps)(ProfileScreen);
