const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

// -----------------------------------------------------------------
const buttonOfFortune = document.getElementById('fortuneButton')

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
};

buttonOfFortune.addEventListener('click', getFortune)

// -----------------------------------------------------------------
const webSitePlaceHolder = document.getElementById('placeHolder')
const display = document.getElementsByClassName('display-result')
const submitBtn = document.getElementById('btnOne')


const getComment = () => {
    axios.get("http://localhost:4000/api/placeholder/")
    .then(res => {
        const display = res.data;
        alert(display)
    })
};

// webSitePlaceHolder.addEventListener('keyup', getComment)
submitBtn.addEventListener('click', getComment)

//------------------------------------------------------------------
const formCompiler = document.getElementById('clientForm')
const formCompilerFirstName = document.getElementById('fname')
const formCompilerButtton = document.getElementById('fbutton')

const getForm = () => {
    axios.get("http://localhost:4000/api/clientform/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
};

formCompilerButtton.addEventListener('click', getForm)


