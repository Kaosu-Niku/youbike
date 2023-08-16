import ContentCheckboxPlace from './content/ContentCheckboxPlace'
import ContentPlaceData from './content/ContentPlaceData'

let placeList = ["北投區", "士林區", "大同區", "中山區", "松山區", "內湖區", "萬華區", "中正區", "大安區", "信義區", "南港區", "文山區"];

function Content() {
    return (
        <>
            <div className="content flex">
                <p className="content_label_text">站點資訊</p>
                <div className="content_div_one flex">
                    <datalist id="datalist_place">
                        <option value="新北市">新北市</option>
                        <option value="台北市">台北市</option>
                        <option value="基隆市">基隆市</option>
                        <option value="桃園市">桃園市</option>
                        <option value="新竹縣">新竹縣</option>
                        <option value="新竹市">新竹市</option>
                    </datalist>
                    <input className="content_input_place" name="" list="datalist_place" />
                    <input className="content_input_search" placeholder="搜尋站點" />
                    <input className="content_button_search" type="button" />
                </div>
                <div className="content_div_checkbox flex">
                    <input className="content_checkbox_place" type="checkbox"></input>
                    <p className="content_checkbox_text">全部勾選</p>
                </div>
                <div className="content_div_place_small flex">
                    {
                        placeList.map((param) => {
                            <>
                                <ContentCheckboxPlace placeName={param} />
                            </>
                        })
                    }
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