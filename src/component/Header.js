
function Header() {
    return (
        <>
            <div className="header flex">
                <img className="header_img" src="youbike_icon.png" alt="youbike icon" />
                <button className="header_button" type="button">使用說明</button>
                <button className="header_button" type="button">收費方式</button>
                <button className="header_button" type="button">站點資訊</button>
                <button className="header_button" type="button">最新消息</button>
                <button className="header_button" type="button">活動專區</button>
                <div className="header_blank"></div>
                <button className="header_button_login" type="button">登入</button>
            </div>
        </>
    );
}

export default Header;