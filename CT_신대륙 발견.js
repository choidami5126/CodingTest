function solution(month, day){
	const startdate = new Date(2023, month - 1, day);

    const enddate = new Date(startdate.getTime() + 98 * 24 * 60 * 60 * 1000);

    const result = `${enddate.getMonth() + 1}월 ${enddate.getDate()}일`
    return result
}
console.log(solution(1, 18))