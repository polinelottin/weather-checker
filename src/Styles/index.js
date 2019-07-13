const colors = {
    black: '#231F20',
    white: '#F6F9FA',
    darkGrey: '#393E41',
    lightGrey: '#6D7171',
    
    darkBlue: '#6EA8D1',
    lightBlue: '#D1F5FF',
    beige: '#EFE6DD',
    green: '#7ACB67',

}

const styles = {
    colors: colors,

    card: {
        margin: 16,
        padding: 8,
        backgroundColor: colors.white
    },

    title: {
        color: colors.darkBlue,
        ontWeight: 900,
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
        backgroundColor: colors.black,
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
    loadingText:{
        color: colors.lightGrey,
        margin: 16
    },

    //ADDRESS FORM
    formContainer: {
        margin: 16,
    },
    addressInput: {
        marginLeft: 8,
        marginRight: 8,  
        fontColor: colors.lightGrey
    },
    submitButton: { 
        marginTop: 8, 
        marginLeft: 16, 
        backgroundColor: colors.green 
    },
    submitButtonText: {
        color: colors.white 
    },
    historyButton: {
        margin: 16, 
        fontSize: 12, 

    },
    historyButtonText: {
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