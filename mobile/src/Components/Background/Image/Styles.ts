import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
    /** ------------------ Screen styles ------------------ */
    imageBackgroundStyle: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        backgroundColor: 'rgba(69,85,117,0.7)',
    },
});

export default {
    ...Styles,
    wp,
    hp,
};
