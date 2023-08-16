import { useState } from 'react';
import ContentCheckboxPlace from './content/ContentCheckboxPlace'
import ContentPlaceData from './content/ContentPlaceData'

function Content() {

    let jsonData; // 包含所有縣市及其對應區域的json格式資料
    let areaList = ["新北市", "台北市", "基隆市"]; // 所有縣市名稱的列表
    const [placeList, setPlaceList] = useState(["北投區", "士林區", "大同區", "中山區", "松山區", "內湖區", "萬華區", "中正區", "大安區", "信義區", "南港區", "文山區"]); // 根據選擇的縣市改變的區域名稱的列表

    // 讀取檔案 youbike_test_area.json
    let areaDataJson = fetch("youbike_test_area.json").then((response) => {
        // 將內容解析為json格式
        let jsonPromise = response.json();
        jsonPromise.then((result) => {
            jsonData = result;
            // 獲取所有縣市名稱
            let areaNameArray = Object.keys(jsonData["all"]);
            areaNameArray.map((param) => {
                areaList.push(param);
            })
        })
    });

    return (
        <>
            <div className="content flex">
                <p className="content_label_text">站點資訊</p>
                <div className="content_div_one flex">
                    {/* <select className="content_select_place">
                        {
                            areaList.map((param) => {
                                <>
                                    <option value={param} onClick={setPlaceList(jsonData["all"][param])}>{param}</option>
                                </>
                            })
                        }
                    </select> */}
                    <select className="content_select_place">
                        <option value={areaList[0]} onClick={() => { }}>{areaList[0]}</option>
                        <option value={areaList[1]} onClick={() => { }}>{areaList[1]}</option>
                        <option value={areaList[2]} onClick={() => { }}>{areaList[2]}</option>
                    </select>
                    <input className="content_input_search" placeholder="搜尋站點" />
                    <input className="content_button_search" type="button" />
                </div>
                <div className="content_div_checkbox flex">
                    <input className="content_checkbox_place" type="checkbox"></input>
                    <p className="content_checkbox_text">全部勾選</p>
                </div>
                <div className="content_div_place_small flex">
                    {/* {
                        placeList.map((param) => {
                            <>
                                <ContentCheckboxPlace placeName={param} />
                            </>
                        })
                    } */}
                    <ContentCheckboxPlace placeName={"北投區"}/>
                    <ContentCheckboxPlace placeName={"士林區"} />
                    <ContentCheckboxPlace placeName={"大同區"}/>
                    <ContentCheckboxPlace placeName={"中山區"}/>
                    <ContentCheckboxPlace placeName={"松山區"}/>
                    <ContentCheckboxPlace placeName={"內湖區"}/>
                    <ContentCheckboxPlace placeName={"萬華區"}/>
                    <ContentCheckboxPlace placeName={"中正區"}/>
                    <ContentCheckboxPlace placeName={"大安區"}/>
                    <ContentCheckboxPlace placeName={"信義區"}/>
                    <ContentCheckboxPlace placeName={"南港區"}/>
                    <ContentCheckboxPlace placeName={"文山區"}/>
                </div>
                <div className="content_div_place_big flex">
                    <div className="content_dl_place_big content_dt flex">
                        <p className="content_dl_text_one">縣市</p>
                        <p className="content_dl_text_two">區域</p>
                        <p className="content_dl_text_three">站點名稱</p>
                        <p className="content_dl_text_four">可借車輛</p>
                        <p className="content_dl_text_five">可選空位</p>
                    </div>
                    <ContentPlaceData />
                    <ContentPlaceData />
                </div>
            </div>
        </>
    );
}

export default Content;