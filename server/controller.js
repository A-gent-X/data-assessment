module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

// -----------------------------------------------------------------
    getFortune: (req, res) => {
        const fortune = ["A faithful friend is a strong defense.", "A lifetime friend shall soon be made.", "A new outlook brightens your image and brings new friends."];

        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);
    },

// -----------------------------------------------------------------
    getComment: (req, res) => {
        const comment = ["It does not matter how slowly you go as long as you do not stop", "Know they self, know they enemy. A thousand battles, a thousand victories.", "To live is to suffer, to survive is to find some meaning in the suffering."];

        let randomIndex = Math.floor(Math.random() * comment.length);
        let randomComment = comment[randomIndex];

        res.status(200).send(randomComment);
    },

// -----------------------------------------------------------------
    getForm: (req, res) => {
    const nameGenerater = ["It does not matter how slowly you go as long as you do not stop", "Know they self, know they enemy. A thousand battles, a thousand victories.", "To live is to suffer, to survive is to find some meaning in the suffering."];

    let randomIndex = Math.floor(Math.random() * nameGenerater.length);
    let randomForm = nameGenerater[randomIndex];

    res.status(200).send(randomForm);
    }
}
