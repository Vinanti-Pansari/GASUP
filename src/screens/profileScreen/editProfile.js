import React from 'react';
import Modal from "react-native-modal";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Style from './styles';
import Input from '../../component/Input';
import PlaceHolder from "../../utility/placeHolder";


const editProfile = (props) => {
    const {
        displayEditProfilePopUp,
        profileData: {name, profileImageUrl, email, mobileNumber, code},
        editData,
        closePopUp
    } = props;

    return (
        <Modal
            swipeDirectio={'up'}

            isVisible={displayEditProfilePopUp}>
            <View style={Style.profileModalPopUp}>
                <View style={Style.editProfileContainerView}>
                    <Text style={Style.editProfileHeading}>Profile</Text>
                </View>
                <TouchableOpacity
                    onPress={() => closePopUp()}
                    style={Style.cancelButton}>
                    <Text>cancel</Text>
                </TouchableOpacity>

                    <Image
                        source={{uri: profileImageUrl}}
                        style={Style.profileImageView}
                    />
                <View style={{margin: 15}}>
                    <Input
                        placeholder={PlaceHolder.USERNAME}
                        value={name}
                        keyboardType="email-address"
                        returnKeyType={'next'}
                        inputRef={el => this.email = el}
                        onSubmitEditing={() => this.code.focus()}
                        onChangeText={(text) => editData(text, 'name')}
                    />
                    <Input
                        placeholder={PlaceHolder.USERNAME}
                        value={email}
                        keyboardType="email-address"
                        returnKeyType={'next'}
                        onChangeText={(text) => this.handleTextChange(text, 'email')}
                        inputRef={el => this.email = el}
                        onSubmitEditing={() => this.password.focus()}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => alert('Coming Soon')}
                 style={Style.UpdateButtonView}
                >
                 <Text>Update</Text>
                </TouchableOpacity>
            </View>
        </Modal>

    )
};

editProfile.defaultProps = {
    displayEditProfilePopUp: false
};

editProfile.propTypes = {
    displayEditProfilePopUp: PropTypes.bool,
};


export default editProfile;

