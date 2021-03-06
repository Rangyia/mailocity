import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
    /** ------------------ Screen styles ------------------ */
    blockLayoutStyle: {
        maxWidth: wp(100),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
});

export default {
    ...Styles,
    wp,
    hp,
};
