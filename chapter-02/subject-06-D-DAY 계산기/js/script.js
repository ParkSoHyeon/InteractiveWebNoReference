$('#submit-btn').on('click', function () {
    let startDate = $('#start-date').val();
    let nowDate = new Date();

    if (startDate === '') {
        alert('시작 날짜를 입력해주세요!');
    }
    else {
        startDate = new Date(startDate);

        startDate =new Date(startDate.getFullYear(), startDate.getMonth()+1, startDate.getDate());
        nowDate =new Date(nowDate.getFullYear(), nowDate.getMonth()+1, nowDate.getDate());

        let diffCnt = startDate.getTime() - nowDate.getTime();
        diffCnt = Math.ceil(diffCnt / (1000 * 3600 * 24));

        if (diffCnt > -1) {
            diffCnt++;
        }
        else {
            diffCnt = Math.abs(diffCnt);
            diffCnt++;
        }

        $('#result-cnt').text(diffCnt);
    }
});