const colors = {
    darkBrown: '#231F20',
    darkBlue: '#6EA8D1',
    lightBlue: '#78B8E5',

    darkGrey: '#393E41',
    lightGrey: '#6D7171',
    white: '#F6F9FA',
    green: '#7ACB67'

}

const styles = {
    colors: colors,

    card: {
        marginRight: 16,
        marginTop: 16,
        marginBottom: 16,
        padding: 8,
        backgroundColor: colors.white
    },

    //HEADER
    appBar: {
        padding: 0,
        margin: 0,
        backgroundColor: colors.darkBrown,
    },
    toolBar: {
        padding: 16,
        margin: 0
    },
    barTitle: {
        padding: 8,
        color: colors.lightBlue,
        fontWeight: 800
    },

    //WEATHER CARD
    welcomeTitle: {
        color: colors.darkGrey,
        margin: 16
    },
    welcomeSubitle: {
        color: colors.lightGrey,
        margin: 16
    },
    fullAddressText: {
        color: colors.lightGrey,
        margin: 16
    },
    temperatureText: {
        color: colors.darkGrey,
        margin: 16
    },

    //ADDRESS FORM
    formContainer: {
        marginLeft: 16,
        margin: 16
    },
    addressInput: {
        marginLeft: 8,
        marginRight: 8, 
        width: 300, 
        fontColor: colors.lightGrey
    },
    submitButton: { 
        marginTop: 8, 
        backgroundColor: colors.green 
    },
    // submitButtonDisabled: { 
    //     marginTop: 8, 
    //     backgroundColor: colors.lightGrey 
    // },
    submitButtonText: {
        color: colors.white 
    }
};

export default styles;