// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;
// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);
// 아래에 getItemByAmount 함수를 작성하세요.
function getItemByAmount(data,amount){
        //가격기준으로, 내림차순정렬
    result = data.sort(function (a, b) {
        return b.price - a.price;
    });
    let tem={};//리턴할값 
    const len=result.length;//크기
    for(let i=0; i<len; i++){
        if(i===len-1){//배열을 다 돌았다면, null값 리턴
            tem=null;
        }
        else if(amount>result[0].price){ //제일큰값(배열의 첫값)보다 크다면
            tem=result[0]; // 첫상품 리턴
            break;
        }
	//배열을 검사하면서  현재값<= 입력받은가격<=다음가격이라면
        else if(amount<=result[i].price && amount>=result[i+1].price){ 
            tem=result[i+1];//그 다음(현재보다 낮은) 상품선택
            break;
        };

    };
    return tem;
}
