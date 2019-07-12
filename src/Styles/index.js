const colors = {
    darkBrown: '#231F20',

    darkBlue: '#6EA8D1',
    lightBlue: '#D1F5FF',

    darkGrey: '#393E41',
    lightGrey: '#6D7171',
    white: '#F6F9FA',
    beige: '#EFE6DD',
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

    title: {
        color: colors.darkBlue,
        ontWeight: 600,
        margin: 16
    },

    subtitle: {
        color: colors.lightGrey,
        margin: 16
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
        // width: 300, 
        fontColor: colors.lightGrey
    },
    submitButton: { 
        marginTop: 8, 
        backgroundColor: colors.green 
    },
    submitButtonText: {
        color: colors.white 
    },
    historyButton: {
        marginLeft: 16, 
        fontSize: 12, 
        flex: 1,
        width: '100%'
    },
    historyButtonText: {
        marginLeft: 16, 
        marginTop: 16,
        color: colors.lightGrey,
    },

    //HISTORY
    historyBox: { 
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor: colors.beige,
        padding: 16,
        borderRadius: '1%'
    },
    historyTitle: {
        color: colors.darkBlue, 
        marginLeft: 
        16, 
        marginTop: 16
    },
    historyCaption: { 
        marginLeft: 16, 
        marginTop: 0, 
        color: colors.lightGrey 
    },
    historyItemPaper: {
        flex:1, 
        padding: 8, 
        backgroundColor: colors.white
    }

};

export default styles;