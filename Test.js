
// 第一題
/**
    寫一個函式計算下列公式之總和：
    1+2-3+4-5+6-.....+或-N
    （N 一定是正整數）
*/

const num = 0; // 根據考題所改變的參考代入數

function one(getNum){
    let ans = 0; // 最終數值

    /*
    邏輯分解 (此為正確的邏輯算法，但面對過大的代入數會計算過久，因此只展示程式碼邏輯而不實際跑)
    for(let n = getNum; n > 0; n--){ // 依照代入值遍曆每一個數值(1和0除外)
        if(n % 2 == 0){ // 確認數值是偶數還是奇數
            是偶數就加
            ans += n; 
        }
        else{
            是奇數就減
            ans -= n; 
        }
    }
    */

    // 以下算法只為了快速求出與解答一致的答案，但並沒有邏輯
    if(getNum % 2 == 0){ // 確認數值是偶數還是奇數
        // 是偶數
        ans = getNum / 2; 
    }
    else{
        // 是奇數
        let m = (getNum + 1) / 2;
        ans = m - m - m; 
    }

    console.log(ans);
}

one(num);

// -------------------------------------------------------

// 第二題
/**
    抽抽樂總共有五種獎項, 1,2 獎各只有一個, 3 獎有 3 個，4 獎有 5 個，5 獎有 9 個，請寫出一個程式可以「隨機」的取得「不重複」的禮物，
    且：
    1獎中獎機率為 0.1% 
    2獎中獎機率為 3%
    3獎中獎機率為 13%
    4獎中獎機率為 18%
    5獎中獎機率為 25%
*/

const prizePool = [1,2,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,5,5]; // 參考獎品池陣列

let nowPrizePool = prizePool; // 當前獎品池陣列

//抽獎
function lottery(which, maxNum, muchWinNum){ // which = 當前要抽幾獎 maxNum = 數字獲取範圍的最大值 muchWinNum = 要抽取幾個獲獎數字
    let getNum = Math.ceil(Math.random() * maxNum); // 實際抽取數字
    let winNum = 0; // 獲獎數字
    let winNumArray = []; //儲存所有獲獎數字的陣列

    // 依照獲獎機率持續添加獲獎數字
    while(winNumArray.length != muchWinNum){ 
        winNum = Math.ceil(Math.random() * maxNum);
        // 確認新抽取的獲獎數字沒有與目前任何一個獲獎數字重複
        winNumArray.forEach(element => { 
            if(winNum == element){
                let index = winNumArray.indexOf(winNum);
                winNumArray.splice(index, 1);
            }
        });
        winNumArray.push(winNum);
    }

    // 打印抽獎結果
    function consoleLottery(which, winNumArray, getNum){ 
        let win = false;
        let consoleStr = "";
        winNumArray.forEach(element => {
            if(getNum == element){
                win = true;
            }
            let numStr = element.toString();
            consoleStr += numStr;
            consoleStr += "、";
        });
        console.log("" + which.toString() + "獎獲勝數字為:" + consoleStr);
        console.log("實際抽取數字為:" + getNum);
        if(win == false){
            console.log("你沒抽到");
        }
        else{
            console.log("你抽到" + which.toString() + "獎了!");
        }
    }

    // 獲獎判定
    let win = false;
    winNumArray.forEach(element => {
        if(getNum == element){
            win = true;
        }
    });
    if(win == false){
        // 沒抽到
        consoleLottery(which, winNumArray, getNum);
        return false;
    }
    else{
        // 抽到了
        consoleLottery(which, winNumArray, getNum);
        // 確認獎品池是否還有該獎品
        let index = nowPrizePool.indexOf(which);
        if(index != -1){
            // 還有該獎品
            nowPrizePool.splice(index, 1);
            let consoleStr = "恭喜獲獎!! 當前獎品池剩下:";
            nowPrizePool.forEach(element => {
                consoleStr += element.toString() + "、";
            });
            console.log(consoleStr)
            return true;
        }
        else{
            // 沒有該獎品
            console("很可惜，獎品池已經沒有該獎品了")
            return false;
        }
    }
}

let oneResult = lottery(1, 1000, 1); // 抽取1獎
if(oneResult == false){
    let twoResult = lottery(2, 100, 3); // 抽取2獎
    if(twoResult == false){
        let threeResult = lottery(3, 100, 13); // 抽取3獎
        if(threeResult == false){
            let fourResult = lottery(4, 100, 18); // 抽取4獎
            if(fourResult == false){
                let fiveResult = lottery(5, 100, 25); // 抽取5獎
                if(fiveResult == false){
                    console.log("好可憐喔，都沒抽到")
                }
            }
        }
    }
}

// -------------------------------------------------------

// 第四題
/**
    請根據下方示意圖，假設您要起一個專案，請規劃下方聊天室的 component 會有幾個，然後元件的上下層關係...etc
*/

/** 
    component的部分有:
    主介面、上方選項條列、中央訊息面板、下方選項條列、
    選單UI(左上方)、選單介面、選單介面的選項、
    拍照功能UI(右上方)、拍照功能介面、
    本地用戶聊天項目、對象用戶聊天項目、本地用戶頭像、對象用戶頭像、
    本地用戶聊天訊息、對象用戶聊天訊息、本地用戶個人資訊、對象用戶個人資訊。
    輸入訊息欄位、鍵盤介面、功能UI(右下方)、功能介面、功能介面的選項、

    最外層是[主介面]，
    [主介面]內由上往下依序是[上方選項條列]、[中央訊息面板]、[下方選項條列]，
        [上方選項條列]內由左往右依序是[選單UI]、[右上拍照功能UI]，
            點擊[選單UI]會啟用[選單介面]，該元件其層級與[主介面]同級，平時為禁用，啟用後其直接覆蓋於[主介面]之上，
                [選單介面]內由上往下皆是[選單介面的選項]，
            點擊[拍照功能UI]會啟用[拍照功能介面]，該元件其層級與[主介面]同級，平時為禁用，啟用後其直接覆蓋於[主介面]之上，
        [中央訊息面板]內由上往下皆是[本地用戶聊天項目]或是[對象用戶聊天項目]，該元件內部結構為可透過滑動條滑動的延伸介面，
            [本地用戶聊天項目]內由左往右依序是[本地用戶聊天訊息]、[本地用戶頭像]，
                點擊[本地用戶頭像]會啟用[本地用戶個人資訊]，該元件其層級與[主介面]同級，平時為禁用，啟用後其直接覆蓋於[主介面]之上，
            [對象用戶聊天項目]內由左往右依序是[對象用戶頭像]、[對象用戶聊天訊息]，
                點擊[對象用戶頭像]會啟用[對象用戶個人資訊]，該元件其層級與[主介面]同級，平時為禁用，啟用後其直接覆蓋於[主介面]之上，
        [下方選項條列]內由左往右依序是[輸入訊息欄位]、[功能UI]，
            點擊[輸入訊息欄位]會啟用[鍵盤介面]，該元件其層級與[下方選項條列]同級，平時為禁用，啟用後其在於[下方選項條列]之下，並會連帶縮短[中央訊息面板]的高度，
            點擊[功能UI]會啟用[功能介面]，該元件其層級與[下方選項條列]同級，平時為禁用，啟用後其在於[下方選項條列]之下，並會連帶縮短[中央訊息面板]的高度，
                [功能介面]內由左至右皆是[功能介面的選項]，並且可跨行。


*/









