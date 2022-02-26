


const apiId = $('#apiId');
const apiAdvice = $('#apiAdvice');

$(".btn__generate").click(function () {

    apiId.text('');
    apiAdvice.text('');

    $.ajax({
        url: 'https://api.adviceslip.com/advice',
        dataType: 'json',
        type: 'GET',
        success: function (info) {
            const querry = info.slip;
            const newId = `Advice #${querry.id}`;
            const newAdvice = `<span>"${querry.advice}"</span>`;

            apiId.append(newId);
            apiAdvice.append(newAdvice);

        }

    })

});
