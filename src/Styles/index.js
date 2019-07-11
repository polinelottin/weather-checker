const colors = {
    darkBrown: '#231F20', 
    darkBlue: '#6EA8D1',
    lightBlue: '#78B8E5',

    darkGrey: '#393E41',
    lightGrey: '#6D7171',
    white: '#F6F9FA',

}

const styles = {
    colors: colors,

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
    weatherCardPaper: {
        marginRight: 16, 
        marginTop: 16, 
        marginBottom: 16, 
        padding: 8, 
        backgroundColor: colors.white
    },
    welcomeTitle:{ 
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
    }
};

export default styles;