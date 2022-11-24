module.exports = (content) => ({
    /**
     * 
     * @param {...Array<String>} args 
     * @returns {String}
     */
    setVariables (...args) {
        return args.reduce((acc, arg) => {
            return acc.replace(new RegExp(`${arg[0]}`, 'g'), arg[1])
        }, content);
    },
    
    /**
     * 
     * @returns {String}
     */
    removeUppers () {
        return content.replace(/[A-Z]/g, '');
    },

    /**
     * 
     * @returns {String}
     */
    removeLowers () {
        return content.replace(/[a-z]/g, '');
    },

    /**
     * 
     * @param {String} text 
     * @returns {String}
     */
    removeText (text) {
        return content.replace(new RegExp(text, 'g'), '');
    },

    /**
     * 
     * @returns {String}
     */
    removeNumbers () {
        return content.replace(/[0-9]/g, '');
    },

    /**
     * 
     * @returns {String}
     */
    removeSpaces () {
        return content.replace(/\s/g, '');
    },

    /**
     * 
     * @returns {String}
     */
    removeSpecialCharacters () {
        return content.replace(/[^a-zA-Z0-9]/g, '');
    }
});
