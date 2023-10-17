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
}

buttonOfFortune.addEventListener('click', getFortune)

// -----------------------------------------------------------------
const webSitePlaceHolder = document.getElementById('placeHolder')

const getComment = () => {
    axios.get("http://localhost:4000/api/placeholder/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

webSitePlaceHolder.addEventListener('input', getComment)