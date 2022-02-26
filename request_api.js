


const apiId = $('#apiId');
const apiAdvice = $('#apiAdvice');


const getApi = async () => {
    const apiUrl = 'https://api.adviceslip.com/advice';
    fetch(apiUrl)
        .then((data) => data.json())
        .then((advice) => generateAdvice(advice))


    const generateAdvice = (data) => {
        const querry = data.slip;
        const adviceId = `Advice # ${querry.id}`;
        const adviceText = `${querry.advice}`;

        apiId.html(adviceId);
        apiAdvice.html(adviceText);

    }
}

getApi();


$(".btn__generate").click(function () {
    getApi();
    $(".btn__generate").addClass("disabled");
    setTimeout(function () {
        $(".btn__generate").removeClass("disabled")
    }, 2000)
});


